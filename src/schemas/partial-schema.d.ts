import { IPropertiesContext } from '../properties/context';
import { ISchema } from './schema';

export class PartialSchema implements ISchema {
  /**
   * The `properties` method is where you define the output that goes into the view you fetch from the delivery API.
   * @param input
   * @param context
   * @returns The properties method must return an object with the data you want to include in your view.
   * @see {@link https://docs.enterspeed.com/reference/js/properties} documentation for properties. 
   * {@label SCHEMA_FUNCTION}
   */
  properties: (
    input: any,
    context: IPropertiesContext
  ) => Promise<Record<string, any>> | Record<string, any>;
}
