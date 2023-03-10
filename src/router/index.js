import Vue from 'vue';
import VueRouter from 'vue-router';
import ListView from '../views/ListView.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: ListView,
  },
  {
    path: '/:articleIndex',
    name: 'detail',
    // route level code-splitting
    // this generates a separate chunk (detail.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "detail" */ '../views/DetailView.vue'),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
