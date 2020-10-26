import styled from 'styled-components';


export const MainContainer = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0;
  margin: 0;
`;

export const Author = styled.section`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 52px;

  div {
    border-right: 8px solid #FFB800;
    text-align: right;
    padding: 24px;

    h1 {
      font-family: 'Montserrat', sans-serif;
      font-size: 56px;
      word-wrap: break-word;
    }

    p {
      font-family: 'Roboto', sans-serif;
      font-size: 16px;
    }
  }

  img {
    margin-left: 24px;
    width: 240px;
  }
`;