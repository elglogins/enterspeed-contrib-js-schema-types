import { IRouteBuilder } from "../routes";

export interface IRouteByUrlBuilder extends IRouteBuilder {
  redirects(redirects: string[]): this;
}
