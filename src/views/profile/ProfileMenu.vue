<script setup lang="ts">
import type { Component } from 'vue'
import type { Router } from 'vue-router'

interface Props {
  activeMenu: string
}

interface Emit {
  (e: 'change', val: { key: string; cmp?: Component }): void
}

interface ProfileMenu {
  key: string
  label: string
  icon: string
  component?: Component
  action?: () => void
  separator?: boolean
}

defineProps<Props>()

const emit = defineEmits<Emit>()

const router: Router = useRouter()

const profileMenu: ProfileMenu[] = [
  {
    key: 'account',
    label: 'Account',
    icon: 'tabler-user-circle',
    component: defineAsyncComponent(() => import('./component/Account.vue')),
  }, {
    key: 'my-order',
    label: 'My Order',
    icon: 'tabler-ticket',
    component: defineAsyncComponent(() => import('./component/MyOrder.vue')),
  }, {
    key: 'my-coupon',
    label: 'My Coupon',
    icon: 'tabler-discount-2',
    component: defineAsyncComponent(() => import('./component/MyCoupon.vue')),
  }, {
    key: 'bookmark',
    label: 'Bookmark',
    icon: 'tabler-bookmarks',
    component: defineAsyncComponent(() => import('./component/Bookmark.vue')),
    separator: true,
  }, {
    key: 'event-partner',
    label: 'Event Partner',
    icon: 'tabler-award',
    component: defineAsyncComponent(() => import('./component/EventPartner.vue')),
  }, {
    key: 'review',
    label: 'Review',
    icon: 'tabler-pencil-minus',
    component: defineAsyncComponent(() => import('./component/Review.vue')),
  }, {
    key: 'refund-list',
    label: 'Refund List',
    icon: 'tabler-ticket-off',
    component: defineAsyncComponent(() => import('./component/RefundList.vue')),
    separator: true,
  }, {
    key: 'settings',
    label: 'Settings',
    icon: 'tabler-settings',
    component: defineAsyncComponent(() => import('./component/Settings.vue')),
  }, {
    key: 'hel-center',
    label: 'Help Center',
    icon: 'tabler-message-chatbot',
    action: () => router.push('/help-center'),
    separator: true,
  }, {
    key: 'logout',
    label: 'Logout',
    icon: 'tabler-logout',
    action: () => router.push('/'),
  },
]
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
          @click="menu.component ? emit('change', { key: menu.key, cmp: menu.component }) : menu.action && menu.action()"
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
