<script setup lang="ts">
import { useTheme } from '@core/composable'

useTheme()
</script>

<template>
  <VCard
    flat
    height="100vh"
  >
    <VCardText class="d-flex align-center justify-center h-100">
      <div class="text-h5 text-primary">
        <VIcon icon="tabler-book" /> Welcome to Leixy Base Template hsadhashdsdass
        <VBtn>Testing</VBtn>
      </div>
      <VCardTitle>
        <span>ADASD</span>
      </VCardTitle>
    </VCardText>
  </VCard>
</template>
