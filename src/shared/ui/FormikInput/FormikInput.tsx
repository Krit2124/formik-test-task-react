import { Input, InputProps } from "@chakra-ui/react";
import { withFormikField } from "@/shared/hocs";
import { FC } from "react";

type FormikInputProps = InputProps & {
  label: string;
};

const FormikInputComponent: FC<FormikInputProps> = ({ label, ...props }) => (
  <label>
    {label}
    <Input {...props} size="md" />
  </label>
);

const FormikInput = withFormikField<FormikInputProps>(FormikInputComponent);

export default FormikInput;