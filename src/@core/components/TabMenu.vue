<script setup lang="ts">
import type { TabMenuItems } from './types'

interface Props {
  activeKey: string
  items: TabMenuItems[]
}

interface Emit {
  (e: 'change', val: string): void
}

defineProps<Props>()

const emit = defineEmits<Emit>()
</script>

<template>
  <VSwiper
    slides-per-view="auto"
    :space-between="10"
    class="tab-menu"
  >
    <VSwiperSlide
      v-for="menu in items"
      :key="menu.key"
      class="tab-menu__item"
    >
      <VBtn
        :variant="menu.key === activeKey ? 'elevated' : 'text'"
        :color="menu.key === activeKey ? 'primary' : 'secondary'"
        @click="emit('change', menu.key)"
      >
        {{ menu.label }}
      </VBtn>
    </VSwiperSlide>
  </VSwiper>
</template>

<style scoped lang="scss">
.tab-menu {
  &__item {
    width: fit-content;
  }
}
</style>
