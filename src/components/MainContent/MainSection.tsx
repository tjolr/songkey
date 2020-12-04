import React from 'react';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import { motion } from 'framer-motion';
import TransitionKey from './TransitionKeySection/TransitionKey';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      color: 'white',
      backgroundColor: theme.palette.backgroundColor.main,
      borderRadius: '10px',
      boxShadow: `1px 1px 4px 1px ${theme.palette.backgroundColor.light}`,
      [theme.breakpoints.down('xs')]: {
        padding: theme.spacing(0.5),
        minWidth: '100vw',
      },
      [theme.breakpoints.up('sm')]: {
        padding: theme.spacing(1),
        minWidth: '65vw',
      },
      [theme.breakpoints.up('md')]: {
        padding: theme.spacing(1.5),
        minWidth: '40vw',
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
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.2 }}
      className={classes.root}
    >
      <TransitionKey />
    </motion.div>
  );
}
