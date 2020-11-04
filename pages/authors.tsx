import Layout from '@/components/component/layout'
import Container from '@/components/component/container'
import Intro from '@/components/component/intro'
import { MainContainer, Author } from '@/components/styles/authors';
import SimpleForm from '@/components/component/chatbot';

const Authors = () => {

  return (
    <Layout>
    <Container>
      <Intro />
      <MainContainer className="mb-32">
        <Author>
          <div>
            <h1>Nilton Pontes</h1>
            <p>Desenvolvedor Front-end</p>
            <p>Pernambucano</p>
            <p>Tenho um gato e amo música</p>
          </div>
          <img src="/assets/perfil.jpg" alt="Author"/>
        </Author>

        <Author>
          <div>
            <h1>Tairine Ellen</h1>
            <p>Desenvolvedora Back-end</p>
            <p>Cearense</p>
            <p>Tenho um gato e amo livros e séries</p>
          </div>
          <img src="/assets/perfilTatahAuto.jpg" alt="Author"/>
        </Author>

      </MainContainer>
    </Container>
    <SimpleForm />
    </Layout>
  )

}

export default Authors;