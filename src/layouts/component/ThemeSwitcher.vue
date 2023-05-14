<script setup lang="ts">
import { useTheme } from 'vuetify'
import { isDark } from '@core/app'

const { global } = useTheme()

const switchTheme = (val: boolean) => val ? global.name.value = 'dark' : global.name.value = 'light'

watch(isDark, switchTheme)

onMounted(() => switchTheme(isDark.value))
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
