import React, {useState} from 'react';
import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import {useTheme} from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import {useSelector, useDispatch} from 'react-redux';
import {updateCurrentKey} from '../../../../redux/actions';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 130,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  })
);

const DropDownCurrentKey = (props: any) => {
  const classes = useStyles();
  const theme = useTheme();
  const isMobileScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const dispatch = useDispatch();

  const currentKeyRedux = useSelector(
    state => state.transitionKeyReducer.currentKey
  );

  const handleChange = (event: React.ChangeEvent<{value: unknown}>) => {
    const keyVal = event.target.value as string;
    dispatch(updateCurrentKey(keyVal));
  };

  return (
    <div>
      {isMobileScreen ? (
        <FormControl variant="outlined" className={classes.formControl}>
          <InputLabel htmlFor="outlined-age-native-simple">Key</InputLabel>
          <Select
            native
            value={currentKeyRedux}
            onChange={handleChange}
            label="Key"
            inputProps={{
              name: 'age',
              id: 'outlined-age-native-simple',
            }}
          >
            <option value={'C'}>C</option>
            <option value={'C#'}>C#</option>
            <option value={'D'}>D</option>
            <option value={'D#'}>D#</option>
            <option value={'E'}>E</option>
            <option value={'F'}>F</option>
            <option value={'F#'}>F#</option>
            <option value={'G'}>G</option>
            <option value={'G#'}>G#</option>
            <option value={'A'}>A</option>
            <option value={'Bb'}>Bb</option>
            <option value={'B'}>B</option>
          </Select>
        </FormControl>
      ) : (
        <FormControl variant="outlined" className={classes.formControl}>
          <InputLabel id="demo-simple-select-outlined-label">Key</InputLabel>
          <Select
            labelId="demo-simple-select-outlined-label"
            id="demo-simple-select-outlined"
            value={currentKeyRedux}
            onChange={handleChange}
            label="Key"
            inputProps={{
              input: {
                fontSize: '200%',
              },
            }}
          >
            <MenuItem value={'C'}>C</MenuItem>
            <MenuItem value={'C#'}>C#</MenuItem>
            <MenuItem value={'D'}>D</MenuItem>
            <MenuItem value={'D#'}>D#</MenuItem>
            <MenuItem value={'E'}>E</MenuItem>
            <MenuItem value={'F'}>F</MenuItem>
            <MenuItem value={'F#'}>F#</MenuItem>
            <MenuItem value={'G'}>G</MenuItem>
            <MenuItem value={'G#'}>G#</MenuItem>
            <MenuItem value={'A'}>A</MenuItem>
            <MenuItem value={'Bb'}>Bb</MenuItem>
            <MenuItem value={'B'}>B</MenuItem>
          </Select>
        </FormControl>
      )}
    </div>
  );
};

export default DropDownCurrentKey;
