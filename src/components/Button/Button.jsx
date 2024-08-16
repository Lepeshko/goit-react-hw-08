import clsx from "clsx";
import css from "./Button.module.css";

export default function Button({
  selected = false,
  type = "button",
  children,
  ...otherProps
}) {
  return (
    <button
      className={clsx(css.btn, {
        [css.isSelected]: selected,
      })}
      type={type}
      {...otherProps}
    >
      {children}
    </button>
  );
}
