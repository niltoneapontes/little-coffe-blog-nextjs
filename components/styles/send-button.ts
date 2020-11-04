import styled from 'styled-components';

export const SendButton = styled.button`
  cursor: pointer;
  border-radius: 16px;
  width: 50%;
  background-color: #FFB800;
  box-shadow: 2px 2px 8px 2px rgba(0, 0, 0, 0.25);
  color: #252422;
  font-family: 'Montserrat', sans-serif;
  font-size: 16px;
  font-weight: 700;
  padding: 16px;
  margin-top: 24px;

  &:hover {
    filter: brightness(80%)
  }
`;