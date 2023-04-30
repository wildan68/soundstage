<script setup lang="ts">
import DemoMapBase from '@images/demo-map-base.png'

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
        <VImg :src="DemoMapBase">
          <div class="map-overlay">
            <div class="map-overlay__content">
              <VRow
                no-gutters
                class="gap-2"
              >
                <VIcon icon="tabler-map-pin" />
                <div class="d-flex flex-column gap-1 flex-1">
                  <span class="font-weight-bold text-black">Main Stadium</span>

                  <span class="text-secondary text-sm">Stadium Street, Central Jakarta, Jakarta, Indonesia</span>
                </div>
              </VRow>
              <VRow
                no-gutters
                class="justify-end flex-1 gap-6"
              >
                <div class="d-flex flex-column gap-1 align-center">
                  <VBtn
                    icon
                    variant="tonal"
                    size="x-large"
                  >
                    <VIcon
                      icon="tabler-map-pin-share"
                      size="32px"
                    />
                  </VBtn>

                  <span class="font-weight-semibold text-primary">Directions</span>
                </div>

                <div class="d-flex flex-column gap-1 align-center">
                  <VBtn
                    icon
                    size="x-large"
                  >
                    <VIcon
                      icon="tabler-map-search"
                      size="32px"
                    />
                  </VBtn>

                  <span class="font-weight-semibold text-primary">Events Guide</span>
                </div>
              </VRow>
            </div>
          </div>
        </VImg>
      </VExpansionPanelText>
    </VExpansionPanel>
  </VExpansionPanels>
</template>

<style scoped lang="scss">
.map-overlay {
  background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgb(var(--v-theme-white)) 70%);
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: end;
  align-items: flex-end;
  padding: 24px;

  &__content {
    display: flex;
    flex: 1;
    justify-content: space-between;
    align-items: center
  }
}

:deep(.v-btn) {
  border-radius: 50% !important;
}
</style>
