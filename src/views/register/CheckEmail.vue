<script setup lang="ts">
interface Emit {
  (e: 'submit'): void
}

const emit = defineEmits<Emit>()
</script>

<template>
  <VForm class="d-flex flex-column gap-4">
    <VTextField
      label="Enter your email"
    />
    <VBtn
      height="44px"
      @click="emit('submit')"
    >
      Continue
    </VBtn>
  </VForm>
</template>
