import React, { useState, useEffect } from 'react';
import axios from 'axios';

import SideBar from './components/SideBar';

import notasfiscais from '../../images/notasfiscais_black.png';

import './style.css';

function NotasFiscais() {
  const [orderData, setOrderData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const columns = [
    'NOTA FISCAL',
    'SACADO',
    'CEDENTE',
    'EMISSÃO',
    'VALOR',
    'STATUS',
  ];

  const orderStatus = [
    'Pendente de confirmação',
    'Pedido confirmado',
    'Não reconhece o pedido',
    'Mercadoria não recebida',
    'Recebida com avaria',
    'Devolvida',
    'Recebida com devolução parcial',
    'Recebida e confirmada',
    'Pagamento Autorizado',
  ];

  const getData = async () => {
    setIsLoading(true);
    const URL = 'http://localhost:7000/find/all/orders';
    const response = await axios({
      method: 'GET',
      url: URL,
    });
    const data = await response.data;
    console.log('data axios =>', data);
    setOrderData(data);
    setIsLoading(false);
  };

  useEffect(() => {
    getData()
  }, []);

  return isLoading ? <span>Loading...</span> : (
    <div>
      <hr className="line" />
      <hr className="line line2" />
      <SideBar />
      <div className='notas-list'>
        <div className='title-div'>
          <img
            src={notasfiscais}
            alt="Símbolo Notas fiscais"
            className='notas-img-title'
          />
          <span className='notas-title'>Notas fiscais</span>
          <br />
          <span className='notas-subtitle'>
            Visualize as notas fiscais que você tem.
          </span>
        </div>
        <table>
          <thead>
            <tr>
              {columns.map((name, i) => {
                return (
                  <th key={i} className='table-head'>{name}</th>
                );
              })}
            </tr>
          </thead>
          <tbody>
            {/* <tr>
              <td>line 1</td>
            </tr> */}
            {orderData.map((data, i) => {
              const emissionDate = new Date(data.emissionDate);

              const eDay = emissionDate.getDay();
              const eMonth = emissionDate.getMonth();
              const eYear = emissionDate.getFullYear();

              return (
                <tr key={i}>
                  <td>{data.orderNfId}</td>
                  <td>{data.buyer.name}</td>
                  <td>{data.provider.name}</td>
                  <td>{`${eDay}/${eMonth}/${eYear}`}</td>
                  <td>{data.value}</td>
                  <td>{orderStatus[+data.orderStatusBuyer]}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default NotasFiscais;
