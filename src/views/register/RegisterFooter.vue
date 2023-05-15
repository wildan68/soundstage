<script setup lang="ts">
import { themeConfig } from '@themeConfig'
import { isDark } from '@/@core/app'
</script>

<template>
  <div class="d-flex flex-column gap-8 mt-8">
    <div class="text-sm text-center">
      By create account, you agree to the
      <span class="font-weight-semibold text-primary cursor-pointer">Terms & Conditions</span>
      and <span class="font-weight-semibold text-primary cursor-pointer">Privacy Policy</span>
      {{ themeConfig.app.name }}.
    </div>

    <div class="text-sm text-center">
      Already have an account?
      <RouterLink
        to="/login"
        class="font-weight-semibold text-primary cursor-pointer"
      >
        Just log in
      </RouterLink>
    </div>

    <VRow
      no-gutters
      class="gap-x-2 justify-center w-100 align-center"
    >
      <Component
        :is="themeConfig.app.logo"
        width="91px"
        :light="isDark"
      />
      <div class="text-xs">
        {{ themeConfig.app.copyright }}
      </div>
    </VRow>
  </div>
</template>
