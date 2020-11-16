import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Chatbot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';
import { useFetch } from '@/lib/fetcher';

const botTheme = {
  background: '#252422',
  fontFamily: 'Montserrat, sans-serif',
  headerBgColor: '#FFB800',
  headerFontColor: '#252422',
  headerFontSize: '15px',
  botBubbleColor: '#FFB800',
  botFontColor: '#252422',
  userBubbleColor: '#403d39',
  userFontColor: '#fff',
};

class Review extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      email: '',
      phone: '',
      message: '',
      rank: 0,
    };
  }

  componentWillMount() {
    const { steps } = this.props;
    const { name, email, phone, message } = steps;
    this.setState({ name, email, phone, message });
  }

  render() {
    const { name, email, phone, message } = this.state;
    return (
      <div style={{ minWidth: 147}}>
        <strong>Informações</strong>
        <hr></hr>
        <strong>Nome:</strong>
        <p>{name.value}</p>
        <strong>E-mail:</strong>
        <p>{email.value}</p>
        <strong>Telefone:</strong>
        <p>{phone.value}</p>
        <strong>Mensagem:</strong>
        <p>{message.value}</p>
      </div>
    );
  }
}

Review.propTypes = {
  steps: PropTypes.object,
};

Review.defaultProps = {
  steps: undefined,
};

class SimpleForm extends Component {

  constructor(props) {
    super(props);

    //FAKE SERVER
    this.handleSubmit = (steps, values) => {
      const { name, email, phone, message } = steps.steps;

      fetch("https://teste/", {
        method: "POST",
        body: JSON.stringify({
          name: name.value,
          email: email.value,
          phone: phone.value,
          message: message.value,
        }),
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      })
        .then((response) => response.json())
        .catch((error) => console.log(error));
    };
  }

