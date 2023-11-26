import {ITriggersSchemaContext} from "../triggers";
import {ISourceEntity} from "../models";
import {IRoutesSchemaContext} from "../routes";
import {ICollectionItemsContext} from "../collection-items/context/collection-items-context";
import {IReferenceBuilder} from "../references";

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
        context: IRoutesSchemaContext
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