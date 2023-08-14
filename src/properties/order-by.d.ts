export type OrderDirection = 'asc' | 'desc';

export interface IOrderBy {
  propertyName: string;
  direction: OrderDirection;
}
