import type { Component } from 'vue'
import type { Register } from '@/stores/types'

interface RegisterStep {
  key: string
  title: string
  component: Component
}

export const registerForm = reactive<Register>({
  email: '',
  password: '',
  firstname: '',
  lastname: '',
  phone_number: '',
})

export const phone_number_temp = ref<string>('')

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