  render() {
    return (
      <ThemeProvider theme={botTheme}>
        <Chatbot
          avatarStyle={{border: 'none', boxShadow: 'none'}}
          botAvatar={'/assets/square.jpg'}
          botDelay={1500}
          bubbleStyle={{ wordWrap: 'break-word' }}
          style={{borderRadius: 10, dropShadow: 'box-shadow: 0px 4px 4px 0px #202020 20%'}}
          floating='true'
          handleEnd={(steps) => this.handleSubmit(steps)}
          headerTitle='Chat LittleCoffee'
          hideUserAvatar={true}
          placeholder='Mensagem'
          steps={[
            {
              id: '1',
              message: 'Olá. tudo bem?',
              trigger: '1-2',
            },
            {
              id: '1-2',
              message: 'Quero saber mais sobre você. Qual o seu nome?',
              trigger: 'name',
            },
            {
              id: 'name',
              user: true,
              validator: (value) => {
                if (value === '') {
                  return 'Opa... Você esqueceu de preencher';
                }
                return true;
              },
              trigger: '3',
            },
            {
              id: '3',
              message: ({ previousValue, steps }) => {
                const completeName = previousValue.split(' ');
                const firstName = completeName[0];
                return `Bom falar com você ${firstName}, espero poder lhe ajudar.`;
              },
              trigger: '5',
            },
            {
              id: '5',
              message: 'Através de qual email podemos entrar em contato com você?',
              trigger: 'email',
            },
            {
              id: 'email',
              user: true,
              validator: (value) => {
                const valueArray = value.split('');
                const indexAt = valueArray.indexOf('@');
                if (indexAt === -1) {
                  return 'O e-mail deve conter "@"';
                }
                return true;
              },
              trigger: '6',
            },
            {
              id: '6',
              message: 'Estamos quase lá, qual o seu número para contato?',
              trigger: 'phone',
            },
            {
              id: 'phone',
              user: true,
              validator: (value) => {
                const regex = /(\(?\d{2}\)?\s?)(\d{4,5}\-?\d{4})/g;
                const result = regex.test(value);
                if (!result) {
                  return 'Digite um telefone válido com DDD';
                }
                return true;
              },
              trigger: 'message-question',
            },
            {
              id: 'message-question',
              message: 'Massa! Pode escrever a mensagem que você deseja enviar',
              trigger: 'message',
            },
            {
              id: 'message',
              user: true,
              validator: (value) => {
                if (value === '') {
                  return 'Opa... Você esqueceu de preencher';
                }
                return true;
              },
              trigger: 'check',
            },
            {
              id: 'check',
              message: 'Pronto, antes de prosseguir poderia verificar se as suas informações estão corretas?',
              trigger: 'review',
            },
            {
              id: 'review',
              component: <Review />,
              asMessage: true,
              trigger: 'update',
            },
            {
              id: 'update',
              message: 'Gostaria de alterar alguma informação?',
              trigger: 'update-question',
            },
            {
              id: 'update-question',
              options: [
                { value: 'yes', label: 'Sim, algo está errado', trigger: 'update-yes' },
                { value: 'no', label: 'Não, tudo ok', trigger: 'check-whatsapp' },
              ],
            },
            {
              id: 'update-yes',
              message: 'Qual dos campos deseja modificar?',
              trigger: 'update-fields',
            },
            {
              id: 'update-fields',
              options: [
                { value: 'name', label: 'Nome', trigger: 'update-name-question' },
                { value: 'email', label: 'E-mail', trigger: 'update-email-question' },
                { value: 'phone', label: 'Telefone', trigger: 'update-phone-question' },
                { value: 'message', label: 'Mensagem', trigger: 'update-message-question' },
              ],
            },
            {
              id: 'update-name-question',
              message: 'Tudo bem, pode digitar o seu nome:',
              trigger: 'update-name',
            },
            {
              id: 'update-name',
              update: 'name',
              trigger: 'check',
            },
            {
              id: 'update-email-question',
              message: 'Tudo bem, pode digitar o seu e-mail:',
              trigger: 'update-email',
            },
            {
              id: 'update-email',
              update: 'email',
              trigger: 'check',
            },
            {
              id: 'update-phone-question',
              message: 'Tudo bem, pode digitar o seu telefone:',
              trigger: 'update-phone',
            },
            {
              id: 'update-phone',
              update: 'phone',
              trigger: 'check',
            },
            {
              id: 'update-message-question',
              message: 'Tudo bem, pode digitar sua mensagem:',
              trigger: 'update-message',
            },
            {
              id: 'update-message',
              update: 'message',
              trigger: 'check',
            },
            {
              id: 'check-whatsapp',
              message: ({ previousValue, steps }) => {
                const completeName = steps.name.value.split(' ');
                const firstName = completeName[0];
                return `Certo ${firstName}, suas informações foram enviadas!`;
              },
              trigger: 'check-whatsapp-2',
            },
            {
              id: 'check-whatsapp-2',
              message: 'Caso queira, posso te direcionar ao nosso WhatsApp. :)',
              trigger: 'check-whatsapp-3',
            },
            {
              id: 'check-whatsapp-3',
              message: 'O que você deseja fazer?',
              trigger: 'whatsapp-question',
            },
            {
              id: 'whatsapp-question',
              options: [
                { value: 'yes', label: 'Ir para WhatsApp', trigger: 'go-to-whatsapp' },
                { value: 'no', label: 'Finalizar atendimento', trigger: '7' },
              ],
            },
            {
              id: 'go-to-whatsapp',
              message: ({ previousValue, steps }) => {
                window.open("https://wa.me/+558199830-0867");
                return `Abrindo WhatsApp...`;
              },
              trigger: '7-0',
            },
            {
              id: '7-0',
              component: <p>Caso você não tenha sido redirecionado, <a href="https://wa.me/+558199830-0867" target="_blank">clique aqui</a>.</p>,
              asMessage: true,
              trigger: '7-1',
            },
            {
              id: '7',
              message: 'Foi muito bom bater um papo com você.',
              trigger: '7-1',
            },
            {
              id: '7-1',
              message: 'Então de 1 a 5, qual nota você daria pelo meu atendimento?',
              trigger: 'rank',
            },
            {
              id: 'rank',
              user: true,
              validator: (value) => {
                if (isNaN(value) || value === '' || value > 5 || value < 1) {
                  return 'Digite uma nota de 1 a 5';
                }
                return true;
              },
              trigger: 'end-message',
            },

            {
              id: 'end-message',
              message: ({ previousValue, steps }) => {
                const completeName = steps.name.value.split(' ');
                const firstName = completeName[0];
                return `Obrigade! Até uma próxima, ${firstName}.`
              },
              end: true,
            },
          ]}
        />
      </ThemeProvider>
    );
  }
} 

export default SimpleForm;