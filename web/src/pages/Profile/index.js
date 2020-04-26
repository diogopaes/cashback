import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';
import { FiUser } from 'react-icons/fi';

import { updateResellerRequest } from '../../store/modules/user/actions';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

import { Container, Content } from './styles';

export default function Profile() {
  const dispatch = useDispatch();
  const reseller = useSelector((state) => state.user.reseller);

  const { id } = reseller;

  function handleSubmit(data) {
    dispatch(updateResellerRequest({ id, ...data }));
  }
  return (
    <>
      <Header />
      <Container>
        <Content>
          <div>
            <FiUser size={220} color="#333" />
            <span>
              <h2>Profile</h2>
              <h4>Atualize sua informações de perfil</h4>
            </span>
          </div>
          <Form initialData={reseller} onSubmit={handleSubmit}>
            <Input name="name" type="text" placeholder="Nome Completo" />
            <Input name="email" type="email" placeholder="e-mail" />

            <hr />

            <Input
              name="oldPassword"
              type="password"
              placeholder="Senha Atual"
            />
            <Input name="password" type="password" placeholder="Nova Senha" />
            <Input
              name="confirmPassword"
              type="password"
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
