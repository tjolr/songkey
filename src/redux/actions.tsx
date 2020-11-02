import {UPDATE_CURRENT_KEY, UPDATE_SWITCH_FROM_KEY} from './actionTypes';

export const updateCurrentKey = content => ({
  type: UPDATE_CURRENT_KEY,
  payload: {
    content,
  },
});

export const updateSwitchFromKey = content => ({
  type: UPDATE_SWITCH_FROM_KEY,
  payload: {
    content,
  },
});
