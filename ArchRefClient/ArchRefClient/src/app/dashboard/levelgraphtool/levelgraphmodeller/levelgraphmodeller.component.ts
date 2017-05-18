import { Logger } from '../../../../logger/logger';
import { LEVELGRAPHNODETYPE } from '../../../levelgraphnodetype';
import { LEVELGRAPHRELATIONTYPE } from '../../../levelgraphrelationtype';
import { FragmentNode } from '../../../shared/datamodel/levelgraphmodel/fragmentnode';
import { Level } from '../../../shared/datamodel/levelgraphmodel/level';
import { LevelGraph } from '../../../shared/datamodel/levelgraphmodel/levelgraph';
import { LevelGraphNode } from '../../../shared/datamodel/levelgraphmodel/levelgraphnode';
import { LevelGraphRelation } from '../../../shared/datamodel/levelgraphmodel/levelgraphrelation';
import { Path } from '../../../shared/datamodel/path';
import { Point } from '../../../shared/datamodel/point';
import { Repository } from '../../../shared/datamodel/repository';
import { AdministrationService } from '../../../shared/dataservices/administration.service';
import { LevelGraphNodeService } from '../../../shared/dataservices/levelgraphnode.service';
import { LevelGraphService } from '../../../shared/dataservices/levelgraph.service';
import { FragmentNodeService } from '../../../shared/dataservices/fragmentnode.service';
import { LevelService } from '../../../shared/dataservices/level.service';
import { LevelGraphRelationService } from '../../../shared/dataservices/levelgraphrelation.service';


import { Utility } from '../../../utility';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-levelgraphmodeller',
  templateUrl: './levelgraphmodeller.component.html',
  styleUrls: ['./levelgraphmodeller.component.css']
})
export class LevelGraphModellerComponent implements OnInit {

  /***************************************************************************************************************************************
   *
   *  Field Definitions
   *
   *************************************************************************************************************************************/

  // Variable for transporting the data between drag and drop event
  private currentDragData: any;
  typeCurrentDragData: string;

  //  // Current draw relation
  //  points: Point[] = [{ x: 0, y: 0 }, { x: 0, y: 0 }];
  //  leveGraphHostedOnRelation = new LevelGraphHostedOnRelation(new Path(this.points), null);

  // Collection of repositories witch are exist
  repositories: Repository[] = [];
  selectedRepository: Repository = new Repository('Select Reposiory');

  moveNode: LevelGraphNode = new LevelGraphNode(null, null, null, null, null, null, null, null);
  currentDrawRelation: LevelGraphRelation = new LevelGraphRelation(null, null, null, null, null, null, null);

  // Collection of relations in the level graph in sum and separated related to the LevelGraphRelationType

  //  levelGraphRefineToRelation: LevelGraphRefineToRelation[] = [];
  //  levelGraphConnectToRelation: LevelGraphConnectedToRelation[] = [];
  //  levelGraphHostedOnRelation: LevelGraphHostedOnRelation[] = [];

  // Collection of all levels witch are currently activated for displaying in the front-end
  activeLevels: Level[] = [];

  // Flag variable for moving nodes in the modelling area
  private mousedownOnLevelChangeView = false;
  private mousedownOnLevelGraphNode = false;

  lastMousePositionY = 0;
  lastMousePositionX = 0;

  private drag = false;
  drawRelation = false;


  toolList = [
    { name: 'Move Node', id: 0, checked: true },
    { name: 'ConnectedTo', id: 1, checked: false },
    { name: 'HostedOn', id: 2, checked: false },
    { name: 'RefineTo', id: 3, checked: false }
  ];

  levelGraphRelationTypes = [
    { name: 'ConnectedTo', id: '1', checked: true },
    { name: 'HostedOn', id: '2', checked: true },
    { name: 'RefineTo', id: '3', checked: true }
  ];

  levelGraphNodeTypes = [
    { name: 'Fragment', id: '1', checked: true }
  ];

