<script setup lang="ts">
interface SocialAuth {
  key: string
  icon: string
}

const socialAuth = reactive<SocialAuth[]>([
  {
    key: 'apple',
    icon: 'tabler-brand-apple',
  },
  {
    key: 'google',
    icon: 'tabler-brand-google',
  },
  {
    key: 'facebook',
    icon: 'tabler-brand-facebook',
  },
])
</script>

<template>
  <VRow
    no-gutters
    class="gap-x-2"
  >
    <VBtn
      v-for="social in socialAuth"
      :key="social.key"
      icon
      variant="outlined"
      color="secondary"
    >
      <VIcon :icon="social.icon" />
    </VBtn>
  </VRow>
</template>
