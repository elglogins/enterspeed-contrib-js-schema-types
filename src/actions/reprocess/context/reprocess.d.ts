import { IReprocessByOriginIdBuilder } from './context-methods/reprocess-by-origin-id';
import { IReprocessParentBuilder } from './context-methods/reprocess-parent';
import { IReprocessSchemaBuilder } from './context-methods/reprocess-schema';

export interface IReprocessSchemaActionsBuilder {
  /**
   * Reprocess a parent source entity based on its `originParentId`
   * @example Example of usage
   * ```js
   * context.reprocess('productCategory').parent()
   * ```
   */
  parent(): IReprocessParentBuilder;

  /**
   * Reprocess a specific source entity based on its origin id
   * @param schemaAlias 
   * @example Example of usage
   * ```js
   * context.reprocess('mySchemaAlias').byOriginId(sourceEntity.properties.link.id)
   * ```
   */
  byOriginId(originId: string): IReprocessByOriginIdBuilder;

  /**
   * Reprocess all source entities a specific schema has a trigger on
   * @example Example of usage
   * ```js
   * context.reprocess('mySchemaAlias').bySchema()
   * ```
   */
  bySchema(): IReprocessSchemaBuilder;
}
