import { Router, Request, Response, NextFunction } from 'express'
import NotFoundException from './exceptions/NotFound.exception'
import BadRequest from './exceptions/BadRequest.exception'
import { BaseEntity } from '../entities/base.entity'
import BaseService from '../services/base.service'
import authMiddleware from '../middlewares/auth.middleware'
import NoContentSuccess from './success/NoContent.success'
import OKSuccess from './success/OK.success'
import CreatedSuccess from './success/Created.success'

class BaseController<T extends BaseEntity, DTO> {
    protected router = Router()

    constructor(protected readonly path: string, protected readonly service: BaseService<T>) {
        this.initializeRoutes()
    }

    protected initializeRoutes() {
        // this.router.get(this.path + '/:id', this.GetById)
        this.router.get(this.path + '/:id', authMiddleware, this.GetById)
        this.router.post(this.path, authMiddleware, this.Create)
        this.router.put(this.path + '/:id', authMiddleware, this.Update)
        this.router.delete(this.path + '/:id', authMiddleware, this.Delete)
        this.router.get(this.path, authMiddleware, this.FetchAll)
    }

    protected FetchAll = async (_req: Request, res: Response, next: NextFunction) => {
        const findAll = await this.service.FindAll()
        if (findAll) {
            next(new OKSuccess(res, { response: findAll }))
        } else {
            next(new BadRequest(findAll))
        }
    }

    protected Create = async (req: Request, res: Response, next: NextFunction) => {
        const body = req.body as DTO
        if (body) {
            const insert = await this.service.Create(body)
            next(new CreatedSuccess(res, { body: insert }))
        } else {
            next(new BadRequest('Object created'))
        }
    }

    protected Update = async (req: Request, _res: Response, next: NextFunction) => {
        const body = req.body as DTO
        const id = req.params.id
        if (body) {
            await this.service.Update(id, body)
            next(new NoContentSuccess())
        } else {
            next(new BadRequest(id))
        }
    }

    protected Delete = async (req: Request, _res: Response, next: NextFunction) => {
        const id = req.params.id
        if (id) {
            await this.service.Delete(id)
            next(new NoContentSuccess(id))
        } else {
            next(new NotFoundException(id))
        }
    }

    protected GetById = async (req: Request, res: Response, next: NextFunction) => {
        const id = req.params.id
        const obj = await this.service.FindOne(id)
        if (obj) {
            next(new OKSuccess(res, obj))
        } else {
            next(new NotFoundException(id))
        }
    }

    protected GetByUsername = async (req: Request, res: Response, next: NextFunction) => {
        const obj = await this.service.FindOne({ where: { username: req.params.username } })
        if (obj) {
            next(new OKSuccess(res, obj))
        } else {
            next(new NotFoundException(req.params.username))
        }
    }
}
export default BaseController
