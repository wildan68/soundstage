import { useSwiper } from 'swiper/vue'
import { Autoplay as VSAutoplay, Navigation as VSNavigation, Pagination as VSPagination } from 'swiper'
import type { App, Component } from 'vue'
import navMenu from './navMenu'
import footer from './footer'
import { app as _instance } from '@/main'
import { themeConfig } from '@themeConfig'

export const isLoggedin = ref<boolean>(false)

export const isDark = ref<boolean>(false)

export const appLoad = ref<boolean>(true)

export const searchPlaceholderList: string[] = themeConfig.app.search.placeholder

export const { counter: placeholderCounter, reset: placeholderReset } = useInterval(2000, { controls: true })

export const searchPlaceholder = ref<string>(searchPlaceholderList[placeholderCounter.value])

export const searchBox = ref<boolean>(false)

watch(placeholderCounter, (value) => {
  searchPlaceholder.value = searchPlaceholderList[value]

  if (placeholderCounter.value === searchPlaceholderList.length)
    placeholderReset()
})

watch(isDark, (value: boolean) => localStorage.setItem('theme', value ? 'dark' : 'light'))

export const usePlugins = (options: { [key: string]: Component }):
{ install(app: App): void } => {
  return {
    install(app) {
      for (const key in options)
        app.component(key, options[key])
    },
  }
}

export const useRandom = (min: number, max: number) => {
  const length = Math.floor(Math.random() * (max - min + 1) + min)
  let result = ''
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  const charactersLength = characters.length
  for (let i = 0; i < length; i++)
    result += characters.charAt(Math.floor(Math.random() * charactersLength))

  return result
}

export const useNumberDot = (number: number) => number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')

export const useSkinConfig = () => {
  const theme = localStorage.getItem('theme')

  if (!theme) {
    localStorage.setItem('theme', 'light')
    isDark.value = false

    return
  }

  if (theme === 'dark') {
    isDark.value = true

    return
  }

  isDark.value = false
}

export const useRouterBack = () => {
  const router = _instance._context.config.globalProperties.$router

  const hasHistory = window.history.length > 2

  hasHistory ? router.back() : router.push('/')
}

export {
  navMenu,
  footer,
  useSwiper,
  VSAutoplay,
  VSNavigation,
  VSPagination,
}
