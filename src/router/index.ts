import { createWebHistory, createRouter } from "vue-router";
import Chess from "@/components/Chess.vue";
import ToDo from "@/components/ToDo.vue";
import Images from "@/components/Images.vue";



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
        path: "/images",
        name: "Images",
        component: Images,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;