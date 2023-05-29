<script setup lang="ts">
import { themeConfig } from '@themeConfig'

const { y } = useWindowScroll()

const hiddenImage = computed(() => themeConfig.isMobile && y.value > 500)
</script>

<template>
  <div
    class="container-wrapper"
    :class="[{ 'container-wrapper__image-hidden': hiddenImage }]"
  >
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

  @media (max-width: 768px) {
    position: sticky;
    top: 0;
  }

  &__image-hidden {
    opacity: 0 !important;
  }
}

:deep(.v-container) {
  padding: 0 !important;
  z-index: 1 !important;
}
</style>
