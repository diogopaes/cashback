import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { FiUser, FiLogOut, FiSettings, FiDollarSign } from 'react-icons/fi';
import { signOut } from '../../store/modules/auth/actions';

import logo from '../../assets/logodetalhe.svg';

import { Container, Content, User, Cash } from './styles';

export default function Header() {
  const dispatch = useDispatch();
  const reseller = useSelector((state) => state.user.reseller);

  function handleSignOut() {
    dispatch(signOut());
  }

  return (
    <Container>
      <Content>
        <Link to="/">
          <img src={logo} alt="CashBack" width={100} />
        </Link>
        <nav>
          <Cash>
            <FiDollarSign size={45} color="#fff" />
            <div>
              <h3>Total</h3>
              <span>R$500,00</span>
            </div>
          </Cash>
          <User>
            <FiUser size={50} color="#fff" />
            <div>
              <h3>{reseller.name}</h3>
              <div>
                <span>
                  <FiSettings size={14} color="#fff" />
                  <Link to="/profile">Perfil</Link>
                </span>
                <span>
                  <FiLogOut size={14} color="#fff" />
                  <Link to="/" onClick={handleSignOut}>
                    Sair
                  </Link>
                </span>
              </div>
            </div>
          </User>
        </nav>
      </Content>
    </Container>
  );
}
