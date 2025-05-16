import React from 'react';
import styled from 'styled-components';

const MobileContainer = styled.div`
  width: 375px;
  height: 812px;
  background-color: black;
  border-radius: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
  position: relative;
  overflow: hidden;
`;

const Message = styled.div`
  color: white;
  font-size: 24px;
  font-weight: 500;
  text-align: center;
  padding: 20px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`;

const MobileScreen = () => {
  return (
    <MobileContainer>
      <Message>
        I love you baby 💞
      </Message>
    </MobileContainer>
  );
};

export default MobileScreen; 