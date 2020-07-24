import { Repository, FindManyOptions, FindOneOptions, FindConditions } from "typeorm";

abstract class BaseService<T> implements IBaseService<T> {
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

}

export default BaseService;

export interface IBaseService<T> {
    FindAll(filter?: FindManyOptions<T>): Promise<IPagination<T>>;
    FindOne(id: string | number | FindOneOptions<T> | FindConditions<T>, options?: FindOneOptions<T>): Promise<T | undefined>;
    // Create(entity: DeepPartial<T>, ...options: any[]): Promise<T>;
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
  