<script setup lang="ts">
const perPage = ref<number>(9)
</script>

<template>
  <VRow
    no-gutters
    class="justify-space-between"
  >
    <div>
      <VSelect
        v-model="perPage"
        :items="[9, 18, 27, 36, 45]"
        bg-color="white"
        variant="tonal"
      />
    </div>

    <VRow
      no-gutters
      class="gap-2 justify-end"
    >
      <VBtn
        color="white"
        icon
        disabled
      >
        <VIcon icon="tabler-chevron-left" />
      </VBtn>

      <VBtn
        color="primary"
        icon
      >
        1
      </VBtn>

      <VBtn
        color="white"
        icon
      >
        2
      </VBtn>

      <VBtn
        color="white"
        icon
        disabled
      >
        ...
      </VBtn>

      <VBtn
        color="white"
        icon
      >
        8
      </VBtn>

      <VBtn
        color="white"
        icon
      >
        9
      </VBtn>

      <VBtn
        color="white"
        icon
      >
        <VIcon icon="tabler-chevron-right" />
      </VBtn>
    </VRow>
  </VRow>
</template>

<style scoped lang="scss">
:deep(.v-btn__overlay) {
  background: rgb(var(--v-theme-secondary)) !important;
}
</style>
