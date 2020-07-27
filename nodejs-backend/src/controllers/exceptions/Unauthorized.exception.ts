import HttpException from "./http.exception";

 class UnauthorizedException extends HttpException {
  constructor(customMessage?: string) {
    super(401, customMessage || `Unauthorized`);
  }
}
 
export default UnauthorizedException;