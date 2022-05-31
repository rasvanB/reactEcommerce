import React from "react";
import {
  ButtonContainer,
  InvertedButton,
  GoogleButton,
  ButtonSpinner,
} from "./custom-button.styles.jsx";
const CustomButton = ({
  children,
  isGoogleSignIn,
  isInverted,
  isLoading,
  ...otherProps
}) => {
  let button = (
    <ButtonContainer disabled={isLoading} {...otherProps}>
      {isLoading ? <ButtonSpinner /> : children}
    </ButtonContainer>
  );
  if (isGoogleSignIn) {
    button = (
      <GoogleButton disabled={isLoading} {...otherProps}>
        {isLoading ? <ButtonSpinner /> : children}
      </GoogleButton>
    );
  } else if (isInverted) {
    button = (
      <InvertedButton disabled={isLoading} {...otherProps}>
        {isLoading ? <ButtonSpinner /> : children}
      </InvertedButton>
    );
  }
  return <>{button}</>;
};

export default CustomButton;
