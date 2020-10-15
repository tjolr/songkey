import React from 'react';
import {motion} from 'framer-motion';
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
    <motion.div
      className={classes.root}
      /*       style={{borderColor: props.recommended ? 'lightgreen' : 'transparent'}}
       */
    >
      <Typography variant="h5" className={classes.item}>
        <Icon color={props.keyTable.recommended ? 'secondary' : 'inherit'}>
          {props.keyTable.recommended ? 'check_circle' : 'clear'}
        </Icon>
      </Typography>

      <Typography className={classes.item} variant="h5">
        {props.keyTable.songKey}
      </Typography>

      <Typography className={classes.item} variant="subtitle2">
        {props.keyTable.number}
      </Typography>
    </motion.div>
  );
};

export default ToKeyRow;
