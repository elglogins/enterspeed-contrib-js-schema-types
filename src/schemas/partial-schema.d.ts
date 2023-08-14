import { PropertiesFunction } from '../properties/properties-function';
import { ISchema } from './schema';

export class PartialSchema implements ISchema {
  properties: PropertiesFunction;
}
