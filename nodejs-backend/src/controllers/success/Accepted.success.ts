import HttpSuccess from './http.success'

class AcceptedSuccess extends HttpSuccess {
    constructor(customMessage?: string) {
        super(202, customMessage || `Accepted`, null, null)
    }
}

export default AcceptedSuccess
