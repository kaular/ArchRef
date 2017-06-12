import { Logger } from '../../../../logger/logger';
import { Level } from '../../datamodels/levelgraph/level';
import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs';

/********************************************************************************************************************
  *
  * Level Service implements the calls to the rest interface of the application server and
  * handle the request construction and response extraction for Level Data
  *
  ********************************************************************************************************************/
@Injectable()
export class LevelService {

  // URL of the REST Interface End-Point
  private levelUrl = '/api/levels';

  constructor(private http: Http) { }

  /******************************************************************************************************************
   *
   * Send GET Level REQUEST
   *
   ******************************************************************************************************************/
  public getLevel(id: number): Observable<Level> {
    Logger.info('[REQUEST - LEVEL]: Send GET Level Request with ID:' + id, LevelService.name);
    return this.http.get(this.levelUrl + '/' + id).map(this.extractLevel).catch(this.handleError);
  }

  /******************************************************************************************************************
   *
   * Send POST Level REQUEST
   *
   ******************************************************************************************************************/
  public createLevel(level: Level): Observable<Level> {
    Logger.info('[REQUEST - LEVEL]: Send POST Request Level', LevelService.name);
    Logger.data('[REQUEST - LEVEL]: ' + JSON.stringify(level), LevelService.name);
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.post(this.levelUrl, level, options).map(this.extractLevel).catch(this.handleError);
  }

  /******************************************************************************************************************
   *
   * Send PUT Level REQUEST
   *
   ******************************************************************************************************************/
  public updateLevel(level: Level): Observable<Level> {
    Logger.info('[REQUEST - LEVEL]: Send PUT Request Level', LevelService.name);
    Logger.data('[REQUEST - LEVEL]: ' + JSON.stringify(level), LevelService.name);
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.put(this.levelUrl + '/' + level.id, level, options).map(this.extractLevel).catch(this.handleError);
  }

  /******************************************************************************************************************
   *
   * Send DELETE Level REQUEST
   *
   ******************************************************************************************************************/
  public deleteLevel(id: number): Observable<Level> {
    Logger.info('[REQUEST - LEVEL]: Send DELETE Request Level', LevelService.name);
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.delete(this.levelUrl + '/' + id, options).map(res => res).catch(this.handleError);
  }

  /******************************************************************************************************************
   *
   *  Extract data from response data Level object
   *
   ******************************************************************************************************************/
  private extractLevel(res: Response) {
    let body = res.json();
    Logger.info('[RESPONSE - LEVEL]:  Extract Level Data', LevelService.name);
    Logger.info('[RESPONSE - LEVEL]: ' + JSON.stringify(body), LevelService.name);
    let level: Level = new Level(body.depth, body.visible, body.y, body.height, body.levelGraphId, body.levelGraphRelations, body.levelGraphNodes);
    level.id = (body.id);
    level.levelGraphNodes = body.levelGraphNodes;
  //  level.outLevelGraphRelations = body.outLevelGraphRelations;
    return level || {};
  }

  /******************************************************************************************************************
   *
   *  Error Handling
   *
   ******************************************************************************************************************/
  private handleError(error: Response | any) {
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }

}
