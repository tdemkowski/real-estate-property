import HttpSuccess from './http.success'

class Created extends HttpSuccess {
    constructor(customMessage?: string) {
        super(201, customMessage || `Created`)
    }
}

export default Created
