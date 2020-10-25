import Vue from 'vue'
import Router from 'vue-router'
import Home from "../components/Home";
import User from "../components/User";
import Userdetail from "../components/Userdetail";
import Changeuser from "../components/Changeuser";

Vue.use(Router);

export default new Router({
    routes: [
        {path: '/', redirect: '/home',},
        {path: '/home', component: Home,},
        {path: '/user', component: User,},
        {path: '/detail/:id', component: Userdetail,},
        {path: '/change/:id', component: Changeuser,},
    ]
})
