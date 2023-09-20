import { Nullable } from '../../../../types';
import { IDestinationBuilder } from '../destinations';

export interface IDestinationByAliasBuilder extends IDestinationBuilder {
    /**
     * Option to specify dynamic configuration for destination provider. 
     * @param options 
     * @example Example of destination - with options
     * ```js
     * context.destination('algolia').options({ customId: `prefixed-${sourceEntity.originId}` });
     * ```
     */
    options(options: Nullable<Record<string, unknown>>): this
}