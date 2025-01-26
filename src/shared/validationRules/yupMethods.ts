import { addMethod, number } from 'yup';

addMethod(number, "moreThanSumOfFields", function (fields: string[]) {
  return this.test(
    "more-than-sum",
    "Общая площадь должна быть больше суммы жилой площади и площади кухни",
    function (value) {
      const { parent } = this;
      const sum = fields.reduce((acc, field) => acc + (parent[field] || 0), 0);
      return value ? value > sum : true;
    }
  );
});

console.log("Custom Yup method loaded");