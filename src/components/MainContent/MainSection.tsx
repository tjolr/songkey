import React from 'react';
import {Theme, createStyles, makeStyles} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import {motion} from 'framer-motion';
import {Typography} from '@material-ui/core';
import SongKey from './SongKey';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      color: 'white',
      backgroundColor: '#323232D9',
      padding: theme.spacing(2),
      borderRadius: '10px',
      [theme.breakpoints.down('sm')]: {
        minWidth: '95vw',
        minHeight: '50vh',
      },
      [theme.breakpoints.up('md')]: {
        minWidth: '35vw',
        minHeight: '40vh',
      },
    },
    title: {
      marginBottom: theme.spacing(1),
      textAlign: 'left',
    },
  })
);

export default function MainSection() {
  const classes = useStyles();

  return (
    <motion.div
      initial={{scale: 0.7, opacity: 0}}
      animate={{scale: 1, opacity: 1}}
      transition={{duration: 0.2}}
      className={classes.root}
    >
      <Typography variant="h5" className={classes.title}>
        SONGKEY
      </Typography>
      <SongKey />
    </motion.div>
  );
}
