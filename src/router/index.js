import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    component: () => import('../views/LayoutView.vue'),
    children: [
      {
        path: '/',
        component: () => import('../views/HomePage.vue'),
      },
    ],
  },
  {
    path: '/admin',
    component: () => import('../views/LayoutView.vue'),
    children: [
      {
        path: 'auth-issuance',
        component: () => import('../views/admin/AuthIss.vue'),
      },
      {
        path: 'auth-mgmt',
        component: () => import('../views/admin/AuthMgmt.vue'),
      },
      {
        path: 'buddhas7-stg-num-setting',
        component: () => import('../views/admin/Buddhs7StgNumSet.vue'),
      },
      {
        path: 'calendar',
        component: () => import('../views/admin/CalendarView.vue'),
      },
      {
        path: 'new-announcement',
        component: () => import('../views/admin/NewAnnounc.vue'),
      },
      {
        path: 'hist-announc-inq',
        component: () => import('../views/admin/HistAnnouncInq.vue'),
      },
    ],
  },
  {
    path: '/customer-service',
    component: () => import('../views/LayoutView.vue'),
    children: [
      {
        path: 'taking-refuge-app',
        component: () => import('../views/customer-service/TakRefugeApp.vue'),
      },
      {
        path: 'taking-refuge-list',
        component: () => import('../views/customer-service/TakRefugeList.vue'),
      },
      {
        path: 'create-refuge-data',
        component: () => import('../views/customer-service/CreateRefugeData.vue'),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  linkActiveClass: 'active',
  routes,
});

export default router;