  currentLevelGraph: LevelGraph;
  currentLevelGraphId: number;
  currentLevelGraphName: string;
  private sub: any;

  /***************************************************************************************************************************************
   *
   *  Constructor and ngOnInit Method
   *
   *************************************************************************************************************************************/

  constructor(private route: ActivatedRoute, private router: Router, private levelGraphService: LevelGraphService,
    private administrationService: AdministrationService, private levelGraphNodeService: LevelGraphNodeService, private fragmentNodeService: FragmentNodeService, private levelService: LevelService, private levelGraphRelationService: LevelGraphRelationService) {
    this.currentLevelGraph = new LevelGraph('NO LEVEL GRAPH FOUND', 1);
  }

  ngOnInit() {

    this.sub = this.route.queryParams.subscribe(params => {
      this.currentLevelGraphName = params['name'] || 'Unnamed';
    });

    this.sub = this.route.queryParams.subscribe(params => {
      this.currentLevelGraphId = params['id'] || '';
    });

    this.loadLevelGraph(this.currentLevelGraphId);
    this.loadRepositories();

  }

  /***************************************************************************************************************************************
   *
   * Methods for loading data
   *
   *************************************************************************************************************************************/

  loadRepositories() {
    this.administrationService.getRepositories().subscribe(repositories => this.repositories = repositories);
  }

  loadLevelGraph(id: number) {
    this.levelGraphService.getLevelGraph(id).subscribe(levelGraph => this.loadLevelGraphData(levelGraph));
  }

  loadLevelGraphData(levelGraph: LevelGraph) {

    this.currentLevelGraph = levelGraph;
    this.activateLevels(levelGraph.levels);
  }

  activateLevels(levels: Level[]) {

    for (let level of this.currentLevelGraph.levels) {

      if (level.checked === true) {
        this.activeLevels.push(level);
      }
    }

  }

  /***************************************************************************************************************************************
   *
   * Methods for change the numberOfLevels of the current levelGraph and the visibility levels are displayed
   *
   *************************************************************************************************************************************/

  addLevel() {

    let y = 0;
    for (let level of this.activeLevels) {
      y = y + level.height + 40;
    }

    Logger.data('Number OF Levels' + this.currentLevelGraph.getNumberOfLevels(), LevelGraphModellerComponent.name);

    let tempLevel: Level = new Level('Level' + this.currentLevelGraph.getNumberOfLevels() + 1, this.currentLevelGraph.getNumberOfLevels() + 1, true, y, 300, this.currentLevelGraph);
    this.levelService.createLevel(tempLevel).subscribe(levelResponse => this.callBackAddLeve(levelResponse));
  }

  callBackAddLeve(level: Level) {
    this.currentLevelGraph.setNumberOfLevels(this.currentLevelGraph.getNumberOfLevels() + 1);
    this.currentLevelGraph.levels.push(level);
    this.activeLevels.push(level);
    this.updateLevelGraph();
  }

  removeLevel() {

    if (this.currentLevelGraph.levels.length > 1) {
      this.currentLevelGraph.setNumberOfLevels(this.currentLevelGraph.getNumberOfLevels() - 1);
      this.activeLevels = Utility.deleteElementFromArry(this.currentLevelGraph.levels[this.currentLevelGraph.levels.length - 1].id, this.activeLevels);
      this.levelService.deleteLevel(this.currentLevelGraph.levels[this.currentLevelGraph.levels.length - 1].id).subscribe();
      this.currentLevelGraph.levels = Utility.deleteElementFromArry(this.currentLevelGraph.levels[this.currentLevelGraph.levels.length - 1].id, this.currentLevelGraph.levels);

      this.updateLevelGraph();

    } else {

      //TODO: ERROR HANDLING
    }
  }

