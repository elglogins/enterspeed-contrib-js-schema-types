import {ITriggersSchemaContext} from "../triggers";
import {ISourceEntity} from "../models";
import {IRouteByHandleBuilder} from "../routes";
import {IReferenceBuilder, IReferenceByOriginIdsBuilder, IReferenceChildrenFilterBuilder, IReferenceFilterBuilder} from "../references";
import { Nullable } from "../types";

export class CollectionSchema {
    /**
     * The `triggers` method is where you define the source group and the types the schema should process.
     * @see {@link https://docs.enterspeed.com/reference/js/triggers} documentation for triggers.
     * {@label SCHEMA_FUNCTION}
     */
    triggers: (
        context: ITriggersSchemaContext
    ) => void;

    /**
     * The `routes` method is where you define how you fetch the generated view from the Delivery API. If your view should be routeable you must implement the routes method and create one or more routes.
     * @see {@link https://docs.enterspeed.com/reference/js/routes} documentation for routes.
     * {@label SCHEMA_FUNCTION}
     */
    routes?: (
        sourceEntity: ISourceEntity,
        context: IRoutesCollectionSchemaContext
    ) => void;

    /**
     * The `items` method is where you define the output that goes into the view you fetch from the delivery API.
     * @returns The items method must return a reference builder object with the data you want to include in your view.
     * @see {@link https://docs.enterspeed.com/reference/js/items} documentation for items.
     * {@label SCHEMA_FUNCTION}
     */
    items: (
        sourceEntity: ISourceEntity,
        context: ICollectionItemsContext
    ) => Promise<IReferenceBuilder> | IReferenceBuilder;
}

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

export interface ICollectionItemsReferenceBuilder {
    /**
     * Using the filter function lets you do a dynamic search for source entities you wnat to make references to
     * @param filter Your filtering criteria
     * @example Example of usage
     * ```js
     * const newsTeasers = context.reference("newsTeaser").filter("type eq 'newsArticle'");
     * ```
     */
    filter(filter: string): IReferenceFilterBuilder;

    /**
     * Creates a reference to all the children of the current source entity
     * @param filter Your filtering criteria
     * @example Example without additional filter
     * ```js
     * const childPages = context.reference("page").children();
     * ```
     * @example Example with additional filter
     * ```js
     * const childPages = context.reference("page").children("type eq 'subpage'");
     * ```
     */
    children(filter?: string): IReferenceChildrenFilterBuilder;

    /**
     * Creates a references to list of source entities by their origin id
     * @param originIds A list of original ids from the source system
     * @example Example of usage
     * ```js
     * const contentTeasers = context.reference("contentTeaser").byOriginIds(sourceEntity.properties.links.map(link => link.id));
     * ```
     */
    byOriginIds(originIds: string[]): IReferenceByOriginIdsBuilder;
}

export interface IRoutesCollectionSchemaContext {
    /**
     * A handle is a key from which you can fetch the view. A view can have multiple handles.
     * @see {@link https://docs.enterspeed.com/reference/js/routes#handle} documentation for route handles
     * @param handle
     * @example Example of usage
     * ```js
     * context.handle('origin-' + sourceEntity.originId);
     * ```
     */
    handle(handle: Nullable<string>): IRouteByHandleBuilder;
  }
  