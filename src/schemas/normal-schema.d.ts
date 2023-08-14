import { TriggerSchemaFunction } from "./../triggers/triggers-function";
import { RoutesSchemaFunction } from "./../routes/routes-function";
import { ActionSchemaFunction } from "./../actions/actions-function";
import { DestinationsSchemaFunction } from "./../destinations/destinations-function";
import { PropertiesFunction } from "./../properties/properties-function";

export class NormalSchema {
  triggers: TriggerSchemaFunction;
  actions?: ActionSchemaFunction;
  destinations?: DestinationsSchemaFunction;
  routes?: RoutesSchemaFunction;
  properties: PropertiesFunction;
}