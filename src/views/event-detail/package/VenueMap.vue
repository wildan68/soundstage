<script setup lang="ts">
import DemoVenueMap from '@images/demo-venue-map.png'

const panel = ref(0)
</script>

<template>
  <VExpansionPanels v-model="panel">
    <VExpansionPanel>
      <VExpansionPanelTitle>
        Venue Map
      </VExpansionPanelTitle>
      <VExpansionPanelText>
        <VImg :src="DemoVenueMap" />
      </VExpansionPanelText>
    </VExpansionPanel>
  </vexpansionpanels>
</template>

