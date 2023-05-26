<script setup lang="ts">
interface Navbar {
  icon: string
  title: string
  to: string
}

const navbarList: Navbar[] = [
  {
    icon: 'tabler-home-2',
    title: 'Home',
    to: '/',
  }, {
    icon: 'tabler-ticket',
    title: 'My Order',
    to: '/',
  }, {
    icon: 'tabler-user',
    title: 'Account',
    to: '/',
  },
]
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
