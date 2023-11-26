import {IOrderBy} from "./order-by";

export interface IReferenceFilterBuilder extends IReferenceBuilder {

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
     * Specify the source group. By default, the source group of the current source entity is used.
     * @param sourceGroupAlias The sourceGroupAlias should be equal to the desired source group alias where you want to look for source entities.
     * @example Example of usage
     * ```js
     * const newsTeasers = context.reference("newsTeaser").filter("type eq 'newsArticle'").sourceGroup("anotherSourceGroup");
     * ```
     */
    sourceGroup(sourceGroupAlias: string): this;
}

export interface IReferenceChildrenFilterBuilder extends IReferenceBuilder {

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

export interface IReferenceByOriginIdBuilder extends IReferenceBuilder {
    /**
     * Specify the source group. By default, the source group of the current source entity is used.
     * @param sourceGroupAlias The sourceGroupAlias should be equal to the desired source group alias where you want to look for source entities.
     * @example Example of usage
     * ```js
     * const contentTeaser = context.reference("contentTeaser").byOriginId(sourceEntity.properties.link.id).sourceGroup("anotherSourceGroup");
     * ```
     */
    sourceGroup(sourceGroupAlias: string): this;
}

export interface IReferenceByOriginIdsBuilder extends IReferenceBuilder {
    /**
     * Specify the source group. By default, the source group of the current source entity is used.
     * @param sourceGroupAlias The sourceGroupAlias should be equal to the desired source group alias where you want to look for source entities.
     * @example Example of usage
     * ```js
     * const contentTeasers = context.reference("contentTeaser").byOriginIds(sourceEntity.properties.links.map(link => link.id)).sourceGroup("anotherSourceGroup");
     * ```
     */
    sourceGroup(sourceGroupAlias: string): this;
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface IParentReferenceBuilder extends IReferenceBuilder {
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface ISelfReferenceBuilder extends IReferenceBuilder {
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export class IReferenceBuilder {
    test: string;
}