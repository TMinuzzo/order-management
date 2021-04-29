import React, { useState, useEffect } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

import { useStyles } from "./styles.js";

import axios from "axios";
import OrderForm from "./components/OrderForm.js";

export default function Checkout(props) {
  const classes = useStyles(props);

  const initialValue = [{ name: " " }];
  const [customers, setCustomers] = useState(initialValue);
  const [customer, setCustomer] = useState("");

  const [products, setProducts] = useState(initialValue);
  const [product, setProduct] = useState({});

  const [amount, setAmount] = useState(0);

  useEffect(() => {
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
    console.log("product", productObj);

    setProduct(productObj);
  };

  const handleChangePrice = (event) => {
    // function here to return rentability
    console.log("event", event);
    //product.price = event.target.value;
    //setProduct(product);
  };

  const handleChangeAmount = (event) => {
    // function to validate amount
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
          <OrderForm
            customer={customer}
            handleChangeCustomer={handleChangeCustomer}
            customers={customers}
            product={product}
            handleChangeProduct={handleChangeProduct}
            products={products}
            handleChangePrice={handleChangePrice}
            amount={amount}
            handleChangeAmount={handleChangeAmount}
          />
        </Paper>
      </main>
    </React.Fragment>
  );
}
