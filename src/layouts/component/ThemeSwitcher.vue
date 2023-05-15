<script setup lang="ts">
import { isDark } from '@core/app'
</script>

<template>
  <VSwitch
    v-model="isDark"
    inset
    false-icon="tabler-sun-high"
    true-icon="tabler-moon-stars"
  />
</template>

<style scoped lang="scss">
:deep(.v-switch__track) {
    background-color: rgb(var(--v-theme-switch)) !important;
}
</style>
