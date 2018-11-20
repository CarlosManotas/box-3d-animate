import React, { Component } from "react";
import { render } from "react-dom";
import frontSide from "./imageF.png";
import backSide from "./imageB.png"
import leftSide from "./imageL.png"
import rightSide from "./imageR.png"
import topSide from "./imageT.png"

import Example from "../../src";

class Demo extends Component {
  render() {
    return (
      <div style={{textAlign: "center"}}>
        <h1>3d-box Demo</h1>
        <Example
          defaultWidth={200}
          frontSide={frontSide}
          backSide={backSide}
          leftSide={leftSide}
          rightSide={rightSide}
          topSide={topSide}
        />
      </div>
    )
  }
}

render(<Demo/>, document.querySelector("#demo"))
