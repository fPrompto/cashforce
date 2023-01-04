import React, { useState, useEffect } from 'react';
import axios from 'axios';

import SideBar from './components/SideBar';

import notasfiscais from '../../images/notasfiscais_black.png';

import './style.css';

function NotasFiscais() {
  const [orderData, setOrderData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

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
        <table className='cash-table'>
          <thead>
            <tr>
              <th className='table-head head-left'>NOTA FISCAL</th>
              <th className='table-head'>SACADO</th>
              <th className='table-head'>CEDENTE</th>
              <th className='table-head'>EMISSÃO</th>
              <th className='table-head'>VALOR</th>
              <th className='table-head'>STATUS</th>
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
                <>
                  <br />
                  <tr key={i}>
                    <td className='body-row left-row'>{data.orderNfId}</td>
                    <td className='body-row'>{data.buyer.name}</td>
                    <td className='body-row'>{data.provider.name}</td>
                    <td className='body-row'>{`${eDay}/${eMonth}/${eYear}`}</td>
                    <td className='body-row'>{data.value}</td>
                    <td className='body-row'>{orderStatus[+data.orderStatusBuyer]}</td>
                    <td className='body-row right-row'>
                      <button
                        className='table-button'
                      >
                        Dados do cedente
                      </button>
                    </td>
                  </tr>
                </>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default NotasFiscais;
