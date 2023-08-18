import { ISourceEntity } from '../models/source-entity';
import { IPropertiesContext } from '../properties/context';
import { ISchema } from './schema';

export class PartialSchema implements ISchema {
  properties: (
    sourceEntity: ISourceEntity,
    context: IPropertiesContext
  ) => Promise<Record<string, any>> | Record<string, any>;
}
