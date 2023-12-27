import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
		path: '/',
		component: HomeView
	  },//主页
	  {
		path: '/AboutView',
		component: AboutView
	  },//关于
	{
		path : "/FriendsLink",
		name: 'FriendsLink',
		component: () => import('../views/FriendsLink.vue')
	},//友连接
	{
		path : "/laboratory",
		name: 'laboratory',
		component: () => import('../views/laboratory.vue')
	},//实验功能
	{
		path : "/leave",
		name: 'leave',
		component: () => import('../views/leave.vue')
	},//留言
  ]
})

export default router;