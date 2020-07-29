import HttpException from './http.exception'

class BadRequest extends HttpException {
    constructor(customMessage?: string) {
        super(400, customMessage || `Bad Request`)
    }
}

export default BadRequest
