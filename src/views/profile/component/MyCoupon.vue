<script setup lang="ts">
import NotFoundVec from '@images/vec/not-found.png'
</script>

<template>
  <div class="d-flex flex-column gap-6">
    <VCard
      title="My Coupon"
      subtitle="List of promo coupons that you have"
    />
    <VCard>
      <VCardText class="d-flex flex-column justify-center align-center gap-6">
        <VImg
          :src="NotFoundVec"
          width="40%"
          class="ml-10"
        />
        <div class="font-weight-semibold text-2xl text-black">
          You don't have any coupon yet
        </div>
        <VBtn size="x-large">
          See Promo
        </VBtn>
      </VCardText>
    </VCard>
  </div>
</template>

