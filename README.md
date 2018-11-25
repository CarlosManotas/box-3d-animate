# box-3d-animate

[![npm version](https://badge.fury.io/js/box-3d-animate.svg)](https://badge.fury.io/js/box-3d-animate)
[![npm](https://img.shields.io/npm/dt/box-3d-animate.svg)](https://npmcharts.com/compare/box-3d-animate?minimal=true)
![MIT](https://img.shields.io/dub/l/vibe-d.svg)

*small contribution for those who work with react and styled-components*

`Box 3d animate` is just a library for create 3d box with your images.

![alt text](https://github.com/CarlosManotas/box-3d-animate/blob/master/demo/src/box-3d-animate.gif)

## Installation
> require react and styled-components
via yarn, just follow these simple commands:

```bash
$ yarn add box-3d-animate
```
or via npm:

```bash
$ npm install box-3d-animate --save
```

## Basic use

 import in your file `js`

```javascript
...
import CreateBox3D from "box-3d-animate";
// import your images
import frontSide from "./imageF.jpg";
import backSide from "./imageB.jpg"
import leftSide from "./imageL.jpg"
import rightSide from "./imageR.jpg"
import topSide from "./imageT.jpg"
...
render() {
  return (
    <CreateBox3D
      defaultWidth={200}
      frontSide={frontSide}
      backSide={backSide}
      leftSide={leftSide}
      rightSide={rightSide}
      topSide={topSide}
    />
  );
}
```
## Properties

| Property | Default | Type | Values |
|-----------------|---------|-------|----------|
| leftSide | https://via.placeholder.com/200 | String | url or import image |
| rightSide | https://via.placeholder.com/200 | String | url or import image |
| frontSide | https://via.placeholder.com/200 | String | url or import image |
| backSide | https://via.placeholder.com/200 | String | url or import image |
| topSide | https://via.placeholder.com/200 | String | url or import image |
| bottomSide | https://via.placeholder.com/200 | String | url or import image |
| perspective | 800px | String | 900px, 1200px, ... |
| perspectiveOrigin | 50% -150px | String | 30% 50em, ... |
| duration | 10s | String |  1s, 300ms... |
| timingFunction | linear | String | ease, ease-in, ease-out, ease-in-out, linear, step-start, step-end |
| iterationCount | infinite | String or Number | infinite or 0, 1, 3, ... |
| transformOrigin | 50% 50% -2em | String | center, 50%, top bottom, 10% 80% ...|
| direction | normal | String | normal, reverse, alternate, alternate-reverse |
| animationName | roundsY | String | rounds, roundsY, roundsX |
| defaultWidth | 200 | Number | 300, 150, ...|
| maxWidth | 150px | String | 200px, ... |
| margin | 5em auto auto | String | 1px, auto 0, 4px auto 5px, ... |
| shadowBottom | true | Boolean | true, false |
| loading | `<LoadingComponent />` | ReactNode | `<span>loading...</span>` ... |
| SSR | false | Boolean | true, false |

## Nextjs example
```javascript
...
import CreateBox3D from "box-3d-animate";
...
render() {
  return (
    <CreateBox3D
      SSR={true}
      ...
    />
  );
}
```

> Some examples [here](https://carlosmanotas.github.io/box-3d-animate/)

## License
Box 3d animate is licensed under the MIT license. (http://opensource.org/licenses/MIT)


[box-3d]: https://github.com/CarlosManotas/box-3d-animate/blob/master/demo/src/box-3d-animate.gif
