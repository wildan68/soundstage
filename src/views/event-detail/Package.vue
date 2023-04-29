<script setup lang="ts">
import DateFilter from './package/DateFilter.vue'
import PackageList from './package/PackageList.vue'
import VenueMap from './package/VenueMap.vue'
import EventInformation from './package/EventInformation.vue'

interface Emit {
  (e: 'change', val: string): void
}

const emit = defineEmits<Emit>()

const packages = ref<HTMLElement>()

useIntersectionObserver(
  packages,
  ([{ isIntersecting }]) => isIntersecting && emit('change', 'packages'),
)
</script>

<template>
  <div
    ref="packages"
    class="d-flex flex-column gap-6"
  >
    <div class="d-flex flex-column gap-3">
      <span class="text-2xl text-black font-weight-bold">Select Package</span>
      <span>Filter date events</span>
      <DateFilter />
      <VRow
        no-gutters
        class="gap-6"
      >
        <PackageList class="flex-1" />
        <div class="event-information-wrapper">
          <VenueMap />
          <EventInformation />
        </div>
      </VRow>
    </div>
  </div>
</template>

<style scoped lang="scss">
.event-information-wrapper {
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 450px;
  position: sticky;
  top: 200px;
}
</style>

