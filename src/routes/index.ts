import {createRouter, createWebHistory} from "vue-router"


const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/",
            name: "Home",
            component: () => import("../view/Home/Index.vue"),
        },
        {
            path: '/:pathMatch(.*)*',
            redirect: "/"
        },
    ]
})

export default router;
