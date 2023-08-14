import { ISourceEntity } from '../models/source-entity';
import {
  IDestinationsSchemaContext
} from './context/destinations';

export type DestinationsSchemaFunction = (
  sourceEntity: ISourceEntity,
  context: IDestinationsSchemaContext
) => void;
