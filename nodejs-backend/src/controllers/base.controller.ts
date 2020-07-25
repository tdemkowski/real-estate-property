import { Router, Request, Response, NextFunction } from 'express';
import UserService from '../services/user.service';
import NotFoundException from './exceptions/NotFound.exception';
import { BaseEntity } from '../entities/base.entity';
import { IBaseService } from '../services/base.service';

class BaseController<T extends BaseEntity, DTO> {
    private router = Router();

    constructor(private readonly path: string, private readonly service: IBaseService<T>) {
        this.initializeRoutes();
    }

    private initializeRoutes() {
        this.router.get(this.path + '/:id', this.GetById);
        this.router.post(this.path, this.Create);
    }

    
    Create = async (req: Request, res: Response, next: NextFunction) => {
        const body = req.body as DTO;
        console.log(body);
        if(body) {
            const insert = await this.service.Create(body);
            res.send({body: insert});
        } else {
            next("ERROR ERROR ERROR"); // IMPLEMENT BadRequestException
         }
    }

    GetById = async (req: Request, res: Response, next: NextFunction) => {
        const obj = await this.service.FindOne(req.params.id);
        if (obj) {
            res.status(200).send(obj);
        } else {
           next(new NotFoundException(req.params.id));
        }
    }

}
export default BaseController;
