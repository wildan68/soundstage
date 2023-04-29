<script setup lang="ts">
const quickInfo = [
  {
    icon: 'tabler-calendar-check',
    label: 'Valid on the selected date',
  }, {
    icon: 'tabler-clock-bolt',
    label: 'Instant Payment',
  }, {
    icon: 'tabler-ticket-off',
    label: 'Cannot be refunded',
  },
]
</script>

<template>
  <div class="flex-column d-flex gap-6">
    <VCard
      v-for="i in 5"
      :key="i"
    >
      <VCardText class="d-flex flex-column gap-6">
        <VRow
          no-gutters
          class="justify-space-between"
        >
          <div class="font-weight-bold text-black">
            VVIP
          </div>
          <div class="font-weight-bold text-primary cursor-pointer">
            Detail
          </div>
        </VRow>

        <VRow
          no-gutters
          class="gap-6 w-fit-content"
        >
          <VRow
            v-for="info in quickInfo"
            :key="info.label"
            no-gutters
            class="gap-1 align-end"
          >
            <VIcon :icon="info.icon" />
            <span class="text-sm text-black">{{ info.label }}</span>
          </VRow>
        </VRow>

        <VDivider thickness="4px" />

        <VRow
          no-gutters
          class="justify-space-between align-center"
        >
          <div class="font-weight-bold text-primary text-2xl">
            $40
          </div>
          <VBtn size="large">
            Select Ticket
          </VBtn>
        </VRow>
      </VCardText>
    </VCard>
  </div>
</template>
