import { NextFunction, Response } from 'express'
import * as jwt from 'jsonwebtoken'
import UnauthorizedException from '../controllers/exceptions/Unauthorized.exception'

function authMiddleware(request: any, _response: Response, next: NextFunction) {
    const token = request.get('Authorization').replace('Bearer ', '');
    let decoded
    
    if (token) {
        try {
            decoded = jwt.verify(token, 'superdupersecretsecret')
        } catch (err) {
            next(new UnauthorizedException(err))
        }
    }

    if (!decoded) {
        next(new UnauthorizedException('Not authenticated'))
    } else {
        request.userId = decoded.id
        next()
    }
}

export default authMiddleware
