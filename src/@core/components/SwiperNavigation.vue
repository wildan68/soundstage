<script setup lang="ts">
interface Props {
  config: {
    nextEl: string
    prevEl: string
  }
}

defineProps<Props>()
</script>

<template>
  <VBtn
    icon
    color="white"
    class="nav-prev-class"
    :class="[config.prevEl.replace('.', '')]"
  >
    <VIcon icon="tabler-chevron-left" />
  </VBtn>

  <VBtn
    icon
    color="white"
    class="nav-next-class"
    :class="[config.nextEl.replace('.', '')]"
  >
    <VIcon icon="tabler-chevron-right" />
  </VBtn>
</template>

<style scoped lang="scss">
.nav-prev-class {
    position: absolute;
    top: 50%;
    left: 0;
    z-index: 50;
    margin-left: -24px;
}

.nav-next-class {
    position: absolute;
    top: 50%;
    right: 0;
    z-index: 50;
    margin-right: -24px;
}
</style>