  onShowLevel(level: Level) {

    if (level.checked === true) {
      this.activeLevels = Utility.deleteElementFromArry(level.id, this.activeLevels);
      for (let liveLevel of this.activeLevels) {
        if (liveLevel.value > level.value) {
          liveLevel.y = liveLevel.y - level.height - 40;
          for (let persistendLevel of this.currentLevelGraph.levels) {
            if (persistendLevel.id === liveLevel.id) {
              persistendLevel.y = liveLevel.y;
            }
          }
        }
      }
    } else {

      for (let liveLevel of this.activeLevels) {

        if ((liveLevel.value + 1) === level.value) {
          level.y = liveLevel.y + liveLevel.height + 40;
          for (let persistendLevel of this.currentLevelGraph.levels) {
            if (persistendLevel.id === level.id) {
              persistendLevel.y = level.y;
            }
          }
        } else if (liveLevel.value > level.value) {
          liveLevel.y = liveLevel.y + level.height + 40;
          for (let persistendLevel of this.currentLevelGraph.levels) {
            if (persistendLevel.id === liveLevel.id) {
              persistendLevel.y = liveLevel.y;
            }
          }
        }

      }

      this.activeLevels.push(level);

    }
  }


  /***************************************************************************************************************************************
   *
   * Methods for updating the data
   *************************************************************************************************************************************/

  updateLevelGraph() {
    this.levelGraphService.updateLevelGraph(this.currentLevelGraph).subscribe(levelGraph => this.currentLevelGraph = levelGraph);
  }


  onSelectRepository(id: number) {

    this.administrationService.getRepository(id).subscribe(repository => this.setSelectedRepository(repository));
  }

  setSelectedRepository(repository: Repository) {
    this.selectedRepository = repository;
  }

  createRange(number) {

    alert(number);
    let items: number[] = [];

    for (let i = 1; i <= number; i++) {
      items.push(i);
    }

    return items;

  }

  /***************************************************************************************************************************************
   *
   * Section for handling drawing of level graph relations and moving of level graph nodes
   *
   *
   **************************************************************************************************************************************/

  mouseDownOnNode(event: MouseEvent, level: Level, levelGraphNode: LevelGraphNode) {
    Logger.info("Call MOUSEDOWN Event", LevelGraphModellerComponent.name);
    this.mousedownOnLevelGraphNode = true;
    this.lastMousePositionY = event.offsetY;
    this.lastMousePositionX = event.offsetX;

    let levelGraphRelationType: string;

    if (this.toolList[1].checked) {
      levelGraphRelationType = LEVELGRAPHRELATIONTYPE.CONNECTED_TO_RELATION;
    } else if (this.toolList[2].checked) {
      levelGraphRelationType = LEVELGRAPHRELATIONTYPE.HOSTED_ON_RELATION;
    } else if (this.toolList[3].checked) {
      levelGraphRelationType = LEVELGRAPHRELATIONTYPE.REFINE_TO_RELATION;
    } else {
      levelGraphRelationType = LEVELGRAPHRELATIONTYPE.NOTYPE;
    }


    if (this.toolList[1].checked || this.toolList[2].checked || this.toolList[3].checked) {
      Logger.info("ConnectedTo Tool Selected", LevelGraphModellerComponent.name);

      let startPoint = new Point(levelGraphNode.x + levelGraphNode.width / 2, levelGraphNode.y + levelGraphNode.height / 2);
      let endPoint = new Point(levelGraphNode.x + levelGraphNode.width / 2, levelGraphNode.y + levelGraphNode.height / 2);
      let tempPoints: Point[] = [];
      tempPoints.push(startPoint);
      tempPoints.push(endPoint);
      let tempPath = new Path(tempPoints);

      this.currentDrawRelation = new LevelGraphRelation(level, level, levelGraphNode, levelGraphNode, this.currentLevelGraph, tempPath, levelGraphRelationType);

      this.drawRelation = true;

    } else {
      this.moveNode = levelGraphNode;
    }

  }


