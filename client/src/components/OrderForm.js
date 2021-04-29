import React from "react";

import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import TextField from "@material-ui/core/TextField";
import Input from "@material-ui/core/Input";
import Button from "@material-ui/core/Button";

import { useStyles } from "../styles.js";

import constants from "../utils/constants";
import DropDownText from "./DropdownText.js";

export default function OrderForm({
  customer,
  handleChangeCustomer,
  customers,
  product,
  handleChangeProduct,
  products,
  handleChangePrice,
  amount,
  handleChangeAmount,
}) {
  const classes = useStyles({});

  return (
    <React.Fragment>
      <Typography component="h6" variant="h4" align="left">
        Clientes
      </Typography>
      <Grid item xs={12}>
        <DropDownText
          value={customer}
          selectValue={handleChangeCustomer}
          label={constants.CustomerMessage}
          listValues={customers}
        />
      </Grid>
      {customer !== "" ? (
        <div>
          <Grid item xs={12}>
            <DropDownText
              value={product.name}
              selectValue={handleChangeProduct}
              label={constants.ProductMessage}
              listValues={products}
            />
          </Grid>

          <FormControl className={classes.textField}>
            <InputLabel htmlFor="standard-adornment-amount">Preço</InputLabel>
            <Input
              id="standard-adornment-amount"
              value={product.price}
              onChange={handleChangePrice}
              startAdornment={
                <InputAdornment position="start">$</InputAdornment>
              }
            />
          </FormControl>

          <TextField
            className={classes.textField}
            id="text-amount"
            label={constants.Amount}
            value={amount}
            onChange={handleChangeAmount}
          ></TextField>

          <Typography
            component="h6"
            variant="body1"
            align="center"
            className={classes.button}
          >
            SEU PEDIDO FOI ...
          </Typography>
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
          >
            Criar Pedido
          </Button>
        </div>
      ) : null}
    </React.Fragment>
  );
}
