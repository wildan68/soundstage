<script setup lang="ts">
import type { TabMenuItems } from '@core/components/types'
import { themeConfig } from '@themeConfig'

const activeKey = ref<string>('all')

const tabMenu: TabMenuItems[] = [
  {
    key: 'all',
    label: 'All',
  }, {
    key: 'unpaid',
    label: 'Unpaid',
  }, {
    key: 'purchased',
    label: 'Recently Purchased',
  }, {
    key: 'nereast-date',
    label: 'Nearest Date',
  }, {
    key: 'history',
    label: 'History',
  },
]

const quickInfo = [
  {
    icon: 'tabler-armchair',
    label: 'Row C Seat 144 ',
  }, {
    icon: 'tabler-calendar',
    label: useDateFormat('2023-10-10', 'dddd, DD MMMM YYYY').value,
  }, {
    icon: 'tabler-map-pin',
    label: 'Main Stadium, Jakarta, Indonesia',
  },
]

const pagination = reactive({
  perPage: 5,
})
</script>

<template>
  <div
    class="order-wrapper"
    :style="{ width: themeConfig.isTablet ? '200px' : 'auto' }"
  >
    <VCard
      title="My Order"
      subtitle="List of tickets that you have purchased"
      :flat="themeConfig.isMobile"
    >
      <VCardText>
        <TabMenu
          :active-key="activeKey"
          :items="tabMenu"
          @change="(e: string) => activeKey = e"
        />
      </VCardText>
    </VCard>

    <VCard :flat="themeConfig.isMobile">
      <VCardText class="d-flex flex-column gap-4">
        <VCard
          v-for="i in 5"
          :key="i"
        >
          <VCardText class="d-flex flex-column gap-6">
            <VRow
              no-gutters
              class="justify-space-between"
            >
              <div class="font-weight-bold text-black">
                VVIP | JAKARTA MUSIC FEST: 2023
              </div>
              <RouterLink
                to="/event-abc"
                class="font-weight-bold text-primary cursor-pointer"
              >
                Detail
              </RouterLink>
            </VRow>

            <VRow
              no-gutters
              class="gap-6 w-fit-content"
            >
              <VRow
                v-for="info in quickInfo"
                :key="info.label"
                no-gutters
                class="gap-1 align-end"
              >
                <VIcon :icon="info.icon" />
                <span class="text-sm text-black">{{ info.label }}</span>
              </VRow>
            </VRow>

            <VDivider thickness="4px" />

            <VRow
              no-gutters
              class="justify-space-between align-center"
            >
              <div class="font-weight-bold text-primary text-2xl">
                $40
              </div>
              <VBtn size="large">
                Print Ticket
              </VBtn>
            </VRow>
          </VCardText>
        </VCard>

        <Pagination
          :items-page="[5, 10, 15, 20, 25]"
          :per-page="pagination.perPage"
          @update:per-page="(e: number) => pagination.perPage = e"
        />
      </VCardText>
    </VCard>
  </div>
</template>

<style scoped lang="scss">
.order-wrapper {
  display: flex;
  flex-direction: column;
  gap: 24px;
}
</style>

