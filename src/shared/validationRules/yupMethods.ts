import { addMethod, number } from "yup";

addMethod(
  number,
  "moreThanSumOfFields",
  function (fields: string[], message: string) {
    return this.test("more-than-sum", message, function (value) {
      const { parent } = this;
      const sum = fields.reduce((acc, field) => acc + (parent[field] || 0), 0);
      return value !== undefined ? value > sum : false;
    });
  }
);
