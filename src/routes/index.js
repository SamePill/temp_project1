import { createRouter, createWebHashHistory } from "vue-router";
import Home from '@/views/Home/Home.vue'
import QaProjectList from "@/views/Project/QaProjectList.vue";
import QaProjectDetail from "@/views/Project/QaProjectDetail.vue";

import Login from "@/views/User/Login.vue";
import FindId from "@/views/User/FindId.vue";
import ResetPassword from "@/views/User/ResetPassword.vue";

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      component: Home,
    },
    {
      path: '/project-list',
      component: QaProjectList,
    },
    {
      path: '/project-detail',
      component: QaProjectDetail,
    },
    {
      path: '/login',
      component: Login,
    },
    {
      path: '/findId',
      component: FindId,
    },
    {
      path: '/resetPassword',
      component: ResetPassword,
    },
  ],
});
