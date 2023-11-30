import { ISourceEntity } from "../../../models";
import { IOrderBy } from "../../../lookups/order-by";
import { IRouteBuilder } from "../routes";

export interface IRouteLookupBuilder extends IRouteBuilder {
    sourceGroup(sourceGroupAlias: string): IRouteLookupBuilder;
  
    limit(limit: number): IRouteLookupBuilder;
  
    orderBy(orderBy: IOrderBy): IRouteLookupBuilder;
  
    toPromise(): Promise<ISourceEntity[]>;
  }
  