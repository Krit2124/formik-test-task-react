import { withFormikField } from '@/shared/hocs';
import { Checkbox, CheckboxProps } from '../Chakra/checkbox';
import { Box } from '@chakra-ui/react';
import { FC } from 'react';

type FormikCheckBoxProps = CheckboxProps & {
  label: string;
};

const FormikCheckBoxComponent: FC<FormikCheckBoxProps> = ({ label, ...props }) => (
  <Box className='w-[260px] flex justify-end'>
    <Checkbox {...props}>{label}</Checkbox>
  </Box>
);

const FormikCheckBox = withFormikField<FormikCheckBoxProps>(FormikCheckBoxComponent);

export default FormikCheckBox;