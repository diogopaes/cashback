import React from 'react';
import InputMask from 'react-input-mask';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import logo from '../../assets/logodetalhe.svg';

import { signUpRequest } from '../../store/modules/auth/actions';

import { Container } from './styles';

const schema = Yup.object().shape({
  name: Yup.string().required('O nome completo é obrigatório'),
  email: Yup.string()
    .email('Insira um e-mail válido')
    .required('O e-mail é obrigatório'),
  password: Yup.string()
    .min(6, 'A senha precisa ter no mínimo 6 números')
    .required('A senha é obrigatória'),
  cpf: Yup.string()
    .min(10, 'Seu CPF é muito curto')
    .required('O CPF é obrigatório'),
  username: Yup.string().required('O username é obrigatório'),
});

export default function SignUp() {
  const dispatch = useDispatch();

  function handleSubmit({ name, username, email, cpf, password }) {
    dispatch(signUpRequest(name, username, email, cpf, password));
  }

  return (
    <Container>
      <div>
        <img src={logo} alt="CashBack" />
        <Form schema={schema} onSubmit={handleSubmit}>
          <h2>Cadastrar</h2>
          <h4>Olá revendedor(a), crie sua conta.</h4>
          <Input name="name" type="text" placeholder="Seu Nome Completo" />
          <Input name="username" type="text" placeholder="Seu Username" />
          <Input name="email" type="email" placeholder="Seu e-mail" />
          <InputMask mask="999.999.999-99">
            {() => <Input name="cpf" type="text" placeholder="Seu cpf" />}
          </InputMask>
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
