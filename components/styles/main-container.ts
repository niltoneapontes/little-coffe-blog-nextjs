import styled from 'styled-components';

export const MainContainer = styled.main`
  width: calc(100% - 260px);

  @media only screen and (max-width: 768px) {
    width: 100%;
    padding: 2.5rem .5rem 0;
  }
`;