declare module "string-to-color" {
  import stc from "string-to-color";

  export default stc as (str: string) => string;
}
