import { RouteConfig } from 'react-router-config';
import AsyncLoader from '@components/AsyncLoader';
import Layout from '@components/Layout';

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
            component: AsyncLoader(() => import('@pages/Home')),
          },
        ],
      },
    ],
  },
];

export default routes;