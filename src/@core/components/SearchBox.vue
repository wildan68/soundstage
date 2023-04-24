<template>
  <div class="search-box-container">
    <VCard class="card">
      <VCardText>
        <h4 class="text-black">
          Top Search
        </h4>
        <VSpacer class="my-4" />
        <div class="searh-box-grid">
          <VCard
            v-for="i in 5"
            :key="i"
            flat
            class="card__items-result"
          >
            <VRow

              no-gutters
              class="gap-x-4"
            >
              <VCard
                width="80px"
                height="50px"
                color="secondary"
              />
              <VCol class="text-sm d-flex flex-column gap-y-2">
                <span class="text-black font-weight-semibold">Stockholm Music Festival</span>
                <VRow no-gutters>
                  <VRow
                    no-gutters
                    class="gap-x-1"
                  >
                    <VIcon
                      icon="tabler-calendar"
                      size="14px"
                    />
                    <span class="text-xs">25 May 2023</span>
                  </VRow>
                  <VRow
                    no-gutters
                    class="gap-x-1"
                  >
                    <VIcon
                      icon="tabler-currency-dollar"
                      size="14px"
                      color="primary"
                    />
                    <span class="text-xs text-primary font-weight-bold">70,00</span>
                  </VRow>
                </VRow>
              </VCol>
            </VRow>
          </VCard>
        </div>
      </VCardText>
    </VCard>
  </div>
</template>

<style scoped lang="scss">
.search-box-container {
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  margin-block: 12px;
  z-index: 100;
}

// 👉 Override Card
.card {
  border-radius: 14px !important;
  box-shadow: 0 0 10px 0 rgb(var(--v-theme-black), 0.1) !important;

  &__items-result {
    cursor: pointer;
    padding: 8px;

    &:hover {
      background: rgb(var(--v-theme-background)) !important;
    }
  }
}

.searh-box-grid {
  display: grid;
  grid-template-rows: repeat(3, 1fr);
  gap: 12px;
  grid-auto-flow: column;
}
</style>
