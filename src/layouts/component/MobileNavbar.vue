<script setup lang="ts">
import type { Router } from 'vue-router'

interface Navbar {
  icon: string
  title: string
  to: string
}

const router: Router = useRouter()

const navbarList: Navbar[] = [
  {
    icon: 'tabler-home-2',
    title: 'Home',
    to: '/',
  }, {
    icon: 'tabler-ticket',
    title: 'My Order',
    to: '/my-order',
  }, {
    icon: 'tabler-user',
    title: 'Account',
    to: '/profile',
  },
]

const toPage = (path: string) => router.push({ path })
</script>

<template>
  <VBottomNavigation
    grow
    height="auto"
    :style="{ paddingBlock: '14px' }"
  >
    <VBtn
      v-for="nav in navbarList"
      :key="nav.title"
      variant="text"
      class="btn-navbar"
      @click="toPage(nav.to)"
    >
      <VIcon :icon="nav.icon" />
      {{ nav.title }}
    </VBtn>
  </VBottomNavigation>
</template>

<style lang="scss" scoped>
.btn-navbar {
  padding-block: 8px !important;
  width: fit-content !important;
}
</style>
