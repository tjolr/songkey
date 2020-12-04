import React from 'react';
import MainSection from './MainSection';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import { motion } from 'framer-motion';
import { pageVariants, pageTransition } from '../../animations/animations';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      paddingBottom: theme.spacing(2),
    },
  })
);

const MainContainer = () => {
  const classes = useStyles();

  return (
    <motion.div
      className={classes.root}
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      <MainSection />
    </motion.div>
  );
};

export default MainContainer;
