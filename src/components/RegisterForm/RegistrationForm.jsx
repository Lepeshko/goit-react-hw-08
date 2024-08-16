import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import css from "./RegistrationForm.module.css";

const validationSchema = Yup.object().shape({
  name: Yup.string().required("Username is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .required("Password is required"),
});

export const RegistrationForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(register(values));
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        password: "",
      }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <Form className={css.registerForm} autoComplete="off">
          <label className={css.registerLabel}>
            Username
            <Field type="text" name="name" className={css.registerInput} />
            <ErrorMessage
              name="name"
              component="div"
              className={css.registerError}
            />
          </label>
          <label className={css.registerLabel}>
            Email
            <Field type="email" name="email" className={css.registerInput} />
            <ErrorMessage
              name="email"
              component="div"
              className={css.registerError}
            />
          </label>
          <label className={css.registerLabel}>
            Password
            <Field
              type="password"
              name="password"
              className={css.registerInput}
            />
            <ErrorMessage
              name="password"
              component="div"
              className={css.registerError}
            />
          </label>
          <button
            type="submit"
            disabled={isSubmitting}
            className={`${css.registerButton} ${
              isSubmitting ? css.registerButtonDisabled : ""
            }`}
          >
            Register
          </button>
        </Form>
      )}
    </Formik>
  );
};
