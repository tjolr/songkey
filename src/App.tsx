import React from 'react';
import firebase from './fire';
import {ThemeProvider} from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from './theme';
import MenuAppBar from './components/MenuAppBar/MenuAppBar';
import {Container} from '@material-ui/core';
import MainContainer from './components/MainContent/MainContainer';

const App = () => {
  firebase.analytics().logEvent('App tsx rendered');
  return (
    <div
      style={{
        background: 'url(https://wallpapercave.com/wp/wp214076.jpg)',
        backgroundOrigin: 'center',
        backgroundSize: 'cover',
        minHeight: '100vh',
        height: '100%',
      }}
    >
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <MenuAppBar />
        <Container>
          <MainContainer />
        </Container>
      </ThemeProvider>
    </div>
  );
};

export default App;
