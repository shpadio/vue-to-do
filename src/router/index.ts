import { createWebHistory, createRouter } from "vue-router";
import Chess from "@/components/Chess.vue";
import ToDo from "@/components/ToDo.vue";



const routes = [
    {
        path: "/todo",
        name: "ToDo",
        component: ToDo ,
    },
    {
        path: "/chess",
        name: "Chess",
        component: Chess,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;