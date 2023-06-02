<script setup lang="ts">
import ThemeSwitcher from './ThemeSwitcher.vue'
import { isDark, isLoggedin, navMenu, searchBox, searchPlaceholder } from '@core/app'
import { themeConfig } from '@themeConfig'
import NotFoundVec from '@images/vec/not-found.png'
import { useAuthStore } from '@/stores/auth'

interface Props {
  transparent: boolean
}

interface Emit {
  (e: 'open:search'): void
}

withDefaults(defineProps<Props>(), {
  transparent: true,
})

const emit = defineEmits<Emit>()

const store = useAuthStore()

const onFocus = ref<boolean>(false)

const notificationTab = ref<string>('pending')

const menuVisible = ref<boolean>(false)

const avatarText = computed<string>(() => {
  if (!store.user.fullname)
    return ''

  const name: string = store.user.fullname

  if (!name)
    return ''

  const [firstName, lastName] = name.split(' ')

  return `${firstName[0]}${lastName ? lastName[0] : ''}`
})
</script>

<template>
  <div :class="transparent ? 'header-wrapper__transparent' : 'header-wrapper'">
    <VContainer>
      <VRow no-gutters>
        <RouterLink to="/">
          <Component
            :is="themeConfig.app.logo"
            :width="themeConfig.isMobile ? '120px' : '187px'"
            :light="transparent || isDark"
            class="cursor-pointer"
          />
        </RouterLink>

        <div
          class="d-flex justify-end flex-1 align-center"
          :class="[
            { 'gap-1': themeConfig.isMobile },
            { 'gap-5': !themeConfig.isMobile },
          ]"
        >
          <template v-if="!themeConfig.isMobile && !themeConfig.isTablet">
            <RouterLink
              v-for="menu in navMenu"
              :key="menu.key"
              :to="`/${menu.to}`"
              :class="transparent ? 'text-white-persistent' : 'text-black'"
            >
              {{ menu.label }}
            </RouterLink>
          </template>

          <VBtn
            v-if="themeConfig.isMobile"
            variant="text"
            icon
            :class="transparent ? 'text-white-persistent' : 'text-black'"
            @click="emit('open:search')"
          >
            <VIcon icon="tabler-search" />
          </VBtn>

          <VMenu :close-on-content-click="false">
            <template #activator="{ props }">
              <VBtn
                variant="text"
                :color="transparent ? 'white-persistent' : 'black'"
                icon
                v-bind="props"
              >
                <VIcon icon="tabler-bell" />
              </VBtn>
            </template>
            <VCard
              class="my-4"
              width="400px"
            >
              <VCardTitle>
                <VRow
                  no-gutters
                  class="justify-space-between align-center my-4"
                >
                  <div class="font-weight-semibold">
                    Notification
                  </div>

                  <VBtn
                    icon
                    variant="text"
                    color="black"
                  >
                    <VIcon icon="tabler-settings-2" />
                  </VBtn>
                </VRow>
              </VCardTitle>
              <VCardText>
                <VTabs
                  v-model="notificationTab"
                  grow
                >
                  <VTab value="pending">
                    Pending (3)
                  </VTab>

                  <VTab value="purchased">
                    Purchased
                  </VTab>
                </VTabs>
              </VCardText>

              <VCardText>
                <VWindow v-model="notificationTab">
                  <VWindowItem value="pending">
                    <div
                      v-for="i in 3"
                      :key="i"
                      class="notification-item"
                    >
                      <VIcon
                        icon="tabler-notification"
                        color="black"
                      />
                      <div class="d-flex flex-column gap-2 flex-1">
                        <div class="text-black font-weight-semibold">
                          Jakarta Music Fair: 2023
                        </div>
                        <div class="text-secondary">
                          You have not made any payments for this event. make payment now.
                        </div>
                      </div>
                    </div>
                  </VWindowItem>

                  <VWindowItem value="purchased">
                    <div class="d-flex flex-column align-center gap-6">
                      <VImg
                        :src="NotFoundVec"
                        width="60%"
                        class="ml-10"
                      />
                      <div class="font-weight-semibold text-black text-center">
                        No payment has been completed yet.
                      </div>
                    </div>
                  </VWindowItem>
                </VWindow>
              </VCardText>
            </VCard>
          </VMenu>

          <VMenu
            v-if="isLoggedin && !themeConfig.isMobile"
            :close-on-content-click="false"
          >
            <template #activator="{ props }">
              <div
                class="avatar"
                v-bind="props"
              >
                {{ avatarText }}
              </div>
            </template>
            <VCard
              class="my-4"
              width="200px"
            >
              <VCardText class="d-flex flex-column gap-2 align-center">
                <div
                  class="avatar"
                  :style="{ width: '48px', height: '48px', fontSize: '16px' }"
                >
                  {{ avatarText }}
                </div>

                <span class="font-weight-semibold text-black text-center text-lg">{{ store.user.fullname }}</span>
              </VCardText>

              <VDivider />

              <div class="d-flex flex-column">
                <div
                  v-ripple
                  class="profile-menu"
                  @click="$router.push('/profile')"
                >
                  My Account
                </div>

                <div
                  v-ripple
                  class="profile-menu"
                >
                  Help Center
                </div>

                <div
                  v-ripple
                  class="profile-menu"
                  @click="store.logout()"
                >
                  Logout
                </div>
              </div>
            </VCard>
          </VMenu>

          <template v-if="!themeConfig.isMobile && !themeConfig.isTablet">
            <VBtn
              v-if="!isLoggedin"
              variant="text"
              :color="transparent ? 'white-persistent' : 'black'"
              @click="$router.push('/login')"
            >
              Login
            </VBtn>

            <VBtn
              v-if="!isLoggedin"
              variant="outlined"
              @click="$router.push('/register')"
            >
              Register
            </VBtn>
          </template>

          <ThemeSwitcher v-if="!themeConfig.isMobile && !themeConfig.isTablet" />

          <template v-if="themeConfig.isMobile || themeConfig.isTablet">
            <VBtn
              variant="text"
              :color="transparent ? 'white-persistent' : 'black'"
              icon
              @click="menuVisible = !menuVisible"
            >
              <VIcon icon="tabler-menu-2" />
            </VBtn>
          </template>
        </div>
      </VRow>

      <template v-if="!transparent">
        <VDivider
          v-if="!themeConfig.isMobile"
          thickness="2px"
          class="my-6"
        />

        <div
          v-if="!themeConfig.isMobile"
          class="input-search"
        >
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
              class="overlay"
              @click="onFocus = false"
            />
            <SearchBox v-if="onFocus" />
          </VFadeTransition>
        </div>
      </template>

      <template v-if="themeConfig.isMobile || themeConfig.isTablet">
        <VBottomSheet v-model:visible="menuVisible">
          <div class="font-weight-bold text-black text-xl mb-6">
            Menu
          </div>

          <div class="d-flex flex-column gap-2">
            <VRow
              no-gutters
              class="justify-space-between align-center"
            >
              <span>{{ isDark ? 'Dark' : 'Light' }}</span>
              <ThemeSwitcher />
            </VRow>

            <RouterLink
              v-for="menu in navMenu"
              :key="menu.key"
              v-ripple
              :to="`/${menu.to}`"
              class="text-black py-2 d-flex justify-space-between align-center"
            >
              {{ menu.label }}

              <VIcon icon="tabler-chevron-right" />
            </RouterLink>
          </div>

          <VRow
            v-if="!isLoggedin"
            no-gutters
            class="mt-6 w-100 justify-center gap-4"
          >
            <VBtn
              variant="text"
              color="primary"
              @click="$router.push('/login')"
            >
              Login
            </VBtn>

            <VBtn
              variant="outlined"
              @click="$router.push('/register')"
            >
              Register
            </VBtn>
          </VRow>
        </VBottomSheet>
      </template>
    </VContainer>
  </div>
