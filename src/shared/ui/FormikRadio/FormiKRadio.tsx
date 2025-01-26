import { useField } from 'formik';
import { Radio, RadioGroup } from '../index';

const FormikRadio = ({ name, options }: { name: string; options: string[] }) => {
  const [field, meta] = useField(name);

  return (
    <div className='h-[88px] flex flex-col'>
      <RadioGroup {...field} className='flex gap-2'>
        {name}
        {options.map((option) => (
          <Radio key={option} value={option} className='cursor-pointer'>
            {option}
          </Radio>
        ))}
      </RadioGroup>
      {meta.touched && meta.error && <span className='text-red-300'>{meta.error}</span>}
      </div>
  );
};

export default FormikRadio;