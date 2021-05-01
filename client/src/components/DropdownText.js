import React from "react";

import { FormControl, MenuItem, InputLabel, Select } from "@material-ui/core";

import { useStyles } from "../styles.js";
import constants from "../utils/constants.js";

/* Presentational component that renders a Control with a dropdown selector 
   value: the current string shown by DropDownText
   selectValue: callback to change the current value
   listValues: a list with all possible values that will be presented on the dropdown
   label: label of the component
*/
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
