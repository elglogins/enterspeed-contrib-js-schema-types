import {
    IReferenceByOriginIdsBuilder,
    IReferenceChildrenFilterBuilder,
    IReferenceFilterBuilder,
} from '../../../references';

export interface ICollectionItemsReferenceBuilder {
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
     * Creates a references to list of source entities by their origin id
     * @param originIds A list of original ids from the source system
     * @example Example of usage
     * ```js
     * const contentTeasers = context.reference("contentTeaser").byOriginIds(sourceEntity.properties.links.map(link => link.id));
     * ```
     */
    byOriginIds(originIds: string[]): IReferenceByOriginIdsBuilder;
}