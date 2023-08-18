import { IActionBuilder } from "../../../actions";

export interface IReprocessByOriginIdBuilder extends IActionBuilder {
  sourceGroup(sourceGroupAlias: string): this;
}
