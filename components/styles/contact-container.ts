import styled from 'styled-components';

export const ContactContainer = styled.div`
  display: flex;

  @media only screen and (max-width: 768px) {
    flex-direction: column;

    #title {
      margin-top: 52px;
    }

    #svg-image {
      width: 240px;
      margin: 52px auto;
    }

  }
`;