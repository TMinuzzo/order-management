import React from "react";

import { FormControl, MenuItem, InputLabel, Select } from "@material-ui/core";

import { useStyles } from "../styles.js";
import constants from "../utils/constants.js";

export default function DropDownText({
  value,
  selectValue,
  listValues,
  label,
}) {
  const classes = useStyles({});

  return (
    <FormControl className={classes.textField}>
      <InputLabel id="demo-simple-select-label">{label}</InputLabel>
      <Select
        id="select-form"
        value={value}
        onChange={(e) => selectValue(e.target.value)}
      >
        {listValues.map((option) => (
          <MenuItem key={option.name} value={option.name}>
            {option.name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
