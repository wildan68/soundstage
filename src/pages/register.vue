<script setup lang="ts">
import { useRegister } from '@/views/register/register'
import { themeConfig } from '@themeConfig'

const { step, activeStep } = useRegister()

const handlerNext = () => {
  if (activeStep.value < step.length - 1)
    activeStep.value++
}
</script>

<template>
  <VSheet
    class="d-flex flex-column gap-8"
    :class="[{ 'px-6': !themeConfig.isMobile }]"
  >
    <VRow
      no-gutters
      class="gap-x-4 align-center"
    >
      <VBtn
        v-if="activeStep > 0 && step[activeStep].back"
        icon
        variant="plain"
        color="black"
        @click="activeStep--"
      >
        <VIcon icon="tabler-chevron-left" />
      </VBtn>
      <h1 :class="[{ 'text-2xl': themeConfig.isMobile }]">
        {{ step[activeStep].title }}
      </h1>
    </VRow>

    <VScaleTransition>
      <KeepAlive>
        <Component
          :is="step[activeStep].component"
          @submit="handlerNext"
        />
      </KeepAlive>
    </VScaleTransition>
  </VSheet>
</template>

<route lang="yaml">
meta:
  layout: auth
  redirectIfLoggedIn: true
</route>
