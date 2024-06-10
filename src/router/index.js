import { createRouter, createWebHistory } from '@ionic/vue-router';
import Home from '../views/Home.vue';
import CreateContact from '../views/CreateContact.vue';
import EditContact from '../views/EditContact.vue';
import ContactDetail from '../views/ContactDetail.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/create',
    name: 'CreateContact',
    component: CreateContact
  },
  {
    path: '/:id/edit',
    name: 'EditContact',
    component: EditContact
  },
  {
    path: '/:id',
    name: 'ContactDetail',
    component: ContactDetail
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
