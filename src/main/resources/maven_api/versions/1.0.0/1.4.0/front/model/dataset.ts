/**
 * FpGen api
 * API for fake profile dataset generator project
 *
 * The version of the OpenAPI document: 1.4.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { DatasetFunctionEnum } from './dataset-function-enum';
import { Author } from './author';
import { DatasetType } from './dataset-type';


export interface Dataset { 
    id?: string;
    creationDate?: string;
    modificationDate?: string;
    author?: Author;
    _function: DatasetFunctionEnum;
    type: DatasetType;
    name?: string;
    comment?: string;
    description?: string;
    version?: string;
}
export namespace Dataset {
}


