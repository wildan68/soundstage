<script setup lang="ts">
const dummy = {
  id: '1',
  title: 'The Best of Jazz',
  slug: 'the-best-of-jazz',
  image: 'https://images.unsplash.com/photo-1540039155733-5bb30b53aa14',
  price: 10,
  location: 'Jakarta',
  date: '2023-12-12',
}
</script>

<template>
  <div class="d-flex flex-column gap-4">
    <div class="font-weight-semibold text-black text-2xl">
      Popular Events
    </div>

    <div class="d-flex justify-end">
      <VBtn
        variant="text"
        color="black"
        append-icon="tabler-align-right"
      >
        Sort By
      </VBtn>
    </div>

    <div class="result-grid">
      <EventCard
        v-for="i in 9"
        :key="i"
        :data="dummy"
      />
    </div>

    <Pagination />
  </div>
</template>

<style scoped lang="scss">
.result-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 14px;
}
</style>
