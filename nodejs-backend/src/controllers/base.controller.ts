import { Router, Request, Response, NextFunction } from 'express';
import NotFoundException from './exceptions/NotFound.exception';
import { BaseEntity } from '../entities/base.entity';
import { IBaseService } from '../models/IBaseService.model';

class BaseController<T extends BaseEntity, DTO> {
    protected router = Router();

    constructor(protected readonly path: string, protected readonly service: IBaseService<T>) {
        this.initializeRoutes();
    }

    protected initializeRoutes() {
        this.router.get(this.path + '/:id', this.GetById);
        this.router.post(this.path, this.Create);
    }

    
    protected Create = async (req: Request, res: Response, next: NextFunction) => {
        const body = req.body as DTO;
        if(body) {
            const insert = await this.service.Create(body);
            res.send({body: insert});
        } else {
            next("ERROR ERROR ERROR"); // IMPLEMENT BadRequestException
         }
    }

    protected GetById = async (req: Request, res: Response, next: NextFunction) => {
        const obj = await this.service.FindOne(req.params.id);
        if (obj) {
            res.status(200).send(obj);
        } else {
           next(new NotFoundException(req.params.id));
        }
    }

}
export default BaseController;
