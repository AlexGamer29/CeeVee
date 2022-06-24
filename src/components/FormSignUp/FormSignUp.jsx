import React from "react";
import { useForm } from "react-hook-form";
// import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'
import "./FormSignUp.css";



const schema = Yup.object().shape({
    // fullname: Yup.string()
    //     .required('Fullname is required')
    //     .min(3, 'Fullname must be at least 3 characters')
    //     .max(50, 'Fullname must be less than 50 characters'),
    email: Yup.string()
        .email('Invalid email')
        .required('Email is required'),
    password: Yup.string()
        .required('Password is required'),
})

export const FormSignUp = () => {
    const { register, handleSubmit, reset, formState: { errors, isSubmitSuccessful } } = useForm(
        // {
        //     defaultValues: {
        //         fullname: "",
        //         email: "",
        //         usePlatform: "",
        //         primaryResidence: "",
        //         language: "",
        //         pasword: "",
        //         detailDescription: "",
        //     }
        // }
    );

    const onSubmit = (data) => {
        console.log(data);
        reset()
    }

    return (
        <form className="formContact" id="formContainer" onSubmit={handleSubmit(onSubmit)}>
            <div className="title-1 formContact">Welcome back!</div>
            <h1 className="main-title formContact">Log In to your account</h1>
            <div className="formContact txt-input">
                <input type="text" name="email" placeholder="Enter email" {...register("email", {
                    required: true,
                    pattern: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
                })}
                />
                {errors?.email?.type === "required" && <span>This field is required</span>}
                {errors?.email?.type === "pattern" && (<span>Use a valid email address</span>)}
            </div>

            <div className="formContact txt-input">
                <input type="password" name="pasword" placeholder="Enter password" {...register("pasword", {
                    required: true,
                    minLength: 8,
                    maxLength: 100,
                })}
                />
                {errors?.pasword?.type === "required" && <span>This field is required</span>}
                {errors?.pasword?.type === "minLength" && (
                    <span>Password must be at least 8 characters</span>
                )}
                {errors?.pasword?.type === "maxLength" && (
                    <span>Password exceed 100 characters</span>
                )}
            </div>

            <button className="formContact" type="submit" id="btn-submit">Sign Up</button>

        </form>
    );
}