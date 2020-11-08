import React from 'react';
import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import {useSelector, useDispatch} from 'react-redux';
import {GroupByTypes} from '../../../redux/reducers/transitionKey.reducer';
import {updateGroupBy} from '../../../redux/actions';
import {InputLabel} from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    formControl: {
      margin: theme.spacing(0.5),
      minWidth: 120,
    },
  })
);

const GroupBy = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const groupByRedux = useSelector(state => state.transitionKeyReducer.groupBy);

  const handleChange = (event: React.ChangeEvent<{value: unknown}>) => {
    dispatch(updateGroupBy(event.target.value as GroupByTypes));
  };

  return (
    <FormControl color="primary" className={classes.formControl}>
      <InputLabel id="demo-simple-select-label">Group by</InputLabel>

      <Select
        labelId="demo-simple-select-outlined-label"
        id="demo-simple-select-outlined"
        value={groupByRedux}
        onChange={handleChange}
        label="Group by"
        inputProps={{'aria-label': 'Without label'}}
      >
        <MenuItem value={GroupByTypes.Notes}>Notes</MenuItem>
        <MenuItem value={GroupByTypes.Match}>Match</MenuItem>
      </Select>
    </FormControl>
  );
};

export default GroupBy;
