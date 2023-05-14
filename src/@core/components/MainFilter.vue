<script setup lang="ts">
import { useNumberDot } from '@core/app'

interface Props {
  width: string
}

defineProps<Props>()

const ticketAvailableExpansion = ref<number>(0)

const ticketAvailableKey = ref<string>('all')

const ticketAvailable: { value: string; label: string }[] = [
  {
    value: 'all',
    label: 'All',
  },
  {
    value: 'today',
    label: 'Today',
  },
  {
    value: 'tomorrow',
    label: 'Tomorrow',
  },
]

const priceRangeExpansion = ref<number>(0)

const priceRange = ref<number[]>([0, 500])
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
            v-model="ticketAvailableKey"
            class="d-flex flex-column gap-2"
          >
            <VRow
              v-for="item in ticketAvailable"
              :key="item.value"
              no-gutters
              class="justify-space-between w-100"
            >
              <VLabel
                class="text-black flex-1"
                :text="item.label"
              />

              <div>
                <VRadio
                  :value="item.value"
                />
              </div>
            </VRow>
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
            :max="1000"
            :min="0"
            :step="1"
          >
            <template #thumb-label="{ modelValue }">
              ${{ useNumberDot(modelValue) }}
            </template>
          </VRangeSlider>

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
