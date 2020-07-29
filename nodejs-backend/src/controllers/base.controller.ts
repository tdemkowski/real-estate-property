import { Router, Request, Response, NextFunction } from 'express'
import NotFoundException from './exceptions/NotFound.exception'
import { BaseEntity } from '../entities/base.entity'
import BaseService from '../services/base.service'
import authMiddleware from '../middlewares/auth.middleware'

class BaseController<T extends BaseEntity, DTO> {
    protected router = Router()

    constructor(protected readonly path: string, protected readonly service: BaseService<T>) {
        this.initializeRoutes()
    }

    protected initializeRoutes() {
        this.router.get(this.path + '/:id', authMiddleware, this.GetById)
        this.router.post(this.path, authMiddleware, this.Create)
        this.router.put(this.path + '/:id', authMiddleware, this.Update)
        this.router.delete(this.path + '/:id', authMiddleware, this.Delete)
        this.router.get(this.path, authMiddleware, this.FetchAll)
    }

    protected FetchAll = async (_req: Request, res: Response, _next: NextFunction) => {
        const findAll = await this.service.FindAll()
        res.send({
            response: findAll,
        })
    }

    protected Create = async (req: Request, res: Response, next: NextFunction) => {
        const body = req.body as DTO
        if (body) {
            const insert = await this.service.Create(body)
            res.send({
                body: insert,
            })
        } else {
            next('ERROR ERROR ERROR') // IMPLEMENT BadRequestException
        }
    }

    protected Update = async (req: Request, res: Response, next: NextFunction) => {
        const body = req.body as DTO
        const userId = req.params.id
        if (body) {
            await this.service.Update(userId, body)
            res.send({
                status: 'Object updated',
            })
        } else {
            next('ERROR ERROR ERROR') // IMPLEMENT BadRequestException
        }
    }

    protected Delete = async (req: Request, res: Response, _next: NextFunction) => {
        await this.service.Delete(req.params.id)
        res.send({
            response: 'Object deleted',
        })
    }

    protected GetById = async (req: Request, res: Response, next: NextFunction) => {
        const obj = await this.service.FindOne(req.params.id)
        if (obj) {
            res.status(200).send(obj)
        } else {
            next(new NotFoundException(req.params.id))
        }
    }
}
export default BaseController
