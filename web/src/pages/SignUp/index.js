import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../assets/logodetalhe.svg';

import { Container } from './styles';

export default function SignUp() {
  return (
    <Container>
      <div>
        <img src={logo} alt="CashBack" />
        <form>
          <h2>Cadastrar</h2>
          <h4>Olá revendedor(a), crie sua conta.</h4>
          <input type="email" placeholder="Seu e-mail" />
          <input type="cpf" placeholder="Seu cpf" />
          <input type="password" placeholder="Sua Senha" />
          <input type="password" placeholder="Repetir Senha" />

          <button type="submit">Cadastrar</button>
        </form>

        <span>
          Já tem uma conta? <Link to="/">Acessar</Link>
        </span>
      </div>
    </Container>
  );
}
