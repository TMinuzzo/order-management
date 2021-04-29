import React from "react";

import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import InputAdornment from "@material-ui/core/InputAdornment";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

import constants from "../utils/constants";
import DropDownText from "./DropdownText.js";

import { useStyles } from "../styles.js";

import priceValidator from "../services/priceValidator";
import amountValidator from "../services/amountValidator";
import computeProfitability from "../services/profitability";

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
  handleClickButton,
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

          <TextField
            className={classes.textField}
            label="Preço"
            id="standard-adornment-amount"
            value={product.price}
            onChange={handleChangePrice}
            error={priceValidator(product.price) ? false : true}
            helperText={priceValidator(product.price) ? "" : "Preço Inválido"}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">$</InputAdornment>
              ),
            }}
          />

          <TextField
            className={classes.textField}
            id="text-amount"
            label="Quantidade"
            value={amount}
            error={amountValidator(product, amount) ? false : true}
            helperText={
              amountValidator(product, amount) ? "" : "Quantidade Inválida"
            }
            onChange={handleChangeAmount}
          ></TextField>

          <Typography
            component="h6"
            variant="body1"
            align="left"
            className={classes.textField}
          >
            Rentabilidade {computeProfitability(product.price, product.price)}
          </Typography>

          <Button
            variant="contained"
            color="primary"
            //disabled={handleEnableButton}
            className={classes.button}
            onClick={handleClickButton}
          >
            Inserir Produto
          </Button>
        </div>
      ) : null}
    </React.Fragment>
  );
}
