import React from "react";

import TextField from "@material-ui/core/TextField";

import { useStyles } from "../styles.js";

export default function DropDownText({
  value,
  selectValue,
  listValues,
  label,
}) {
  const classes = useStyles({});

  return (
    <TextField
      className={classes.textField}
      id="text-box-dropdown"
      select
      label={label}
      value={value}
      onChange={(e) => selectValue(e.target.value)}
      SelectProps={{
        native: true,
      }}
    >
      {listValues.map((option) => (
        <option key={option.name} value={option.name}>
          {option.name}
        </option>
      ))}
    </TextField>
  );
}
