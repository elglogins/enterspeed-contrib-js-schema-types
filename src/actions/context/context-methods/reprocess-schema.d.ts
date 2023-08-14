import { IActionBuilder } from '../actions';

export interface IReprocessSchemaActionBuilder extends IActionBuilder {
  sourceGroup(sourceGroupAlias: string): this;
}
