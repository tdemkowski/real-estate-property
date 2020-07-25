import { FindManyOptions, FindOneOptions, FindConditions, DeepPartial, InsertResult } from "typeorm";
import { IPagination } from "./IPagination.model";

export interface IBaseService<T> {
    FindAll(filter?: FindManyOptions<T>): Promise<IPagination<T>>;
    FindOne(id: string | number | FindOneOptions<T> | FindConditions<T>, options?: FindOneOptions<T>): Promise<T | undefined>;
    Create(entity: DeepPartial<T>, ...options: any[]): Promise<InsertResult>;
    // Update(id: any, entity: QueryDeepPartialEntity<T>, ...options: any[]): Promise<UpdateResult | T>;
    // Delete(id: any, ...options: any[]): Promise<DeleteResult>;
  }