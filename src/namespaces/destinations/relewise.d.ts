import { BaseFullSchema } from "../../schemas/base-full-schema";

/**
 * Relewise destination
 */
export namespace Destinations.Relewise {

    export namespace Schemas {
        /**
         * Relewise product schema output
         */
        export class Product extends BaseFullSchema<ProductProperties, ProductDestinationOptions> {
        }
    }

    /**
     * Product title
     */
	interface ProductProperties  {
        /**
        * Product title
        */
        title: string
        price?: number
    }

    class ProductDestinationOptions {
        type: 'product'
        upsertMethod?: 'clear' | 'replace' | 'append'
        deleteMethod?: 'delete' | 'deleteIfNotExists'
    }
}