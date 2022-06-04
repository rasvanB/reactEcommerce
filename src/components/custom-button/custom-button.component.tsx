import {
  ButtonContainer,
  InvertedButton,
  GoogleButton,
  ButtonSpinner,
} from "./custom-button.styles";
import { FC } from "react";

export type ButtonProps = {
  children: React.ReactNode;
  isGoogleSignIn?: boolean;
  isLoading?: boolean;
  isInverted?: boolean;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const CustomButton: FC<ButtonProps> = ({
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
