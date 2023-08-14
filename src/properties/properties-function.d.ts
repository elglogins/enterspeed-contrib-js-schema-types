import { ISourceEntity } from '../models/source-entity';
import { IPropertiesContext } from './context/properties-context';

export type PropertiesFunction = (
  sourceEntity: ISourceEntity,
  context: IPropertiesContext
) => Promise<Record<string, any>> | Record<string, any>;
