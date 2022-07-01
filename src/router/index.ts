import { createWebHistory, createRouter } from "vue-router";
import Chess from "@/components/Chess.vue";
import ToDo from "@/components/ToDo.vue";
import Cats from "@/components/Cats.vue"



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
    {
        path: "/cats",
        name: "Cats",
        component: Cats,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;