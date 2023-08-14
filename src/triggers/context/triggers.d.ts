import { ITriggersBySourceGroupBuilder } from './context-methods/trigger-by-source-group';

export interface ITriggersSchemaContext {
  triggers(
    sourceGroupAlias: string,
    sourceEntityTypes: string[]
  ): ITriggersBySourceGroupBuilder;
}

export interface ITriggersBuilder {}