import React from "react";
import styled, { css } from "styled-components";

const Box = styled.div`
  position: absolute;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  background-color: #ddd;
  background-image: ${props => `url(${props.image})`};
  img {
    display: none;
  }
  ${props => props.type === "frontSide" && css`
    height: ${props => props.height + "px"};
    width: ${props => props.width + "px"};
    transform-origin: center center
  `}
  ${props => props.type === "backSide" && css`
    height: ${props => props.height + "px"};
    width: ${props => props.width + "px"};
    transform: ${props => `rotate(180deg) rotateX(180deg) translateZ(${props.depth}px)`};
    transform-origin: center center
  `}
  ${props => props.type === "topSide" && css`
    height: ${props => props.depth + "px"};
    width: ${props => props.width + "px"};
    transform-origin: top center;
    transform: rotateX(-90deg) rotateY(180deg)
  `}
  ${props => props.type === "bottomSide" && css`
    height: ${props => props.depth + "px"};
    width: ${props => props.width + "px"};
    transform: ${props => `rotateX(-90deg) translateZ(${props.height}px)`};
    transform-origin: top center;
    box-shadow: ${props => props.shadowBottom ? '10px 10px 50px rgba(0, 0, 0, 0.5), -15px -15px 50px rgba(0, 0, 0, 0.5)' : 'none'}
  `}
  ${props => props.type === "leftSide" && css`
    height: ${props => props.height + "px"};
    width: ${props => props.depth + "px"};
    transform: ${props => `rotateY(-90deg) translateZ(${props.depth}px)`};
    transform-origin: center right
  `}
  ${props => props.type === "rightSide" && css`
    height: ${props => props.height + "px"};
    width: ${props => props.depth + "px"};
    transform: ${props => `rotateY(90deg) translateZ(${props.width}px)`};
    transform-origin: center left
  `}
`;

export default function BoxChild(props){
    return <Box {...props} children={props.children}/>
} 