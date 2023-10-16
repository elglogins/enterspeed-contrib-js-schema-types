import { BaseFullSchema } from "../../schemas/base-full-schema";

/**
 * Relewise destination
 */
export namespace Destinations.Relewise {

    export namespace Schemas {
        /**
         * Relewise product schema output
         */
        export class Product extends BaseFullSchema<ProductProperties> {
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
}