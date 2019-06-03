import React, { PureComponent } from "react";

import Animation from "./Components/animation";

class CanvasContainer extends PureComponent {
  constructor(props) {
      super(props);
      this.state = {
          //Mouse Coordinates
          coorx: 0,
          coory: 0,
          //Random Particle size and opacity
          /*radius: Math.random() * 30 - 15,*/
          /*opacity: Math.random() * 10 - 5,*/
          visable: false,
      };
  }
  getRandomColor = () => {
      var r = 0, g = 0, b = 0;
      while (r < 100 && g < 100 && b < 100) {
          r = Math.floor(Math.random() * 256);
          g = Math.floor(Math.random() * 256);
          b = Math.floor(Math.random() * 256);
      }
      return "rgb(" + r + "," + g + "," + b + ")";
  }
  getRandomInt = (min, max) => {
      return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  handleMouseMoveEvent = (event) => {
      event.preventDefault();
      var offX = event.clientX;
      var offY = event.clientY;
      if (offY > 999) {
          offY = 999;
      }
      this.setState({
          coorx: offX,
          coory: offY,
      });
      //this.particle();
  }
  mouseOut = () => {
      this.setState({
          coorx: 0,
          coory: 0,
      });
  }
  mouseOver = () => {
      const { visable } = this.state;
      this.setState({
          visable: !visable,
      });
      console.log(visable);
  }
  render() {
      const { coorx, coory, radius, opacity } = this.state; //visable,
      //const x = <div className="X" onMouseOver={this.mouseOver}>X</div>
      return (
          <Animation
              id="animation"
              handleMouseEvent={this.handleMouseMoveEvent}
              x={coorx}
              y={coory}
              radius={radius}
              opacity={opacity} />
      );
  }  
}

export default CanvasContainer;