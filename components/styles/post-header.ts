import styled from 'styled-components';

export const PostHeaderContainer = styled.header`
margin: 32px;

@media only screen and (max-width: 768px) {
    h1 {
      font-size: 2rem;
    }
  }
`;

export const ImageContainer = styled.div`
  background: #252422;
  justify-content: center;
  border-radius: 8px;
  display: flex;
  height: 240px;
  width: 100%;
  overflow: hidden;
  position: relative;
  margin-bottom: 24px;

  img {
    width: 100%;
  }

  @media only screen and (max-width: 768px) {
    margin: 0 0 2rem 0;
  }

  @media only screen and (min-width: 1025px) {
    height: 320px;
    img {
      height: 320px;
    }
  }

`;

export const ImageMask = styled.div`
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1));
  width: 100%;
  height: 100%;
  position: absolute;

  @media only screen and (max-width: 768px) {
    visibility: hidden;
    position: absolute;
  }
`;

export const TitleContainer = styled.div`
  position: absolute;
  bottom: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;

  h3 {
    font-family: 'Montserrat', sans-serif;
    font-size: 32px;
    font-weight: 800;
  }
`;