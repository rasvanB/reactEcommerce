import React from "react";
import "./custom-button.styles.scss";

const CustomButton = ({
  children,
  isGoogleSignIn,
  isInverted,
  ...otherProps
}) => {
  return (
    <button
      className={`${isGoogleSignIn ? "google-sign-in" : ""} ${
        isInverted ? "inverted" : ""
      } button-container`}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default CustomButton;
