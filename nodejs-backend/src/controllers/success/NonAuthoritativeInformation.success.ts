import HttpSuccess from './http.success'

class NonAuthoritativeInformationSuccess extends HttpSuccess {
    constructor(customMessage?: string) {
        super(203, customMessage || `NonAuthoritativeInformation`, null, null)
    }
}

export default NonAuthoritativeInformationSuccess
