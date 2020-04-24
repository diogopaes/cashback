import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../assets/logodetalhe.svg';

import { Container } from './styles';

export default function SignIn() {
  return (
    <Container>
      <div>
        <img src={logo} alt="CashBack" />
        <form>
          <h2>Acessar</h2>
          <h4>
            Olá revendedor(a), aqui você podera cadastrar suas compras e
            visualizar seu cashback.
          </h4>
          <input type="email" placeholder="Seu e-mail" />
          <input type="password" placeholder="Sua Senha" />

          <button type="submit">Acessar</button>
        </form>

        <span>
          Ainda não tem conta? <Link to="/signup">Criar agora</Link>
        </span>
      </div>
    </Container>
  );
}
