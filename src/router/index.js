import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            redirect: '/login'
        },
        {
            path: '/',
            component: resolve => require(['../components/common/Home.vue'], resolve),
            meta: { title: '自述文件' },
            children:[
                {
                    path: '/dashboard',
                    component: resolve => require(['../components/page/Dashboard.vue'], resolve),
                    meta: { title: '系统首页' }
                },
                {
                    path: '/rc',
                    component: resolve => require(['../components/page/ReleaseCourse.vue'], resolve),
                    meta: { title: '发布课程' ,permission: true}
                },
                {
                    path: '/cst',
                    component: resolve => require(['../components/page/CourseStatistics.vue'], resolve),
                    meta: { title: '选课统计' ,permissions: true }
                },
                {
                    path: '/cs',
                    component: resolve => require(['../components/page/CourseSelection.vue'], resolve),
                    meta: { title: '在线选课'  }
                },
                {
                    path: '/sc',
                    component: resolve => require(['../components/page/SelectedCourses.vue'], resolve),
                    meta: { title: '已选课程' }
                },
            ]
        },
        {
            path: '/login',
            component: resolve => require(['../components/page/Login.vue'], resolve)
        },
        {
            path: '*',
            redirect: '/404'
        }
    ]
})
