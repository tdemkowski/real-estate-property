import { Repository, FindManyOptions, FindOneOptions, FindConditions, InsertResult, DeepPartial, UpdateResult, DeleteResult } from 'typeorm'
import { BaseEntity } from '../entities/base.entity'
import { IBaseService } from '../models/IBaseService.model'
import { IPagination } from '../models/IPagination.model'
import { QueryDeepPartialEntity } from 'typeorm/query-builder/QueryPartialEntity'

abstract class BaseService<T extends BaseEntity> implements IBaseService<T> {
    public repository: Repository<T>

    constructor(repository) {
        this.repository = repository
    }

    public async FindOne(id: string | number | FindOneOptions<T> | FindConditions<T>, options?: FindOneOptions<T>): Promise<T | undefined> {
        const record = await this.repository.findOne(id as string | number, options)
        return record
    }

    public async FindAllById(id: string | number | FindManyOptions<T> | FindConditions<T>): Promise<T[]> {
        const posts = await this.repository.find({
            where: {
                id: id,
            },
        })
        return posts
    }

    public async FindAll(filter?: FindManyOptions<T>): Promise<IPagination<T>> {
        const total = await this.repository.count(filter)
        const items = await this.repository.find(filter)
        return {
            items,
            total,
        }
    }

    public async Create(entity: DeepPartial<T>, ..._options: any[]): Promise<InsertResult> {
        const user = this.repository.create(entity)
        return await this.repository.save(user as any)
    }

    public async Update(id: string | number, newEntity: QueryDeepPartialEntity<T>): Promise<UpdateResult | T> {
        return await this.repository.update(id, newEntity)
    }

    public async Delete(id: string | number): Promise<DeleteResult> {
        return await this.repository.delete(id)
    }
}

export default BaseService
