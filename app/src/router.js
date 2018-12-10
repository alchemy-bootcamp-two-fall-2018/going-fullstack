import VueRouter from 'vue-router';
import Home from './components/home/Home.vue';
import Singers from './components/singers/Singers.vue';
import SingerDetail from './components/singers/SingerDetail';
import GenreAdmin from './components/genres/GenreAdmin';

export default new VueRouter({
  routes: [
    { path: '/', component: Home },
    { path: '/singers', component: Singers },
    { path: '/singers/:id', component: SingerDetail },
    { path: '/genres', component: GenreAdmin },
    { path: '*', redirect: '/' }
  ]
});