import * as Yup from "yup";
import { FormikInput, FormikRadio } from "@/shared/ui";
import { Form, Formik } from "formik";
import "@/shared/validationRules";

const validationSchema = Yup.object({
  name: Yup.string().required(),
  address: Yup.string().required(),
  floor: Yup.number().min(-1).max(Yup.ref("totalFloors")).required(),
  totalFloors: Yup.number().min(-3).max(200).required(),
  square: Yup.number()
    .min(0)
    .max(400)
    .moreThanSumOfFields(["livingSquare", "kitchenSquare"])
    .required(),
  livingSquare: Yup.number().min(0).required(),
  kitchenSquare: Yup.number().min(0).required(),
});

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
      }}
      validationSchema={validationSchema}
      onSubmit={(values) => console.log(values)}
    >
      {() => (
        <Form className="w-[600px] flex flex-col gap-1">
          <FormikRadio name="test" options={["1", "2", "3"]} />
          <FormikInput name="name" label="Название объекта" />
          <FormikInput name="address" label="Адрес" />
          <FormikInput name="floor" label="Этаж" type="number" />
          <FormikInput
            name="totalFloors"
            label="Количество этажей"
            type="number"
          />
          <FormikInput name="square" label="Площадь" type="number" />
          <FormikInput
            name="livingSquare"
            label="Жилая площадь"
            type="number"
          />
          <FormikInput
            name="kitchenSquare"
            label="Площадь кухни"
            type="number"
          />
          <button type="submit">Сохранить</button>
        </Form>
      )}
    </Formik>
  );
};

export default CustomForm;
