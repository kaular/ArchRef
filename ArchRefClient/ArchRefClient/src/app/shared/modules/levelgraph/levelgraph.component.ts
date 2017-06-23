import { Logger } from '../../../../logger/logger';
import { Constants } from '../../constants/constants';
import { Level } from '../../datamodels/levelgraph/level';
import { LevelGraph } from '../../datamodels/levelgraph/levelgraph';
import { Component, OnInit } from '@angular/core';

import { FlashMessage } from 'angular2-flash-message';
import { LevelService } from '../../dataservices/levelgraph/level.service';
import { LevelGraphService } from '../../dataservices/levelgraph/levelgraph.service';
import { Utility } from '../../../utility';
import { FlashMessageService } from 'angular2-flash-message';

@Component({
  selector: 'app-levelgraph',
  templateUrl: './levelgraph.component.html',
  styleUrls: ['./levelgraph.component.css']
})

/**********************************************************************************************************************************************************************************************************
 *
 * @component - LevelGraphComponent - Entry point for the LevelGraphModellerComponent and for select, create, delete, update or edit a Level Graph
 *
 * @fields - levels: number - Number of levels which should be created in the new LevelGraph
 * @fields - levelGraphs: LevelGraph[] - Array of all available LevelGraphs in the database
 * @fields - createdLevelGraph: LevelGraph - Level Graph which should be created
 * @fields - editedLevelGraph: LevelGraph - Level Graph which should be deleted
 * @fields - private flashMessage - For display errors and warnings you can also use it for display success messages but this may a
 *                                  cause a "Over Flash" for the user experience
 *
 * @Arthur Kaul
 *
 *********************************************************************************************************************************************************************************************************/
export class LevelGraphComponent implements OnInit {

  levels = 3;
  levelGraphs: LevelGraph[] = [];
  createdLevelGraph: LevelGraph = new LevelGraph();
  editedLevelGraph: LevelGraph = new LevelGraph();
  private flashMessage = new FlashMessage();

  constructor(private levelGraphService: LevelGraphService, private levelService: LevelService, private flashMessageService: FlashMessageService) { }

  /********************************************************************************************************************************************************************************************************
   *
   * @method - ngOnInit is called when the component is initialized
   *
   ********************************************************************************************************************************************/
  ngOnInit() {
    Logger.info('Iniitalize LevelGraphComponent', LevelGraphComponent.name);
    this.flashMessage.timeoutInMS = 4000;
    this.retrieveLevelGraphs();
  }

  /********************************************************************************************************************************************************************************************************
   *
   * @method - createLevelGraph - Call the LevelGraphService for creating a new LevelGraph in the database and subscribe for a callback
   *
   * @param - numberOfLevels: number - Number of different levels in the LevelGraph
   *
   *******************************************************************************************************************************************************************************************************/
  createLevelGraph(numberOfLevels: number) {
    Logger.info('Create LevelGraph', LevelGraphComponent.name);
    this.levelGraphService.createLevelGraph(this.createdLevelGraph).subscribe(levelGraphResponse => {
      for (let i = 0; i < numberOfLevels; i++) {
        let tempLevel = new Level((i), true, (i * Constants.LEVELHEIGHT + i * Constants.LEVELGAPOFFSET), Constants.LEVELHEIGHT, levelGraphResponse.id);
        tempLevel.levelGraph = levelGraphResponse;
        this.levelService.createLevel(tempLevel)
          .subscribe(levelResponse => {
            levelGraphResponse.levels.push(levelResponse);
            Logger.info('Level was created sucessfully with id: ' + levelResponse.id, LevelGraphComponent.name);
          },
          (error) => {
            this.flashMessage.message = error;
            this.flashMessage.isError = true;
            this.flashMessageService.display(this.flashMessage);
          });
      }
      this.levelGraphs.push(levelGraphResponse);
      Logger.info('LevelGraph with name: ' + levelGraphResponse.name + ' was created sucessfully with id: ' + levelGraphResponse.id, LevelGraphComponent.name);
    },
      (error) => {
        this.flashMessage.message = error;
        this.flashMessage.isError = true;
        this.flashMessageService.display(this.flashMessage);
      });
  }

  /********************************************************************************************************************************************************************************************************
   *
   * @method - retrieveLevelGraphs - Call the LevelGraphService for loading all LevelGraphs from database into the application and subscribe
   *                                 for a callback. Currently no pagination/streaming of data is supported
   *
   *******************************************************************************************************************************************************************************************************/
  retrieveLevelGraphs() {
    Logger.info('Retrieve LevelGraph Data', LevelGraphComponent.name);
    this.levelGraphService.getLevelGraphs()
      .subscribe(levelGraphsResponse => {
        this.levelGraphs = levelGraphsResponse;
        Logger.info('Level Graphs sucessfully retrieved.', LevelGraphComponent.name);
      },
      (error) => {
        this.flashMessage.message = error;
        this.flashMessage.isError = true;
        this.flashMessageService.display(this.flashMessage);
      });
  }

  /********************************************************************************************************************************************************************************************************
   *
   * @method - updateLevelGraph - Call the LevelGraphService for updating the LevelGraph in the database and subscribe for a callback.
   *
   * @param name: string - New name of the Level Graph
   *
   *******************************************************************************************************************************************************************************************************/
  updateLevelGraph(name: string) {
    Logger.info('Update LevelGraph', LevelGraphComponent.name);
    this.editedLevelGraph.name = name;
    this.levelGraphService.updateLevelGraph(this.editedLevelGraph)
      .subscribe(levelGraphResponse => {
        this.levelGraphs = Utility.updateElementInArry(levelGraphResponse, this.levelGraphs);
        Logger.info('Level Graph with id: ' + levelGraphResponse.id + ' and name:' + levelGraphResponse.name + ' was updated sucessfully.', LevelGraphComponent.name);
      },
      (error) => {
        this.flashMessage.message = error;
        this.flashMessage.isError = true;
        this.flashMessageService.display(this.flashMessage);
      });
  }

  /********************************************************************************************************************************************************************************************************
   *
   * @method deleteLevelGraph - Call the LevelGraphService for delete a LevelGraph from the database and subscribe for a callback.
   *
   * @param id: number - ID of the LevelGraph witch should be deleted from the database
   *
   *******************************************************************************************************************************************************************************************************/
  deleteLevelGraph(id: number) {
    this.levelGraphService.deleteLevelGraph(id)
      .subscribe(response => {
        this.levelGraphs = Utility.deleteElementFromArry(id, this.levelGraphs);
        Logger.info('Level Graph with id: ' + id + ' was deleted sucessfully.', LevelGraphComponent.name);
      },
      (error) => {
        this.flashMessage.message = error;
        this.flashMessage.isError = true;
        this.flashMessageService.display(this.flashMessage);
      });
  }

  /********************************************************************************************************************************************************************************************************
   *
   * @method - setEditedLevelGraph - Set the editable LevelGraph Data
   * @param - repository - The levelGraph witch should be edit
   *
   *******************************************************************************************************************************************************************************************************/
  setEditedLevelGraph(levelGraph: LevelGraph) {
    this.editedLevelGraph = levelGraph;
  }

  addLevel() {
    this.levels++;
  }

  removeLevel() {
    if (this.levels > 2) {
      this.levels--;
    }
  }
}
