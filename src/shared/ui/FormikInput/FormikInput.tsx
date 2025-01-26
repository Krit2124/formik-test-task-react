import { Input } from '@chakra-ui/react';
import { useField } from 'formik';
import { FC } from 'react';

type FormikInputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  name: string;
  label: string;
};

const FormikInput: FC<FormikInputProps> = ({ label, ...props }) => {
  const [field, meta] = useField(props.name);

  return (
    <div className='h-[88px] flex flex-col justify-self-start'>
      <label>
        {label}
        <Input {...field} {...props} size="md" />
      </label>
      {meta.touched && meta.error && <span className='text-red-300'>{meta.error}</span>}
    </div>
  );
};

export default FormikInput;