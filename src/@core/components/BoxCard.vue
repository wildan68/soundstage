<script setup lang="ts">
import { Navigation, Pagination } from '@core/app'

const navigation = { nextEl: '.next', prevEl: '.prev' }
</script>

<template>
  <VCol>
    <div class="d-flex flex-column gap-y-2 mb-6">
      <span class="font-weight-bold text-black text-2xl">Today Event</span>
      <span class="text-secondary text-sm">Today's best local music event</span>
    </div>
    <VRow
      no-gutters
      class="mb-6 gap-3"
    >
      <VBtn
        variant="outlined"
        class="btn-active"
      >
        Jakarta
      </VBtn>
      <VBtn
        v-for="i in 6"
        :key="i"
        variant="outlined"
        color="black"
        class="btn-inactive"
      >
        Bandung
      </VBtn>
    </VRow>

    <div class="relative">
      <SwiperNavigation :config="navigation" />

      <Swiper
        :slides-per-view="4"
        :space-between="10"
        :modules="[Pagination, Navigation]"
        :navigation="navigation"
      >
        <SwiperSlide
          v-for="i in 5"
          :key="i"
        >
          <EventCard />
        </SwiperSlide>
      </Swiper>
    </div>
  </VCol>
</template>

<style scoped lang="scss">
.nav-prev {
    position: absolute;
    top: 50%;
    left: 0;
    z-index: 50;
    margin-left: -24px;
}

.nav-next {
    position: absolute;
    top: 50%;
    right: 0;
    z-index: 50;
    margin-right: -24px;
}

.btn-active {
    background: rgba(var(--v-theme-primary), 0.1) !important;
    border-radius: 14px !important;
}

.btn-inactive {
    border: 1px solid rgba(var(--v-theme-secondary), 0.5) !important;
    border-radius: 14px !important;
}
</style>