</template>

<style scoped lang="scss">
:deep(.v-container) {
  @media (max-width: 768px) {
    padding: 8px 24px !important;
  }
}
.header-wrapper {
  background: rgb(var(--v-theme-surface));
  box-shadow: 0 0 10px 0 rgb(var(--v-theme-black-persistent), 0.1);

  &__transparent {
    background: transparent;
  }
}

// 👉 Override TextField
:deep(.v-field__input), :deep(.v-text-field__prefix) {
  background: rgb(var(--v-theme-background));
  padding-block: 8px;
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

  @media (max-width: 1024px) {
    width: 100%;
  }
}

.overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: #000;
  opacity: 0.4;
  z-index: 99;
}

// 👉 Override Input SearchBox
:deep(.v-input__control) {
  z-index: 100 !important;
}

.profile-menu {
  padding: 14px;
  cursor: pointer;

  &:hover {
    background: rgb(var(--v-theme-surface));
  }
}

.notification-item {
  font-size: 14px;
  padding: 8px;
  border-radius: 8px;
  display: flex;
  gap: 8px;
  cursor: pointer;

  &:hover {
    background: rgb(var(--v-theme-background));
  }
}

.avatar {
  position: relative;
  width: 28px;
  height: 28px;
  border-radius: 99px;
  background: rgb(var(--v-theme-info));
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 600;
  cursor: pointer;
  font-size: 12px;
  user-select: none;
  margin-inline: 4px;
}
</style>
