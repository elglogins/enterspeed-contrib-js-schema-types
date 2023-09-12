import { IOrderBy } from '../../order-by';
import { IPropertiesBuildCommands } from '../properties-context';

export interface IReferenceBuilder {
  /**
   * Using the filter function lets you do a dynamic search for source entities you wnat to make references to
   * @param filter Your filtering criteria
   * @example Example of usage
   * ```js
   * const newsTeasers = context.reference("newsTeaser").filter("type eq 'newsArticle'");
   * ```
   */
  filter(filter: string): IReferenceFilterBuilder;

  /**
   * Creates a reference to the parent of the current source entity
   * @example Example of usage
   * ```js
   * const parentPage = context.reference("page").parent();
   * ```
   */
  parent(): IParentReferenceBuilder;

  /**
   * Creates a reference to the current source entity
   * @example Example of usage
   * ```js
   * const selfPage = context.reference("page").self();
   * ```
   */
  self(): ISelfReferenceBuilder;

  /**
   * Creates a reference to all the children of the current source entity
   * @param filter Your filtering criteria
   * @example Example without additional filter
   * ```js
   * const childPages = context.reference("page").children();
   * ```
   * @example Example with additional filter
   * ```js
   * const childPages = context.reference("page").children("type eq 'subpage'");
   * ```
   */
  children(filter?: string): IReferenceChildrenFilterBuilder;

  /**
   * Creates a reference to source entity by its origin id
   * @param originId The original id from the source system
   * @example Example of usage
   * ```js
   * const contentTeaser = context.reference("contentTeaser").byOriginId(sourceEntity.properties.link.id);
   * ```
   */
  byOriginId(originId: string): IReferenceByOriginIdBuilder;

  /**
  * Creates a references to list of source entities by their origin id
  * @param originIds A list of original ids from the source system
  * @example Example of usage
  * ```js
  * const contentTeasers = context.reference("contentTeaser").byOriginIds(sourceEntity.properties.links.map(link => link.id));
  * ```
  */
  byOriginIds(originIds: string[]): IReferenceByOriginIdsBuilder;
}

export interface IReferenceFilterBuilder extends IPropertiesBuildCommands {

  /**
   * Specifies sorting order of source entities matching specified filter
   * @param orderBy Desired sorting order
   * @example Example of usage
   * ```js
   * const newsArticles = context.reference("newsArticle").filter("type eq 'newsArticle'").orderBy({ propertyName: "createDate", direction: "desc"});
   * ```
   */
  orderBy(orderBy: IOrderBy): this;

  /**
   * Limit the number of references
   * @param limit The maximum number of references to return.
   * @example Example of usage
   * ```js
   * const topFiveNewsTeasers = context.reference("newsTeaser").filter("type eq 'newsArticle'").limit(5);
   * ```
   */
  limit(limit: number): this;

  /**
   * Specify the source group. By default the source group of the current source entity is used.
   * @param sourceGroupAlias The sourceGroupAlias should be equal to the desired source group alias where you want to look for source entities.
   * @example Example of usage
   * ```js
   * const newsTeasers = context.reference("newsTeaser").filter("type eq 'newsArticle'").sourceGroup("anotherSourceGroup");
   * ```
   */
  sourceGroup(sourceGroupAlias: string): this;
}

export interface IReferenceChildrenFilterBuilder
  extends IPropertiesBuildCommands {

  /**
   * Specifies sorting order of children
   * @param orderBy Desired sorting order
   * @example Example of usage
   * ```js
   * const childPages = context.reference("newsArticle").children().orderBy({ propertyName: "createDate", direction: "desc"});
   * ```
   */
  orderBy(orderBy: IOrderBy): this;

  /**
 * Limit the number of references
 * @param limit The maximum number of references to return.
 * @example Example of usage
 * ```js
 * const childPages = context.reference("newsTeaser").children().limit(5);
 * ```
 */
  limit(limit: number): this;
}

export interface IReferenceByOriginIdBuilder {
  /**
   * Specify the source group. By default the source group of the current source entity is used.
   * @param sourceGroupAlias The sourceGroupAlias should be equal to the desired source group alias where you want to look for source entities.
   * @example Example of usage
   * ```js
   * const contentTeaser = context.reference("contentTeaser").byOriginId(sourceEntity.properties.link.id).sourceGroup("anotherSourceGroup");
   * ```
   */
  sourceGroup(sourceGroupAlias: string): this;
}

export interface IReferenceByOriginIdsBuilder {
 /**
   * Specify the source group. By default the source group of the current source entity is used.
   * @param sourceGroupAlias The sourceGroupAlias should be equal to the desired source group alias where you want to look for source entities.
   * @example Example of usage
   * ```js
   * const contentTeasers = context.reference("contentTeaser").byOriginIds(sourceEntity.properties.links.map(link => link.id)).sourceGroup("anotherSourceGroup");
   * ```
   */
  sourceGroup(sourceGroupAlias: string): this;
}

export interface IParentReferenceBuilder {
}

export interface ISelfReferenceBuilder {
}
