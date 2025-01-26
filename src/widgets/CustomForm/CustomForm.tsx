import * as Yup from "yup";
import { FormikInput, FormikRadio, FormikCheckBox } from "@/shared/ui";
import { Form, Formik } from "formik";
import { Button } from "@chakra-ui/react";
import { showFieldsData } from "@/shared/lib";

// Импортируем методы yup, чтобы работал moreThanSumOfFields
import "@/shared/validationRules";

const validationSchema = Yup.object({
  name: Yup.string().required(),
  address: Yup.string().required(),
  floor: Yup.number().min(-1).max(Yup.ref("totalFloors")).required(),
  // В задании написано: "Мин. -3.", что странно, поэтому я поставил минимум 3, полагая, что это опечатка
  totalFloors: Yup.number().min(3).max(200).required(),
  square: Yup.number()
    .min(0)
    .max(400)
    .moreThanSumOfFields(
      ["livingSquare", "kitchenSquare"],
      "Общая площадь должна быть больше суммы жилой площади и площади кухни"
    )
    .required(),
  livingSquare: Yup.number().min(0).required(),
  kitchenSquare: Yup.number().min(0).required(),
  agree: Yup.boolean().oneOf([true], "Необходимо согласие с условиями"),
});

// Конфигурация полей формы
const fields = [
  { name: "name", label: "Название объекта", type: "text" },
  { name: "address", label: "Адрес", type: "text" },
  { name: "floor", label: "Этаж", type: "number" },
  { name: "totalFloors", label: "Количество этажей", type: "number" },
  { name: "square", label: "Площадь", type: "number" },
  { name: "livingSquare", label: "Жилая площадь", type: "number" },
  { name: "kitchenSquare", label: "Площадь кухни", type: "number" },
];

// Функция для отображения полей формы
const renderFields = () =>
  fields.map((field) => (
    <FormikInput
      key={field.name}
      name={field.name}
      label={field.label}
      type={field.type}
    />
  ));

const CustomForm = () => {
  return (
    <Formik
      initialValues={{
        name: "",
        address: "",
        floor: 0,
        totalFloors: 1,
        square: 0,
        livingSquare: 0,
        kitchenSquare: 0,
        agree: false,
      }}
      validationSchema={validationSchema}
      onSubmit={(values) => showFieldsData(values)}
    >
      {({ isValid }) => (
        <Form className="w-[600px] flex flex-col gap-1">
          {renderFields()}
          <div className="flex justify-between ">
            <FormikRadio
              name="justNumber"
              label="Выберите любое число"
              options={["1", "2", "3"]}
            />
            <FormikCheckBox name="agree" label="Согласен с условиями" />
          </div>

          <Button type="submit" disabled={!isValid}>
            Сохранить
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default CustomForm;
