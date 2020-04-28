import React, { useState, useEffect } from 'react';
// import InputMask from 'react-input-mask';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';

import { FiShoppingBag } from 'react-icons/fi';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

import history from '../../services/history';
import api from '../../services/api';

import { Container, Content } from './styles';

export default function Purchaces() {
  const reseller = useSelector((state) => state.user.reseller);

  const [discount, setdiscount] = useState('');

  const [code, setCode] = useState('');
  const [value, setValue] = useState('');
  const [date, setDate] = useState('');

  useEffect(() => {
    api.get('settings').then((response) => {
      setdiscount(response.data);
    });
  }, [reseller.id]);

  async function handleSubmit(e) {
    e.preventDefault();

    const data = {
      code,
      value,
      date,
      author: reseller.id,
    };

    try {
      const response = await api.post('compras', data);

      const valueDiscount = parseFloat(
        data.value * (discount.discountpercentage / 100)
      );
      const totalWithDiscount =
        parseFloat(data.value) - parseFloat(valueDiscount);
      const valueCashback =
        parseFloat(data.value) - parseFloat(totalWithDiscount);

      const cashback = {
        value: valueCashback,
        porcentage: discount.discountpercentage,
        author: reseller.id,
        purchase: response.data.id,
      };

      await api.post('cashbacks', cashback);

      toast.success('Compra cadastrada com sucesso');

      history.push('/');
    } catch (err) {
      toast.error('Erro ao tentar cadastrar sua compra');
    }
  }

  return (
    <>
      <Header />
      <Container>
        <Content>
          <div>
            <FiShoppingBag size={220} color="#333" />
            <span>
              <h2>Compras</h2>
              <h4>Cadastre sua compra</h4>
            </span>
          </div>
          <form onSubmit={handleSubmit}>
            <input
              value={code}
              onChange={(e) => setCode(e.target.value)}
              placeholder="Código da compra"
            />

            <input
              placeholder="Valor da compra"
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />
            <input
              type="date"
              placeholder="Data da compra"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />

            <button type="submit">Cadastrar</button>
          </form>
        </Content>
      </Container>
      <Footer />
    </>
  );
}
