<script setup lang="ts">
import SocialAuth from '@/views/auth-provider/SocialAuth.vue'
import { themeConfig } from '@themeConfig'
</script>

<template>
  <VSheet class="d-flex flex-column gap-8 px-6">
    <h1>Create Account</h1>

    <VForm class="d-flex flex-column gap-4">
      <VTextField
        label="Enter your email"
      />
      <VBtn height="44px">
        Continue
      </VBtn>
    </VForm>
    <div class="d-flex flex-column gap-y-4 align-center">
      <div class="d-flex align-center gap-x-4 w-100">
        <VDivider />
        <span class="text-sm text-secondary">Or login with</span>
        <VDivider />
      </div>
      <SocialAuth />
    </div>
    <div class="text-sm text-center">
      By Create Account, you agree to the
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
      />
      <div class="text-xs">
        {{ themeConfig.app.copyright }}
      </div>
    </VRow>
  </VSheet>
</template>

<style scoped lang="scss">
:deep(.v-field__input), :deep(.v-field__append-inner) {
    padding-block: 16px;
}

:deep(.v-label.v-field-label) {
  top: 14px !important;
}

:deep(.v-divider) {
  flex: 1 !important;
}

:deep(.v-field__outline__start) {
  border-radius: 8px 0 0 8px !important;
}

:deep(.v-field__outline__end) {
  border-radius: 0 8px 8px 0 !important;
}
</style>

<route lang="yaml">
meta:
  layout: auth
  redirectIfLoggedIn: true
</route>
