import React from 'react';

import logo from '../../../images/logo-cashforce.svg';
import notasfiscais from '../../../images/notasfiscais.png';

function SideBar() {
  return (
    <div className="cash-sidebar">
      <a href="/">
        <img src={logo} alt="Logo CashForce" className='sidebar-title-img' />
      </a>
      <ul className='nav'>
        <li className="nav-item">
          <div className='nav-div'>
            <div className='nav-button'>
              <img
                src={notasfiscais}
                alt="Símbolo Notas fiscais"
                className='notas-fiscais'
              />
              <a href="/" className="sidebar-button" aria-current="page">
                Notas fiscais
              </a>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default SideBar;
