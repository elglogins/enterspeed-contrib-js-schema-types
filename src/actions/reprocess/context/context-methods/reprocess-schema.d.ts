import { IActionBuilder } from "../../../actions";

export interface IReprocessSchemaBuilder extends IActionBuilder {
  sourceGroup(sourceGroupAlias: string): this;
}
