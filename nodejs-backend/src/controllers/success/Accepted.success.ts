import HttpSuccess from './http.success'

class Accepted extends HttpSuccess {
    constructor(customMessage?: string) {
        super(202, customMessage || `Accepted`)
    }
}

export default Accepted
