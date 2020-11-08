import {
  UPDATE_CURRENT_KEY,
  UPDATE_SWITCH_FROM_KEY,
  UPDATE_ONLY_SHOW_RECOMMENDED,
  UPDATE_GROUP_BY,
} from '../actionTypes';

export enum GroupByTypes {
  Notes = 'notes',
  Match = 'match',
}
interface keyState {
  currentKey: string;
  switchFromKey: boolean;
  onlyShowRecommended: boolean;
  groupBy: GroupByTypes;
}

export const initKeyState: keyState = {
  currentKey: 'C',
  switchFromKey: false,
  onlyShowRecommended: false,
  groupBy: GroupByTypes.Notes,
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
    case UPDATE_GROUP_BY:
      return {
        ...state,
        groupBy: action.payload.content,
      };
    default:
      return state;
  }
};

export default transitionKeyReducer;
