import React from 'react';
import styled from 'styled-components';
import LoadingComponent from './loading';
import BoxChild from './boxChild';

const Box3d = styled.div`
  position: relative;
  width: 100%;
  min-height: ${props => props.height + "px"}
  perspective: ${props => props.perspective};
  perspective-origin: ${props => props.perspectiveOrigin}

  & .box-3d {
    transform-style: preserve-3d;
    max-width: ${props => props.maxWidth};
    position: relative;
    margin: ${props => props.margin};
    transform-origin: ${props => props.transformOrigin};
    animation: ${props => `${props.animationName} ${props.duration} ${props.iterationCount} ${props.timingFunction} ${props.direction}`}
  }

  @keyframes roundsY {
    from {
      transform: rotateY(0)
    }
    to {
      transform: rotateY(-360deg)
    }
  }

  @keyframes roundsX {
    from {
      transform: rotateX(0)
    }
    to {
      transform: rotateX(-360deg)
    }
  }

  @keyframes rounds {
    from {
      transform: rotate(0)
    }
    to {
      transform: rotate(-360deg)
    }
  }
`;



export default class CreateBox extends React.Component {
  constructor(props) {
    super(props);
    this.myRef0 = React.createRef();
    this.myRef4 = React.createRef();
    this.state = {
      height: 0,
      depth: 0,
      width: 0,
      loading: true
    }
  }

  componentDidMount() {
    const Ima = new Image();
    Ima.src = this.props.frontSide;
    Ima.onload = () => this.calculo();
  }

  componentDidUpdate(prevProps) {
    if (
      (prevProps.defaultWidth !== this.props.defaultWidth) ||
      (prevProps.frontSide !== this.props.frontSide) ||
      (prevProps.backSide !== this.props.backSide) ||
      (prevProps.leftSide !== this.props.leftSide) ||
      (prevProps.topSide !== this.props.topSide) ||
      (prevProps.rightSide !== this.props.rightSide)
    ) {
      const Ima = new Image();
      Ima.src = this.props.frontSide;
      Ima.onload = () => this.calculo();
    }
  }

  calculo = () => {
    const { defaultWidth } = this.props;

    const w = defaultWidth;
    const x = this.myRef0.current.width;
    const y = this.myRef0.current.height;
    const z = this.myRef4.current.width;

    let width = w;
    let percent = (width * 100) / x;
    let height = (percent * y) / 100;
    let depth = (percent * z) / 100;

    if (y > x) {
      height = w;
      percent = (height * 100) / y;
      width = (percent * x) / 100;
      depth = (percent * z) / 100;
    }

    this.setState({ height, depth, width, loading: false });
  }

  render(){
    const {
      leftSide,
      frontSide,
      topSide,
      backSide,
      rightSide,
      bottomSide,
      shadowBottom
    } = this.props;

    const allImages = [
      {type: "frontSide", url: frontSide},
      {type: "backSide", url: backSide},
      {type: "topSide", url: topSide},
      {type: "bottomSide", url: bottomSide || topSide},
      {type: "leftSide", url: leftSide},
      {type: "rightSide", url: rightSide}
    ];

    const {
      height,
      width,
      depth,
      loading
    } = this.state;

    const stackProps = {
      height,
      width,
      depth,
      shadowBottom
    }

    return (
      <React.Fragment>
        {loading && <LoadingComponent {...this.props}/>}
        <Box3d {...this.props} {...stackProps}>
          <div className="box-3d">
            {allImages.map((side, index) => (
              <BoxChild
                {...stackProps}
                key={side.type}
                type={side.type}
                image={side.url}
              >
                <img ref={this[`myRef${index}`]} src={side.url} alt='box'/>
              </BoxChild>
            ))}
          </div>
        </Box3d>
      </React.Fragment>
    );
  }
};

CreateBox.defaultProps = {
  leftSide: "https://via.placeholder.com/200",
  backSide: "https://via.placeholder.com/200",
  frontSide: "https://via.placeholder.com/200",
  rightSide: "https://via.placeholder.com/200",
  topSide: "https://via.placeholder.com/200",
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
  shadowBottom: true
}