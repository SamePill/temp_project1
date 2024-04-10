import { createRouter, createWebHashHistory } from "vue-router";
import Home from '@/views/Home/Home.vue'
import QaProjectList from "@/views/Project/QaProjectList.vue";
import QaProjectDetail from "@/views/Project/QaProjectDetail.vue";

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
  ],
});
