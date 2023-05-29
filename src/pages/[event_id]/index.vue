<script setup lang="ts">
import DetailTabMenu from '../../views/event-detail/DetailTabMenu.vue'
import Summary from '../../views/event-detail/Summary.vue'
import Description from '../../views/event-detail/Description.vue'
import Package from '../../views/event-detail/Package.vue'
import Location from '../../views/event-detail/Location.vue'
import Other from '../../views/event-detail/Other.vue'
import Image from '@/views/event-detail/Image.vue'
import { themeConfig } from '@themeConfig'

const { y } = useWindowScroll()

const intersectionKey = ref<string>('summary')

const parent = ref<HTMLElement>()

const detailTabMenu = computed(() => {
  if (!themeConfig.isMobile)
    return true

  return y.value > 250
})

const bottomAction = computed(() => {
  if (!themeConfig.isMobile)
    return false

  return y.value < 250
})

const changeTab = (val: string) => intersectionKey.value = val

const changeTabMenu = (val: string) => {
  changeTab(val)
  const el = document.getElementById(val === 'description' ? 'summary' : val)
  window.scrollTo({ top: (el?.offsetTop as number) - 280, behavior: 'smooth' })
}
</script>

<template>
  <VRow
    v-if="themeConfig.isMobile"
    no-gutters
    class="mobile-navigation justify-space-between w-100"
  >
    <VBtn
      icon
      color="surface"
      class="mobile-navigation__btn"
      @click="$router.back()"
    >
      <VIcon icon="tabler-chevron-left" />
    </VBtn>

    <VBtn
      icon
      color="surface"
      class="mobile-navigation__btn"
    >
      <VIcon icon="tabler-share" />
    </VBtn>
  </VRow>

  <Image />

  <VSlideYTransition>
    <DetailTabMenu
      v-if="detailTabMenu"
      :active-key="intersectionKey"
      @change="changeTabMenu"
    />
  </VSlideYTransition>

  <VContainer
    ref="parent"
    class="d-flex flex-column gap-6 pt-4"
  >
    <Summary
      id="summary"
      @change="changeTab"
    >
      <Description
        id="description"
        @change="changeTab"
      />
    </Summary>
    <Package
      id="packages"
      @change="changeTab"
    />
    <Location
      id="location"
      @change="changeTab"
    />
    <Other
      id="other"
      @change="changeTab"
    />
  </VContainer>

  <VFadeTransition>
    <div
      v-if="bottomAction"
      class="bottom-action"
    >
      <div class="bottom-action__guarante">
        <VRow
          no-gutters
          class="align-center gap-2"
        >
          <VIcon icon="tabler-shield-check-filled" />
          <span>Ticket Guarantee</span>
        </VRow>
      </div>

      <div class="bottom-action__main">
        <div class="d-flex flex-column gap-2">
          <span class="text-secondary text-xs">Started</span>
          <span class="text-primary text-2xl font-weight-bold">$40</span>
        </div>

        <VBtn>
          Select Ticket
        </VBtn>
      </div>
    </div>
  </VFadeTransition>
</template>

<style scoped lang="scss">
.mobile-navigation {
  position: fixed;
  z-index: 19;
  padding: 24px;

  &__btn {
    border-radius: 50% !important;
  }
}

.bottom-action {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 20;
  animation: show 0.5s ease-in-out;

  &__guarante {
    padding: 8px 24px;
    background: linear-gradient(90deg, #F15C59, #F4BC67) 100%;
    border-radius: 12px 12px 0 0;
    color: #fff;
  }

  &__main {
    padding: 8px 24px;
    background: rgb(var(--v-theme-surface));
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  @keyframes show {
    0% {
      transform: translateY(100%);
    }

    100% {
      transform: translateY(0);
    }
  }
}
</style>

<route lang="yaml">
meta:
  hideHeader: true
  hideNavbar: true
</route>

