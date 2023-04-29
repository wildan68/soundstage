<script setup lang="ts">
interface Emit {
  (e: 'change', val: string): void
}

const emit = defineEmits<Emit>()

const location = ref<HTMLElement>()

const expand = ref(0)

useIntersectionObserver(
  location,
  ([{ isIntersecting }]) => isIntersecting && emit('change', 'location'),
)
</script>

<template>
  <VExpansionPanels
    ref="location"
    v-model="expand"
  >
    <VExpansionPanel title="Location">
      <VExpansionPanelText>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.341903161003!2d106.799221974315!3d-6.218564760905644!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f14d30079f01%3A0x2e74f2341fff266d!2sStadion%20Utama%20Gelora%20Bung%20Karno!5e0!3m2!1sid!2sid!4v1682730623613!5m2!1sid!2sid"
          width="100%"
          height="450"
          style="border:0;"
          allowfullscreen
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        />
      </VExpansionPanelText>
    </VExpansionPanel>
  </VExpansionPanels>
</template>

