import type { Component } from 'vue'
import type { Register } from '@/stores/types'

interface RegisterStep {
  key: string
  title: string
  component: Component
  back: boolean
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
      back: false,
    }, {
      key: 'otp',
      title: 'Verify OTP',
      component: defineAsyncComponent(() => import('./RegisterOTP.vue')),
      back: true,
    }, {
      key: 'detail',
      title: 'Detail Account',
      component: defineAsyncComponent(() => import('./DetailAccount.vue')),
      back: false,
    },
  ]

  return {
    step,
    activeStep,
  }
}
