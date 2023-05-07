<script setup lang="ts">
import { footer, isDark } from '@core/app'
import { themeConfig } from '@themeConfig'
import GetItOnPlaystore from '@images/get-it-on-playstore.png'
import DownloadOnTheAppstore from '@images/download-on-the-appstore.png'
</script>

<template>
  <div class="footer-wrapper">
    <VContainer class="d-flex flex-column text-sm">
      <VRow no-gutters>
        <VCol
          v-for="menu in footer"
          :key="menu.key"
          class="d-flex flex-column gap-y-5"
        >
          <div class="my-6 font-weight-semibold text-black">
            {{ menu.label }}
          </div>
          <div
            v-for="subMenu in menu.children"
            :key="subMenu.key"
            class="text-secondary cursor-pointer"
          >
            {{ subMenu.label }}
          </div>
        </VCol>
        <VCol class="d-flex flex-column gap-y-1">
          <div class="my-6 font-weight-semibold text-black">
            Download {{ themeConfig.app.name }} app
          </div>
          <VImg
            :src="GetItOnPlaystore"
            width="60%"
          />
          <VImg
            :src="DownloadOnTheAppstore"
            width="60%"
          />
        </VCol>
      </VRow>
      <VDivider
        class="my-6"
        thickness="4px"
      />
      <VRow
        no-gutters
        class="gap-x-2 justify-center w-100 align-center mb-6"
      >
        <Component
          :is="themeConfig.app.logo"
          width="187px"
          :light="isDark"
        />
        <div class="text-sm">
          {{ themeConfig.app.copyright }}
        </div>
      </VRow>
    </VContainer>
  </div>
</template>

<style scoped lang="scss">
.footer-wrapper {
  background: rgb(var(--v-theme-surface));
}

:deep(.v-responsive) {
  flex: none !important;
}
</style>
