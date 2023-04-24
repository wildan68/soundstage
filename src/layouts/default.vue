<script setup lang="ts">
import { useWindowScroll } from '@vueuse/core'
import AppLoad from './component/AppLoad.vue'
import Header from './component/Header.vue'
import MainHeader from './component/MainHeader.vue'
import Footer from './component/Footer.vue'
import { appLoad } from '@/@core/app'

const { y } = useWindowScroll()

const headerShowing = ref<boolean>(false)

watch(y, val => val > 100 ? headerShowing.value = true : headerShowing.value = false)
</script>

<template>
  <VScaleTransition origin="center center">
    <!-- 👉 App Load -->
    <AppLoad v-if="appLoad" />
    <!-- 👉 Content -->
    <div v-else>
      <Teleport to="body">
        <VFadeTransition>
          <div
            v-if="headerShowing"
            class="header-sticky"
          >
            <Header :transparent="false" />
          </div>
        </VFadeTransition>
      </Teleport>
      <MainHeader />
      <!-- 👉 Pages -->
      <VContainer>
        <RouterView v-slot="{ Component }">
          <Transition
            name="transition"
            mode="out-in"
          >
            <Component :is="Component" />
          </Transition>
        </RouterView>
      </VContainer>
      <Footer />
    </div>
  </VScaleTransition>
</template>

<style scoped lang="scss">
.header-sticky {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 999;
}
</style>
