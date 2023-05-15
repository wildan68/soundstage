<script setup lang="ts">
import type { Router } from 'vue-router'
import { phone_number_temp, registerForm } from './register'
import RegisterFooter from './RegisterFooter.vue'
import { useAuthStore } from '@/stores/auth'
import { integerValidator, requiredValidator } from '@validators'

const router: Router = useRouter()

const store = useAuthStore()

const form = ref<HTMLFormElement>()

const isPasswordVisible = ref<boolean>(false)

const error = ref<boolean>(false)

const loading = ref<boolean>(false)

const handlingNumber = (number: string) => {
  if (number.startsWith('+62'))
    return number.slice(3)
  if (number.startsWith('62'))
    return number.slice(2)
  if (number.startsWith('0'))
    return number.slice(1)

  return number
}

const onSubmit = async () => {
  try {
    const { valid } = await form.value?.validate()

    if (!valid)
      return

    loading.value = true

    registerForm.phone_number = handlingNumber(phone_number_temp.value)

    await store.register(registerForm)

    setTimeout(() => {
      router.push('/')

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
</script>

<template>
  <VForm
    ref="form"
    class="d-flex flex-column gap-4"
    @submit.prevent="onSubmit"
  >
    <VTextField
      :value="registerForm.email"
      label="Enter your email"
      readonly
      persistent-placeholder
    />

    <VTextField
      v-model="registerForm.firstname"
      label="First Name"
      :rules="[requiredValidator]"
    />

    <VTextField
      v-model="registerForm.lastname"
      label="Last Name"
      :rules="[requiredValidator]"
    />

    <div>
      <VTextField
        v-model="registerForm.password"
        label="Enter your password"
        :type="isPasswordVisible ? 'text' : 'password'"
        :append-inner-icon="!isPasswordVisible ? 'tabler-eye-off' : 'tabler-eye'"
        :rules="[requiredValidator]"
        @click:append-inner="isPasswordVisible = !isPasswordVisible"
      />
      <span class="text-sm text-secondary">
        Use a unique character, at least 6 characters
      </span>
    </div>

    <VTextField
      v-model="phone_number_temp"
      label="Phone Number"
      prefix="+62"
      :rules="[requiredValidator, integerValidator]"
    />

    <VBtn
      height="44px"
      type="submit"
      :loading="loading"
    >
      Create Account

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

          <span>Creating Account..</span>
        </VRow>
      </template>
    </VBtn>

    <RegisterFooter />
  </VForm>
</template>

