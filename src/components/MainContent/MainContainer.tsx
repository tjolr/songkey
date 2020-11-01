import React from 'react';
import {Container} from '@material-ui/core';
import MainSection from './MainSection';
import {Theme, createStyles, makeStyles} from '@material-ui/core/styles';
import {motion} from 'framer-motion';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      paddingBottom: theme.spacing(2),
      [theme.breakpoints.down('sm')]: {
        marginTop: theme.spacing(0),
        minHeight: 'min-content',
      },
      [theme.breakpoints.up('md')]: {
        /*         height: '80vh',
         */
      },
    },
  })
);

const MainContainer = () => {
  const classes = useStyles();

  return (
    <motion.div className={classes.root}>
      <MainSection />
    </motion.div>
  );
};

export default MainContainer;
