import VueRouter from 'vue-router'; 
import Home from './components/Home.vue'; 
import Dogs from './components/dogs/Dogs.vue';
import DogDetail from './components/dogs/DogDetail'; 

export default new VueRouter ({
  
  routes: [
    { path: '/', component: Home }, 
    { path: '/dogs', component: Dogs },
    { path: '/dogs/:id', component: DogDetail },
    { path: '*', redirect: '/' }
  ]
}); 