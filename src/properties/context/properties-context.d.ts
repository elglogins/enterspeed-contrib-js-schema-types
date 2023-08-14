import { IPartialCommand } from './context-methods/partial';
import { IReferenceBuilder } from './context-methods/reference';

/**
 * The context object available in schemas
 */
export interface IPropertiesContext {
  /**
   * A method to apply a specified partial by its alias
   * on some provided input´
   * @param alias - string alias of the desired partial
   * @param input - the input value e.g. SourceEntity
   * @returns a promise of the resulting partial schema
   */
  partial(alias: string, input: unknown | undefined | null): any;
  reference(schemaAlias: string): IReferenceBuilder;
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface IPropertiesBuildCommands {}
