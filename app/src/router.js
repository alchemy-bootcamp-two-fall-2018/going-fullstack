import VueRouter from 'vue-router';
import Home from './components/Home';
import Nonprofits from './components/Nonprofits';
import NonprofitsDetail from './components/NonprofitsDetail';
import AddNonprofit from './components/AddNonprofit';


export default new VueRouter({
  routes: [
    { path: '/', component: Home },
    { path: '/nonprofits', component: Nonprofits },
    { path: '/nonprofits/add', component: AddNonprofit },
    { path: '/nonprofits/:id', component: NonprofitsDetail },
    { path: '*', redirect: '/' }
  ]
});