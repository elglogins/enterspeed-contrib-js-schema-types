import { ISourceEntity } from "../models";

export type OrderDirection = 'asc' | 'desc';
export interface IOrderBy 
{
  direction: OrderDirection;

  /**
   * Property name to order by.
   * @example Order by origin id
   * ```js
   * orderBy({ propertyName: 'originId', direction: 'asc' });
   * ```
   * @example Order by custom property
   * ```js
   * orderBy({ propertyName: 'properties.metaData.sortOrder', direction: 'asc' });
   * ```
   */
  propertyName: `properties.${string}` | keyof Omit<ISourceEntity, 'properties'>;
}