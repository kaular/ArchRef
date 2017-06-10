import { Entity } from '../entity/entity';
import { Path } from '../path';

/*******************************************************************************************************************************************************************************************************
 *
 * Relation Data Model
 *
 * @author Arthur Kaul
 *
 ******************************************************************************************************************************************************************************************************/
export class Relation extends Entity {

  sourceNodeId: number;
  targetNodeId: number;
  path: Path;

  constructor(name: string, sourceNodeId: number, targetNodeId: number, path: Path) {
    super(name);
    this.sourceNodeId = sourceNodeId;
    this.targetNodeId = targetNodeId;
    this.path = path;
  };

}