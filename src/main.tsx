import ReactDOM from 'react-dom/client';
import { ApolloProvider } from '@apollo/client';
import { ConfigProvider } from 'antd-mobile';
import enUS from 'antd-mobile/es/locales/en-US';

import App from './App';
import './index.css';
import client from './utils/appllo';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <ConfigProvider locale={enUS}>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </ConfigProvider>,
);
