import React from 'react';
import styled from 'styled-components';

const MobileContainer = styled.div`
  width: 375px;
  height: 812px;
  background-color: #000000;
  border-radius: 40px;
  display: flex;
  flex-direction: column;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
  position: relative;
  overflow: hidden;
  border: 12px solid #1a1a1a;
`;

const Header = styled.div`
  color: #ffffff;
  font-size: 28px;
  font-weight: 600;
  text-align: center;
  padding: 20px;
  line-height: 1.4;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  border-bottom: 1px solid #333;
`;

const ScrollContainer = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 20px;
  
  &::-webkit-scrollbar {
    width: 6px;
  }
  
  &::-webkit-scrollbar-track {
    background: #1a1a1a;
  }
  
  &::-webkit-scrollbar-thumb {
    background: #333;
    border-radius: 3px;
  }
`;

const Confession = styled.div`
  color: #ffffff;
  font-size: 16px;
  margin-bottom: 20px;
  padding: 15px;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 10px;
  line-height: 1.5;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`;

const Footer = styled.div`
  color: #666666;
  font-size: 12px;
  text-align: center;
  padding: 15px;
  border-top: 1px solid #333;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`;

const MobileScreen = () => {
  const confessions = [
    "Every time I see your smile, my heart skips a beat.",
    "You make my world complete in ways I never thought possible.",
    "Your love is the greatest gift I've ever received.",
    "I fall in love with you more and more each day.",
    "You're the first thing I think about when I wake up.",
    "Your presence makes everything better.",
    "I cherish every moment we spend together.",
    "You're my favorite hello and my hardest goodbye.",
    "My heart belongs to you, now and forever.",
    "You make me want to be a better person.",
    "Your love gives me strength I never knew I had.",
    "I'm so grateful to have you in my life.",
    "You're the missing piece I've been searching for.",
    "Your love makes me feel complete.",
    "I can't imagine my life without you.",
    "You're my everything, my world, my heart.",
    "Every day with you is a blessing.",
    "Your love is my greatest treasure.",
    "I'm so lucky to call you mine.",
    "You make my heart sing with joy.",
    "Your love is the best part of my day.",
    "I'm forever grateful for your love.",
    "You're the reason I believe in love.",
    "My heart beats only for you.",
    "You're my favorite person in the whole world.",
    "Your love makes me feel invincible.",
    "I'm so proud to be yours.",
    "You're my dream come true.",
    "Your love is my safe haven.",
    "I'm so in love with you.",
    "You're my perfect match.",
    "Your love makes me whole.",
    "I'm so blessed to have you.",
    "You're my heart's desire.",
    "Your love is my greatest joy.",
    "I'm so happy to be yours.",
    "You're my everything.",
    "Your love is my strength.",
    "I'm so lucky to love you.",
    "You're my heart's home.",
    "Your love is my treasure.",
    "I'm so grateful for you.",
    "You're my perfect love.",
    "Your love is my blessing.",
    "I'm so in love with you.",
    "You're my heart's song.",
    "Your love is my peace.",
    "I'm so blessed to be yours.",
    "You're my heart's delight.",
    "Your love is my everything."
  ];

  return (
    <MobileContainer>
      <Header>
        I love you baby 💞
      </Header>
      <ScrollContainer>
        {confessions.map((confession, index) => (
          <Confession key={index}>
            {confession}
          </Confession>
        ))}
      </ScrollContainer>
      <Footer>
        © 2025 Akinloluwa
      </Footer>
    </MobileContainer>
  );
};

export default MobileScreen; 