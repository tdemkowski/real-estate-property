import { Repository, FindManyOptions, FindOneOptions, FindConditions, InsertResult, DeepPartial } from "typeorm";
import { BaseEntity } from "../entities/base.entity";
import { IBaseService } from "../models/IBaseService.model";
import { IPagination } from "../models/IPagination.model";

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


