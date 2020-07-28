import { FindManyOptions, FindOneOptions, FindConditions, DeepPartial, InsertResult, UpdateResult, DeleteResult } from 'typeorm'
import { IPagination } from './IPagination.model'
import { QueryDeepPartialEntity } from 'typeorm/query-builder/QueryPartialEntity'

export interface IBaseService<T> {
    FindAll(filter?: FindManyOptions<T>): Promise<IPagination<T>>
    FindOne(id: string | number | FindOneOptions<T> | FindConditions<T>, options?: FindOneOptions<T>): Promise<T | undefined>
    Create(entity: DeepPartial<T>, ...options: any[]): Promise<InsertResult>
    Update(id: any, entity: QueryDeepPartialEntity<T>): Promise<UpdateResult | T>
    Delete(id: any, ...options: any[]): Promise<DeleteResult>
}