  drawEdge(event: MouseEvent) {

    let newMousePositionY = event.offsetY;
    let newMousePositionX = event.offsetX;
    let deltaY = (newMousePositionY - this.lastMousePositionY);
    let deltaX = (newMousePositionX - this.lastMousePositionX);

    Logger.info('Selected Tool: Moving Tool -->' + this.toolList[0].checked + 'ConnectedTo Tool -->' + this.toolList[1].checked + 'HostedOn Tool -->' + this.toolList[2].checked + 'RefineTo Tool -->' + this.toolList[3].checked, LevelGraphModellerComponent.name);

    if (this.mousedownOnLevelGraphNode === true) {

      if (this.toolList[1].checked || this.toolList[2].checked || this.toolList[3].checked) {

        Logger.info('TEst: ' + this.currentDrawRelation.path.pathDataString, LevelGraphModellerComponent.name);
        this.currentDrawRelation.path.points[1].x = this.currentDrawRelation.path.points[1].x + deltaX;
        this.currentDrawRelation.path.points[1].y = this.currentDrawRelation.path.points[1].y + deltaY;
        this.currentDrawRelation.path.updatePath();
        Logger.info('TEst: ' + this.currentDrawRelation.path.pathDataString, LevelGraphModellerComponent.name);
      } else if (this.toolList[0].checked) {

        this.moveNode.y = this.moveNode.y + deltaY;
        this.moveNode.x = this.moveNode.x + deltaX;
      }

    }

    this.lastMousePositionY = newMousePositionY;
    this.lastMousePositionX = newMousePositionX;

  }

  mouseUpOnNode(event, levelGraphNode: LevelGraphNode) {

    let newMousePositionY = event.offsetY;
    let newMousePositionX = event.offsetX;
    let deltaY = (newMousePositionY - this.lastMousePositionY);
    let deltaX = (newMousePositionX - this.lastMousePositionX);

    if (this.toolList[1].checked || this.toolList[2].checked || this.toolList[3].checked) {

      Logger.info('TEst: ' + this.currentDrawRelation.path.pathDataString, LevelGraphModellerComponent.name);
      this.currentDrawRelation.path.points[1].x = this.currentDrawRelation.path.points[1].x + deltaX;
      this.currentDrawRelation.path.points[1].y = this.currentDrawRelation.path.points[1].y + deltaY;
      this.currentDrawRelation.path.updatePath();

      this.levelGraphRelationService.createLevelGraphRelation(this.currentDrawRelation).subscribe(levelGraphRelationResponse => this.currentLevelGraph.levelGraphRelations.push(levelGraphRelationResponse));
      Logger.info('TEst: ' + this.currentDrawRelation.path.pathDataString, LevelGraphModellerComponent.name);
    } else if (this.toolList[0].checked) {

    }
    this.mousedownOnLevelGraphNode = false;
    this.lastMousePositionY = event.offsetY;
    this.lastMousePositionX = event.offsetX;
    this.drawRelation = false;
  }


  mouseUpOnDrawArea() {
    this.mousedownOnLevelGraphNode = false;
    this.drawRelation = false;
    this.mousedownOnLevelChangeView = false;
  }



  changeTool(tool: any) {

    for (let tool of this.toolList) {
      tool.checked = false;
    }
    tool.checked = true;
  }


  /*****************************************************************************************************************************************
   *
   * Drag and Drop Handling for creating Level Graph Nodes
   *
   ****************************************************************************************************************************************/


  onDrag(event, dragData: any, typeDragData: string) {

    this.currentDragData = dragData;
    this.typeCurrentDragData = typeDragData;
    this.drag = true;
  }

  onDragOver(event) {

    event.preventDefault();

  }

