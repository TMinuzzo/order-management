import React from "react";

import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import InputAdornment from "@material-ui/core/InputAdornment";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

import DropDownText from "./DropdownText.js";

import { useStyles } from "../styles.js";

import priceValidator from "../services/priceValidator";
import amountValidator from "../services/amountValidator";
import computeProfitability from "../services/profitability";
import constants from "../utils/constants.js";

export default function OrderForm({
  customer,
  handleChangeCustomer,
  customers,
  product,
  originalPrice,
  handleChangeProduct,
  products,
  handleChangePrice,
  amount,
  handleChangeAmount,
  handleClickButton,
}) {
  const classes = useStyles({});

  const isPriceValid = priceValidator(product.price);
  const isAmountValid = amountValidator(product, parseInt(amount));
  const profitability = computeProfitability(originalPrice, product.price);

  return (
    <Grid container>
      <Typography component="h6" variant="h4" align="left">
        Clientes
      </Typography>
      <Grid item xs={12}>
        <DropDownText
          value={customer}
          selectValue={handleChangeCustomer}
          label={constants.TextStrings.CustomerMessage}
          listValues={customers}
        />
      </Grid>
      {customer !== "" ? (
        <div>
          <Grid item xs={12}>
            <DropDownText
              value={product.name}
              selectValue={handleChangeProduct}
              label={constants.TextStrings.ProductMessage}
              listValues={products}
            />
          </Grid>

          <TextField
            className={classes.textField}
            label="Preço"
            id="standard-adornment-amount"
            value={product.price}
            onChange={handleChangePrice}
            error={!isPriceValid}
            helperText={isPriceValid ? "" : constants.TextStrings.InvalidPrice}
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
            error={!isAmountValid}
            helperText={
              isAmountValid ? "" : constants.TextStrings.InvalidAmount
            }
            onChange={handleChangeAmount}
          ></TextField>
          {isPriceValid ? (
            <Typography
              component="h6"
              variant="body1"
              align="left"
              className={classes.textField}
              color={
                profitability == constants.Profitability.BAD
                  ? "error"
                  : "textPrimary"
              }
            >
              Rentabilidade {profitability}
            </Typography>
          ) : null}

          <Button
            variant="contained"
            color="primary"
            className={classes.button}
            onClick={handleClickButton}
            disabled={
              !isPriceValid ||
              !isAmountValid ||
              profitability === constants.Profitability.BAD
            }
          >
            Inserir Produto
          </Button>
        </div>
      ) : null}
    </Grid>
  );
}
