import VueRouter from 'vue-router'; 
import Home from './components/Home.vue'; 
import Islands from './components/islands/Islands.vue';

export default new VueRouter ({
  
  routes: [
    { path: '/', component: Home }, 
    { path: '/islands', component: Islands },
    { path: '*', redirect: '/' }
  ]
}); 