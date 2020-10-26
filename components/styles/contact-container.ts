import styled from 'styled-components';

export const ContactContainer = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0;
  margin: 0;
`;

export const Background = styled.div`  
  z-index: -1;
  position: absolute;

  img {
    width: 100%;
    height: 100%;
  }
`;