  onDrop(event, level: Level) {
    Logger.info('[ONDROP]', LevelGraphModellerComponent.name);
    if (this.drag === true) {
      Logger.data('Mouse x Position: ' + event.offsetX + ' Mouse y Position: ' + event.offsetY + ' Level Y: ' + level.y, LevelGraphModellerComponent.name);
      if (this.typeCurrentDragData === LEVELGRAPHNODETYPE.NODETYPE) {

        this.createLevelGraphNode(event.offsetX - 50, event.offsetY - level.y, 200, 100, level, LEVELGRAPHNODETYPE.NODETYPE, this.currentDragData.id);

      } else if (this.typeCurrentDragData === LEVELGRAPHNODETYPE.RELATIONSHIPTYPE) {

        this.createLevelGraphNode(event.offsetX - 50, event.offsetY - level.y, 200, 100, level, LEVELGRAPHNODETYPE.RELATIONSHIPTYPE, this.currentDragData.id);

      } else if (this.typeCurrentDragData === LEVELGRAPHNODETYPE.FRAGMENTNODE) {

        if (level.value > 1) {

          let fragmentNode = new FragmentNode();
          this.fragmentNodeService.createFragmentNode(fragmentNode).subscribe(fragmentNodeRes => this.createLevelGraphNode(event.offsetX - 50, event.offsetY - level.y, 200, 100, level, LEVELGRAPHNODETYPE.FRAGMENTNODE, fragmentNodeRes.getId()));

        } else {
          //TODO:ErrorHandling
        }

      } else {
        //TODO: ErrorHandling
      }

      this.drag = false;
    }
  }

  createLevelGraphNode(x: number, y: number, width: number, height: number, level: Level, levelGraphNodeType: string, typeRef: number) {

    let levelGraphNode = new LevelGraphNode(x, y, width, height, level.id, levelGraphNodeType, typeRef, this.currentLevelGraph);
    this.levelGraphNodeService.createLevelGraphNode(levelGraphNode).subscribe(levelGraphNodeRes => this.currentLevelGraph.levelGraphNodes.push(levelGraphNodeRes));
  }


  /*****************************************************************************************************************************************
   *
   * Handling for changing the high of the level view area 
   *
   ****************************************************************************************************************************************/
  startChangeLevelHeight(event: MouseEvent) {
    this.mousedownOnLevelChangeView = true;
    this.lastMousePositionY = event.offsetY;
  }

  changeLevelHeight(event: MouseEvent, level: Level) {

    let newMousePositionY = event.offsetY;
    let delta = (newMousePositionY - this.lastMousePositionY);
    Logger.info("[MOUSEMOVEEVENT] event OFFSETY: " + (newMousePositionY - this.lastMousePositionY), LevelGraphModellerComponent.name);

    if (this.mousedownOnLevelChangeView === true) {

      level.height = level.height + delta;

      for (let tempLevel of this.currentLevelGraph.levels) {
        if (level.id === tempLevel.id) {
          tempLevel.height = level.height;
        }
      }

      this.updateLevelPosition(level, delta);
    }

    this.lastMousePositionY = newMousePositionY;

  }

  updateLevelPosition(level: Level, delta: number) {

    for (let activeLevel of this.activeLevels) {
      if (activeLevel.value > level.value) {
        activeLevel.y = activeLevel.y + delta;
      }
    }

  }

  stopChangeLevelHeight(event: MouseEvent) {
    this.mousedownOnLevelChangeView = false;
    this.lastMousePositionY = event.offsetY;
  }


  viewDetails(id: number) {

  }

  deleteLevelGraphNode(levelGraphNode: LevelGraphNode) {

    if (levelGraphNode.levelGraphNodeType === LEVELGRAPHNODETYPE.FRAGMENTNODE) {
      this.levelGraphNodeService.deleteLevelGraphNode(levelGraphNode.id).subscribe(response => this.currentLevelGraph.levelGraphNodes = Utility.deleteElementFromArry(levelGraphNode.id, this.currentLevelGraph.levelGraphNodes));
      this.fragmentNodeService.deleteFragmentNode(levelGraphNode.typeRef).subscribe();
    } else {
      this.levelGraphNodeService.deleteLevelGraphNode(levelGraphNode.id).subscribe(response => this.currentLevelGraph.levelGraphNodes = Utility.deleteElementFromArry(levelGraphNode.id, this.currentLevelGraph.levelGraphNodes));
    }

  }

}
