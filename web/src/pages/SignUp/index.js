import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';

import logo from '../../assets/logodetalhe.svg';

import { Container } from './styles';

export default function SignUp() {
  function handleSubmit(data) {
    console.log(data);
  }

  return (
    <Container>
      <div>
        <img src={logo} alt="CashBack" />
        <Form onSubmit={handleSubmit}>
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
