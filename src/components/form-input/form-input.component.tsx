import { Group, Input, FormInputLabel } from "./form-input.styles";
import { FC } from "react";

type FormInputProps = {
  label?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

const FormInput: FC<FormInputProps> = ({ label, ...otherProps }) => {
  return (
    <Group>
      <Input {...otherProps} />
      {label ? (
        <FormInputLabel shrink={otherProps.value ? true : false}>
          {label}
        </FormInputLabel>
      ) : null}
    </Group>
  );
};

export default FormInput;
