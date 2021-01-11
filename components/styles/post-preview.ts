import styled from 'styled-components';

export const PostPreviewContainer = styled.section`
  background-color: #403d39;
  border-radius: 8px;
  border: 1px solid #403d39;
  padding: 2rem;
  box-shadow: 2px 2px 8px 2px rgba(0, 0, 0, 0.25);

  &:hover {
    border: 1px solid #FFB800;
  }

  h3 {
    font-family: 'Montserrat', sans-serif;
    font-size: 32px;
    font-weight: 800;

    a {
      font-family: 'Montserrat', sans-serif;
      font-size: 32px;
      font-weight: 800;
    }
  
  }
`;