import React, {useEffect} from 'react';
import {motion, AnimatePresence} from 'framer-motion';
import {Theme, createStyles, makeStyles} from '@material-ui/core/styles';
import Icon from '@material-ui/core/Icon';
import {Typography} from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      alignItems: 'center',
      border: 'none',
      borderRadius: '10px',
      [theme.breakpoints.up('md')]: {
        paddingTop: theme.spacing(0.5),
        paddingBottom: theme.spacing(0.5),
      },
    },
    item: {
      flex: 1,
      display: 'flex',
      justifyContent: 'center',
    },
  })
);

const ToKeyRow = props => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography variant="subtitle1" className={classes.item}>
        <Icon color={props.songKey.match > 0 ? 'secondary' : 'inherit'}>
          {props.songKey.match > 0 ? 'check_circle' : 'clear'}
        </Icon>
      </Typography>

      <Typography className={classes.item} variant="h6">
        {props.songKey.songKey}
      </Typography>

      <Typography className={classes.item} variant="h6">
        {props.songKey.number}
      </Typography>
    </div>
  );
};

export default ToKeyRow;
