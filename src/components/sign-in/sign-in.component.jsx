import React from "react";
import { useState, useContext } from "react";
import "./sign-in.styles.scss";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import {
    signInWithGooglePopup,
    createUserDocumentFromAuth,
    signInUserWithEmailAndPassword,
} from "../../firebase/firebase.utils";

import { UserContext } from "../../contexts/user.context";
const defaultFormFields = {
    email: "",
    password: "",
};
const SignIn = (props) => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { email, password } = formFields;

    const { setCurrentUser } = useContext(UserContext);

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const { user } = await signInUserWithEmailAndPassword(
                email,
                password
            );
            setCurrentUser(user);
            resetFormFields();
        } catch (error) {
            switch (error.code) {
                case "auth/wrong-password":
                    alert("incorrect password");
                    break;
                case "auth/user-not-found":
                    alert("no user associated with this email");
                    break;
                default:
                    console.log(error);
            }
        }
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormFields({ ...formFields, [name]: value });
    };

    const logGoogleUser = async () => {
        const { user } = await signInWithGooglePopup();
        setCurrentUser(user);
        const userDocRef = await createUserDocumentFromAuth(user);
    };
    return (
        <div className="sign-in">
            <h2>I already have an account</h2>
            <span>Sign in with your email and password</span>

            <form onSubmit={handleSubmit}>
                <FormInput
                    name="email"
                    type="email"
                    label="email"
                    value={email}
                    onChange={handleChange}
                    required
                />
                <FormInput
                    name="password"
                    type="password"
                    label="password"
                    value={password}
                    onChange={handleChange}
                    required
                />
                <div className="buttons-container">
                    <CustomButton type="submit">Sign In</CustomButton>
                    <CustomButton
                        type="button"
                        onClick={logGoogleUser}
                        isGoogleSignIn
                    >
                        google sign in
                    </CustomButton>
                </div>
            </form>
        </div>
    );
};

export default SignIn;
