import { ITriggersBySourceGroupBuilder } from './context-methods/trigger-by-source-group';


export interface ITriggersSchemaContext {
  /**
   * Defines the source group and the source entity types the schema should process.
   * @see {@link https://docs.enterspeed.com/reference/js/triggers} documentation for triggers
   * @param sourceGroupAlias The alias of the source group you want your schema to trigger on
   * @param sourceEntityTypes A list of source entity types you want your schema to trigger on
   * @example Example of usage
   * ```js
   * context.triggers('cms', ['contentPage', 'articlePage']);
   * context.triggers('pim', ['product']);
   * ```
   */
  triggers(
    sourceGroupAlias: string,
    sourceEntityTypes: [string, ...string[]]
  ): ITriggersBySourceGroupBuilder;
}

export interface ITriggersBuilder {}