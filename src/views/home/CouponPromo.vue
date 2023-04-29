<script setup lang="ts">
import { VSPagination } from '@/@core/app'

const couponList = [
  {
    id: '1',
    image: '/coupon-1.png',
  }, {
    id: '2',
    image: '/coupon-2.png',
  }, {
    id: '3',
    image: '/coupon-1.png',
  }, {
    id: '4',
    image: '/coupon-2.png',
  }, {
    id: '5',
    image: '/coupon-1.png',
  },
]
</script>

<template>
  <VRow
    no-gutters
    class="gap-6 align-center"
  >
    <div
      class="d-flex flex-column gap-4"
      :style="{ width: '35%' }"
    >
      <div class="bg-primary w-fit-content pa-3 rounded-full">
        <VIcon
          icon="tabler-discount-2"
          size="74px"
          color="white"
        />
      </div>

      <h1 class="text-black">
        Interesting Promo Coupons for you, let's see...
      </h1>

      <VBtn
        variant="tonal"
        width="fit-content"
        size="large"
      >
        See all promos
      </VBtn>
    </div>
    <div class="flex-1 bg-white coupon-list h-fit-content">
      <div class="relative w-100">
        <VSwiper
          :space-between="30"
          slides-per-view="auto"
          :modules="[VSPagination]"
          :pagination="{ clickable: true, el: '.coupon-list__pagination' }"
        >
          <VSwiperSlide
            v-for="coupon in couponList"
            :key="coupon.id"
            class="coupon-list__slide"
          >
            <VImg
              :src="coupon.image"
              cover
              aspect-ratio="16/9"
              eager
            />
          </VSwiperSlide>
        </VSwiper>

        <div class="coupon-list__pagination" />
      </div>
    </div>
  </VRow>
</template>

<style scoped lang="scss">
.coupon-list {
  border-radius: 14px 0 0 14px;
  padding: 24px 0;

  &__slide {
    width: 40%;
    border-radius: 14px;
    overflow: hidden;
    cursor: pointer;

    &:nth-child(1) {
      margin-left: 24px;
    }

    &:nth-last-child(1) {
      margin-right: 24px;
    }

    img {
      object-fit: cover;
      aspect-ratio: 16/9;
    }
  }

  &__pagination {
    justify-content: center;
    display: flex;
    margin-top: 24px;
    align-items: center;
  }
}

// 👉 Override VImg
:deep(.v-responsive) {
  flex: none !important;
}
</style>
