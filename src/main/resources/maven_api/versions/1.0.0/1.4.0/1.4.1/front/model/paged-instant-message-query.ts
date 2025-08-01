/**
 * FpGen api
 * API for fake profile dataset generator project
 *
 * The version of the OpenAPI document: 1.4.1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { SortDirection } from './sort-direction';
import { QueryPage } from './query-page';
import { InstantMessageQuery } from './instant-message-query';
import { InstantMessageSortEnum } from './instant-message-sort-enum';


export interface PagedInstantMessageQuery { 
    page: QueryPage;
    query: InstantMessageQuery;
    sortField?: InstantMessageSortEnum;
    sortDirection?: SortDirection;
}
export namespace PagedInstantMessageQuery {
}


