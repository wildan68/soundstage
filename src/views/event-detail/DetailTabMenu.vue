<script setup lang="ts">
interface Props {
  activeKey: string
}

interface Emit {
  (e: 'change', val: string): void
}

const props = defineProps<Props>()

const emit = defineEmits<Emit>()

const activeMenu = computed({
  get: () => props.activeKey,
  set: (val: string) => emit('change', val),
})

const menu = [{
  key: 'summary',
  label: 'Summary',
}, {
  key: 'description',
  label: 'Description',
}, {
  key: 'packages',
  label: 'Package',
}, {
  key: 'location',
  label: 'Location',
}, {
  key: 'other',
  label: 'Other',
}]
</script>

<template>
  <div class="menu-wrapper">
    <VContainer>
      <VTabs
        v-model="activeMenu"
        height="60px"
      >
        <VTab
          v-for="m in menu"
          :key="m.key"
          :value="m.key"
        >
          {{ m.label }}
        </VTab>
      </VTabs>
      <VDivider />
    </VContainer>
  </div>
</template>

<style scoped lang="scss">
.menu-wrapper {
  background: rgb(var(--v-theme-surface));
  position: sticky;
  top: 200px;
  z-index: 20;
}

:deep(.v-container) {
  padding: 0 !important;
}

:deep(.v-tab.v-tab) {
  color: rgb(var(--v-theme-secondary));
}
</style>
