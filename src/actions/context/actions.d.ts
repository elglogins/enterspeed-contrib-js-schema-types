import { IReprocessByOriginIdActionBuilder } from './context-methods/reprocess-by-origin-id';
import { IReprocessParentActionBuilder } from './context-methods/reprocess-parent';
import { IReprocessSchemaActionBuilder } from './context-methods/reprocess-schema';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface IActionBuilder {}

export interface IActionsSchemaContext {
  reprocessParent(): IReprocessParentActionBuilder;
  reprocessByOriginId(originId: string): IReprocessByOriginIdActionBuilder;
  reprocessSchema(schemaAlias: string): IReprocessSchemaActionBuilder;
}
