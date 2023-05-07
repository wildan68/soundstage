<script setup lang="ts">
import { useNumberDot } from '@core/app'

interface Props {
  width: string
}

defineProps<Props>()

const ticketAvailableExpansion = ref<number>(0)

const ticketAvailable = ref<string>('all')

const priceRangeExpansion = ref<number>(0)

const priceRange = ref<number[]>([0, 5000])
</script>

<template>
  <VCard
    :width="width"
    height="fit-content"
  >
    <VCardText>
      <VRow
        no-gutters
        class="justify-space-between"
      >
        <span class="font-weight-semibold text-black">Filter</span>

        <span class="text-primary cursor-pointer">RESET</span>
      </VRow>
    </VCardText>

    <VDivider class="my-2" />

    <VExpansionPanels v-model="ticketAvailableExpansion">
      <VExpansionPanel>
        <VExpansionPanelTitle>
          <div class="text-black font-weight-regular">
            Ticket Availability
          </div>
        </VExpansionPanelTitle>

        <VExpansionPanelText>
          <VRadioGroup
            v-model="ticketAvailable"
            class="d-flex flex-column gap-2"
          >
            <VRadio
              label="All"
              value="all"
            />

            <VRadio
              label="Today"
              value="today"
            />

            <VRadio
              label="Tomorrow"
              value="tomorrow"
            />
          </VRadioGroup>
        </VExpansionPanelText>
      </VExpansionPanel>
    </VExpansionPanels>

    <VDivider class="my-2" />

    <VExpansionPanels v-model="priceRangeExpansion">
      <VExpansionPanel>
        <VExpansionPanelTitle>
          <div class="text-black font-weight-regular">
            Price Range
          </div>
        </VExpansionPanelTitle>

        <VExpansionPanelText>
          <VRangeSlider
            v-model="priceRange"
            strict
            :max="10000"
            :min="0"
            :step="1"
          />

          <VRow
            no-gutter
            class="my-2 mx-1 justify-lg-space-between"
          >
            <span class="text-black font-weight-bold">${{ useNumberDot(priceRange[0]) }}</span>

            <span class="text-black font-weight-bold">${{ useNumberDot(priceRange[1]) }}</span>
          </VRow>
        </VExpansionPanelText>
      </VExpansionPanel>
    </VExpansionPanels>

    <VDivider class="my-2" />

    <VCardText>
      <div class="text-black">
        Location
      </div>
      <VSelect
        label="Filter Location"
        class="mt-6"
      />
    </VCardText>
  </VCard>
</template>

<style scoped lang="scss">
:deep(.v-expansion-panel__shadow) {
  box-shadow: none !important;
}
</style>
