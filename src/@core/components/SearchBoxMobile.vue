<script setup lang="ts">
import { searchPlaceholder } from '../app'

interface Emit {
  (e: 'back'): void
}

const emit = defineEmits<Emit>()
</script>

<template>
  <div class="search-box-wrapper">
    <div class="d-flex gap-2 align-center px-6 pt-6">
      <VBtn
        icon
        variant="text"
        color="on-surface"
        @click="emit('back')"
      >
        <VIcon icon="tabler-chevron-left" />
      </VBtn>

      <VTextField
        :placeholder="searchPlaceholder"
        persistent-placeholder
        prepend-inner-icon="tabler-search"
        variant="plain"
        bg-color="background"
        autofocus
      />
    </div>

    <SearchBox />
  </div>
</template>

<style scoped lang="scss">
.search-box-wrapper {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
  z-index: 1000;
  background: rgb(var(--v-theme-surface));
  color: rgb(var(--v-theme-on-surface));
  display: flex;
  flex-direction: column;
}

// 👉 Override TextField
:deep(.v-field__input), :deep(.v-text-field__prefix) {
  background: rgb(var(--v-theme-background));
  padding-block: 8px;
}

:deep(.v-field__prepend-inner) {
  padding: 8px;
}

:deep(.v-field) {
  border-radius: 99px;
  overflow: hidden;
}
</style>
