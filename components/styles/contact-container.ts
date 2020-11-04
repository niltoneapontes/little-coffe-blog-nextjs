import styled from 'styled-components';

export const ContactContainer = styled.div`
  background: url('https://imgur.com/e9jzOKN.png');
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;

  @media only screen and (max-width: 768px) {
    flex-direction: column;

    #title {
      margin-top: 52px;
    }
  }
`;