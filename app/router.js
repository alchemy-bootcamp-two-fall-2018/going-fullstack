import VueRouter from 'vue-router';
import Home from './src/components/Home.vue'; //or not src?
import Nonprofits from './src/components/Nonprofits.vue';

export default new VueRouter({
  routes: [
    { path: '/', component: Home },
    { path: '/nonprofits', component: Nonprofits },
    { path: '*', redirect: '/' }
  ]
});