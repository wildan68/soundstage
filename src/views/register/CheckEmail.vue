<script setup lang="ts">
import { registerForm } from './register'
import RegisterFooter from './RegisterFooter.vue'
import { emailValidator, requiredValidator } from '@validators'
import { useAuthStore } from '@/stores/auth'
import SocialAuth from '@/views/auth-provider/SocialAuth.vue'

interface Emit {
  (e: 'submit'): void
}

const emit = defineEmits<Emit>()

const store = useAuthStore()

const form = ref<HTMLFormElement>()

const error = ref<boolean>(false)

const loading = ref<boolean>(false)

const onSubmit = async () => {
  error.value = false

  const { valid } = await form.value?.validate()

  if (!valid)
    return

  try {
    loading.value = true
    await store.checkEmail({ email: registerForm.email })

    setTimeout(() => {
      emit('submit')

      loading.value = false
    }, 1000)
  }
  catch (err) {
    if (err instanceof Error) {
      setTimeout(() => {
        error.value = true

        form.value?.validate()

        loading.value = false
      }, 1000)
    }
  }
}

const onError = () => {
  if (error.value)
    return 'Email already exists'
}
</script>

<template>
  <VForm
    ref="form"
    class="d-flex flex-column gap-4"
    @submit.prevent="onSubmit"
  >
    <VTextField
      v-model="registerForm.email"
      label="Enter your email"
      :rules="[requiredValidator, emailValidator, onError]"
      density="comfortable"
    />

    <VBtn
      height="44px"
      type="submit"
      :loading="loading"
    >
      Continue

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

          <span>Checking..</span>
        </VRow>
      </template>
    </VBtn>

    <div class="d-flex flex-column gap-y-4 align-center">
      <div class="d-flex align-center gap-x-4 w-100">
        <VDivider />

        <span class="text-sm text-secondary">Or login with</span>

        <VDivider />
      </div>
      <SocialAuth />
    </div>

    <VCard
      color="background"
      title="Try Error"
    >
      <VCardText>
        Input email <span class="font-weight-semibold text-black">demo@example.com</span>
      </VCardText>
    </VCard>

    <RegisterFooter />
  </VForm>
</template>
