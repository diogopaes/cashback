import React from 'react';
import { useSelector } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';
import { FiUser } from 'react-icons/fi';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

import { Container, Content } from './styles';

export default function Profile() {
  const reseller = useSelector((state) => state.user.reseller);

  function handleSubmit(data) { }

  return (
    <>
      <Header />
      <Container>
        <Content>
          <div>
            <FiUser size={220} color="#333" />
            <span>
              <h2>Diogo Paes</h2>
              <h4>Atualize sua informações de perfil</h4>
            </span>
            {/* <img
              src="https://api.adorable.io/avatars/225/abott@adorable.png"
              alt=""
            /> */}
          </div>
          <Form initialData={reseller} onSubmit={handleSubmit}>
            <Input name="name" type="text" placeholder="Nome Completo" />
            <Input name="email" type="email" placeholder="e-mail" />

            <hr />

            <Input
              name="password"
              type="oldPassword"
              placeholder="Senha Atual"
            />
            <Input name="password" type="password" placeholder="Nova Senha" />
            <Input
              name="password"
              type="confirmPassword"
              placeholder="Confirmar Senha"
            />

            <button type="submit">Atualizar</button>
          </Form>
        </Content>
      </Container>
      <Footer />
    </>
  );
}
