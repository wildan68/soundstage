<script setup lang="ts">
const sheet = ref<boolean>(false)
</script>

<template>
  <VCard>
    <VCardText>
      <VBtn @click="sheet = true">
        Open Sheet
      </VBtn>

      <VBottomSheet v-model:visible="sheet">
        TESTETS
      </VBottomSheet>
    </VCardText>
  </VCard>
</template>

