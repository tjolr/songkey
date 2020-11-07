import React from 'react';
import {Theme, createStyles, makeStyles} from '@material-ui/core/styles';
import {Typography} from '@material-ui/core';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import {useSelector, useDispatch} from 'react-redux';
import {updateOnlyShowRecommended} from '../../redux/actions';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: '#515353b7',
      borderRadius: '6px',
      paddingLeft: theme.spacing(1),
      paddingTop: theme.spacing(0.4),
      paddingBottom: theme.spacing(0.4),
    },
  })
);

const FiltersSection = (props: any) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const onlyShowRecommendedRedux = useSelector(
    state => state.transitionKeyReducer.onlyShowRecommended
  );

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(updateOnlyShowRecommended(event.target.checked));
  };

  return (
    <div className={classes.root}>
      <Typography
        variant="subtitle1"
        style={{display: 'inline-block', marginRight: '1rem'}}
      >
        Filter:
      </Typography>
      <FormControlLabel
        control={
          <Switch
            checked={onlyShowRecommendedRedux}
            onChange={handleChange}
            name="onlyRecommended"
            inputProps={{'aria-label': 'secondary checkbox'}}
          />
        }
        label="Only recommended"
      />
    </div>
  );
};

export default FiltersSection;
