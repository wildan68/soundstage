<template>
  <VContainer>
    <VRow
      no-gutters
      class="gap-6"
    >
      <MainFilter
        width="280px"
        class="filter-sticky"
      />
      <EventResult class="flex-1" />
    </VRow>
  </VContainer>
</template>

<style scoped lang="scss">
.filter-sticky {
  position: sticky;
  top: 210px;
}
</style>
