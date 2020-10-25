import React from 'react';
import {Theme, createStyles, makeStyles} from '@material-ui/core/styles';
import {motion} from 'framer-motion';
import {Typography} from '@material-ui/core';
import SongKey from './SongKey';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      color: 'white',
      backgroundColor: '#323232D9',
      padding: theme.spacing(1.5),
      borderRadius: '10px',
      [theme.breakpoints.down('sm')]: {
        minWidth: '95vw',
      },
      [theme.breakpoints.up('md')]: {
        minWidth: '35vw',
      },
    },
    title: {
      marginBottom: theme.spacing(1),
      marginTop: theme.spacing(0),
      textAlign: 'left',
    },
  })
);

export default function MainSection() {
  const classes = useStyles();

  return (
    <motion.div
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      transition={{duration: 0.2}}
      className={classes.root}
    >
      <SongKey />
    </motion.div>
  );
}
