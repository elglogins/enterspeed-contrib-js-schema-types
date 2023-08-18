import { ITriggersSchemaContext } from "../triggers/context/triggers";
import { IRoutesSchemaContext } from "../routes/context/routes";
import { ISourceEntity } from "../models/source-entity";
import { IPropertiesContext } from "../properties/context";
import { IActionsSchemaContext } from "../actions";

export class FullSchema {
  triggers: (
    context: ITriggersSchemaContext
  ) => void;
  actions?: (
    sourceEntity: ISourceEntity,
    context: IActionsSchemaContext
  ) => void;
  routes?: (
    sourceEntity: ISourceEntity,
    context: IRoutesSchemaContext
  ) => void;
  properties: (
    sourceEntity: ISourceEntity,
    context: IPropertiesContext
  ) => Promise<Record<string, any>> | Record<string, any>;
}