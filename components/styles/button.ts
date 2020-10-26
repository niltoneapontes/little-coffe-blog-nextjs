import styled from 'styled-components';

export const ButtonContainer = styled.div`
  width: 100%;
`;

export const Button = styled.button`
  cursor: pointer;
  border-radius: 16px;
  width: 70%;
  background-color: #252422;
  border: 1px solid #252422;
  color: #CCC5B9;
  font-family: 'Montserrat', sans-serif;
  font-size: 16px;
  font-weight: 700;
  padding: 15px;

  & + button {
    margin-top: 12px;
  }

  &:hover {
    border: 1px solid #FFB800;
  }
`;