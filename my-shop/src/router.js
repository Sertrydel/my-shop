import { createRouter, createWebHashHistory } from 'vue-router';
import AdminDashboard from '@/pages/AdminDashboard.vue';
import ManageProducts from '@/pages/ManageProducts.vue';
import ManageReviews from '@/pages/ManageReviews.vue';
import AboutPage from '@/pages/AboutPage.vue';

const routes = [
  {
    path: '/',
    component: AdminDashboard, // Використовуємо AdminDashboard як головний компонент
    children: [
      { path: '', component: ManageProducts }, // Домашня сторінка рендерить ManageProducts
      { path: 'reviews', component: ManageReviews }, // Відгуки
    ],
  },
  {
    path: '/admin',
    component: AdminDashboard,
    children: [
      { path: 'products', component: ManageProducts },
      { path: 'reviews', component: ManageReviews },
    ],
  },
  {
    path: '/about',
    component: AboutPage,
  },
];


const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes,
});

export default router;
