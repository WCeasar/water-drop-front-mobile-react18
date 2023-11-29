import ReactDOM from 'react-dom/client';
import { ApolloProvider } from '@apollo/client';
import { ConfigProvider } from 'antd-mobile';
import enUS from 'antd-mobile/es/locales/en-US';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './index.css';
import client from './utils/appllo';
import { ROUTES_CONFIG } from './routes/index';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <ConfigProvider locale={enUS}>
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Routes>
          {ROUTES_CONFIG.map((route) => (
            <Route
              key={route.path}
              path={route.path}
              element={<route.component />}
            />
          ))}
        </Routes>
      </BrowserRouter>
    </ApolloProvider>
  </ConfigProvider>,
);
