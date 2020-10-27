import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 32px 32px 52px 32px;
`;

export const ImageContainer = styled.div`
  background: #252422;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  display: flex;
  height: 320px;
  width: 100%;
  overflow: hidden;
  position: relative;
  margin-bottom: 24px;

  img {
    width: 100%;
    transition: all .3s ease-in-out;

  }

  &:hover img {
    transform: scale(1.1);
  }
`;

export const ImageMask = styled.div`
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1));
  width: 100%;
  height: 100%;
  position: absolute;
`;

export const TitleContainer = styled.div`
  position: absolute;
  bottom: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 2rem;

  h3 {
    font-family: 'Montserrat', sans-serif;
    font-size: 32px;
    font-weight: 800;
  }


  @media only screen and (max-width: 768px) {
   h3 {
     font-size: 1.5rem;
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
`;