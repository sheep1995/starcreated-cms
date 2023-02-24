import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import Breadcrumb from "@/components/Breadcrumb.vue";


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  linkActiveClass: 'active-link',
  linkExactActiveClass: 'exact-active-link',
  routes: [
    {
      path: "/login",
      name: "Login",
      component: () => import("../views/LoginView.vue"),
      meta: {
        breadcrumb: [{
          name: '登入'
        }]
      }
    },
    {
      path: "/",
      name: "Home",
      component: HomeView,
      meta: {
        breadcrumb: [{
          name: '首頁'
        }]
      },
      children: [
    //member
    {
      path: '/member',
      name: "Member",
      component: () => import('../views/member/MemberView.vue'),
      meta: {
        breadcrumb: [{
          name: '會員管理'
        }]
      }
    },
    {
      path: '/member-order-list',
      name: "MemberOrderList",
      component: () => import('../views/member/MemberOrderListView.vue'),
      meta: {
        breadcrumb: [{
          name: '訂閱人數'
        }]
      }
    },
      ]
    },
    {
      path: "/notice",
      name: "notice",
      component: () => import("../views/NoticeView.vue"),
      meta: {
        breadcrumb: [{
          name: '通知'
        }]
      }
    },
    {
      path: "/setting",
      name: "setting",
      component: () => import("../views/SettingView.vue"),
      meta: {
        breadcrumb: [{
          name: '設定'
        }]
      }
    },
    {
      path: "/about",
      name: "About",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AboutView.vue"),
      meta: {
        breadcrumb: [{
          name: '關於'
        }]
      }
    },
    //
    {
      path: '/staff',
      name: "Staff",
      component: () => import('../views/staff/StaffView.vue'),
      // children: [
      //   {
      //     path: 'add',
      //     name: "Add",
      //     component: () => import('../views/staff/StaffAddView.vue'),
      //   },
      //   {
      //     path: 'permissions',
      //     name: 'Permissions',
      //     component: () => import('../views/staff/StaffPermissionsView.vue'),
      //   },
      // ],
    },
    {
      path: '/staff-add',
      name: "Add",
      component: () => import('../views/staff/StaffAddView.vue'),
    },
    {
      path: '/staff-permissions',
      name: 'Permissions',
      component: () => import('../views/staff/StaffPermissionsView.vue'),
    },
    //member
    {
      path: '/member',
      name: "Member",
      component: () => import('../views/member/MemberView.vue'),
      // children: [
      //   { 
      //     path: 'member-control',
      //     component: () => import('../views/member/MemberControlView.vue'),
      //   }
      // ]
      meta: {
        breadcrumb: [{
          name: '會員管理'
        }]
      }
    },
    {
      path: '/member-control',
      name: "MemberControl",
      component: () => import('../views/member/MemberControlView.vue'),
    },
    //MemberControlView.vue
    {
      path: '/member-info',
      name: 'MemberInfo',
      component: () => import('../views/member/MemberInfoView.vue'),
    },
    {
      path: '/member-cash',
      name: "MemberCash",
      component: () => import('../views/member/MemberCashView.vue'),
    },
    {
      path: '/member-cash-info',
      name: 'MemberCashInfo',
      component: () => import('../views/member/MemberCashInfoView.vue'),
    },
    {
      path: '/member-creator-income',
      name: 'MemberCreatorIncome',
      component: () => import('../views/member/CreatorIncomeView.vue'),
    },
    {
      path: '/member-check-id',
      name: 'MemberCheckId',
      component: () => import('../views/member/CheckIdView.vue'),
    },
    {
      path: '/member-id-info',
      name: 'MemberCheckIdInfo',
      component: () => import('../views/member/CheckIdInfoView.vue'),
    },
    {
      path: '/member-fans-list',
      name: "MemberFansList",
      component: () => import('../views/member/MemberFansListView.vue'),
    },
    {
      path: '/member-order-list',
      name: "MemberOrderList",
      component: () => import('../views/member/MemberOrderListView.vue'),
      meta: {
        breadcrumb: [{
          name: '訂閱人數'
        }]
      }
    },
    {
      path: '/member-block-list',
      name: "MemberBlockList",
      component: () => import('../views/member/MemberBlockListView.vue'),
    },
  ],
});

export default router;
