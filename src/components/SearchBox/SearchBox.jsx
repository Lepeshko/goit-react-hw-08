import { useDispatch, useSelector } from "react-redux";
import { changeFilter } from "../../redux/filters/slice";

import css from "./SearchBox.module.css";
import { selectNameFilter } from "../../redux/filters/selectors";
import { TextField } from "@mui/material";

export default function SearchBox() {
  const value = useSelector(selectNameFilter);
  const dispatch = useDispatch();

  return (
    <div className={css.container}>
      <p className={css.text}>Find contact by name or phone number</p>
      <TextField
        className={css.input}
        label="Search"
        value={value}
        onChange={(e) => dispatch(changeFilter(e.target.value))}
        variant="outlined"
        fullWidth
      />
    </div>
  );
}
