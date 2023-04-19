<script setup lang="ts">
import SocialAuth from '@/views/auth-provider/SocialAuth.vue'
import { themeConfig } from '@themeConfig'

const isPasswordVisible = ref(false)
</script>

<template>
  <VSheet class="d-flex flex-column gap-8 px-6">
    <h1>Login</h1>

    <VForm class="d-flex flex-column gap-4">
      <VTextField
        label="Enter your email"
      />
      <VTextField
        label="Enter your password"
        :type="isPasswordVisible ? 'text' : 'password'"
        :append-inner-icon="!isPasswordVisible ? 'tabler-eye-off' : 'tabler-eye'"
        @click:append-inner="isPasswordVisible = !isPasswordVisible"
      />
      <div class="text-right">
        <span class="text-primary font-weight-bold text-sm">Forgot Password?</span>
      </div>
      <VBtn height="44px">
        Login
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
      By logging in, you agree to the
      <span class="font-weight-semibold text-primary cursor-pointer">Terms & Conditions</span>
      and <span class="font-weight-semibold text-primary cursor-pointer">Privacy Policy</span>
      {{ themeConfig.app.name }}.
    </div>
    <div class="text-sm text-center">
      Don't have an account yet?
      <RouterLink
        to="/register"
        class="font-weight-semibold text-primary cursor-pointer"
      >
        Let's create an account!
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
