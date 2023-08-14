import { ITriggersSchemaContext } from './context/triggers';
export type TriggerSchemaFunction = (
  context: ITriggersSchemaContext
) => void;
