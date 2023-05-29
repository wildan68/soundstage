<script setup lang="ts">
import { themeConfig } from '@themeConfig'

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
      <VRow
        v-if="themeConfig.isMobile"
        no-gutters
        class="menu-wrapper__navigation justify-space-between w-100"
      >
        <VRow
          no-gutters
          class="align-center gap-2"
        >
          <VBtn
            icon
            class="menu-wrapper__navigation__btn"
            variant="text"
            color="black"
            @click="$router.back()"
          >
            <VIcon icon="tabler-chevron-left" />
          </VBtn>

          <div class="text-black font-weight-bold">
            JAKARTA MUSIC FESTIVAL
          </div>
        </VRow>

        <VBtn
          icon
          variant="text"
          class="menu-wrapper__navigation__btn"
          color="black"
        >
          <VIcon icon="tabler-share" />
        </VBtn>
      </VRow>

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

  @media (max-width: 768px) {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
  }

  &__navigation {
    padding: 24px;

    &__btn {
      border-radius: 50% !important;
    }
  }
}

:deep(.v-container) {
  padding: 0 !important;
}

:deep(.v-tab.v-tab) {
  color: rgb(var(--v-theme-secondary));
}
</style>
