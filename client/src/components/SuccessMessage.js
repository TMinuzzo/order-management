import React from "react";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";

import constants from "../utils/constants";

import { useStyles } from "../styles.js";

export default function SuccessMessage({ handleClickButton }) {
  const classes = useStyles({});

  return (
    <Grid container direction="column" alignItems="center">
      <Typography component="h6" variant="body1" align="center">
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
    </Grid>
  );
}
