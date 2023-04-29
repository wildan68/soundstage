<script setup lang="ts">
const isPasswordVisible = ref<boolean>(false)
</script>

<template>
  <VForm class="d-flex flex-column gap-4">
    <VTextField
      label="Enter your email"
    />
    <VTextField
      label="Full Name"
    />
    <div>
      <VTextField
        label="Enter your password"
        :type="isPasswordVisible ? 'text' : 'password'"
        :append-inner-icon="!isPasswordVisible ? 'tabler-eye-off' : 'tabler-eye'"
        @click:append-inner="isPasswordVisible = !isPasswordVisible"
      />
      <span class="text-sm text-secondary">
        Use a unique character, at least 6 characters
      </span>
    </div>
    <VTextField
      label="Phone Number"
      prefix="+62"
    />
    <VBtn height="44px">
      Create Account
    </VBtn>
  </VForm>
</template>

