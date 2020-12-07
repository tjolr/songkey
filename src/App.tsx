import React from 'react';
import firebase from './fire';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from './theme';
import MenuAppBar from './components/MenuAppBar/MenuAppBar';
import { Container } from '@material-ui/core';
import MainContainer from './components/MainContent/MainContainer';
import { Switch, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import HomePage from './pages/HomePage/HomePage';
import { Routes } from './pages/routes';

const App = () => {
  firebase.analytics().logEvent('App tsx rendered');

  const location = useLocation();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <MenuAppBar />

      <Container>
        <AnimatePresence exitBeforeEnter>
          <Switch location={location} key={location.pathname}>
            <Route path={Routes.Transitionkey}>
              <MainContainer />
            </Route>
            <Route path={Routes.Home}>
              <HomePage />
            </Route>
          </Switch>
        </AnimatePresence>
      </Container>
    </ThemeProvider>
  );
};

export default App;
