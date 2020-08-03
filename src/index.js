import React, { Component } from "react";
import { render } from "react-dom";
import Hello from "./Hello";
import "./style.css";

import  OrgChartComponent from "./OrgChart";
import * as d3 from "d3";

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: null
    };
  }

  render() {
    return <OrgChartComponent data={this.state.data} />;
  }

  componentDidMount() {
    d3.json(
      "https://gist.githubusercontent.com/bumbeishvili/dc0d47bc95ef359fdc75b63cd65edaf2/raw/c33a3a1ef4ba927e3e92b81600c8c6ada345c64b/orgChart.json"
    ).then(data => {
        this.setState({ data: data });
    });
  }
}

render(<App />, document.getElementById("root"));
