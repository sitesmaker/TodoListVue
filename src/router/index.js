import Vue       from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import HomePage from "@/components/HomePage.vue";
import TodoListPage from "@/components/TodoListPage.vue";

const routes = [
    {
        path: "/",
        name: "HomePage",
        component: HomePage,
    },
    {
        path: "/todo",
        name: "TodoListPage",
        component: TodoListPage,
    }
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;