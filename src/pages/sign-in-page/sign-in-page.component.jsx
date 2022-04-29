import React from "react";
import SignIn from "../../components/sign-in/sign-in.component";
import SignUp from "../../components/sign-up/sign-up.component";
import "./sign-in-page.styles.scss";

const SignInPage = () => {
    return (
        <div className="authentication-container">
            <SignIn></SignIn>
            <SignUp></SignUp>
        </div>
    );
};

export default SignInPage;
