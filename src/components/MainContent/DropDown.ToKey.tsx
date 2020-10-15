import React from 'react';
import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';
import ToKeyRow from './ToKeyRow';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flex: 1,
    },
  })
);

export default function DropDownToKey() {
  const classes = useStyles();
  const songKeysTable = [
    {
      recommended: true,
      songKey: 'C',
      number: 'v',
    },
    {
      recommended: false,
      songKey: 'A',
      number: 'VI',
    },
    {
      recommended: true,
      songKey: 'B',
      number: 'V',
    },
    {
      recommended: true,
      songKey: 'C',
      number: 'I',
    },
    {
      recommended: false,
      songKey: 'C',
      number: 'II',
    },
    {
      recommended: true,
      songKey: 'B',
      number: 'V',
    },
    {
      recommended: true,
      songKey: 'C',
      number: 'I',
    },
    {
      recommended: false,
      songKey: 'C',
      number: 'II',
    },
  ];

  return (
    <div className={classes.root}>
      {songKeysTable.map(keyTable => (
        <ToKeyRow recommended={keyTable.recommended} keyTable={keyTable} />
      ))}
    </div>
  );
}
