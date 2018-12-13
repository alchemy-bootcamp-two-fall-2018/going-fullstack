import VueRouter from 'vue-router';
import Home from './components/Home';
import Racers from './components/Racers';
import RacerDetail from './components/RacerDetail';

export default new VueRouter ({
    routes: [
        { path: '/', component: Home },
        { path: '/racers', component: Racers },
        { path: '/racers/:id', component: RacerDetail },
        { path: '*', redirect: '/' },


    ]
});