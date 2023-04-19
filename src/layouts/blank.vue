<template>
  <!-- 👉 Pages -->
  <RouterView v-slot="{ Component }">
    <Transition
      name="transition"
      mode="out-in"
    >
      <Component :is="Component" />
    </Transition>
  </RouterView>
</template>

