import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import logo from '../../assets/logodetalhe.svg';

import { Container } from './styles';

const schema = Yup.object().shape({
  email: Yup.string()
    .email('Insira um e-mail válido')
    .required('O e-mail é obrigatório'),
  cpf: Yup.string()
    .min(10, 'Seu CPF é muito curto')
    .required('O CPF é obrigatório'),
  password: Yup.string()
    .min(6, 'A senha precisa ter no mínimo 6 números')
    .required('A senha é obrigatória'),
});

export default function SignUp() {
  function handleSubmit(data) {
    console.log(data);
  }

  return (
    <Container>
      <div>
        <img src={logo} alt="CashBack" />
        <Form schema={schema} onSubmit={handleSubmit}>
          <h2>Cadastrar</h2>
          <h4>Olá revendedor(a), crie sua conta.</h4>
          <Input name="email" type="email" placeholder="Seu e-mail" />
          <Input name="cpf" type="cpf" placeholder="Seu cpf" />
          <Input name="password" type="password" placeholder="Sua Senha" />

          <button type="submit">Cadastrar</button>
        </Form>

        <span>
          Já tem uma conta? <Link to="/">Acessar</Link>
        </span>
      </div>
    </Container>
  );
}
