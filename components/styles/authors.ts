import styled from 'styled-components';


export const MainContainer = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  padding: 0;
  margin: 0;
`;

export const Author = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 52px 156px 0 0;

  & + section {
    margin-bottom: 52px;
  }

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

  @media only screen and (max-width: 768px) {
    & {
      margin: 52px 52px 0 0;
    }

    div {
    border-right: 8px solid #FFB800;
    text-align: right;
    padding: 24px;

      h1 {
        font-family: 'Montserrat', sans-serif;
        font-size: 24px;
        word-wrap: break-word;
      }

      p {
        font-family: 'Roboto', sans-serif;
        font-size: 14px;
      }
    }

    img {
      width: 140px;
    }
  }

  img {
    margin-left: 24px;
    width: 240px;
  }
`;