import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  FiDollarSign,
  FiCalendar,
  FiInfo,
  FiFileMinus,
  FiPlus,
} from 'react-icons/fi';

import api from '../../services/api';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

import { Container, Content, CashBack, ItemGroup, Item } from './styles';

export default function Dashboard() {
  const [purchases, setPurchases] = useState([]);
  const reseller = useSelector((state) => state.user.reseller);

  useEffect(() => {
    api
      .get(`compras?author.id=${reseller.id}&_sort=created_at:desc`)
      .then((response) => {
        setPurchases(response.data);
      });
  }, [reseller.id]);

  return (
    <>
      <Header />
      <Container>
        <Content>
          <Link to="/purchase">
            <FiPlus size={20} color="#ffc200" />
            Adicionar Compras
          </Link>

          <ul>
            {purchases.map((purchase) => {
              return (
                <li key={purchase.id}>
                  <CashBack>
                    <span>
                      <p>{purchase.cashbacks[0].porcentage}%</p>
                    </span>
                    <div>
                      <p>Valor do CashBack</p>
                      <h1>
                        {Intl.NumberFormat('pt-BR', {
                          style: 'currency',
                          currency: 'BRL',
                        }).format(purchase.cashbacks[0].value)}
                      </h1>
                    </div>
                  </CashBack>
                  <ItemGroup>
                    <hr />
                    <Item>
                      <div>
                        {/* <p>Código da compra</p> */}
                        <strong>
                          <FiFileMinus size={20} color="#ccc" />
                          {purchase.code}
                        </strong>
                      </div>
                      <div>
                        {/* <p>Valor da compra</p> */}
                        <strong>
                          <FiDollarSign size={20} color="#ccc" />
                          {Intl.NumberFormat('pt-BR', {
                            style: 'currency',
                            currency: 'BRL',
                          }).format(purchase.value)}
                        </strong>
                      </div>
                    </Item>
                    <hr />
                    <Item>
                      <div>
                        {/* <p>Data da compra</p> */}
                        <strong>
                          <FiCalendar size={20} color="#ccc" />
                          {purchase.date}
                        </strong>
                      </div>
                      <div className="status">
                        {/* <p>Status do cashback</p> */}
                        <strong>
                          <FiInfo size={20} color="#ccc" />
                          {purchase.status}
                        </strong>
                      </div>
                    </Item>
                  </ItemGroup>
                </li>
              );
            })}
          </ul>
        </Content>
      </Container>
      <Footer />
    </>
  );
}
