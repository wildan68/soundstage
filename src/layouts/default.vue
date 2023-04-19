<script setup lang="ts">
import AppLoad from './component/AppLoad.vue'
import { appLoad } from '@/@core/app'
</script>

<template>
  <VScaleTransition origin="center center">
    <!-- 👉 App Load -->
    <AppLoad v-if="appLoad" />
    <!-- 👉 Content -->
    <!-- 👉 Pages -->
    <RouterView v-slot="{ Component }">
      <Transition
        name="transition"
        mode="out-in"
      >
        <Component :is="Component" />
      </Transition>
    </RouterView>
  </VScaleTransition>
</template>
