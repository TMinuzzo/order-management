import React from "react";

import "./App.css";
import { Button } from "@material-ui/core";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Button color="primary">Hello World</Button>
      </div>
    );
  }
}

export default App;
