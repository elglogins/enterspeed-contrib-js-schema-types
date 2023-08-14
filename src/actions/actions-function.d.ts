import { IActionsSchemaContext } from './context/index';
import { ISourceEntity } from '../models/source-entity';

export type ActionSchemaFunction = (
  sourceEntity: ISourceEntity,
  context: IActionsSchemaContext
) => void;
