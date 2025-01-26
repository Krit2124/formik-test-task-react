import * as Yup from "yup";

export const validationMessages = {
  required: "Поле обязательно для заполнения",
  min: "Значение не может быть меньше ${min}",
  max: "Значение не может быть больше ${max}",
};

Yup.setLocale({
  mixed: {
    required: validationMessages.required,
  },
  number: {
    min: validationMessages.min,
    max: validationMessages.max,
  },
});

export default Yup;
