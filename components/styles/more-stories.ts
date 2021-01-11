import styled from 'styled-components';

export const MoreStoriesContainer = styled.section`
  margin: 52px 32px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 0;
  width: 100%;


  @media only screen and (max-width: 768px) {
    margin: 32px 0 52px;
  }

  @media(min-width: 768px) {
    width: calc(100% - 64px);
  }

  img {
    width: 100%;
  }
`;