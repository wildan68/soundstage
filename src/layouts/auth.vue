<script setup lang="ts">
import AppLoad from './component/AppLoad.vue'
import { themeConfig } from '@themeConfig'
import FrameBGAuth from '@images/vec/frame_bg_auth.png'
import { appLoad } from '@/@core/app'
</script>

<template>
  <VScaleTransition origin="center center">
    <!-- 👉 App Loads -->
    <AppLoad v-if="appLoad" />
    <!-- 👉 Content -->
    <VRow
      v-else
      no-gutters
      class="mt-6 mx-14"
    >
      <div class="bg-container">
        <Component :is="themeConfig.app.logo" />
        <div class="text-2xl text-center font-weight-bold">
          Enjoy the convenience of buying the music<br>festival tickets you're looking for!
        </div>
        <div class="text-secondary text-xl">
          It's easy to register
        </div>
        <VImg
          :src="FrameBGAuth"
          width="70%"
          height="fit-content"
          class="bg-container__auth-image"
        />
      </div>
      <!-- 👉 Pages -->
      <VCard width="574px">
        <VCardText>
          <RouterView v-slot="{ Component }">
            <VExpandTransition>
              <Component :is="Component" />
            </VExpandTransition>
          </RouterView>
        </VCardText>
      </VCard>
    </VRow>
  </VScaleTransition>
</template>

<style scoped lang="scss">
.v-card {
    border-top-left-radius: 24px;
    border-top-right-radius: 24px;
}

.bg-container {
  display: flex;
  flex-direction: column;
  flex: 1;
  position: relative;
  align-items: center;
  gap: 24px;
  height: calc(100vh - 24px);
  padding: 0 4rem;

  &__auth-image {
    position: absolute;
    bottom: 0;
  }
}

:deep(.v-responsive) {
  flex: none !important;
}
</style>
