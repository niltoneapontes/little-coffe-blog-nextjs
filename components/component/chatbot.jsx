import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';

const theme = {
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
      gender: '',
      age: '',
    };
  }

  componentWillMount() {
    const { steps } = this.props;
    const { name, gender, age } = steps;

    this.setState({ name, gender, age });
  }

  render() {
    const { name, gender, age } = this.state;
    return (
      <div style={{ width: '100%' }}>
        <h1>Summary</h1>
        <table>
          <tbody>
            <tr>
              <td>Name</td>
              <td>{name.value}</td>
            </tr>
            <tr>
              <td>Gender</td>
              <td>{gender.value}</td>
            </tr>
            <tr>
              <td>Age</td>
              <td>{age.value}</td>
            </tr>
          </tbody>
        </table>
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
  render() {
    return (
      <ThemeProvider theme={theme}>
        <ChatBot
        floating='true'
          steps={[
            {
              id: '1',
              message: 'Faaala... Qual o seu nome, mesmo?',
              trigger: 'name',
            },
            {
              id: 'name',
              user: true,
              trigger: '3',
            },
            {
              id: '3',
              message: 'Faaala {previousValue}! Qual seu gênero?',
              trigger: 'gender',
            },
            {
              id: 'gender',
              options: [
                { value: 'masc', label: 'Masculino', trigger: '5' },
                { value: 'femin', label: 'Feminino', trigger: '5' },
                { value: 'non-binary', label: 'Não-binário', trigger: '5' },
                { value: 'not-informed', label: 'Prefiro não informar', trigger: '5' },
              ],
            },
            {
              id: '5',
              message: 'Qual a sua idade?',
              trigger: 'age',
            },
            {
              id: 'age',
              user: true,
              trigger: '7',
              validator: (value) => {
                if (isNaN(value)) {
                  return 'Deve ser um número';
                } else if (value < 0) {
                  return 'Deve ser positivo';
                } else if (value > 150) {
                  return `${value}? Sério?!`;
                }

                return true;
              },
            },
            {
              id: '7',
              message: 'Confere pra mim, por favor:',
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
              message: 'Gostaria de mudar alguma informação?',
              trigger: 'update-question',
            },
            {
              id: 'update-question',
              options: [
                { value: 'yes', label: 'Sim', trigger: 'update-yes' },
                { value: 'no', label: 'Não', trigger: 'end-message' },
              ],
            },
            {
              id: 'update-yes',
              message: 'Qual informação?',
              trigger: 'update-fields',
            },
            {
              id: 'update-fields',
              options: [
                { value: 'name', label: 'Nome', trigger: 'update-name' },
                { value: 'gender', label: 'Gênero', trigger: 'update-gender' },
                { value: 'age', label: 'Idade', trigger: 'update-age' },
              ],
            },
            {
              id: 'update-name',
              update: 'name',
              trigger: '7',
            },
            {
              id: 'update-gender',
              update: 'gender',
              trigger: '7',
            },
            {
              id: 'update-age',
              update: 'age',
              trigger: '7',
            },
            {
              id: 'end-message',
              message: 'Obrigado, suas informações foram enviadas!',
              end: true,
            },
          ]}
        />
      </ThemeProvider>
    );
  }
}

export default SimpleForm;