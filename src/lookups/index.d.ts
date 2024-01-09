import { ISourceEntity } from "../models/source-entity";
import { IOrderBy } from "./order-by";

export interface ILookupBuilder {
    sourceGroup(sourceGroupAlias: string): ILookupBuilder;
  
    limit(limit: number): ILookupBuilder;
  
    orderBy(orderBy: IOrderBy): ILookupBuilder;
  
    toPromise(): Promise<ISourceEntity[]>;
  }
  