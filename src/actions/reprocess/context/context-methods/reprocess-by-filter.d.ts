import { IOrderBy } from "../../../../references";

export interface IReprocessByFilterBuilder {
  orderBy(orderBy: IOrderBy): this;
  limit(limit: number): this;
  sourceGroup(sourceGroupAlias: string): this;
}
