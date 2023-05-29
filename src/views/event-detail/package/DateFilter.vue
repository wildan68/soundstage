<script setup lang="ts">
interface DateFilter {
  date: string
  disabled: boolean
}

const activeDate = ref<string>('2023-05-12')

const dateList: DateFilter[] = [
  {
    date: '2023-05-12',
    disabled: false,
  }, {
    date: '2023-05-13',
    disabled: false,
  }, {
    date: '2023-05-14',
    disabled: false,
  }, {
    date: '2023-05-15',
    disabled: true,
  }, {
    date: '2023-05-16',
    disabled: true,
  }, {
    date: '2023-05-17',
    disabled: true,
  }, {
    date: '2023-05-18',
    disabled: true,
  }, {
    date: '2023-05-19',
    disabled: true,
  }, {
    date: '2023-05-20',
    disabled: true,
  },
]
</script>

<template>
  <div class="date-wrapper">
    <VSwiper
      :space-between="10"
      slides-per-view="auto"
    >
      <VSwiperSlide
        v-for="(date, i) in dateList"
        :key="i"
        class="date-items"
      >
        <VBtn
          variant="outlined"
          :class="[
            { 'date-items__btn': activeDate !== date.date },
            { 'date-items__btn__active': activeDate === date.date },
          ]"
          :disabled="date.disabled"
          @click="activeDate = date.date"
        >
          {{ useDateFormat(date.date, 'DD', { locales: 'en-US' }).value }}<br>
          {{ useDateFormat(date.date, 'MMMM', { locales: 'en-US' }).value }}
        </VBtn>
      </VSwiperSlide>
    </VSwiper>
  </div>
</template>

<style scoped lang="scss">
.date-wrapper {
  padding-bottom: 14px;
  border-bottom: 1px dashed rgba(var(--v-theme-secondary), 0.5);

  @media (max-width: 768px) {
    margin-inline: -24px;
  }
}
.date-items {
  width: 8%;

  @media (max-width: 1024px) {
    width: 13%;
  }

  @media (max-width: 768px) {
    width: 27%;

    &:nth-child(1) {
        margin-left: 24px;
    }

    &:nth-last-child(1) {
      margin-right: 24px;
    }
  }

  &__btn {
    height: 74px !important;
    background: rgb(var(--v-theme-surface)) !important;
    border: 1px solid rgb(var(--v-theme-secondary)) !important;
    color: rgb(var(--v-theme-secondary)) !important;

    &__active {
      height: 74px !important;
      background: rgba(var(--v-theme-primary), 0.2) !important;
      border: 1px solid rgb(var(--v-theme-primary)) !important;
      color: rgb(var(--v-theme-primary)) !important;
    }
  }
}
</style>
