import styled from 'styled-components';

export const TextArea = styled.textarea`
  background-color: #403D39;
  border-radius: 16px;
  width: 30%;
  color: #CCC5B9;
  font-size: 16px;
  padding: 12px;
  margin-top: 12px;
   
  &::placeholder {
    color: #CCC5B9;
    opacity: 0.5;
  }
`;