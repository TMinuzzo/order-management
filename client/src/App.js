import React, { useState, useEffect } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

import axios from "axios";
import OrderForm from "./components/OrderForm.js";

import { useStyles } from "./styles.js";

import SuccessMessage from "./components/SuccessMessage.js";

export default function Order(props) {
  const classes = useStyles(props);

  /* State variables section  */
  const initialValue = [{ name: " " }];
  const [customers, setCustomers] = useState(initialValue);
  const [customer, setCustomer] = useState("");

  const [products, setProducts] = useState(initialValue);
  const [product, setProduct] = useState({
    name: "",
    price: 0,
    multiple: null,
  });
  const [price, setPrice] = useState(0);

  const [amount, setAmount] = useState(0);

  const [addedProduct, setAddedProduct] = useState(false);

  useEffect(() => {
    /* HTTP Request to the Django server to fetch all customers and products and saves as state variable */
    axios
      .get("/api/customers/")
      .then((res) => {
        setCustomers(res.data);
      })
      .catch((err) => console.log("error", err));

    axios
      .get("/api/products/")
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => console.log("error", err));
  }, []);

  const handleChangeCustomer = (product) => {
    setCustomer(product);
  };

  const handleChangeProduct = (product) => {
    let productObj = products.find((e) => e.name === product);

    setPrice(productObj.price);
    setProduct(productObj);
  };

  const handleClickButton = () => {
    setAddedProduct(!addedProduct);
  };

  const handleChangePrice = (event) => {
    setProduct({ ...product, price: event.target.value });
  };

  const handleChangeAmount = (event) => {
    setAmount(event.target.value);
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="absolute" color="default" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            Pedidos
          </Typography>
        </Toolbar>
      </AppBar>
      <main className={classes.layout}>
        <Paper className={classes.paper}>
          {addedProduct ? (
            <SuccessMessage handleClickButton={handleClickButton} />
          ) : (
            <OrderForm
              customer={customer}
              handleChangeCustomer={handleChangeCustomer}
              customers={customers}
              product={product}
              originalPrice={price}
              handleChangeProduct={handleChangeProduct}
              products={products}
              handleChangePrice={handleChangePrice}
              amount={amount}
              handleChangeAmount={handleChangeAmount}
              handleClickButton={handleClickButton}
            />
          )}
        </Paper>
      </main>
    </React.Fragment>
  );
}
