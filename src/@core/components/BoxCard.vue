<script setup lang="ts">
import type { ItemsCard, ItemsFilterBoxCard } from './types'
import { VSNavigation, VSPagination, useRandom } from '@core/app'
import BoyJumping from '@images/vec/boy-jumping.png'
import { themeConfig } from '@themeConfig'

interface Props {
  title: string
  subtitle?: string
  filter?: ItemsFilterBoxCard[]
  items: ItemsCard[]
  variant?: 'default' | 'event'
}

interface Emit {
  (e: 'changeFilter', id: string): void
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'default',
})

const emit = defineEmits<Emit>()

const randomKey = useRandom(8, 8)

const navigation = { nextEl: `.next-${randomKey}`, prevEl: `.prev-${randomKey}` }

const [initialFilter] = props.filter || []

const activeFilterKey = ref<string>(initialFilter?.id || '')

const numberSlide = props.variant === 'event' ? themeConfig.isTablet ? 3 : 4 : themeConfig.isTablet ? 4 : 5

const onFilterChange = (id: string) => {
  activeFilterKey.value = id
  emit('changeFilter', id)
}
</script>

<template>
  <div
    class="box-wrapper"
    :class="[{ 'box-wrapper__event': variant === 'event' }]"
  >
    <div class="d-flex flex-column gap-y-2 mb-6">
      <span
        class="font-weight-bold text-2xl"
        :class="[{ 'text-black': variant !== 'event' }]"
      >
        {{ title }}
      </span>

      <span
        class="text-sm"
        :class="[{ 'text-secondary': variant !== 'event' }]"
      >
        {{ subtitle }}
      </span>
    </div>
    <VSwiper
      v-if="filter"
      slides-per-view="auto"
      :space-between="10"
      class="mb-6 box-wrapper__filter"
    >
      <VSwiperSlide
        v-for="filters in filter"
        :key="filters.id"
        class="box-wrapper__filter__slide"
      >
        <VBtn
          variant="outlined"
          :color="filters.id === activeFilterKey ? 'primary ' : 'black'"
          :class="[
            { 'btn-inactive': filters.id !== activeFilterKey },
            { 'btn-active': filters.id === activeFilterKey },
          ]"
          :append-icon="filters.icon ? filters.icon : ''"
          @click="onFilterChange(filters.id)"
        >
          {{ filters.label }}
        </VBtn>
      </VSwiperSlide>
    </VSwiper>

    <div
      class="box-wrapper__main-slide"
      :class="[{ 'box-wrapper__main-slide__is-event': variant === 'event' }]"
    >
      <div
        v-if="variant === 'event'"
        class="box-wrapper__main-blob"
      />

      <div
        v-if="variant === 'event'"
        class="box-wrapper__main-image"
      >
        <VImg
          :src="BoyJumping"
          :width="themeConfig.isMobile ? '206px' : '290px'"
        />
      </div>

      <div
        class="relative w-100"
      >
        <SwiperNavigation
          v-if="!themeConfig.isMobile"
          :config="navigation"
        />

        <VSwiper
          :slides-per-view="themeConfig.isMobile ? 'auto' : numberSlide"
          :space-between="10"
          :modules="[VSPagination, VSNavigation]"
          :navigation="navigation"
          class="box-wrapper__slide"
        >
          <VSwiperSlide
            v-for="item in items"
            :key="item.id"
            :class="[
              { 'box-wrapper__slide__items': variant !== 'event' },
              { 'box-wrapper__slide__items__event': variant === 'event' },
            ]"
          >
            <RouterLink :to="`/${item.slug}`">
              <EventCard :data="item" />
            </RouterLink>
          </VSwiperSlide>
        </VSwiper>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.box-wrapper {
  border-radius: 14px;

  @media (max-width: 728px) {
    border-radius: 14px 0 0 14px;
    margin-right: -24px;
  }

  &__event {
    background: linear-gradient(90deg, rgba(var(--v-theme-primary), 0.8) 0%, rgba(var(--v-theme-primary), 10.3) 100%);
    padding: 24px;
    color: rgb(var(--v-theme-white));

    @media (max-width: 728px) {
      padding: 24px 0 24px 24px;
    }
  }

  &__filter {
    margin-left: -24px;

    &__slide {
      width: fit-content;

      &:nth-child(1) {
        margin-left: 24px;
      }

      &:nth-last-child(1) {
        margin-right: 24px;
      }
    }
  }

  &__slide {
    @media (max-width: 728px) {
      margin-left: -24px;
    }

    &__items {
      width: 100%;

      @media (max-width: 728px) {
        width: 60%;

        &:nth-child(1) {
        margin-left: 24px;
        }

        &:nth-last-child(1) {
          margin-right: 24px;
        }
      }
    };

    &__items__event {
      width: 100%;

      @media (max-width: 728px) {
        width: 80%;

        &:nth-child(1) {
        margin-left: 24px;
        }

        &:nth-last-child(1) {
          margin-right: 24px;
        }
      }
    };

  }

  &__main-slide {
    position: relative;
    display: flex;
    justify-content: end;

    &__is-event {
      padding-left: 150px;

      @media (max-width: 728px) {
        padding-left: 100px;
      }
    }
  }

  &__main-image {
    position: absolute;
    left: -10%;
    top: 0;
    z-index: 10;
    animation: EventVectorAnimation 3s cubic-bezier(0.25, 0.46, 0.45, 0.94) infinite;

    @media (max-width: 728px) {
      left: -20%;
    }
  }

  @keyframes EventVectorAnimation {
    0% { transform: translate(0px, 0px) };
    50% { transform: translate(30px, 20px); }
    100% { transform: translate(0px, 0px); }
  }

  &__main-blob {
    background: url('@images/vec/blob-1.png') no-repeat;
    position: absolute;
    left: -24px;
    bottom: -24px;
    width: 100%;
    height: 80%;
  }
}
.btn-active {
  background: rgba(var(--v-theme-primary), 0.1) !important;
  border-radius: 14px !important;
}

.btn-inactive {
  border: 1px solid rgba(var(--v-theme-secondary), 0.5) !important;
  border-radius: 14px !important;
}
</style>
