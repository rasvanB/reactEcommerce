import React from "react";
import { useState, useContext } from "react";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import {
    createAuthUserWithEmailAndPassword,
    createUserDocumentFromAuth,
} from "../../firebase/firebase.utils";
import { UserContext } from "../../contexts/user.context";
const defaultFormFields = {
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
};

const SignUp = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { displayName, email, password, confirmPassword } = formFields;

    const { setCurrentUser } = useContext(UserContext);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormFields({ ...formFields, [name]: value });
    };

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (password === confirmPassword) {
            try {
                const response = await createAuthUserWithEmailAndPassword(
                    email,
                    password
                );
                setCurrentUser(response.user);
                const userDocRef = createUserDocumentFromAuth(response.user, {
                    displayName,
                });
                resetFormFields();
            } catch (error) {
                if (error.code === "auth/email-already-in-use") {
                    alert("Cannot create user, email already in use");
                }
            }
        }
    };
    return (
        <div className="sign-up-container">
            <h2>Don't have an account?</h2>
            <span>Sign up with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput
                    name="displayName"
                    type="texts"
                    label="display name"
                    onChange={handleChange}
                    value={displayName}
                    required
                ></FormInput>
                <FormInput
                    name="email"
                    type="email"
                    label="email"
                    onChange={handleChange}
                    value={email}
                    required
                ></FormInput>
                <FormInput
                    name="password"
                    type="password"
                    label="password"
                    value={password}
                    onChange={handleChange}
                    required
                ></FormInput>
                <FormInput
                    name="confirmPassword"
                    type="password"
                    label="confirm password"
                    value={confirmPassword}
                    onChange={handleChange}
                    required
                ></FormInput>
                <CustomButton type="submit">Sign up</CustomButton>
            </form>
        </div>
    );
};

export default SignUp;
