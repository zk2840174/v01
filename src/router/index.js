import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/todo',
      name: 'todo index',
      component: () => import('../views/todos/TodoIndex.vue'),
      redirect: "/todo/list",
      children: [
        {
          path: "list",
          name: "TodoListPage",
          component: () => import('../views/todos/TodoList.vue')
        }
        
      ],
    }
  ]
})

export default router
