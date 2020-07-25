import { Repository, FindManyOptions, FindOneOptions, FindConditions, InsertResult, DeepPartial } from "typeorm";
import { BaseEntity } from "../entities/base.entity";

abstract class BaseService<T extends BaseEntity> implements IBaseService<T> {
  public repository: Repository<T>;

  constructor(repository) {
    this.repository = repository;
  }

  public async FindOne(id: string | number | FindOneOptions<T> | FindConditions<T>,
    options?: FindOneOptions<T>
  ): Promise<T | undefined> {
    const record = await this.repository.findOne(id as any, options);
    return record;
  }

  public async FindAll(filter?: FindManyOptions<T>): Promise<IPagination<T>> {
    const total = await this.repository.count(filter);
    const items = await this.repository.find(filter);
    return { items, total };
  }

  public async Create(entity: DeepPartial<T>, ..._options: any[]): Promise<InsertResult> {
    const user = this.repository.create(entity);
    return await this.repository.save(user as any);
  }
}

export default BaseService;

export interface IBaseService<T> {
  FindAll(filter?: FindManyOptions<T>): Promise<IPagination<T>>;
  FindOne(id: string | number | FindOneOptions<T> | FindConditions<T>, options?: FindOneOptions<T>): Promise<T | undefined>;
  Create(entity: DeepPartial<T>, ...options: any[]): Promise<InsertResult>;
  // Update(id: any, entity: QueryDeepPartialEntity<T>, ...options: any[]): Promise<UpdateResult | T>;
  // Delete(id: any, ...options: any[]): Promise<DeleteResult>;
}

export interface IPagination<T> {
  /**
   * Items included in the current listing
   */
  readonly items: T[];

  /**
   * Total number of available items
   */
  readonly total: number;
}
