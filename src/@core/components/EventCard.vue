<template>
  <VCard height="363px">
    <VImg
      src="/concert-1.jpg"
      height="200px"
      cover
    />
    <VCardText class="d-flex flex-column gap-y-2">
      <div class="text-black font-weight-semibold text-sm">
        London Metal Festival: Fire and Hell
      </div>
      <div class="text-xs text-secondary">
        Jakarta, Indonesia
      </div>
      <div class="text-xs text-secondary font-weight-semibold">
        23 May 2023
      </div>
    </VCardText>
    <VCardActions>
      <div class="font-weight-bold text-black mx-3 text-xl">
        $400
      </div>
    </VCardActions>
  </VCard>
</template>

<style scoped lang="scss">
.v-card {
  border-radius: 14px !important;
}
</style>
