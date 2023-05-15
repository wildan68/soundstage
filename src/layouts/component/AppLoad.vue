<script setup lang="ts">
import Bulllet from '@core/icons/Bullet.vue'
import { themeConfig } from '@themeConfig'
import { isDark } from '@core/app'
</script>

<template>
  <Teleport to="body">
    <div class="app-load">
      <VRow
        no-gutters
        class="justify-center"
      >
        <Component
          :is="themeConfig.app.logo"
          :bullet="false"
          :light="isDark"
        />
        <div class="bullet-animation">
          <Bulllet />
        </div>
      </VRow>
    </div>
  </Teleport>
</template>

<style scoped lang="scss">
.app-load {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
}

.bullet-animation {
  margin-left: -24px;
}
</style>
