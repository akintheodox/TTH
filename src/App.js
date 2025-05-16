import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import MobileScreen from './components/MobileScreen';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
`;

const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f0f0f0;
  overflow: hidden;
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <AppContainer>
        <MobileScreen />
      </AppContainer>
    </>
  );
}

export default App; 