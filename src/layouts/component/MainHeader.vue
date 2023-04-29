<script setup lang="ts">
import Header from './Header.vue'
import { searchBox, searchPlaceholder } from '@/@core/app'
</script>

<template>
  <VSheet class="container-wrapper">
    <Header />
    <VContainer>
      <div class="main-search">
        <div
          class="text-2xl text-center"
          :style="{ zIndex: 100 }"
        >
          Hey you, <span class="font-weight-bold">what event do you want to watch?</span>
        </div>

        <div class="input-search">
          <VTextField
            :placeholder="searchPlaceholder"
            persistent-placeholder
            prepend-inner-icon="tabler-search"
            variant="solo"
            @focus="searchBox = true"
          />

          <VFadeTransition group>
            <div
              v-if="searchBox"
              class="input-search__overlay"
              @click="searchBox = false"
            />
            <SearchBox v-if="searchBox" />
          </VFadeTransition>
        </div>
      </div>
      <VSpacer class="my-12" />
    </VContainer>
  </VSheet>
</template>

<style scoped lang="scss">
.container-wrapper {
  background: url('@images/header-bg-frame.jpg') no-repeat center center;
  color: #fff;
  background-size: cover;
}

.main-search {
  padding: 98px 0;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 24px;
}

// 👉 Override TextField
:deep(.v-field__input), :deep(.v-text-field__prefix) {
  padding-block: 16px;
}

:deep(.v-field__prepend-inner) {
  padding: 16px;
}

:deep(.v-field) {
  border-radius: 99px;
}

:deep(.v-label.v-field-label) {
  top: 14px !important;
}

.input-search {
  width: 644px;
  position: relative;

  &__overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: #000;
    opacity: 0.4;
    z-index: 99;
  }
}

// 👉 Override Input SearchBox
:deep(.v-input__control) {
  z-index: 100 !important;
}
</style>
