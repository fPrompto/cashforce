import React from 'react';

import logo from '../../../images/logo-cashforce.svg';
import notasfiscais from '../../../images/notasfiscais.png';

function SideBar() {
  return (
    <div className="d-flex flex-column flex-shrink-0 p-3 cash-sidebar">
      <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
        <img src={logo} alt="Logo CashForce" className='sidebar-title-img' />
      </a>
      <ul className="nav nav-pills flex-column mb-auto">
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
