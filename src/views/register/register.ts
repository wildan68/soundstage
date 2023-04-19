import type { Component } from 'vue'

interface RegisterStep {
  key: string
  title: string
  component: Component
}

export const useRegister = () => {
  const activeStep = ref<number>(0)

  const step: RegisterStep[] = [
    {
      key: 'email',
      title: 'Create Account',
      component: defineAsyncComponent(() => import('./CheckEmail.vue')),
    }, {
      key: 'detail',
      title: 'Detail Account',
      component: defineAsyncComponent(() => import('./DetailAccount.vue')),
    },
  ]

  return {
    step,
    activeStep,
  }
}
