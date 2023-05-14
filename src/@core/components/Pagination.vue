<script setup lang="ts">
interface Props {
  perPage: number
  itemsPage: number[]
}

interface Emit {
  (e: 'update:perPage', val: number): void
}

const props = withDefaults(defineProps<Props>(), {
  perPage: 9,
  itemsPage: () => [9, 18, 27, 36, 45],
})

const emit = defineEmits<Emit>()

const perPage = computed({
  get: () => props.perPage,
  set: (val: number) => emit('update:perPage', val),
})
</script>

<template>
  <VRow
    no-gutters
    class="justify-space-between"
  >
    <div>
      <VSelect
        v-model="perPage"
        :items="itemsPage"
        bg-color="surface"
        variant="tonal"
      />
    </div>

    <VRow
      no-gutters
      class="gap-2 justify-end"
    >
      <VBtn
        color="surface"
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
        color="surface"
        icon
      >
        2
      </VBtn>

      <VBtn
        color="surface"
        icon
        disabled
      >
        ...
      </VBtn>

      <VBtn
        color="surface"
        icon
      >
        8
      </VBtn>

      <VBtn
        color="surface"
        icon
      >
        9
      </VBtn>

      <VBtn
        color="surface"
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
