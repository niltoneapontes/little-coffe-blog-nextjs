import styled from 'styled-components';

export const TextArea = styled.textarea`
  background-color: #403D39;
  box-shadow: 2px 2px 8px 2px rgba(0, 0, 0, 0.25);
  border-radius: 16px;
  width: 50%;
  color: #CCC5B9;
  font-size: 16px;
  padding: 12px;
  margin-top: 12px;
   
  &::placeholder {
    color: #CCC5B9;
    opacity: 0.5;
  }
`;