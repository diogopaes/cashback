import React from 'react';
import { Link } from 'react-router-dom';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

import { Container, Content } from './styles';

export default function Dashboard() {
  return (
    <>
      <Header />
      <Container>
        <Content>
          <Link to="/">Adicionar Compras</Link>
        </Content>
      </Container>
      <Footer />
    </>
  );
}
