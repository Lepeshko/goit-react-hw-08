import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { addContact, fetchContacts } from "../../redux/contacts/operations";
import css from "./ContactForm.module.css";
import Button from "../Button/Button";
import toast from "react-hot-toast";

const FeedbackSchema = Yup.object().shape({
  name: Yup.string()
    .matches(
      /^(?!.*\.\.)(?!\с)(?!.*\с$)[A-Za-z. ]+$/,
      "Name must contain only letters"
    )
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  number: Yup.string()
    .matches(/^[0-9-]+$/, "Phone number must contain only digits and hyphens")
    .min(3, "Too short!")
    .max(50, "Too long!")
    .required("Required"),
});

const ContactForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    dispatch(addContact(values))
      .then(() => {
        toast.success("Contact added successfully");
        dispatch(fetchContacts());
      })
      .catch(() => toast.error("Failed to add contact"));
    resetForm();
  };

  return (
    <Formik
      initialValues={{ name: "", number: "" }}
      validationSchema={FeedbackSchema}
      onSubmit={handleSubmit}
    >
      <Form className={css.container}>
        <div className={css.containerItem}>
          <div className={css.fieldContainer}>
            <label>Name</label>
            <Field className={css.input} name="name" type="text" />
            <div className={css.errorMessage}>
              <ErrorMessage name="name" component="div" />
            </div>
          </div>
          <div className={css.fieldContainer}>
            <label>Number</label>
            <Field className={css.input} name="number" type="text" />
            <div className={css.errorMessage}>
              <ErrorMessage name="number" component="div" />
            </div>
          </div>
        </div>
        <div className={css.buttonContainer}>
          <Button className={css.button} type="submit">
            Add contact
          </Button>
        </div>
      </Form>
    </Formik>
  );
};

export default ContactForm;
