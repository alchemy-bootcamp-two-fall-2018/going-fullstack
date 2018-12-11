import VueRouter from 'vue-router';
import Home from './components/home/Home';
import Campgrounds from './components/campgrounds/Campgrounds';
import CampgroundDetail from './components/campgrounds/CampgroundDetail';

export default new VueRouter({
  routes: [
    { path: '/', component: Home },
    { path: '/campgrounds', component: Campgrounds },
    { path: '/campgrounds/:id', component: CampgroundDetail },
    { path: '*', redirect: '/' }
  ]
});