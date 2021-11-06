import {GET_HELLO} from './actions';

const initialState = {
  greeting: [],
};

function helloReducer(state = initialState, action) {
  switch (action.type) {
    case GET_HELLO:
      return {...state, greeting: action.payload};
    default:
      return state;
  }
}

export default helloReducer;