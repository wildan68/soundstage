import { Swiper as VSwiper, SwiperSlide as VSwiperSlide } from 'swiper/vue'
import type { App, Component } from 'vue'
import 'swiper/swiper-bundle.css'

interface SwiperConfig {
  [key: string]: Component
}

const createSwiper = (options: SwiperConfig): { install(app: App): void } => {
  return {
    install(app) {
      for (const key in options)
        app.component(key, options[key])
    },
  }
}

export default createSwiper({ VSwiper, VSwiperSlide })
