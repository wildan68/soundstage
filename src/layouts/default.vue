<script setup lang="ts">
import type { RouteLocationNormalized } from 'vue-router'
import AppLoad from './component/AppLoad.vue'
import Header from './component/Header.vue'
import MainHeader from './component/MainHeader.vue'
import Footer from './component/Footer.vue'
import MobileNavbar from './component/MobileNavbar.vue'
import { appLoad } from '@/@core/app'
import { themeConfig } from '@themeConfig'

const route: RouteLocationNormalized = useRoute()

const { y } = useWindowScroll()

const headerShowing = ref<boolean>(false)

const hideHeader = computed(() => route.meta.hideHeader ? !themeConfig.isMobile && route.meta.hideHeader : true)

const hideNavbar = computed(() => themeConfig.isMobile ? route.meta.hideNavbar ? !themeConfig.isMobile && route.meta.hideNavbar : true : false)

watch(y, val => val > 100 ? headerShowing.value = true : headerShowing.value = false)

const isHome = computed(() => route.path === '/')
</script>

<template>
  <VScaleTransition origin="center center">
    <!-- 👉 App Load -->
    <AppLoad v-if="appLoad" />
    <!-- 👉 Content -->
    <div v-else>
      <Teleport
        v-if="hideHeader"
        to=".v-application__wrap"
        :disabled="!isHome"
      >
        <VFadeTransition>
          <div
            v-if="headerShowing || !isHome"
            class="header"
            :class="[
              { header__sticky: !isHome },
              { header__fixed: isHome },
            ]"
          >
            <Header :transparent="false" />
          </div>
        </VFadeTransition>
      </Teleport>
      <MainHeader v-if="isHome" />

      <!-- 👉 Pages -->
      <RouterView v-slot="{ Component }">
        <Component :is="Component" />
      </RouterView>

      <Footer />

      <!-- 👉 Mobile Navbar -->
      <MobileNavbar v-if="hideNavbar" />
    </div>
  </VScaleTransition>
</template>

<style scoped lang="scss">
.header {
  top: 0;
  left: 0;
  right: 0;
  z-index: 999;

  &__fixed {
    position: fixed;
  }

  &__sticky {
    position: sticky;
  }
}
</style>
