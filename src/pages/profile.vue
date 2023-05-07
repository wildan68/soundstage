<script setup lang="ts">
import type { Component } from 'vue'
import ProfileMenu from '@/views/profile/ProfileMenu.vue'

const activeMenu = ref<Component>(defineAsyncComponent(() => import('@/views/profile/component/Account.vue')))

const keyMenu = ref<string>('account')

const onChangeMenu = (val: { key: string; cmp: Component }) => {
  keyMenu.value = val.key
  activeMenu.value = val.cmp

  window.scrollTo({ top: 0, behavior: 'smooth' })
}
</script>

<template>
  <VContainer>
    <VRow
      no-gutters
      class="gap-6"
    >
      <ProfileMenu
        :active-menu="keyMenu"
        @change="onChangeMenu"
      />
      <div class="flex-1">
        <Component :is="activeMenu" />
      </div>
    </VRow>
  </VContainer>
</template>
