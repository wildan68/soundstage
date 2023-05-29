<script setup lang="ts">
import AppLoad from './component/AppLoad.vue'
import { themeConfig } from '@themeConfig'
import FrameBGAuth from '@images/vec/frame_bg_auth.png'
import { appLoad, isDark } from '@/@core/app'
</script>

<template>
  <VScaleTransition origin="center center">
    <!-- 👉 App Loads -->
    <AppLoad v-if="appLoad" />
    <!-- 👉 Content -->
    <VRow
      v-else
      no-gutters
      class="mt-6"
      :class="[
        { 'mx-14': !themeConfig.isMobile && !themeConfig.isTablet },
        { 'mx-6': themeConfig.isMobile || themeConfig.isTablet },
      ]"
    >
      <div class="bg-container">
        <Component
          :is="themeConfig.app.logo"
          :light="isDark"
        />

        <div
          class="text-center font-weight-bold"
          :class="[{ 'text-2xl': !themeConfig.isMobile }]"
        >
          Enjoy the convenience of buying the music festival tickets you're looking for!
        </div>

        <div
          class="text-secondary"
          :class="[
            { 'text-xl': !themeConfig.isMobile },
            { 'text-sm': themeConfig.isMobile },
          ]"
        >
          It's easy to register
        </div>

        <VImg
          :src="FrameBGAuth"
          :width="themeConfig.isMobile || themeConfig.isTablet ? '100%' : '70%'"
          height="fit-content"
          class="bg-container__auth-image"
        />
      </div>
      <!-- 👉 Pages -->
      <VCard :width="themeConfig.isMobile || themeConfig.isTablet ? '100%' : '574px'">
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
  position: sticky;
  align-items: center;
  gap: 24px;
  height: calc(100vh - 24px);
  padding: 0 4rem;
  top: 24px;

  @media (max-width: 1024px) {
    height: auto;
  }

  @media (max-width: 768px) {
    padding: 0 0.5rem;
    margin-bottom: 24px;
  }

  &__auth-image {
    position: absolute;
    bottom: 0;

    @media (max-width: 1024px) {
      position: fixed;
    }
  }
}

:deep(.v-responsive) {
  flex: none !important;
}

// 👉 Override TextField
:deep(.v-field__input), :deep(.v-field__append-inner), :deep(.v-text-field__prefix) {
  padding-block: 16px;
}

:deep(.v-field__outline__start) {
  border-radius: 8px 0 0 8px !important;
}

:deep(.v-field__outline__end) {
  border-radius: 0 8px 8px 0 !important;
}

:deep(.v-label.v-field-label) {
  top: 14px !important;
}

// 👉 Override Divider
:deep(.v-divider) {
  flex: 1 !important;
}
</style>
