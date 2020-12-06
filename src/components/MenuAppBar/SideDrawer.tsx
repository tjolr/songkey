import React, { useState } from 'react';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import { Routes } from '../../pages/routes';
import { Button, Typography } from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';
import MusicNoteIcon from '@material-ui/icons/MusicNote';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: theme.spacing(2),
    },
    title: {
      textAlign: 'center',
      marginBottom: theme.spacing(2),
    },
    button: {
      margin: theme.spacing(0),
    },
    link: {
      textDecoration: 'none',
    },
    linkList: {
      display: 'flex',
      flexDirection: 'column',
    },
  })
);

interface SideDrawerProps {
  drawerOpen: boolean;
  setDrawerOpen: Function;
  matchActivePath: Function;
}

const SideDrawer = ({
  drawerOpen,
  setDrawerOpen,
  matchActivePath,
}: SideDrawerProps) => {
  const classes = useStyles();

  const toggleDrawer = (open: boolean) => (
    event: React.KeyboardEvent | React.MouseEvent
  ) => {
    setDrawerOpen(open);
  };

  return (
    <SwipeableDrawer
      anchor="right"
      open={drawerOpen}
      onOpen={toggleDrawer(true)}
      onClose={toggleDrawer(false)}
    >
      <div className={classes.root}>
        <Typography variant="h6" className={classes.title}>
          Pages
        </Typography>
        <div className={classes.linkList}>
          <Link
            to={Routes.Home}
            className={classes.link}
            onClick={toggleDrawer(false)}
          >
            <Button
              color={matchActivePath(Routes.Home) ? 'primary' : 'default'}
              className={classes.button}
              startIcon={<HomeIcon />}
            >
              Home
            </Button>
          </Link>

          <Link
            to={Routes.Transitionkey}
            className={classes.link}
            onClick={toggleDrawer(false)}
          >
            <Button
              color={
                matchActivePath(Routes.Transitionkey) ? 'primary' : 'default'
              }
              className={classes.button}
              startIcon={<MusicNoteIcon />}
            >
              Transitionkey
            </Button>
          </Link>
        </div>
      </div>
    </SwipeableDrawer>
  );
};

export default SideDrawer;
