import {createRouter, createWebHistory} from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/Login.vue";


const routes = [
        {
            path: "/",
            name: "Home",
            component: Home,
        },
        {
            path: "/login",
            name: "login",
            component : Login,
        }

    ]

  export default createRouter({
    history: createWebHistory(),
    routes

  })