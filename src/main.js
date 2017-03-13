// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import goods from './components/goods/goods.vue';
import ratings from './components/ratings/ratings.vue';
import seller from './components/seller/seller.vue';
import Router from 'vue-router';
import VueResource from 'vue-resource';

Vue.config.debug = false;

Vue.use(Router);
Vue.use(VueResource);

// let app = Vue.extend(App);

const routes = [
  { path: '/goods', component: goods },
  { path: '/ratings', component: ratings },
  { path: '/seller', component: seller }
];
let router = new Router({
 routes
});
const app = new Vue({
  router: router,
  render: h => h(App)
}).$mount('#app');
