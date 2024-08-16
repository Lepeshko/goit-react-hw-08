import { RegistrationForm } from "../../components/RegisterForm/RegistrationForm";
import css from './RegistrationPage.module.css'



export default function RegistrationPage() {
  return (
    <div className={css.registrationPage}>
      <p className={css.title}>Registration</p>
      <RegistrationForm />
    </div>
  );
}
