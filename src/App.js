
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getCanvasPosition } from './utils/formulas';
import Canvas from './components/Canvas';

class App extends Component {
  constructor(props) {
    super(props);
    this.shoot = this.shoot.bind(this);
  }
  componentDidMount() {
    const self = this;
    setInterval(() => {
      self.props.moveObjects(self.canvasMousePosition);
    }, 10);

    window.onresize = () => {
      const cnv = document.getElementById('aliens-go-home-canvas');
      cnv.style.width = `${window.innerWidth}px`;
      cnv.style.height = `${window.innerHeight}px`;
    };
    window.onresize();

  }

  trackMouse(event) {
    this.canvasMousePosition = getCanvasPosition(event);
  }

  shoot() {
    this.props.shoot(this.canvasMousePosition);
  }


  render() {
    return (
      <Canvas
        angle={this.props.angle}
        gameState={this.props.gameState}
        startGame={this.props.startGame}
        trackMouse={event => (this.trackMouse(event))}
        shoot = {this.shoot}
      />
    );
  }
}

App.propTypes = {
  angle: PropTypes.number.isRequired,
  gameState: PropTypes.shape({
    started: PropTypes.bool.isRequired,
    kills: PropTypes.number.isRequired,
    lives: PropTypes.number.isRequired,
    flyingObjects: PropTypes.arrayOf(PropTypes.shape({
      position: PropTypes.shape({
        x: PropTypes.number.isRequired,
        y: PropTypes.number.isRequired
      }).isRequired,
      id: PropTypes.number.isRequired,
    })).isRequired,
  }).isRequired,
  moveObjects: PropTypes.func.isRequired,
  startGame: PropTypes.func.isRequired,
  shoot: PropTypes.func.isRequired,
};

export default App;






// import React, { Component } from 'react';
// import PropTypes from 'prop-types';
// import { getCanvasPosition } from './utils/formulas';
// import Canvas from './components/Canvas';

// class App extends Component {
//   componentDidMount() {
//     const self = this;
//     setInterval(() => {
//       self.props.moveObjects(self.canvasMousePosition);
//     }, 10);

//     window.onresize = () => {
//       const cnv = document.getElementById('aliens-go-home-canvas');
//       cnv.style.width = `${window.innerWidth}px`;
//       cnv.style.height = `${window.innerHeight}px`;
//     };
//     window.onresize();

//   }

//   trackMouse(event) {
//     this.canvasMousePosition = getCanvasPosition(event);
//   }

//   render() {
//     return (
//       <Canvas
//         angle={this.props.angle}
//         gameState={this.props.gameState}
//         startGame={this.props.startGame}
//         trackMouse={event => (this.trackMouse(event))}
//       />
//     );
//   }
// }

// App.propTypes = {
//   angle: PropTypes.number.isRequired,
//   gameState: PropTypes.shape({
//     started: PropTypes.bool.isRequired,
//     kills: PropTypes.number.isRequired,
//     lives: PropTypes.number.isRequired,
//   }).isRequired,
//   moveObjects: PropTypes.func.isRequired,
//   startGame: PropTypes.func.isRequired,
// };

// export default App;







// import React, {Component} from 'react';
// import PropTypes from 'prop-types';
// import { getCanvasPosition } from './utils/formulas';
// import Canvas from './components/Canvas';

// class App extends Component {
//   componentDidMount() {
//     const self = this;
//     setInterval(() => {
//         self.props.moveObjects(self.canvasMousePosition);
//     }, 10);

//     window.onresize = () => {
//       const cnv = document.getElementById('aliens-go-home-canvas');
//       cnv.style.width = `${window.innerWidth}px`;
//       cnv.style.height = `${window.innerHeight}px`;
//     };
//     window.onresize();

//   }

//   trackMouse(event) {
//     this.canvasMousePosition = getCanvasPosition(event);
//   }

//   render() {
//     return (
//       <Canvas
//         angle={this.props.angle}
//         trackMouse={event => (this.trackMouse(event))}
//       />
//     );
//   }
// }

// App.propTypes = {
//   angle: PropTypes.number.isRequired,
//   moveObjects: PropTypes.func.isRequired,
// };

// export default App;




// import React, {Component} from 'react';
// import Canvas from './components/Canvas';

// class App extends Component {
//   render() {
//     return (
//       <div>
//       <Canvas />
//       </div>
//     );
//   }
// }

// export default App;




// import React, {Component} from 'react';
// import PropTypes from 'prop-types';

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <h1>{this.props.message}</h1>
//       </div>
//     );
//   }
// }

// App.propTypes = {
//   message: PropTypes.string.isRequired,
// };

// export default App;



// import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <h1>We will create an awesome game with React, Redux, and SVG!</h1>
//       </div>
//     );
//   }

// }

// export default App;
