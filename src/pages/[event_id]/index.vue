<script setup lang="ts">
import DetailTabMenu from '../../views/event-detail/DetailTabMenu.vue'
import Summary from '../../views/event-detail/Summary.vue'
import Description from '../../views/event-detail/Description.vue'
import Package from '../../views/event-detail/Package.vue'
import Location from '../../views/event-detail/Location.vue'
import Other from '../../views/event-detail/Other.vue'
import Image from '@/views/event-detail/Image.vue'

const intersectionKey = ref<string>('summary')

const parent = ref<HTMLElement>()

const changeTab = (val: string) => intersectionKey.value = val

const changeTabMenu = (val: string) => {
  changeTab(val)
  const el = document.getElementById(val === 'description' ? 'summary' : val)
  window.scrollTo({ top: (el?.offsetTop as number) - 280, behavior: 'smooth' })
}
</script>

<template>
  <Image />
  <DetailTabMenu
    :active-key="intersectionKey"
    @change="changeTabMenu"
  />
  <VContainer
    ref="parent"
    class="d-flex flex-column gap-6"
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
</template>
