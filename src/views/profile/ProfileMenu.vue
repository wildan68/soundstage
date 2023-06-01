<script setup lang="ts">
import type { Router } from 'vue-router'
import { profileMenu } from './profile'
import type { ProfileMenu } from './types'

interface Props {
  activeMenu: string
}

interface Emit {
  (e: 'change', val: Pick<ProfileMenu, 'key' | 'component'>): void
}

defineProps<Props>()

const emit = defineEmits<Emit>()

const router: Router = useRouter()

const toPage = (path: string) => router.push({ path })
</script>

<template>
  <VCard
    width="275px"
    height="fit-content"
  >
    <VCardText class="d-flex flex-column gap-3">
      <div class="text-2xl font-weight-semibold text-black">
        Steven Joe
      </div>
      <VRow
        no-gutters
        class="gap-1 align-center"
      >
        <span class="text-sm font-weight-semibold text-info">
          Verified
        </span>
        <VIcon
          icon="tabler-discount-check-filled"
          color="info"
        />
      </VRow>
      <VDivider />
      <div
        v-for="menu in profileMenu"
        :key="menu.key"
      >
        <div
          v-ripple
          class="menu-items"
          :class="[{ 'menu-items__active': activeMenu === menu.key }]"
          @click="menu.component ? emit('change', { key: menu.key, component: menu.component }) : menu.to && toPage(menu.to)"
        >
          <VIcon :icon="menu.icon" />
          {{ menu.label }}
        </div>

        <VDivider
          v-if="menu.separator"
          class="my-3"
        />
      </div>
    </VCardText>
  </VCard>
</template>

<style scoped lang="scss">
.menu-items {
    padding: 12px 4px;
    cursor: pointer;
    display: flex;
    gap: 8px;
    align-items: center;
    border-radius: 8px;

    &__active {
        color: rgb(var(--v-theme-primary));
    }
}
</style>
