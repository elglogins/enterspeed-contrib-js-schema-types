import { ISourceEntity } from '../models/source-entity';
import { IRoutesSchemaContext } from './context/routes';

export type RoutesSchemaFunction = (
  sourceEntity: ISourceEntity,
  context: IRoutesSchemaContext
) => void;
