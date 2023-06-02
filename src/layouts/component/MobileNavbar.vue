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

const activePath = computed<string>(() => router.currentRoute.value.path)

const toPage = (path: string) => router.push({ path })

const isActive = (path: string) => activePath.value === path
</script>

<template>
  <div class="navbar-wrapper">
    <button
      v-for="nav in navbarList"
      :key="nav.title"
      v-ripple
      variant="text"
      class="navbar-wrapper__btn"
      :class="[{ 'navbar-wrapper__btn--active': isActive(nav.to) }]"
      @click="toPage(nav.to)"
    >
      <VIcon :icon="nav.icon" />
      {{ nav.title }}
    </button>
  </div>
</template>

<style lang="scss" scoped>
.navbar-wrapper {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 50;
  background: rgb(var(--v-theme-surface));
  padding: 8px 24px;
  display: flex;
  justify-content: space-around;

  &__btn {
    padding-block: 8px !important;
    display: flex;
    flex: 1;
    flex-direction: column;
    align-items: center;
    font-size: 14px;
  }

  &__btn--active {
    color: rgb(var(--v-theme-primary)) !important;
  }
}
</style>
