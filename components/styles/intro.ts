import styled from 'styled-components';

export const ToggleContainer = styled.div`
  input, label {
    visibility: hidden;
    position: absolute;
  }


  #toggle {
      visibility: hidden;
      z-index: 1;
    }

    label,
    label::before,
    label::after {
      position: absolute;
      width: 30px;
      height: 5px;
      border-radius: 5px;
      background-color: #FFB800;
      transition: all .6s;
      -webkit-transition: 0.6s;
      visibility: hidden;
    }

    label {
      cursor: pointer;
      top: 5%;
      left: 5%;
      z-index: 2;
      visibility: hidden;
    }

    label::before {
      content: "";
      transform: translateY(-10px);
    }

    label::after {
      content: "";
      transform: translateY(10px);
    }

    #toggle:checked + label {
      width: 0px;
    }

    #toggle:checked + label::before {
      transform: rotate(45deg) translate(0px);
      -webkit-transform: rotate(45deg) translate(0px);
    }

    #toggle:checked + label::after{
      transform: rotate(-45deg) translate(0px);
      -webkit-transform: rotate(-45deg) translate(0px);
    }

    input {
      visibility: visible;
    }

    #toggle:checked ~ aside{
      visibility: visible;
    }

    @media only screen and (max-width: 768px) {
      label,
      label::before,
      label::after {
        position: absolute;
        width: 30px;
        height: 5px;
        border-radius: 5px;
        background-color: #FFB800;
        transition: all .6s;
        -webkit-transition: 0.6s;
        visibility: visible;
      }

      label {
        cursor: pointer;
        top: 5%;
        left: 5%;
        z-index: 2;
        visibility: visible;
      }
    }

`;

export const IntroContainer = styled.aside`
  width: 260px;
  height: 100vh;
  display: flex;
  border-bottom-right-radius: 24px;
  flex-direction: column;
  font-size: 32px;
  font-family: 'Roboto', sans-serif;
  align-items: center;
  justify-content: space-around;
  background: #403d39;
  margin: 0 0 24px 0;
  text-align: center;
  color: #FFB800;
  box-shadow: 2px 2px 8px 2px rgba(0, 0, 0, 0.25);
  transition: all 0.3s ease-in-out;
  animation: enter 0.5s forwards;

  @keyframes enter {
    from {
      transform: translateX(-100%);
    }
    to {
      transform: translateX(0);
    }
  }


  @media only screen and (max-width: 768px) {

    & {
      position: absolute;
      z-index: 1;
      visibility: hidden;
    }
  }
  
  h1 {
    font-size: 32px;
    margin: 12px 32px 0 32px;
  }
`;

export const AlignLogo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const SocialMedia = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;

  a + a {
    margin-left: 24px;
  }

  svg {
    color: #CCC5B9;
  }

  svg:hover {
    filter: brightness(80%);
  }
`;