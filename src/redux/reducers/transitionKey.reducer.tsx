import {UPDATE_CURRENT_KEY, UPDATE_SWITCH_FROM_KEY} from '../actionTypes';

export const initKeyState = {
  currentKey: 'C',
  switchFromKey: false,
};

const transitionKeyReducer = (state = initKeyState, action) => {
  switch (action.type) {
    case UPDATE_CURRENT_KEY:
      return {
        ...state,
        currentKey: action.payload.content,
      };
    case UPDATE_SWITCH_FROM_KEY:
      return {
        ...state,
        switchFromKey: action.payload.content,
      };
    default:
      return state;
  }
};

export default transitionKeyReducer;
