import { RouteConfig } from 'react-router-config';
import Layout from '@components/Layout';
import Home from '@pages/Home';

const routes: RouteConfig[] = [
  {
    path: '/',
    component: Layout.Blank,
    routes: [
      {
        path: '/app',
        component: Layout.Basic,
        routes: [
          {
            path: '/app/home',
            component: Home,
          },
        ],
      },
    ],
  },
];

export default routes;