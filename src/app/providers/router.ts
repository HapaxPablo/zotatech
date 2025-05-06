import { createRouter, createWebHistory } from 'vue-router'
import RegisterPage from '@/pages/RegisterPage.vue'
import ProfilePage from '@/pages/ProfilePage.vue'
import { useUserStore } from '@/entities/user/model/userStore'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', redirect: '/profile' },
    {
      path: '/profile',
      name: 'profile',
      component: ProfilePage,
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterPage,
    },
  ],
})

router.beforeEach((to, from, next) => {
  const userStore = useUserStore()

  // если пользователь не авторизован и не на странице регистрации
  if (!userStore.isAuth && to.path !== '/register') {
    return next('/register')
  }

  // если авторизован и пытается попасть на регистрацию — перенаправляем на профиль
  if (userStore.isAuth && to.path === '/register') {
    return next('/profile')
  }

  next()
})
export default router
