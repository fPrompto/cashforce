import React from 'react';
import {
  BrowserRouter, Routes, Route, Navigate,
} from 'react-router-dom';

import routes from './routes';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='/'
          element={<Navigate to='/notasfiscais' replace />}
        />
        {routes.map((route, i) => (
          <Route
            key={i}
            // exact={route.exact}
            exact
            path={route.path}
            element={<route.element />}
          />
        ))}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
