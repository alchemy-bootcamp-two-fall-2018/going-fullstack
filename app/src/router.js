import VueRouter from 'vue-router'; 
import Home from './components/Home.vue'; 
import Islands from './components/islands/Islands.vue';
import IslandDetail from './components/islands/IslandDetail.vue';

export default new VueRouter ({
  
  routes: [
    { path: '/', component: Home }, 
    { path: '/islands', component: Islands },
    { path: '/islands/:id', component: IslandDetail },
    { path: '*', redirect: '/' }
  ]
}); 