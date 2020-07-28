import HttpSuccess from "./http.success";

 class NonAuthoritativeInformation extends HttpSuccess {
  constructor(customMessage?: string) {
    super(203, customMessage || `NonAuthoritativeInformation`);
  }
}
 
export default NonAuthoritativeInformation;