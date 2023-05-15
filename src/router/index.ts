import { setupLayouts } from 'virtual:generated-layouts'
import { createRouter, createWebHistory } from 'vue-router'
import { themeConfig } from '@themeConfig'
import { useAuthStore } from '@/stores/auth'
import routes from '~pages'
import { appLoad, isLoggedin } from '@/@core/app'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/profile',
      redirect: (to) => {
        const store = useAuthStore()

        if (!store.user?.token)
          return '/login'

        return { name: 'profile', query: to.query }
      },
    },
    ...setupLayouts(routes),
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition)
      return savedPosition

    return { top: 0 }
  },
})

// Docs: https://router.vuejs.org/guide/advanced/navigation-guards.html#global-before-guards
router.beforeEach((to) => {
  setTimeout(() => appLoad.value = false, themeConfig.app.appLoadInterval)

  const store = useAuthStore()

  if (store.user?.token)
    isLoggedin.value = true

  if (to.meta.redirectIfLoggedIn && isLoggedin.value)
    return '/'
})

export default router
