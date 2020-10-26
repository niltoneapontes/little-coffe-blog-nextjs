import { IntroContainer, SocialMedia, AlignLogo } from '../styles/intro'
import { FaGithub, FaTwitter, FaLinkedinIn } from 'react-icons/fa';
import { ButtonContainer, Button } from '../styles/button';
import Link from 'next/link';
import logo from '@/public/assets/logo.png';

const Intro = () => {
  return (
    <IntroContainer>
      <AlignLogo>
        <img src={logo} alt="Logo" />
        <h1>
            Little Coffee
        </h1>
      </AlignLogo>
      
      <ButtonContainer>
        <Link href="/"><Button>Home</Button></Link>
        <Link href="/authors"><Button>Authors</Button></Link>
        <Link href="/contact"><Button>Contact</Button></Link>
        <Link href="https://open.spotify.com/playlist/1e1c2jKIvccmz9aVU6Kk8j"><Button>Playlist</Button></Link>
      </ButtonContainer>

      <SocialMedia>
        <a href="#"><FaGithub size={32}/></a>
        <a href="#"><FaTwitter size={32}/></a>
        <a href="#"><FaLinkedinIn size={32}/></a>
      </SocialMedia>
    </IntroContainer>
  )
}

export default Intro;
