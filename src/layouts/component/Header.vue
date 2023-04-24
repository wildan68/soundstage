<script setup lang="ts">
import { themeConfig } from '@themeConfig'
import { navMenu, searchBox, searchPlaceholder } from '@core/app'

interface Props {
  transparent: boolean
}

withDefaults(defineProps<Props>(), {
  transparent: true,
})

const onFocus = ref<boolean>(false)
</script>

<template>
  <div :class="transparent ? 'header-wrapper__transparent' : 'header-wrapper'">
    <VContainer>
      <VRow no-gutters>
        <Component
          :is="themeConfig.app.logo"
          width="187px"
          :light="transparent"
        />
        <div class="d-flex justify-end flex-1 align-center gap-x-5">
          <RouterLink
            v-for="menu in navMenu"
            :key="menu.key"
            :to="`/${menu.to}`"
            :class="transparent ? 'text-background' : 'text-black'"
          >
            {{ menu.label }}
          </RouterLink>
          <VBtn
            variant="text"
            :color="transparent ? 'background' : 'black'"
            icon
          >
            <VIcon icon="tabler-bell" />
          </VBtn>
          <VAvatar
            :color="transparent ? 'background' : 'black'"
            size="28"
          />
          <VBtn
            variant="text"
            :color="transparent ? 'white' : 'black'"
            @click="$router.push('/login')"
          >
            Login
          </VBtn>
          <VBtn
            @click="$router.push('/register')"
          >
            Register
          </VBtn>
        </div>
      </VRow>
      <div v-if="!transparent">
        <VDivider
          thickness="2px"
          class="my-6"
        />
        <div class="input-search">
          <VTextField
            :placeholder="searchPlaceholder"
            persistent-placeholder
            prepend-inner-icon="tabler-search"
            variant="plain"
            bg-color="background"
            @focus="onFocus = true; searchBox = false"
          />

          <VFadeTransition group>
            <div
              v-if="onFocus"
              class="input-search__overlay"
              @click="onFocus = false"
            />
            <SearchBox v-if="onFocus" />
          </VFadeTransition>
        </div>
      </div>
    </VContainer>
  </div>
</template>

<style scoped lang="scss">
.header-wrapper {
    background: rgb(var(--v-theme-white));
    // shadow bottom smooth
    box-shadow: 0 0 10px 0 rgb(var(--v-theme-black), 0.1);

    &__transparent {
        background: transparent;
    }
}

// 👉 Override TextField
:deep(.v-field__input), :deep(.v-text-field__prefix) {
  background: rgb(var(--v-theme-background));
  padding-block: 8px;
}

:deep(.v-field__prepend-inner) {
  padding: 8px;
}

:deep(.v-field) {
  border-radius: 99px;
  overflow: hidden;
}

:deep(.v-label.v-field-label) {
  top: 6px !important;
}

.input-search {
  width: 40%;
  position: relative;

  &__overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: #000;
    opacity: 0.4;
    z-index: 99;
  }
}

// 👉 Override Input SearchBox
:deep(.v-input__control) {
  z-index: 100 !important;
}
</style>
