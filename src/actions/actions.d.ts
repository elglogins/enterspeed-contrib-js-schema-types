import { IDestinationByAliasBuilder } from './destinations/context/context-methods';
import { IReprocessSchemaActionsBuilder } from './reprocess/context/reprocess';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface IActionBuilder {}

export interface IActionsSchemaContext {
    reprocess(schemaAlias: string): IReprocessSchemaActionsBuilder;
    destination(destinationAlias: string): IDestinationByAliasBuilder;
  }
  