import React from 'react';
import styled from 'styled-components';
import MobileScreen from './components/MobileScreen';

const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f0f0f0;
`;

function App() {
  return (
    <AppContainer>
      <MobileScreen />
    </AppContainer>
  );
}

export default App; 