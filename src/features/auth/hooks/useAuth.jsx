import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { currentLoggedInEmployee, loginEmployee } from "../state/auth/authAction";
export let useAuth = () => {

    let dispatch = useDispatch();
    const [showPassword, setShowPassword] = React.useState(false);
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm({
        mode: "onTouched",
        defaultValues: {
            email: "",
            password: "",
            rememberMe: false,
        },
    });

    const onRegisterSubmit = async (data) => {
        // Connect your login API here.
        console.log("Register data:", data);
        alert(`Welcome, ${data.fullName}! Form validated successfully.`);
    };

    const onLoginSubmit = async (data) => {
        try {
            const result = await dispatch(loginEmployee(data)).unwrap();
            console.log(result);

            // Login succeeded; fetch the current employee.
            const employee = await dispatch(
                currentLoggedInEmployee()
            ).unwrap();

            console.log("Logged-in employee:", employee);

            navigate("/home");
        } catch (error) {
            console.error("Login or current-user request failed:", error);
        }
    };

    return {
        register,
        handleSubmit,
        errors,
        isSubmitting,
        onRegisterSubmit,
        onLoginSubmit,
        navigate,
        setShowPassword,
        showPassword,

    }
}