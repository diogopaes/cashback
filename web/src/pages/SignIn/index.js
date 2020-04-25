import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import { signInRequest } from '../../store/modules/auth/actions';

import logo from '../../assets/logodetalhe.svg';

import { Container } from './styles';

const schema = Yup.object().shape({
  email: Yup.string()
    .email('Insira um e-mail válido')
    .required('O e-mail é obrigatório'),
  password: Yup.string()
    .min(6, 'A senha precisa ter no mínimo 6 números')
    .required('A senha é obrigatória'),
});

export default function SignIn() {
  const dispatch = useDispatch();

  function handleSubmit({ email, password }) {
    dispatch(signInRequest(email, password));
  }

  return (
    <Container>
      <div>
        <img src={logo} alt="CashBack" />
        <Form schema={schema} onSubmit={handleSubmit}>
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
