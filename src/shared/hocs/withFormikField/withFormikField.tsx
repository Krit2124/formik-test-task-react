import { useField } from "formik";
import { ComponentType, FC } from "react";

type WithFormikFieldProps = {
  name: string;
  label: string;
};

function withFormikField<P>(
  Component: ComponentType<P>
): FC<P & WithFormikFieldProps> {
  return ({ name, ...props }) => {
    const [field, meta] = useField(name);

    return (
      <div className="h-[88px] flex flex-col">
        <Component {...(props as P)} {...field} />
        {meta.touched && meta.error && (
          <span className="text-red-300">{meta.error}</span>
        )}
      </div>
    );
  };
}

export default withFormikField;
