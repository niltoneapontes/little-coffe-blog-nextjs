import Layout from '@/components/component/layout'
import Container from '@/components/component/container'
import Intro from '@/components/component/intro'
import { Input } from '@/components/styles/input';
import { SendButton } from '@/components/styles/send-button';
import { TextArea } from '@/components/styles/text-area';
import { ContactContainer, Background } from '@/components/styles/contact-container';

const Contact = () => {

  return (
      <Layout>
        <Container>
          <Intro />
          <ContactContainer className="mb-32">
            <h1 style={{marginBottom: 24, color: '#FFB800', fontSize: 24, fontFamily: 'Montserrat, sans-serif'}}>Entre em contato</h1>
            <Input placeholder="Nome"/>
            <Input placeholder="E-mail"/>
            <TextArea placeholder="Mensagem"/>
            <SendButton>Enviar</SendButton>
          </ContactContainer>
        </Container>
      </Layout>
  )

}

export default Contact;