import { Response } from 'express'

class HttpSuccess {
    status: number
    message: string
    res: Response | null
    object: any
    constructor(status: number, message: string, res: Response | null, object: any) {
        this.status = status
        this.message = message
        this.res = res
        if (this.res) {
            this.res.send(object)
        }
    }
}

export default HttpSuccess
