import VueRouter from 'vue-router';
import Home from './components/Home';
import Racers from './components/Racers';

export default new VueRouter ({
    routes: [
        { path: '/', component: Home },
        { path: '/racers', component: Racers },
        { path: '*', redirect: '/' },


    ]
});