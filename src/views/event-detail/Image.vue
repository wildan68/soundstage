<script setup lang="ts">
import { themeConfig } from '@themeConfig'
</script>

<template>
  <div class="container-wrapper">
    <VContainer>
      <VImg
        :height="themeConfig.isMobile ? '330px' : '472px'"
        cover
        src="https://images.unsplash.com/photo-1567942712661-82b9b407abbf?w=774&q=80"
      />
    </VContainer>
  </div>
</template>

<style scoped lang="scss">
.container-wrapper {
  background: #000 !important;
  color: #fff;
}

:deep(.v-container) {
  padding: 0 !important;
}
</style>
