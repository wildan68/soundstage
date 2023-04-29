<script setup lang="ts">
interface Emit {
  (e: 'change', val: string): void
}

const emit = defineEmits<Emit>()

const description = ref<HTMLElement>()

useIntersectionObserver(
  description,
  ([{ isIntersecting }]) => isIntersecting && emit('change', 'description'),
)
</script>

<template>
  <div ref="description">
    Lorem ipsum dolor sit amet consectetur adipisicing elit.
    Quia quos mollitia numquam temporibus consequuntur magni corporis
    tempore facilis nisi repellat odit tenetur facere molestias incidunt reprehenderit,
    sit suscipit minus laboriosam?
  </div>
</template>

