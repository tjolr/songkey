import {
  UPDATE_CURRENT_KEY,
  UPDATE_SWITCH_FROM_KEY,
  UPDATE_ONLY_SHOW_RECOMMENDED,
} from '../actionTypes';

export const initKeyState = {
  currentKey: 'C',
  switchFromKey: false,
  onlyShowRecommended: false,
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
    case UPDATE_ONLY_SHOW_RECOMMENDED:
      return {
        ...state,
        onlyShowRecommended: action.payload.content,
      };
    default:
      return state;
  }
};

export default transitionKeyReducer;
