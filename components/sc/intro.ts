import styled from 'styled-components';

export const IntroContainer = styled.section`
  width: 100%;
  height: 140px;
  display: flex;
  border-bottom-left-radius: 24px;
  border-bottom-right-radius: 24px;
  font-size: 2rem;
  font-family: 'Roboto Slab', sans-serif;
  align-items: center;
  justify-content: space-around;
  background: #403d39;
  margin: 0 0 24px 0;
`;

export const SocialMedia = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;

  a + a {
    margin-left: 24px;
  }

  svg:hover {
    filter: brightness(80%);
  }
`;