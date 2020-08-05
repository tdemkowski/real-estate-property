import HttpSuccess from './http.success'
import { Response } from 'express'

class CreatedSuccess extends HttpSuccess {
    constructor(res: Response | null, object: any, customMessage?: string) {
        super(201, customMessage || `Created`, res, object)
    }
}

export default CreatedSuccess
