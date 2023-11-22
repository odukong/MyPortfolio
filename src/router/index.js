import { createWebHistory, createRouter } from "vue-router";
import PortfolioCmt from "../components/PortfolioCmt.vue";
import ProjectsCmt from "../components/Projects/ProjectsCmt.vue";
import CareerCmt from "../components/Career/CareerCmt.vue";

const routes = [    // 라우터 설정
    {
        path: "/",               // 라우터
        component: PortfolioCmt,
    },
    {
        path: "/project",      
        component: ProjectsCmt,
    },
    {
        path:"/career",
        component:CareerCmt
    }
];

const router = createRouter({  // 라우트 생성
    history: createWebHistory(),
    routes,
});

export default router;