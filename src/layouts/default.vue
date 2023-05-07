<script setup lang="ts">
import type { RouteLocationNormalized } from 'vue-router'
import AppLoad from './component/AppLoad.vue'
import Header from './component/Header.vue'
import MainHeader from './component/MainHeader.vue'
import Footer from './component/Footer.vue'
import { appLoad } from '@/@core/app'

const { y } = useWindowScroll()

const headerShowing = ref<boolean>(false)

const route: RouteLocationNormalized = useRoute()

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
