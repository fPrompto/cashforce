import React from 'react';

import SideBar from './components/SideBar';

import notasfiscais from '../../images/notasfiscais_black.png';

import './style.css';

function NotasFiscais() {
  const columns = [
    'NOTA FISCAL',
    'SACADO',
    'CEDENTE',
    'EMISSÃO',
    'VALOR',
    'STATUS',
  ];

  return (
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
          <span className='notas-subtitle'>Visualize as notas fiscais que você tem.</span>
        </div>
        <table>
          <thead>
            <tr>
              {columns.map((name) => {
                return (
                  <th className='table-head'>{name}</th>
                );
              })}
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>line 1</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default NotasFiscais;
