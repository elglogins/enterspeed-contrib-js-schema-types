import { Nullable } from '../../types';
import { IRouteByHandleBuilder } from './context-methods/route-by-handle';
import { IRouteByUrlBuilder } from './context-methods/route-by-url';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface IRouteBuilder {}

export interface IRoutesSchemaContext {
  /**
   * A string value that represents the url you want to fetch the view by. A view can only have one url.
   * @see {@link https://docs.enterspeed.com/reference/js/routes#url} documentation for route url
   * @param url
   * @example Example of usage
   * ```js
   * context.url(sourceEntity.url);
   * ```
   */
  url(url: Nullable<string>): IRouteByUrlBuilder;

  /**
   * A handle is a key from which you can fetch the view. A view can have multiple handles.
   * @see {@link https://docs.enterspeed.com/reference/js/routes#handle} documentation for route handles
   * @param handle
   * @example Example of usage
   * ```js
   * context.handle('origin-' + sourceEntity.originId);
   * ```
   */
  handle(handle: Nullable<string>): IRouteByHandleBuilder;
}
