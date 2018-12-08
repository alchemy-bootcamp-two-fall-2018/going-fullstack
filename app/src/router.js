import VueRouter from 'vue-router';
import Home from './components/home/Home.vue';
import Superheroes from './components/superheroes/Superheroes.vue';
import SuperheroDetail from './components/superheroes/SuperheroDetail.vue';

export default new VueRouter({
  routes: [
    { path: '/', component: Home },
    { path: '/superheroes', component: Superheroes },
    { path: '/superheroes/:id', component: SuperheroDetail },
    { path: '*', redirect: '/' },
  ]
});