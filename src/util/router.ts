
import {createRouter, createWebHistory} from "vue-router";
import designhome from '../views/design/home.vue'
import workspace from '../views/workspace/index.vue'
import project from '../views/project/index.vue'
import login from "../views/login.vue";
// 路由配置
const routes = [
{
//斜杠重定向到首页
path: "/",
redirect: "/login",
},
{
//首页
path: "/index",
name: "index",
},
    {
        path: "/design",
        name: "design",
        component: designhome,
    },
    {
        path: "/workspace",
        name: "workspace",
        component: workspace,
    },
    {
        path: "/login",
        name: "login",
        component: login,
    },
    {
        path: "/project",
        name: "project",
        component: project,
    },

];

// 路由对象
const router = createRouter({
history: createWebHistory(),
routes: routes,
})

export default router // 导出供其他组件导入
