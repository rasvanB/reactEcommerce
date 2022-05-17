import React from "react";
import { Group, Input, FormInputLabel } from "./form-input.styles";

const FormInput = ({ label, ...otherProps }) => {
  return (
    <Group>
      <Input {...otherProps} />
      {label ? <FormInputLabel shrink={otherProps.value ? true : false}>{label}</FormInputLabel> : null}
    </Group>
  );
};

export default FormInput;
