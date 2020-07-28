import HttpSuccess from './http.success'

class NoContent extends HttpSuccess {
    constructor(customMessage?: string) {
        super(202, customMessage || `NoContent`)
    }
}

export default NoContent
