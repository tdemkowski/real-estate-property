import HttpException from './http.exception'

class InternalServerError extends HttpException {
    constructor(customMessage?: string) {
        super(500, customMessage || `Internal Server Error`)
    }
}

export default InternalServerError
