import { ChangeEvent, FC } from "react";
import { Radio, RadioGroup } from "../index";
import {withFormikField} from "@/shared/hocs";

type FormikRadioProps = {
  label: string;
  name: string;
  options: string[];
  value?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
};

const FormikRadioComponent: FC<FormikRadioProps> = ({ label, options, value, onChange, ...props }) => (
  <div>
    <label>{label}</label>
    <RadioGroup {...props} value={value} onChange={onChange} className="flex gap-3">
      {options.map((option) => (
        <Radio key={option} value={option} className="cursor-pointer">
          {option}
        </Radio>
      ))}
    </RadioGroup>
  </div>
);

const FormikRadio = withFormikField<FormikRadioProps>(FormikRadioComponent);

export default FormikRadio;
