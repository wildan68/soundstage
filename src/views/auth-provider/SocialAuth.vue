<script setup lang="ts">
import type { Component } from 'vue'

interface SocialAuth {
  key: string
  icon: Component
}

const socialAuth = reactive<SocialAuth[]>([
  {
    key: 'apple',
    icon: defineAsyncComponent(() => import('@core/icons/Apple.vue')),
  },
  {
    key: 'google',
    icon: defineAsyncComponent(() => import('@core/icons/Google.vue')),
  },
  {
    key: 'facebook',
    icon: defineAsyncComponent(() => import('@core/icons/Facebook.vue')),
  },
])
</script>

<template>
  <VRow
    no-gutters
    class="gap-x-2"
  >
    <VBtn
      v-for="social in socialAuth"
      :key="social.key"
      icon
      variant="outlined"
      color="grey-300"
    >
      <Component :is="social.icon" />
    </VBtn>
  </VRow>
</template>
