import { IntroContainer, SocialMedia, AlignLogo, ToggleContainer } from '../styles/intro'
import { FaGithub, FaTwitter, FaLinkedinIn } from 'react-icons/fa';
import { ButtonContainer, Button } from '../styles/button';
import Link from 'next/link';
import Image from 'next/image';

const Intro = () => {
  return (
    <ToggleContainer>
      <input id="toggle" type="checkbox" />
      <label htmlFor="toggle"></label>
      <IntroContainer>
        <AlignLogo>
          <Image src='https://imgur.com/rgZI9dv.png' className="logo-img" width={52} height={72} alt="Logo" />
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
          <a href="#"><FaGithub size={32} /></a>
          <a href="#"><FaTwitter size={32} /></a>
          <a href="#"><FaLinkedinIn size={32} /></a>
        </SocialMedia>
      </IntroContainer>
    </ToggleContainer>
  )
}

export default Intro;
