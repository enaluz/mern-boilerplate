import { Home } from '../views/Public/export';
import { Dashboard } from '../views/Private/export';

const publicRoutes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  }
];

const privateRoutes = [
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard
  }
];

export { publicRoutes, privateRoutes };
