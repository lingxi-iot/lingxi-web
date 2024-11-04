
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
});
// // 添加全局前置守卫
// router.beforeEach((to, from, next) => {
//     if (from) {
//       // 用户正在尝试后退
//       console.log('正在后退', from.fullPath, '->', to.fullPath);
//       // 在这里可以执行一些操作，例如提示用户是否放弃更改
//       // 如果需要拦截并停止后退，可以调用 next(false) 或者 next('/其他路径')
//       if (from.fullPath=='/design')
//       {

//         next(false);
//         return;
//     }
//     }
   
//     //if (to) {
//       // 用户正在前进或初次进入
//       console.log('正在前进或初次进入', from.fullPath, '->', to.fullPath);
//       // 在这里可以执行一些操作，例如加载数据或更新状态
//     //}
   
//     next(); // 必须调用 next() 来resolve这个钩子
//   });
export default router // 导出供其他组件导入
