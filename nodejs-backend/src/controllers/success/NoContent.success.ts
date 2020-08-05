import HttpSuccess from './http.success'

class NoContentSuccess extends HttpSuccess {
    constructor(customMessage?: string) {
        super(204, customMessage || `NoContent`, null, null)
    }
}

export default NoContentSuccess
