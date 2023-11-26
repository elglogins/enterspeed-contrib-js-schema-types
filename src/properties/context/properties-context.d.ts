import { IPropertiesReferenceBuilder } from './context-methods';

/**
 * The context object available in schemas
 */
export interface IPropertiesContext {
  /**
   * Referencing a partial schema. Mapped data from a partial schema is embedded into the calling schema.
   * @see {@link https://docs.enterspeed.com/reference/js/properties#partial}
   * @param alias The alias of a partial schema.
   * @param input You can pass whatever data you need for your partial schema.
   * @returns Resulting partial schema object
   */
  partial(alias: string, input: unknown | undefined | null): any;

  /**
   * Referencing a full schema. References to other schemas are resolved on delivery request time.
   * @see {@link https://docs.enterspeed.com/reference/js/properties#reference}
   * @param schemaAlias The alias of a schema.
   */
  reference(schemaAlias: string): IPropertiesReferenceBuilder;
}