import React, { Component } from "react";
import styled, { createGlobalStyle } from "styled-components";
import { render } from "react-dom";
import frontSide from "./imageF.png";
import backSide from "./imageB.png"
import leftSide from "./imageL.png"
import rightSide from "./imageR.png"
import topSide from "./imageT.png"

import Example from "../../src";

const GlobalStyle = createGlobalStyle`
  *{
    box-sizing: border-box;
  }
  body {
    margin: 0;
    padding: 0;
  }
`

const Wrapper = styled.div`
  display: block;
  width: 100vw;
  min-height: 100vh;
  overflow: hidden;
  background: #ddd;
  text-align: center;
  .container{
    display: flex;
    & > div {
      width: 50%;
      &:nth-child(1){
        padding: 0 10px;
        display: flex;
        flex-direction: column;
        h2{
          margin: 0
        }
      }
      &:nth-child(2){
        background: #728
      }
    }
  }
`;

function Precode(stackProps) {
  const properties = {
    frontSide: `"${stackProps.otherExample.frontSide}"`,
    backSide: `"${stackProps.otherExample.backSide}"`,
    leftSide: `"${stackProps.otherExample.leftSide}"`,
    rightSide: `"${stackProps.otherExample.rightSide}"`,
    topSide: `"${stackProps.otherExample.topSide}"`,
    margin: `"${stackProps.margin}"`,
    defaultWidth: `{${stackProps.defaultWidth}}`,
    maxWidth: `"${stackProps.maxWidth}"`,
    duration: `"${stackProps.duration}"`,
    perspective: `"${stackProps.perspective}"`,
    perspectiveOrigin: `"${stackProps.perspectiveOrigin}"`,
    transformOrigin: `"${stackProps.transformOrigin}"`,
    timingFunction: `"${stackProps.timingFunction}"`,
    iterationCount: `"infinite"`,
    direction: `"${stackProps.direction}"`,
    animationName: `"${stackProps.animationName}"`,
    shadowBottom: `{${stackProps.shadowBottom}}`
  }
  return (
    <React.Fragment>
      <div style={{fontWeight: "800"}}>{"<"}<span style={{fontWeight: "800", color: "#3eee"}}>CeateBox3D</span></div>
      {Object.keys(properties).map(property => (
        <div key={property} style={{color:"lightblue", paddingLeft: "10px"}}>
          {property}=<span style={{color:"peru"}}>{properties[property]}</span>
        </div>
      ))}
      <div style={{fontWeight: "800"}}>{"/>"}</div>
    </React.Fragment>
  )
}

const otherExample = {
  default: {
    frontSide,
    backSide,
    leftSide,
    rightSide,
    topSide,
  },
  square: {
    frontSide: "https://via.placeholder.com/200",
    backSide: "https://via.placeholder.com/200",
    leftSide: "https://via.placeholder.com/200",
    rightSide: "https://via.placeholder.com/200",
    topSide: "https://via.placeholder.com/200",
  },
  rectangleOne: {
    frontSide: "https://via.placeholder.com/200x200.png",
    backSide: "https://via.placeholder.com/200x200.png",
    leftSide: "https://via.placeholder.com/50x200.png",
    rightSide: "https://via.placeholder.com/50x200.png",
    topSide: "https://via.placeholder.com/200x50.png",
  },
  rectangleTwo: {
    frontSide: "https://via.placeholder.com/200x100.png",
    backSide: "https://via.placeholder.com/200x100.png",
    leftSide: "https://via.placeholder.com/350x100.png",
    rightSide: "https://via.placeholder.com/350x100.png",
    topSide: "https://via.placeholder.com/100x350.png",
  }
}

const stackProps = {
  margin: "5em auto auto",
  defaultWidth: 200,
  maxWidth: "150px",
  duration: "10s",
  perspective: "800px",
  perspectiveOrigin: "50% -150px",
  transformOrigin: "50% 50% -2em",
  timingFunction: "linear",
  iterationCount: "infinite",
  direction: "normal",
  animationName: "roundsY",
  shadowBottom: true,
  selectedExample: "default",
  otherExample: otherExample["default"]
}

