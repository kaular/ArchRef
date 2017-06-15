import { Entity } from '../entity/entity';
import { Property } from './property';

export class ProvidedProperty extends Property {

  entityProvided: Entity;
  entityProvidedId: number;

  constructor(name: string, value: string) {
    super(name, value);
  }
}
