import React, { useState } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import HomeIcon from '@material-ui/icons/Home';
import MusicNoteIcon from '@material-ui/icons/MusicNote';
import GraphicEqIcon from '@material-ui/icons/GraphicEq';

import { Button, useMediaQuery, useTheme, Container } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { Routes } from '../../pages/routes';
import { useLocation } from 'react-router-dom';
import SideDrawer from './SideDrawer';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      color: 'white',
    },

    title: {
      flexGrow: 1,
    },
    button: {
      margin: theme.spacing(1),
    },
    link: {
      textDecoration: 'none',
    },
    toolbar: {
      paddingLeft: 0,
      paddingRight: 0,
    },
  })
);

export default function MenuAppBar() {
  const classes = useStyles();
  const theme = useTheme();

  const isMobileScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const [drawerOpen, setDrawerOpen] = useState(false);

  const location = useLocation();

  const matchActivePath = (route: Routes) => {
    return route === location.pathname;
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color="transparent" elevation={0}>
        <Container>
          <Toolbar className={classes.toolbar}>
            <GraphicEqIcon style={{ marginRight: '0.3rem' }} />
            <Typography variant="h6" className={classes.title}>
              Songkey
            </Typography>

            {isMobileScreen ? (
              <IconButton
                edge="start"
                color="inherit"
                aria-label="menu"
                onClick={() => setDrawerOpen(true)}
              >
                <MenuIcon />
              </IconButton>
            ) : (
              <div>
                <Link to={Routes.Home} className={classes.link}>
                  <Button
                    color={matchActivePath(Routes.Home) ? 'primary' : 'default'}
                    className={classes.button}
                    startIcon={<HomeIcon />}
                  >
                    Home
                  </Button>
                </Link>

                <Link to={Routes.Transitionkey} className={classes.link}>
                  <Button
                    color={
                      matchActivePath(Routes.Transitionkey)
                        ? 'primary'
                        : 'default'
                    }
                    className={classes.button}
                    startIcon={<MusicNoteIcon />}
                  >
                    Transitionkey
                  </Button>
                </Link>
              </div>
            )}
          </Toolbar>
        </Container>
      </AppBar>

      <SideDrawer
        drawerOpen={drawerOpen}
        setDrawerOpen={setDrawerOpen}
        matchActivePath={matchActivePath}
      />
    </div>
  );
}
