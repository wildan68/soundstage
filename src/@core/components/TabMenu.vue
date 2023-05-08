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
  <VRow
    no-gutters
    class="gap-2"
  >
    <VBtn
      v-for="menu in items"
      :key="menu.key"
      :variant="menu.key === activeKey ? 'elevated' : 'text'"
      :color="menu.key === activeKey ? 'primary' : 'secondary'"
      @click="emit('change', menu.key)"
    >
      {{ menu.label }}
    </VBtn>
  </VRow>
</template>
