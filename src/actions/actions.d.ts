import { IDestinationByAliasBuilder } from './destinations/context/context-methods';
import { IReprocessSchemaActionsBuilder } from './reprocess/context/reprocess';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface IActionBuilder {}

export interface IActionsSchemaContext<TDestinationOptions> {
    /**
     * Reprocess a schema based on its alias.
     * @see {@link https://docs.enterspeed.com/reference/js/actions#reprocess} documentation for reprocess
     * @param schemaAlias 
     */
    reprocess(schemaAlias: string): IReprocessSchemaActionsBuilder;

    /**
     * The destination method is used to push generated views for a schema to a webhook, to Algolia or another third-party application.
     * @see {@link https://docs.enterspeed.com/reference/js/actions#destination} documentation for destination
     * @param destinationAlias 
     * @example Example of destination
     * ```js
     * context.destination('webhook');
     * ```
     */
    destination(destinationAlias: string): IDestinationByAliasBuilder<TDestinationOptions>;
  }
  