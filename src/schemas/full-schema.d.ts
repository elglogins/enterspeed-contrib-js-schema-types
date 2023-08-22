import { ITriggersSchemaContext } from "../triggers/context/triggers";
import { IRoutesSchemaContext } from "../routes/context/routes";
import { ISourceEntity } from "../models/source-entity";
import { IPropertiesContext } from "../properties/context";
import { IActionsSchemaContext } from "../actions";

export class FullSchema {
  /**
   * The `triggers` method is where you define the source group and the types the schema should process.
   * @see {@link https://docs.enterspeed.com/reference/js/triggers} documentation for triggers
   */
  triggers: (
    context: ITriggersSchemaContext
  ) => void;

  /**
   * The `actions` method is used if you need to trigger other schemas or processes.
   * @see {@link https://docs.enterspeed.com/reference/js/actions} documentation for actions
   */
  actions?: (
    sourceEntity: ISourceEntity,
    context: IActionsSchemaContext
  ) => void;

  /**
   * The `routes` method is where you define how you fetch the generated view from the Delivery API. If your view should be routeable you must implement the routes method and create one or more routes.
   * @see {@link https://docs.enterspeed.com/reference/js/routes} documentation for routes
   */
  routes?: (
    sourceEntity: ISourceEntity,
    context: IRoutesSchemaContext
  ) => void;

  /**
   * The `properties` method is where you define the output that goes into the view you fetch from the delivery API.
   * @returns The properties method must return an object with the data you want to include in your view.
   * @see {@link https://docs.enterspeed.com/reference/js/properties} documentation for properties
   */
  properties: (
    sourceEntity: ISourceEntity,
    context: IPropertiesContext
  ) => Promise<Record<string, any>> | Record<string, any>;
}