<script setup lang="ts">
import { useDateFormat } from '@vueuse/core'
import type { ItemsCard } from './types'
import { useNumberDot } from '@core/app'

const props = defineProps<{ data: ItemsCard }>()

const { date, location, price, title } = toRefs(props.data)

const dateFormat = useDateFormat(date, 'DD MMMM YYYY', { locales: 'en-US' })
</script>

<template>
  <VCard class="cursor-pointer">
    <VImg
      src="/concert-1.jpg"
      height="200px"
      cover
    />

    <VCardText class="d-flex flex-column gap-y-2">
      <div class="text-black font-weight-semibold text-sm">
        {{ title }}
      </div>
      <div class="text-xs text-secondary">
        {{ location }}
      </div>
      <div class="text-xs text-secondary font-weight-semibold">
        {{ dateFormat }}
      </div>
    </VCardText>

    <VCardActions>
      <div class="font-weight-bold text-black mx-3 text-xl">
        ${{ useNumberDot(price) }}
      </div>
    </VCardActions>
  </VCard>
</template>

<style scoped lang="scss">
.v-card {
  border-radius: 14px !important;
}
</style>
