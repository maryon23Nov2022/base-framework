import { createRouter, createWebHistory } from "vue-router";

import PageOne from "../components/PageOne.vue"
import PageTwo from "../components/PageTwo.vue"
import HomePage from "../components/HomePage.vue"

export default createRouter({
    history: createWebHistory(),
    routes: [
        { path: "/", component: HomePage},
        { path: "/pageOne", component: PageOne },
        { path: "/pageTwo", component: PageTwo }
    ]
})