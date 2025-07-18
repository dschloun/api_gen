/**
 * FpGen api
 * API for fake profile dataset generator project
 *
 * The version of the OpenAPI document: 1.8.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { GenerationType } from './generation-type';


export interface OngoingGeneration { 
    id: string;
    creationDate: string;
    authorTrigram?: string;
    type: GenerationType;
    generationList: Array<object>;
}
export namespace OngoingGeneration {
}


