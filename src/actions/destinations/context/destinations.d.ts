import { IDestinationByAliasBuilder } from './context-methods/destination-by-alias';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface IDestinationBuilder {}

export interface IDestinationsSchemaContext {
  destination(destinationAlias: string): IDestinationByAliasBuilder<unknown>;
}