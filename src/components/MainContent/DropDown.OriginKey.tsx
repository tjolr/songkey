import React from 'react';
import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import {useTheme} from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

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

export default function DropDownOriginKey() {
  const classes = useStyles();
  const theme = useTheme();
  const isMobileScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const [age, setAge] = React.useState('');

  const [state, setState] = React.useState<{
    age: string | number;
    name: string;
  }>({
    age: '',
    name: 'hai',
  });

  const handleChangeNative = (
    event: React.ChangeEvent<{name?: string; value: unknown}>
  ) => {
    const name = event.target.name as keyof typeof state;
    setState({
      ...state,
      [name]: event.target.value,
    });
  };

  const handleChange = (event: React.ChangeEvent<{value: unknown}>) => {
    setAge(event.target.value as string);
  };

  return (
    <div>
      {isMobileScreen ? (
        <FormControl variant="outlined" className={classes.formControl}>
          <InputLabel htmlFor="outlined-age-native-simple">Key</InputLabel>
          <Select
            native
            value={state.age}
            onChange={handleChangeNative}
            style={{fontSize: '150%'}}
            label="Age"
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
            value={age}
            onChange={handleChange}
            label="Age"
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
}
