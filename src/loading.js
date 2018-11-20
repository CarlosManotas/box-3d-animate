import React from 'react';
import styled from 'styled-components';

const Loading = styled.div`
  display: inline-block;
  height: 50px;
  margin: 50px;
  position: relative;
  width: 50px;

  & > div {
    width: 50px;
    height: 50px;
    position: absolute;
    left: 0;
    border: 4px solid #000;
    animation: await-1 1.5s infinite ease-in-out;
  }

  & > div:nth-child(1) {
    width: 30px;
    height: 30px;
    top: 10px;
    left: 10px;
    animation: await-2 1.5s infinite reverse ease-in-out;
  }


  @keyframes await-1 {
    0% {
      transform: perspective(100px) rotatex(0deg) rotatey(0deg);
    }
    50% {
      transform: perspective(100px) rotatex(180deg) rotatey(0deg);
    }
    100% {
      transform: perspective(100px) rotatex(180deg) rotatey(180deg);
    }
  }

  @keyframes await-2 {
    0% {
      transform: perspective(200px) rotatex(0deg) rotatey(0deg);
    }
    50% {
      transform: perspective(200px) rotatex(-180deg) rotatey(0deg);
    }
    100% {
      transform: perspective(200px) rotatex(-180deg) rotatey(-180deg);
    }
  }

`
export default function LoadingComponent({ loading }) {
  if (React.isValidElement(loading)) return <React.Fragment>{loading}</React.Fragment>
  return <Loading><div /><div /></Loading>
}