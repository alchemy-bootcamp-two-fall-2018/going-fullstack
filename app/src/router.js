import VueRouter from 'vue-router';
import Home from './components/home/Home';
import Nonprofits from './components/nonprofits/Nonprofits';
import NonprofitsList from './components/nonprofits/NonprofitsList';
import NonprofitsDetail from './components/nonprofits/NonprofitsDetail';
import AddNonprofit from './components/nonprofits/AddNonprofit';

export default new VueRouter({
  routes: [
    { path: '/', component: Home },
    { path: '/nonprofits', component: Nonprofits },
    { path: '/nonprofits/add', component: AddNonprofit },
    { path: '/nonprofits/:id', component: NonprofitsDetail },
    { path: '/nonprofits/list', component: NonprofitsList },
    { path: '*', redirect: '/' }
  ]
});