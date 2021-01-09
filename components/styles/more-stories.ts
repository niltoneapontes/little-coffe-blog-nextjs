import styled from 'styled-components';

export const MoreStoriesContainer = styled.section`
  margin: 52px 32px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 0;
  word-wrap: break-word;
  width: 85%;

  @media(min-width: 520px) {
    width: calc(100% - 64px);
  }

  img {
    width: 100%;
  }
`;