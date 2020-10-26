import Layout from '@/components/component/layout'
import { ContactContainer } from '@/components/styles/contact-container'
import Intro from '@/components/component/intro'
import { Input } from '@/components/styles/input';
import { SendButton } from '@/components/styles/send-button';
import { TextArea } from '@/components/styles/text-area';
import { ContactContent } from '@/components/styles/contact-content';
import contact from '../public/assets/contact.svg';

const Contact = () => {

  return (
      <Layout>
        <ContactContainer>
          <Intro />
          <ContactContent className="mb-32">
            <h1 id="title" style={{marginBottom: 24, color: '#FFB800', fontSize: 24, fontFamily: 'Montserrat, sans-serif'}}>Entre em contato</h1>
            <Input placeholder="Nome"/>
            <Input placeholder="E-mail"/>
            <TextArea placeholder="Mensagem"/>
            <SendButton>Enviar</SendButton>
          </ContactContent>
          <img id="svg-image" src={contact} alt="Chat" width="320" style={{ marginRight: 104 }} />
        </ContactContainer>
      </Layout>
  )

}

export default Contact;