import React, {useEffect, useState} from 'react';
import {motion, AnimatePresence, useAnimation} from 'framer-motion';
import {Theme, createStyles, makeStyles} from '@material-ui/core/styles';
import Icon from '@material-ui/core/Icon';
import {Typography, IconButton} from '@material-ui/core';

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
    iconButton: {
      padding: theme.spacing(1),
    },
  })
);

const ToKeyRow = props => {
  const classes = useStyles();

  return (
    <motion.div className={classes.root}>
      <Typography variant="subtitle1" className={classes.item}>
        <Icon color={props.songKey.match > 0 ? 'secondary' : 'inherit'}>
          {props.songKey.match > 0 ? 'check_circle' : 'horizontal_rule'}
        </Icon>
      </Typography>

      <Typography className={classes.item} variant="h6">
        {props.songKey.songKey}
      </Typography>

      <Typography className={classes.item} variant="h6">
        {props.songKey.number}
      </Typography>

      {/* <Typography variant="subtitle1" className={classes.item}>
        <IconButton
          className={classes.iconButton}
          onClick={e => {
            props.startActiveSoundKey(props.songKey.songKey);
          }}
        >
          <Icon>play_circle_filled</Icon>
        </IconButton>
      </Typography> */}
    </motion.div>
  );
};

export default ToKeyRow;
