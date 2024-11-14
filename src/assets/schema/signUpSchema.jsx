import * as yup from "yup";

export const signUpSchema = yup.object().shape({
    fullname: yup.string().required(" must be filled!"),
    email: yup
    .string()
    .email("please enter your email address")
    .required("must be filled!"),
    username: yup.string().required(" must be filled!"),
    password: yup.string().required(" must be filled!"),
    repeatPassword: yup
    .string()
    .required("must be filled!!")
    .oneOf (
        [yup.ref("password"),yup.password],
        "enter your password correctly !"
    ),
    term: yup.boolean().required("please confirm the terms"),
});