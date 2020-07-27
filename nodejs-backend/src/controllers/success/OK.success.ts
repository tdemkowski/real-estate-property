import HttpSuccess from "./http.success";

 class OK extends HttpSuccess {
  constructor(customMessage?: string) {
    super(200, customMessage || `OK`);
  }
}
 
export default OK;