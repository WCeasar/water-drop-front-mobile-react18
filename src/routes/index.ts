import Login from '../containers/Login';
import Register from '../containers/Register';
import Container from '../containers/container';

export const ROUTES_CONFIG = [
  {
    path: '/register',
    title: 'register',
    key: 'register',
    component: Register,
  },
  {
    path: '/login',
    title: 'login',
    key: 'login',
    component: Login,
  },
  {
    path: '/',
    title: 'container',
    key: 'container',
    component: Container,
  },
];
