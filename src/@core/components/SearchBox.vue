<script setup lang="ts">
import { themeConfig } from '@themeConfig'
</script>

<template>
  <div class="search-box-container">
    <VCard
      class="card"
      :flat="themeConfig.isMobile"
    >
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
              <VImg
                src="/concert-1.jpg"
                width="80px"
                height="50px"
                color="secondary"
                cover
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

  @media (max-width: 768px) {
    position: relative;
    top: 0;
    margin-block: 0;
  }
}

// 👉 Override Card
.card {
  border-radius: 14px !important;
  box-shadow: 0 0 10px 0 rgb(var(--v-theme-black), 0.1) !important;

  @media (max-width: 768px) {
    border-radius: 0 !important;
    box-shadow: none !important;
  }

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

  @media (max-width: 768px) {
    grid-template-rows: repeat(1, 1fr);
    grid-auto-flow: row;
  }
}

// 👉 Override VImg
:deep(.v-responsive) {
  flex: none !important;
  border-radius: 8px !important;
}
</style>
