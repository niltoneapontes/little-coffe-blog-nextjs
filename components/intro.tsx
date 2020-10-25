import { IntroContainer, SocialMedia } from './sc/intro'
import { FaInstagramSquare, FaTwitterSquare, FaLinkedin } from 'react-icons/fa';

const Intro = () => {
  return (
    <IntroContainer>
      <h1>
          Little Coffee
      </h1>

    <SocialMedia>
      <a href="#"><FaInstagramSquare size={24}/></a>
      <a href="#"><FaTwitterSquare size={24}/></a>
      <a href="#"><FaLinkedin size={24}/></a>
    </SocialMedia>
    </IntroContainer>
  )
}

export default Intro
