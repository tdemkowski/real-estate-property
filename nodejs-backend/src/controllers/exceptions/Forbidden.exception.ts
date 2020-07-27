import HttpException from "./http.exception";

 class ForbiddenException extends HttpException {
  constructor(customMessage?: string) {
    super(403, customMessage || `Forbidden`);
  }
}
 
export default ForbiddenException;