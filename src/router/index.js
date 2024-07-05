import { createRouter, createWebHistory } from "vue-router";
import Accounts from "../views/Accounts.vue"
import Dashboard from "../views/Dashboard.vue";
import PageStructure from "../template/PageStructure.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL), 
    routes: [
        {
            path: "/",
            name: "account",
            component: Accounts
        },
        {
            path: "/app",
            name: "template",
            component: PageStructure,
            redirect: "/app/dashboard",
            children: [
                {
                    path: "dashboard",
                    name: "pagina_inicial",
                    component: Dashboard
                }
            ]
        }
    ]
})

export default router
