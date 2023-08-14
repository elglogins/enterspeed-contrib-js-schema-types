import { IActionBuilder } from '../actions';

export interface IReprocessByOriginIdActionBuilder extends IActionBuilder {
  sourceGroup(sourceGroupAlias: string): this;
  schema(schemaAlias: string): this;
}
