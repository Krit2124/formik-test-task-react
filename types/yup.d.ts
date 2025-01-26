// eslint-disable-next-line @typescript-eslint/no-unused-vars
import * as Yup from "yup";

declare module "yup" {
  interface NumberSchema {
    /**
     *
     * @description
     * Метод для проверки, что значение больше суммы значений других полей
     */
    moreThanSumOfFields(fields: string[], message: string): this;
  }
}
