import styled from 'styled-components';

export const IntroContainer = styled.aside`
  width: 260px;
  height: 100vh;
  display: flex;
  border-bottom-right-radius: 24px;
  flex-direction: column;
  font-size: 32px;
  font-family: 'Roboto', sans-serif;
  align-items: center;
  justify-content: space-around;
  background: #403d39;
  margin: 0 0 24px 0;
  text-align: center;
  color: #FFB800;
  box-shadow: 2px 2px 8px 2px rgba(0, 0, 0, 0.25);

  @media only screen and (max-width: 768px) {
    width: 100%;
  }

  h1 {
    font-size: 32px;
    margin: 12px 32px 0 32px;
  }
`;

export const AlignLogo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const SocialMedia = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;

  a + a {
    margin-left: 24px;
  }

  svg {
    color: #CCC5B9;
  }

  svg:hover {
    filter: brightness(80%);
  }
`;