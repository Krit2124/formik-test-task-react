// eslint-disable-next-line @typescript-eslint/no-unused-vars
import * as Yup from "yup";

declare module "yup" {
  interface NumberSchema {
    moreThanSumOfFields(fields: string[]): this;
  }
}