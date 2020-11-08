import {
  UPDATE_CURRENT_KEY,
  UPDATE_SWITCH_FROM_KEY,
  UPDATE_ONLY_SHOW_RECOMMENDED,
  UPDATE_GROUP_BY,
} from './actionTypes';

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

export const updateOnlyShowRecommended = content => ({
  type: UPDATE_ONLY_SHOW_RECOMMENDED,
  payload: {
    content,
  },
});

export const updateGroupBy = content => ({
  type: UPDATE_GROUP_BY,
  payload: {
    content,
  },
});
