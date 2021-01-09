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
    /* visibility: hidden; */
  }
`;

export const TitleContainer = styled.div`
  position: absolute;
  bottom: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0;
  width: 100%;

  h3 {
    font-family: 'Montserrat', sans-serif;
    font-size: 32px;
    font-weight: 800;
    width: 100%;
    text-align: center;
    word-wrap: break-word;

     a {       
      width: 100%;
      text-align: center;
     }
  }
  
  @media only screen and (max-width: 1000px) {
    position: absolute;
    bottom: 0;
    justify-content: flex-end;

   h3 {
     font-size: 1.5rem;
     text-align: center;
     line-height: 2rem;
     word-wrap: break-word;

     a {       
      width: 100%;
      text-align: center;
     }
   }
   div {
     display: none;
   } 
   time, small {
     font-size: 0.5rem;
     line-height: 0.5rem;
   }
  }

  @media only screen and (max-width: 768px) {
    position: absolute;
    bottom: 0;
    justify-content: flex-end;

   h3 {
     font-size: 1rem;
     text-align: center;
     line-height: 1.25rem;
     word-wrap: break-word;

     a {       
      width: 100%;
      text-align: center;
     }
   }
   div {
     display: none;
   } 
   time, small {
     font-size: 0.5rem;
     line-height: 0.5rem;
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