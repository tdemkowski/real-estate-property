import HttpException from './http.exception'

class NotFoundException extends HttpException {
    constructor(id: string, customMessage?: string) {
        super(404, customMessage || `Entity with id ${id} not found`)
    }
}

export default NotFoundException
