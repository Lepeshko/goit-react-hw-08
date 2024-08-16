import css from "./HomePage.module.css";

export default function HomePage() {
  return (
    <div className={css.homePage}>
      <h1>Now it will your Contact Manager</h1>
      <p className={css.introText}>
        Accumulate contacts and organize them for yourself
      </p>
    </div>
  );
}
