<script setup lang="ts">
import type { ItemsCard, ItemsFilterBoxCard } from '@core/components/types'
import CouponPromo from '@/views/home/CouponPromo.vue'
import { useItemsStore } from '@/stores/items'

const store = useItemsStore()

const dummyEvent = ref<ItemsCard[]>([])

const todayFilter: ItemsFilterBoxCard[] = [
  {
    id: 'jakarta',
    label: 'Jakarta',
  }, {
    id: 'bandung',
    label: 'Bandung',
  }, {
    id: 'bekasi',
    label: 'Bekasi',
  }, {
    id: 'semarang',
    label: 'Semarang',
  },
]

const bestDealsFilter: ItemsFilterBoxCard[] = [
  {
    id: '30',
    label: 'Off 30%',
    icon: 'tabler-discount-2',
  }, {
    id: '23',
    label: 'Off 23%',
    icon: 'tabler-discount-2',
  }, {
    id: '18',
    label: 'Off 18%',
    icon: 'tabler-discount-2',
  }, {
    id: '8',
    label: 'Off 8%',
    icon: 'tabler-discount-2',
  },
]

const onFilterChange = (id: string) => {
  console.log(id)
}

const fetchItems = async () => {
  try {
    const data = await store.listItems()

    dummyEvent.value = data?.data
  }
  catch (err) {
    if (err instanceof Error)
      throw new Error(err.message)
  }
}

onMounted(() => fetchItems())
</script>

<template>
  <VContainer class="d-flex flex-column gap-6">
    <CouponPromo />
    <BoxCard
      title="Today Event"
      subtitle="Today's best local music event"
      :filter="todayFilter"
      :items="dummyEvent"
      @change-filter="onFilterChange"
    />
    <BoxCard
      title="Biggest Music Festival"
      subtitle="Local and International music festival events"
      :items="dummyEvent"
      variant="event"
    />
    <BoxCard
      title="Best Deals"
      subtitle="Tickets with attractive promos for you"
      :filter="bestDealsFilter"
      :items="dummyEvent"
      @change-filter="onFilterChange"
    />
  </VContainer>
</template>
