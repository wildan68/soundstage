<script setup lang="ts">
import ThemeSwitcher from './ThemeSwitcher.vue'
import { isDark, navMenu, searchBox, searchPlaceholder } from '@core/app'
import { themeConfig } from '@themeConfig'

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
        <RouterLink to="/">
          <Component
            :is="themeConfig.app.logo"
            width="187px"
            :light="transparent || isDark"
            class="cursor-pointer"
          />
        </RouterLink>

        <div class="d-flex justify-end flex-1 align-center gap-x-5">
          <RouterLink
            v-for="menu in navMenu"
            :key="menu.key"
            :to="`/${menu.to}`"
            :class="transparent ? 'text-white-persistent' : 'text-black'"
          >
            {{ menu.label }}
          </RouterLink>

          <VBtn
            variant="text"
            :color="transparent ? 'white-persistent' : 'black'"
            icon
          >
            <VIcon icon="tabler-bell" />
          </VBtn>

          <VAvatar
            :color="transparent ? 'white-persistent' : 'black'"
            size="28"
            class="cursor-pointer"
            @click="$router.push('/profile')"
          />

          <VBtn
            variant="text"
            :color="transparent ? 'white-persistent' : 'black'"
            @click="$router.push('/login')"
          >
            Login
          </VBtn>

          <VBtn
            @click="$router.push('/register')"
          >
            Register
          </VBtn>

          <ThemeSwitcher />
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
  background: rgb(var(--v-theme-surface));
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
