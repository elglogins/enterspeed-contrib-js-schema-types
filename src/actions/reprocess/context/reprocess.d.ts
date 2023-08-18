import { IReprocessByOriginIdBuilder } from './context-methods/reprocess-by-origin-id';
import { IReprocessParentBuilder } from './context-methods/reprocess-parent';
import { IReprocessSchemaBuilder } from './context-methods/reprocess-schema';

export interface IReprocessSchemaActionsBuilder {
  parent(): IReprocessParentBuilder;
  byOriginId(originId: string): IReprocessByOriginIdBuilder;
  bySchema(): IReprocessSchemaBuilder;
}
