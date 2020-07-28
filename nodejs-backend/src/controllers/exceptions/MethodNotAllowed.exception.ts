import HttpException from './http.exception'

class MethodNotAllowedException extends HttpException {
    constructor(customMessage?: string) {
        super(405, customMessage || `Method is not allowed`)
    }
}

export default MethodNotAllowedException
