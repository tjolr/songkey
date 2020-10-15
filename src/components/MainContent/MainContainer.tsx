import React from 'react';
import {Container} from '@material-ui/core';
import MainSection from './MainSection';
import {Theme, createStyles, makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '80vh',
    },
  })
);

const MainContainer = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <MainSection />
    </div>
  );
};

export default MainContainer;
