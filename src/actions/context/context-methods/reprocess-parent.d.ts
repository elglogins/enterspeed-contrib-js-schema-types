import { IActionBuilder } from '../actions';

export interface IReprocessParentActionBuilder extends IActionBuilder {
  schema(schemaAlias: string): this;
}
