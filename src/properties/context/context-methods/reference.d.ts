import { IOrderBy } from '../../order-by';
import { IPropertiesBuildCommands } from '../properties-context';

export interface IReferenceSchemaAliasBuilder {
  schemaAlias(schemaAlias: string): IReferenceBuilder;
}

export interface IReferenceBuilder {
  filter(filter: string): IReferenceFilterBuilder;
  parent(): IParentReferenceBuilder;
  children(filter?: string): IReferenceChildrenFilterBuilder;
  byOriginId(originId: string): IReferenceByOriginIdBuilder;
  byOriginIds(originIds: string[]): IReferenceByOriginIdsBuilder;
}

export interface IReferenceFilterBuilder extends IPropertiesBuildCommands {
  orderBy(orderBy: IOrderBy): this;
  limit(limit: number): this;
  sourceGroup(sourceGroupAlias: string): this;
}

export interface IReferenceChildrenFilterBuilder
  extends IPropertiesBuildCommands {
  orderBy(orderBy: IOrderBy): this;
  limit(limit: number): this;
}

export interface IReferenceByOriginIdBuilder {
  sourceGroup(sourceGroupAlias: string): this;
}

export interface IReferenceByOriginIdsBuilder {
  sourceGroup(sourceGroupAlias: string): this;
}

export interface IParentReferenceBuilder {
}
