<script setup lang="ts">
import { VSkeletonLoader } from 'vuetify/labs/components'
import type { ItemsCard } from './types'
import { useNumberDot } from '@core/app'
import { themeConfig } from '@themeConfig'

const props = defineProps<{ data: ItemsCard }>()

const { date, location, price, title, image } = toRefs(props.data)

const dateFormat = useDateFormat(date, 'DD MMMM YYYY', { locales: 'en-US' })

const loaded = ref<boolean>(false)

const titleTruncate = (str: string) => {
  if (str.length > 20)
    return `${str.slice(0, 40)}...`

  return str
}
</script>

<template>
  <VCard
    class="cursor-pointer"
    height="100%"
  >
    <VImg
      :src="image"
      :height="themeConfig.isMobile ? '142px' : '200px'"
      cover
      @load="loaded = true"
    >
      <template #placeholder>
        <VSkeletonLoader type="image" />
      </template>
    </VImg>

    <VSkeletonLoader
      v-if="!loaded"
      type="article"
    />

    <VCardText
      v-if="loaded"
      class="d-flex flex-column gap-y-2"
    >
      <div class="text-black font-weight-semibold text-sm">
        {{ titleTruncate(title) }}
      </div>
      <div class="text-xs text-secondary">
        {{ location }}
      </div>
      <div class="text-xs text-secondary font-weight-semibold">
        {{ dateFormat }}
      </div>
    </VCardText>

    <VCardActions v-if="loaded">
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

:deep(.v-skeleton-loader__image) {
  height: 200px !important;

  @media (max-width: 728px) {
    height: 142px !important;
  }
}
</style>
