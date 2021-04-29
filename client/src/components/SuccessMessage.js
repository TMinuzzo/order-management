import React from "react";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

import constants from "../utils/constants";

import { useStyles } from "../styles.js";

export default function SuccessMessage({ handleClickButton }) {
  const classes = useStyles({});

  return (
    <React.Fragment>
      <Typography
        component="h6"
        variant="body1"
        align="center"
        //className={classes.textField}
      >
        {constants.TextStrings.SuccessMessage}
      </Typography>
      <Button
        variant="contained"
        color="primary"
        className={classes.button}
        onClick={handleClickButton}
      >
        Adicionar outro Produto
      </Button>
    </React.Fragment>
  );
}
