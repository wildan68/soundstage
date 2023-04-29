<script setup lang="ts">
const information = [
  {
    title: 'Ticket Exchange',
    icon: 'tabler-ticket',
    value: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia quos mollitia numquam temporibus consequuntur magni corporis tempore facilis nisi repellat odit tenetur facere molestias incidunt reprehenderit, sit suscipit minus laboriosam?',
  },
  {
    title: 'Terms and Conditions',
    icon: 'tabler-notes',
    value: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia quos mollitia numquam temporibus consequuntur magni corporis tempore facilis nisi repellat odit tenetur facere molestias incidunt reprehenderit, sit suscipit minus laboriosam?',
  },
  {
    title: 'Additional Information',
    icon: 'tabler-notes',
    value: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia quos mollitia numquam temporibus consequuntur magni corporis tempore facilis nisi repellat odit tenetur facere molestias incidunt reprehenderit, sit suscipit minus laboriosam?',
  },
]
</script>

<template>
  <div class="d-flex flex-column gap-6">
    <div class="font-weight-bold text-black text-2xl">
      Event Information
    </div>
    <VExpansionPanels multiple>
      <VExpansionPanel
        v-for="info in information"
        :key="info.title"
      >
        <VExpansionPanelTitle>
          <VRow
            no-gutters
            class="gap-2 align-center"
          >
            <VIcon :icon="info.icon" />
            <span class="text-black">{{ info.title }}</span>
          </VRow>
        </VExpansionPanelTitle>
        <VExpansionPanelText>
          {{ info.value }}
        </VExpansionPanelText>
      </VExpansionPanel>
    </VExpansionPanels>
  </div>
</template>
