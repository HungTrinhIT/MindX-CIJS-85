import { useFormik } from "formik";
import * as yup from "yup";
import MovieCard from "@components/MovieCard/MovieCard";

import "./SignupPage.css";

const signupFormValidationScheme = yup.object().shape({
  fullname: yup.string().required("Fullname is required"),
  email: yup
    .string()
    .email("Email does not valid format")
    .required("Email is required"),
  password: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

const SignupPage = () => {
  const formik = useFormik({
    initialValues: {
      fullname: "",
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      console.log("Submit values:", values);
      // Call API to create new account
      // Logic code ...
      alert("Signup successfully");
      resetForm({
        fullname: "",
        email: "",
        password: "",
      });
    },
    validationSchema: signupFormValidationScheme,
  });

  const { handleSubmit, values, handleChange, errors, resetForm } = formik;

  return (
    <div className="signup-wrapper">
      <MovieCard />
      <form className="signup-form-container" onSubmit={handleSubmit}>
        <h2>Create an account</h2>
        <div className="form-control">
          <label htmlFor="fullname">Fullname</label>
          <input
            id="fullname"
            name="fullname"
            value={values.fullname}
            onChange={handleChange}
          />
          {errors.fullname && (
            <p className="error-message">{errors.fullname}</p>
          )}
        </div>
        <div className="form-control">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            value={values.email}
            onChange={handleChange}
          />
          {errors.email && <p className="error-message">{errors.email}</p>}
        </div>
        <div className="form-control">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            name="password"
            value={values.password}
            onChange={handleChange}
          />
          {errors.password && (
            <p className="error-message">{errors.password}</p>
          )}
        </div>
        <button className="btn-submit">Submit</button>
      </form>
    </div>
  );
};

export default SignupPage;
