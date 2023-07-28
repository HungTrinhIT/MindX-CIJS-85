import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import FieldTextInput from "@components/FieldTextInput/FieldTextInput";

const loginFormValidationSchema = yup.object().shape({
  username: yup.string().required("Username is required"),
  password: yup
    .string()
    .required("Password is required")
    .min(6, "Password must be at least 6 characters "),
});

const LoginPage = () => {
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    onSubmit: (values) => {
      console.log("🚀 ~ file: LoginPage.js:11 ~ LoginPage ~ values:", values);
    },
    validationSchema: loginFormValidationSchema,
  });

  const { values, handleSubmit, errors, handleChange } = formik;
  console.log("🚀 ~ file: LoginPage.js:26 ~ LoginPage ~ errors:", errors);

  return (
    <div>
      <FieldTextInput />
      <form onSubmit={handleSubmit}>
        <div className="field">
          <label htmlFor="username">Username</label>
          <input
            id="username"
            name="username"
            value={values.username}
            onChange={handleChange}
          />
          {errors.username && <p style={{ color: "red" }}>{errors.username}</p>}
        </div>
        <div className="field">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            name="password"
            value={values.password}
            onChange={handleChange}
          />
          {errors.password && <p style={{ color: "red" }}>{errors.password}</p>}
        </div>
        <button>Login</button>
      </form>
    </div>
  );
};

export default LoginPage;
