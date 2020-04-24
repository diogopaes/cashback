import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';

import logo from '../../assets/logodetalhe.svg';

import { Container } from './styles';

export default function SignIn() {
  function handleSubmit(data) {
    console.log(data);
  }

  return (
    <Container>
      <div>
        <img src={logo} alt="CashBack" />
        <Form onSubmit={handleSubmit}>
          <h2>Acessar</h2>
          <h4>
            Olá revendedor(a), aqui você podera cadastrar suas compras e
            visualizar seu cashback.
          </h4>
          <Input name="email" type="email" placeholder="Seu e-mail" />
          <Input name="password" type="password" placeholder="Sua Senha" />

          <button type="submit">Acessar</button>
        </Form>

        <span>
          Ainda não tem conta? <Link to="/signup">Criar agora</Link>
        </span>
      </div>
    </Container>
  );
}
