import { useInterval } from '@vueuse/core'
import { useSwiper } from 'swiper/vue'
import { Autoplay, Navigation, Pagination } from 'swiper'
import navMenu from './navMenu'
import footer from './footer'
import { themeConfig } from '@themeConfig'

const appLoad = ref<boolean>(true)

const searchPlaceholderList: string[] = themeConfig.app.search.placeholder

const { counter, reset } = useInterval(2000, { controls: true })

const searchPlaceholder = ref<string>(searchPlaceholderList[counter.value])

const searchBox = ref<boolean>(false)

watch(counter, (value) => {
  searchPlaceholder.value = searchPlaceholderList[value]

  if (counter.value === searchPlaceholderList.length)
    reset()
})

export {
  searchPlaceholder,
  appLoad,
  navMenu,
  footer,
  searchBox,
  useSwiper,
  Autoplay,
  Navigation,
  Pagination,
}
