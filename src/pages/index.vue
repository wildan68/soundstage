<script setup lang="ts">
import type { ItemsCard, ItemsFilterBoxCard } from '@/@core/components/types'
import CouponPromo from '@/views/home/CouponPromo.vue'

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

const dummyEvent: ItemsCard[] = [{
  id: '1',
  title: 'The Best of Jazz',
  image: 'https://picsum.photos/200/300',
  price: 10,
  location: 'Jakarta',
  date: '2023-12-12',
}, {
  id: '2',
  title: 'Epic Music Festival',
  image: 'https://picsum.photos/200/300',
  price: 30,
  location: 'Bandung',
  date: '2023-13-12',
}, {
  id: '3',
  title: 'Salsa Night',
  image: 'https://picsum.photos/200/300',
  price: 20,
  location: 'Semarang',
  date: '2023-13-12',
}, {
  id: '4',
  title: 'World Music Festival',
  image: 'https://picsum.photos/200/300',
  price: 62,
  location: 'Jakarta',
  date: '2023-13-12',
}, {
  id: '5',
  title: 'Asia Music Festival',
  image: 'https://picsum.photos/200/300',
  price: 33,
  location: 'Jakarta',
  date: '2023-13-12',
}, {
  id: '6',
  title: 'Bekasi Music Festival',
  image: 'https://picsum.photos/200/300',
  price: 80,
  location: 'Bandung',
  date: '2023-13-12',
}, {
  id: '7',
  title: 'Thrash Metal Festival',
  image: 'https://picsum.photos/200/300',
  price: 15,
  location: 'Bandung',
  date: '2023-13-12',
}]

const onFilterChange = (id: string) => {
  console.log(id)
}
</script>

<template>
  <div class="d-flex flex-column gap-6">
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
  </div>
</template>
