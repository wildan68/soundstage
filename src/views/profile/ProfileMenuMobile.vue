<script setup lang="ts">
import type { Router } from 'vue-router'
import { profileMenu } from './profile'
import type { ProfileMenu } from './types'

interface Emit {
  (e: 'open', val: Pick<ProfileMenu, 'key' | 'component' | 'label'>): void
}

const emit = defineEmits<Emit>()

const router: Router = useRouter()

const toPage = (path: string) => router.push({ path })
</script>

<template>
  <div
    v-for="menu in profileMenu"
    :key="menu.key"
  >
    <div
      v-ripple
      class="menu-items"
      @click="menu.component ? emit('open', { key: menu.key, component: menu.component, label: menu.label }) : menu.to && toPage(menu.to)"
    >
      <VRow
        no-gutters
        class="gap-2 align-center"
      >
        <VIcon :icon="menu.icon" />
        {{ menu.label }}
      </VRow>

      <VIcon
        icon="tabler-chevron-right"
        color="on-surface"
      />
    </div>

    <VDivider
      v-if="menu.separator"
      class="my-3"
      thickness="16px"
    />
  </div>
</template>

<style scoped lang="scss">
.menu-items {
  padding: 14px 4px;
  cursor: pointer;
  margin-inline: 24px;
  display: flex;
  gap: 8px;
  align-items: center;
  border-radius: 8px;

  &__active {
    color: rgb(var(--v-theme-primary));
  }
}
</style>

