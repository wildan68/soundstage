<script setup lang="ts">
import SocialAuth from '@/views/auth-provider/SocialAuth.vue'
import { themeConfig } from '@themeConfig'
import { useRegister } from '@/views/register/register'
import { isDark } from '@/@core/app'

const { step, activeStep } = useRegister()

const handlerNext = () => {
  if (activeStep.value < step.length - 1)
    activeStep.value++
}
</script>

<template>
  <VSheet class="d-flex flex-column gap-8 px-6">
    <VRow
      no-gutters
      class="gap-x-4"
    >
      <VBtn
        v-if="activeStep > 0"
        icon
        variant="plain"
        color="black"
        @click="activeStep--"
      >
        <VIcon icon="tabler-chevron-left" />
      </VBtn>
      <h1>{{ step[activeStep].title }}</h1>
    </VRow>

    <VScaleTransition>
      <KeepAlive>
        <Component
          :is="step[activeStep].component"
          @submit="handlerNext"
        />
      </KeepAlive>
    </VScaleTransition>

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
        :light="isDark"
      />
      <div class="text-xs">
        {{ themeConfig.app.copyright }}
      </div>
    </VRow>
  </VSheet>
</template>

<route lang="yaml">
meta:
  layout: auth
  redirectIfLoggedIn: true
</route>
