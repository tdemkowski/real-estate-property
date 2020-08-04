import HttpSuccess from './http.success'
import { Response } from 'express'

class OKSuccess extends HttpSuccess {
    constructor(res: Response | null, object: any, customMessage?: string) {
        super(200, customMessage || `OK`, res, object)
    }
}

export default OKSuccess
