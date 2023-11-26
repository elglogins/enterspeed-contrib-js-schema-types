import { ICollectionItemsReferenceBuilder } from './context-methods';

/**
 * The context object available in schemas
 */
export interface ICollectionItemsContext {
    /**
     * Referencing a full schema. References to other schemas are resolved on delivery request time.
     * @see {@link https://docs.enterspeed.com/reference/js/properties#reference}
     * @param schemaAlias The alias of a schema.
     */
    reference(schemaAlias: string): ICollectionItemsReferenceBuilder;
}
