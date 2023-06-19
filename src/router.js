import { createRouter, createWebHistory } from 'vue-router';
import ApplianceList from './components/ApplianceList.vue';
import ApplianceCreate from './components/ApplianceCreate.vue';
import ApplianceEdit from './components/ApplianceEdit.vue';

const routes = [
  {
    path: '/',
    name: 'ApplianceList',
    component: ApplianceList,
  },
  {
    path: '/create',
    name: 'ApplianceCreate',
    component: ApplianceCreate,
  },
  {
    path: '/edit/:id',
    name: 'ApplianceEdit',
    component: ApplianceEdit,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
