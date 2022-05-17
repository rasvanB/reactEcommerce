import React from "react";
import { ButtonContainer, InvertedButton, GoogleButton } from "./custom-button.styles";
const CustomButton = ({ children, isGoogleSignIn, isInverted, ...otherProps }) => {
  let button = <ButtonContainer {...otherProps}> {children} </ButtonContainer>;
  if (isGoogleSignIn) {
    button = <GoogleButton {...otherProps}> {children} </GoogleButton>;
  } else if (isInverted) {
    button = <InvertedButton {...otherProps}> {children} </InvertedButton>;
  }
  return <>{button}</>;
};

export default CustomButton;
