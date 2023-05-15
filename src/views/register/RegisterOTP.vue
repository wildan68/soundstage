<script setup lang="ts">
import { registerForm } from './register'
import RegisterFooter from './RegisterFooter.vue'
import { useAuthStore } from '@/stores/auth'

interface Emit {
  (e: 'submit'): void
}

const emit = defineEmits<Emit>()

const store = useAuthStore()

const otpCode = ref<string>('')

const loading = ref<boolean>(false)

const resendTimer = ref<number>(120)

const error = ref<boolean>(false)

const timer = computed<string>(() => {
  const minutes = Math.floor(resendTimer.value / 60)
  const seconds = resendTimer.value - minutes * 60

  return `${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`
})

const startTimer = () => {
  const time = setInterval(() => {
    resendTimer.value -= 1

    if (resendTimer.value === 0)
      clearInterval(time)
  }, 1000)
}

const resendOTP = () => {
  if (resendTimer.value > 0)
    return

  resendTimer.value = 120

  startTimer()
}

const censorEmail = (email: string) => {
  const [username, domain] = email.split('@')

  const usernameLength = username.length

  const censoredUsername = username.slice(0, 2) + '*'.repeat(usernameLength - 4) + username.slice(usernameLength - 2)

  return `${censoredUsername}@${domain}`
}

const onVerifyOtp = async () => {
  error.value = false

  if (!otpCode.value)
    return

  loading.value = true

  try {
    await store.verifyOtp({ email: registerForm.email, otp_code: otpCode.value })

    setTimeout(() => {
      emit('submit')

      loading.value = false
    }, 1000)
  }
  catch (err) {
    if (err instanceof Error) {
      setTimeout(() => {
        error.value = true

        loading.value = false
      }, 1000)
    }
  }
}

onMounted(() => startTimer())
</script>

<template>
  <VForm
    class="d-flex flex-column gap-4 align-center"
    @submit.prevent="onVerifyOtp"
  >
    <div class="font-weight-semibold text-black text-center">
      Check your email to get the OTP code
    </div>

    <div class="font-weight-semibold text-secondary text-center">
      {{ censorEmail(registerForm.email) }}
    </div>

    <VOtpInput
      v-model:value="otpCode"
      input-classes="otp-input"
      separator=" "
      :num-inputs="5"
      should-auto-focus
      input-type="number"
    />

    <div
      v-if="error"
      class="text-error text-center"
    >
      Invalid OTP code
    </div>

    <div class="text-secondary text-center">
      Haven't received the otp code yet?

      <span class="font-weight-semibold text-black">{{ timer }}</span>
    </div>

    <div
      class="font-weight-semibold cursor-pointer"
      :class="[
        { 'text-primary ': resendTimer === 0 },
        { 'text-secondary ': resendTimer > 0 },
      ]"
      @click="resendOTP"
    >
      Resend
    </div>

    <VBtn
      height="44px"
      type="submit"
      :loading="loading"
      block
    >
      Verify

      <template #loader>
        <VRow
          no-gutters
          class="gap-2 justify-center align-center"
        >
          <VProgressCircular
            indeterminate
            color="white-persistent"
            size="24"
          />

          <span>Verifying..</span>
        </VRow>
      </template>
    </VBtn>

    <VCard
      color="background"
      title="Try Error"
      class="w-100"
    >
      <VCardText>
        OTP Code <span class="font-weight-semibold text-black">12345</span><br>
        Try error with another OTP Code
      </VCardText>
    </VCard>

    <RegisterFooter />
  </VForm>
</template>
