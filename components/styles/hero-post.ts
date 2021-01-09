import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 32px 32px 52px 32px;
  word-wrap: break-word;
`;

export const ImageContainer = styled.div`
  background: #252422;
  justify-content: center;
  border-radius: 8px;
  display: flex;
  width: 100%;
  overflow: hidden;
  position: relative;
  margin-bottom: 24px;

  img {  
    transition: all .3s ease-in-out;
  }

  @media only screen and (min-width: 1025px) {

    &:hover img {
      transform: scale(1.1);
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
  }
`;

export const TitleContainer = styled.div`
  position: absolute;
  bottom: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0;

  h3 {
    font-family: 'Montserrat', sans-serif;
    font-size: 32px;
    font-weight: 800;
  }


  @media only screen and (max-width: 768px) {
   h3 {
     font-size: 2rem;
     text-align: center;
   } 
  }
`;

export const InfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;

  p {
    max-width: 50%;
  }

  @media only screen and (max-width: 768px) {
    flex-direction: column;

    p {
      max-width: 100%;
    }
  }
`;