const Input = styled.div`
  display: flex;
  width: ${props => props.auto ? "auto" : "100%"};
  align-items: center;
  margin-top: 5px;
  justify-content: space-between;
  flex-direction: ${props => props.column ? "column" : "row"};
  text-align: center;
  label{
    margin-right: 5px;
  }
  input {
    border: none;
    padding: 5px;
  }
  select{
    border: none;
    width: 100%;
    height: 25px;
    border-radius: 0px !important;
    -webkit-appearance: none;
    background-color: white;
    background-position: right 50%;
    background-repeat: no-repeat;
    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAMCAYAAABSgIzaAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNSBNYWNpbnRvc2giIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NDZFNDEwNjlGNzFEMTFFMkJEQ0VDRTM1N0RCMzMyMkIiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NDZFNDEwNkFGNzFEMTFFMkJEQ0VDRTM1N0RCMzMyMkIiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo0NkU0MTA2N0Y3MUQxMUUyQkRDRUNFMzU3REIzMzIyQiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo0NkU0MTA2OEY3MUQxMUUyQkRDRUNFMzU3REIzMzIyQiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PuGsgwQAAAA5SURBVHjaYvz//z8DOYCJgUxAf42MQIzTk0D/M+KzkRGPoQSdykiKJrBGpOhgJFYTWNEIiEeAAAMAzNENEOH+do8AAAAASUVORK5CYII=);
    padding: .5em;
    padding-right: 1.5em
  }
`;
const InputLabel = ({ label, type, value, onChange }) => {
  return (
    <Input >
      <label>{label}:</label>
      <input type={type} value={value} onChange={e => onChange(label, e.target.value)} style={{width: "100%"}} />
    </Input>
  );
}


const timingFunctionOptions = ["ease", "ease-in", "ease-out", "ease-in-out", "linear"];
const directionOptions = ["normal", "reverse", "alternate", "alternate-reverse"];
const animationNameOptions = ["rounds", "roundsY", "roundsX"];

class Demo extends Component {
  state = {
    stackProps
  }

  handleUpdate = (key, value) => this.setState(({stackProps}) => ({ stackProps: {...stackProps, [key]: value} }));

  handleClear = () => this.setState({ stackProps })

  render() {
    const { stackProps } = this.state;
    return (
      <React.Fragment>
        <GlobalStyle />
        <Wrapper>
          <h1>Box 3d Animate Demo</h1>
          <div className="container">
            <div>
              <h2>Properties</h2>
              <InputLabel
                type="text"
                label="margin"
                value={stackProps.margin}
                onChange={this.handleUpdate}
              />
              <InputLabel
                type="text"
                label="maxWidth"
                value={stackProps.maxWidth}
                onChange={this.handleUpdate}
              />
              <InputLabel
                type="text"
                label="duration"
                value={stackProps.duration}
                onChange={this.handleUpdate}
              />
              <InputLabel
                type="text"
                label="perspective"
                value={stackProps.perspective}
                onChange={this.handleUpdate}
              />
              <InputLabel
                type="text"
                label="perspectiveOrigin"
                value={stackProps.perspectiveOrigin}
                onChange={this.handleUpdate}
              />
              <InputLabel
                type="text"
                label="transformOrigin"
                value={stackProps.transformOrigin}
                onChange={this.handleUpdate}
              />
              <InputLabel
                type="number"
                label="defaultWidth"
                value={stackProps.defaultWidth}
                onChange={this.handleUpdate}
              />
              <Input>
                <label>timingFunction:</label>
                <select
                  defaultValue={stackProps.timingFunction}
                  onChange={e => this.handleUpdate("timingFunction", e.target.value)}
                >
                  {timingFunctionOptions.map(value => (
                    <option key={value} value={value}>{value}</option>
                  ))}
                </select>
              </Input>
              <Input>
                <label>direction:</label>
                <select
                  defaultValue={stackProps.direction}
                  onChange={e => this.handleUpdate("direction", e.target.value)}
                >
                  {directionOptions.map(value => (
                    <option key={value} value={value}>{value}</option>
                  ))}
                </select>
              </Input>
              <Input>
                <label>animationName:</label>
                <select
                  defaultValue={stackProps.animationName}
                  onChange={e => this.handleUpdate("animationName", e.target.value)}
                >
                  {animationNameOptions.map(value => (
                    <option key={value} value={value}>{value}</option>
                  ))}
                </select>
              </Input>
              <Input>
                <label>shadowBottom:</label>
                <input
                  type="checkbox"
                  checked={stackProps.shadowBottom}
                  onChange={() => this.handleUpdate("shadowBottom", !stackProps.shadowBottom)}
                />
              </Input>
              <Input>
                <label>otherExample:</label>
                <select
                  value={stackProps.selectedExample}
                  onChange={e => {
                    this.handleUpdate("selectedExample", e.target.value)
                    this.handleUpdate("otherExample", otherExample[e.target.value] )
                  }}
                >
                  {Object.keys(otherExample).map(value => (
                    <option key={value} value={value}>{value}</option>
                  ))}
                </select>
              </Input>
              
              <input
                style={{
                  padding: "5px",
                  border: "none",
                  background: "#728",
                  color: "#fff",
                  width: "100px",
                  margin: "5px 0 0 auto"
                }}
                type="button" onClick={this.handleClear}
                value="Clear"
              />
            </div>
            <Example {...stackProps} {...stackProps.otherExample}/>
          </div>
          <pre style={{textAlign: 'left', background: '#333', color: 'white', maxWidth: '50%', padding: "10px 5px"}}>
            <Precode {...stackProps} />
          </pre>
        </Wrapper>
      </React.Fragment>
    );
  }
}

render(<Demo/>, document.querySelector("#demo"));
