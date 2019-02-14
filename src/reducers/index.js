import { MOVE_OBJECTS, START_GAME } from '../actions';
import  objects  from './objects';
import startGame from './startGame';

const initialGameState = {
  started: false,
  kills: 0,
  lives: 3,
  flyingObjects: [],
  lastObjectCreatedAt: new Date(),
};

const initialState = {
  angle: 45,
  gameState: initialGameState,
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case MOVE_OBJECTS:
      return objects(state, action);
    case START_GAME:
      return startGame(state, initialGameState);
    default:
      return state;
  }
}

export default reducer;




// import { MOVE_OBJECTS, START_GAME } from '../actions';
// import  objects  from './objects';
// import startGame from './startGame';

// const initialGameState = {
//   started: false,
//   kills: 0,
//   lives: 3,
// };

// const initialState = {
//   angle: 45,
//   gameState: initialGameState,
// };

// function reducer(state = initialState, action) {
//   switch (action.type) {
//     case MOVE_OBJECTS:
//       return objects(state, action);
//     case START_GAME:
//       return startGame(state, initialGameState);
//     default:
//       return state;
//   }
// }

// export default reducer;






// import { MOVE_OBJECTS } from '../actions';
// import { objects } from './moveObjects';

// const initialState = {
//   angle: 45,
// };

// function reducer(state = initialState, action) {
//   switch (action.type) {
//     case MOVE_OBJECTS:
//       return objects(state, action);
//     default:
//       return state;
//   }
// }

// export default reducer;