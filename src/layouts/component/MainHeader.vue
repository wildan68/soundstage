<script setup lang="ts">
import Header from './Header.vue'
import { themeConfig } from '@themeConfig'
import { searchBox, searchPlaceholder } from '@/@core/app'

interface CategoryList {
  key: string
  label: string
  icon: string
  isHover: boolean
  to?: string
}

const categoryList = reactive<CategoryList[]>([
  {
    key: 'popular',
    label: 'Popular',
    icon: 'tabler-star',
    isHover: false,
    to: '/popular',
  }, {
    key: 'today',
    label: 'Today',
    icon: 'tabler-category',
    isHover: false,
    to: '/',
  }, {
    key: 'discount',
    label: 'Discount',
    icon: 'tabler-discount-2',
    isHover: false,
    to: '/',
  },
])
</script>

<template>
  <VSheet class="container-wrapper">
    <Header />
    <VContainer>
      <div class="main-search">
        <div
          class="text-center"
          :style="{ zIndex: 100 }"
          :class="[{ 'text-2xl': !themeConfig.isMobile }]"
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

        <VRow
          no-gutters
          class="gap-6 w-100 justify-center"
        >
          <RouterLink
            v-for="cat in categoryList"
            :key="cat.key"
            v-ripple
            :to="cat.to"
            class="cat-container"
            @mouseover="cat.isHover = true"
            @mouseleave="cat.isHover = false"
          >
            <VBtn
              icon
              class="cat-container__btn"
            >
              <VIcon :icon="cat.icon" />
            </VBtn>

            <VExpandXTransition>
              <span
                v-show="cat.isHover"
                class="mr-2"
              >
                {{ cat.label }}
              </span>
            </VExpandXTransition>
          </RouterLink>
        </VRow>
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

  @media (max-width: 768px) {
    padding: 48px 0;
  }
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

  @media (max-width: 1024px) {
    width: 100%;
  }

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

.cat-container {
  padding: 8px;
  background: rgba(var(--v-theme-surface), 0.7);
  border-radius: 48px;
  display: flex;
  gap: 16px;
  align-items: center;
  color: rgb(var(--v-theme-primary));
  font-weight: bold;
  cursor: pointer;
  animation: all 0.5s ease-in-out;

  &:hover {
    background: rgb(var(--v-theme-surface));
  }

  &__btn {
    border-radius: 50% !important;
  }
}
</style>
