<script setup lang="ts">
import type { Router } from 'vue-router'
import SocialAuth from '@/views/auth-provider/SocialAuth.vue'
import { themeConfig } from '@themeConfig'
import { isDark } from '@/@core/app'
import { useAuthStore } from '@/stores/auth'
import type { Auth } from '@/stores/types'
import { emailValidator, requiredValidator } from '@validators'

const router: Router = useRouter()

const store = useAuthStore()

const form = ref<HTMLFormElement>()

const email = ref<string>('demo@example.com')

const password = ref<string>('demo123')

const isPasswordVisible = ref<boolean>(false)

const error = ref<boolean>(false)

const loading = ref<boolean>(false)

const onSubmit = async () => {
  error.value = false

  const { valid } = await form.value?.validate()

  if (!valid)
    return

  try {
    loading.value = true

    const payload: Auth = {
      email: email.value,
      password: password.value,
    }

    await store.login(payload)

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

const onError = () => {
  if (error.value)
    return 'Incorrect email or password'
}
</script>

<template>
  <VSheet class="d-flex flex-column gap-8 px-6">
    <h1>Login</h1>

    <VScaleTransition>
      <VForm
        ref="form"
        class="d-flex flex-column gap-4"
        @submit.prevent="onSubmit"
      >
        <VTextField
          v-model="email"
          :rules="[requiredValidator, emailValidator, onError]"
          label="Enter your email"
        />

        <VTextField
          v-model="password"
          label="Enter your password"
          :rules="[requiredValidator, onError]"
          :type="isPasswordVisible ? 'text' : 'password'"
          :append-inner-icon="!isPasswordVisible ? 'tabler-eye-off' : 'tabler-eye'"
          @click:append-inner="isPasswordVisible = !isPasswordVisible"
        />

        <div class="text-right">
          <span class="text-primary font-weight-bold text-sm cursor-pointer">Forgot Password?</span>
        </div>

        <VBtn
          height="44px"
          type="submit"
          :loading="loading"
        >
          Login

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

              <span>Logging in..</span>
            </VRow>
          </template>
        </VBtn>
      </VForm>
    </VScaleTransition>

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
      title="Demo Account"
    >
      <VCardText>
        <table>
          <tr>
            <td :style="{ width: '100px' }">
              Email
            </td>
            <td :style="{ width: '20px' }">
              :
            </td>
            <td>demo@example.com</td>
          </tr>

          <tr>
            <td :style="{ width: '100px' }">
              Password
            </td>
            <td :style="{ width: '20px' }">
              :
            </td>
            <td>demo123</td>
          </tr>
        </table>
      </VCardText>
    </VCard>

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
