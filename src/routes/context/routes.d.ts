import { Nullable } from '../../types';
import { IRouteByHandleBuilder } from './context-methods/route-by-handle';
import { IRouteByUrlBuilder } from './context-methods/route-by-url';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface IRouteBuilder {}

export interface IRoutesSchemaContext {
  url(url: Nullable<string>): IRouteByUrlBuilder;
  handle(handle: Nullable<string>): IRouteByHandleBuilder;
}
