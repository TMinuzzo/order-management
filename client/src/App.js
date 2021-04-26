import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";

import axios from "axios";

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: "relative",
  },
  layout: {
    width: "auto",
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 600,
      marginLeft: "auto",
      marginRight: "auto",
    },
  },
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3),
    },
  },
  buttons: {
    display: "flex",
    justifyContent: "flex-end",
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
  },
  textField: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
  },
}));

export default function Checkout() {
  const classes = useStyles();

  const initialValue = [{ name: " --- Selecione o Cliente ---" }];
  const [customers, setCustomers] = useState(initialValue);
  const [customer, setCustomer] = useState("CUSTOMER");

  useEffect(() => {
    axios
      .get("/api/customers/")
      .then((res) => {
        console.log("teste", res.data);
        setCustomers(res.data);
      })
      .catch((err) => console.log("error", err));
  }, []);

  const handleChange = (event) => {
    setCustomer(event.target.value);
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
          <Typography component="h6" variant="h4" align="left">
            Clientes
          </Typography>
          <TextField
            className={classes.textField}
            id="customer-select"
            select
            label="Selecione o cliente"
            value={customer}
            onChange={handleChange}
            SelectProps={{
              native: true,
            }}
            helperText="Por favor, selecione um cliente da lista"
          >
            {customers.map((option) => (
              <option key={option.name} value={option.name}>
                {option.name}
              </option>
            ))}
          </TextField>
        </Paper>
      </main>
    </React.Fragment>
  );
}
