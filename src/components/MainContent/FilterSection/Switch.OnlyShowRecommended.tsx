import React from 'react';

import Switch from '@material-ui/core/Switch';
import {FormControlLabel} from '@material-ui/core';
import {useSelector, useDispatch} from 'react-redux';
import {updateOnlyShowRecommended} from '../../../redux/actions';

const OnlyShowRecommended = (props: any) => {
  const dispatch = useDispatch();
  const onlyShowRecommendedRedux = useSelector(
    state => state.transitionKeyReducer.onlyShowRecommended
  );
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(updateOnlyShowRecommended(event.target.checked));
  };

  return (
    <FormControlLabel
      control={
        <Switch
          checked={onlyShowRecommendedRedux}
          color="primary"
          onChange={handleChange}
          name="onlyRecommended"
          inputProps={{'aria-label': 'secondary checkbox'}}
        />
      }
      label="Hide avoids"
    />
  );
};
export default OnlyShowRecommended;
