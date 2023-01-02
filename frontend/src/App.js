import React from 'react';
import {
  BrowserRouter, Routes, Route, Redirect,
} from 'react-router-dom';

import routes from './routes';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Redirect
          to={{
            pathname: '/notasfiscais',
          }}
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
