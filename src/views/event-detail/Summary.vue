<script setup lang="ts">
interface Emit {
  (e: 'change', val: string): void
}

const emit = defineEmits<Emit>()

const summary = ref<HTMLElement>()

useIntersectionObserver(
  summary,
  ([{ isIntersecting }]) => isIntersecting && emit('change', 'summary'),
)
</script>

<template>
  <VCard
    ref="summary"
  >
    <VCardText>
      <VRow
        no-gutters
        class="justify-beetween"
      >
        <VCol class="d-flex flex-column gap-6">
          <h1 class="text-black">
            JAKARTA MUSIC FESTIVAL
          </h1>

          <VRow
            no-gutters
            class="gap-2"
          >
            <VIcon icon="tabler-calendar-event" />
            <span>12 May 2023</span>
          </VRow>

          <VRow
            no-gutters
            class="gap-4 align-center"
          >
            <VAvatar
              color="success"
              size="28"
            />

            <span class="font-weight-semibold text-black text-xs">JakartaFest</span>

            <VIcon
              icon="tabler-discount-check-filled"
              color="info"
            />
          </VRow>

          <div class="d-flex flex-column gap-3">
            <h4 class="text-black">
              Description
            </h4>

            <p class="text-secondary text-sm">
              <slot />
            </p>
          </div>
        </VCol>

        <VCol class="d-flex flex-column gap-2 align-end">
          <span class="text-secondary text-sm font-weight-bold">Started</span>
          <span class="text-primary text-2xl font-weight-bold">$40</span>
          <VBtn
            variant="tonal"
            size="large"
          >
            Show Package
          </VBtn>
        </VCol>
      </VRow>
    </VCardText>
  </VCard>
</template>
