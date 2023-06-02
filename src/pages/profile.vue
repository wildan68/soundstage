<script setup lang="ts">
import type { Component } from 'vue'
import type { RouteLocationNormalized, Router } from 'vue-router'
import ProfileMenu from '@/views/profile/ProfileMenu.vue'
import ProfileMenMobile from '@/views/profile/ProfileMenuMobile.vue'
import { themeConfig } from '@themeConfig'
import { profileMenu } from '@/views/profile/profile'
import type { ProfileMenu as ProfileMenuType } from '@/views/profile/types'

interface Emit {
  (e: 'navbar', val: boolean): void
}

const emit = defineEmits<Emit>()

const route: RouteLocationNormalized = useRoute()

const router: Router = useRouter()

const activeMenu = ref<Component>(profileMenu[0].component)

const detailMenu = ref<Pick<ProfileMenuType, 'key' | 'component'> | null>()

const keyMenu = ref<string>(profileMenu[0].key)

const titleMenu = computed<string>(() => profileMenu.find(menu => menu.key === detailMenu.value?.key)?.label || '')

watch(detailMenu, (val) => {
  if (val)
    emit('navbar', false)
  else
    emit('navbar', true)

  window.scrollTo({ top: 0, behavior: 'smooth' })
})

const onChangeMenu = (val: Pick<ProfileMenuType, 'key' | 'component'>) => {
  keyMenu.value = val.key
  activeMenu.value = val.component as Component

  window.scrollTo({ top: 0, behavior: 'smooth' })

  router.push({ query: { menu: val.key } })
}

const onOpenDetailMenu = (val: Pick<ProfileMenuType, 'key' | 'component'>) => detailMenu.value = val

const onClose = () => detailMenu.value = null

const afterRender = () => {
  if (themeConfig.isMobile)
    return

  if (!route.query.menu)
    router.push({ query: { menu: 'account' } })

  const queryMenu = profileMenu.find(menu => menu.key === route.query.menu)

  if (!queryMenu)
    router.push({ query: { menu: 'account' } })

  keyMenu.value = profileMenu.find(menu => menu.key === route.query.menu)?.key || 'account'

  activeMenu.value = profileMenu.find(menu => menu.key === route.query.menu)?.component as Component || profileMenu[0].component as Component
}

onMounted(() => afterRender())
</script>

<template>
  <template v-if="!themeConfig.isMobile">
    <VContainer>
      <VRow
        no-gutters
        class="gap-6"
      >
        <ProfileMenu
          :active-menu="keyMenu"
          @change="onChangeMenu"
        />

        <Component
          :is="activeMenu"
          class="flex-1"
        />
      </VRow>
    </VContainer>
  </template>

  <template v-else>
    <VSlideXTransition>
      <div
        v-if="!detailMenu"
        class="profile-wrapper"
      >
        <div class="profile-cover">
          <VRow
            no-gutters
            class="justify-space-between align-center"
          >
            <span class="font-weight-semibold text-2xl">My Account</span>

            <VBtn
              variant="text"
              icon
              color="white-persistent"
            >
              <VIcon icon="tabler-settings" />
            </VBtn>
          </VRow>
        </div>

        <VCard class="card-profile-info">
          <VCardText>
            <VRow
              no-gutters
              class="text-xl gap-2"
            >
              <span class="font-weight-semibold text-black">Steven Joe</span>

              <VIcon
                icon="tabler-discount-check-filled"
                color="info"
              />
            </VRow>

            <div class="text-primary mt-3">
              Account Detail
            </div>

            <div class="card-profile-info__coin mt-3">
              <span class="font-weight-semibold">3.000 Coin</span>

              <VIcon icon="tabler-brand-coinbase" />
            </div>
          </VCardText>
        </VCard>

        <div class="card-profile-info__menu">
          <ProfileMenMobile @open="onOpenDetailMenu" />
        </div>
      </div>
    </VSlideXTransition>

    <VSlideXTransition>
      <div
        v-if="detailMenu"
        class="detail-menu-wrapper"
      >
        <div class="bg-surface px-6 py-3">
          <VRow
            no-gutters
            class="gap-2 align-center"
          >
            <VBtn
              icon
              variant="text"
              color="black"
              @click="onClose"
            >
              <VIcon icon="tabler-chevron-left" />
            </VBtn>

            <span class="font-weight-semibold text-2xl text-black">
              {{ titleMenu }}
            </span>
          </VRow>
        </div>

        <Component :is="detailMenu.component" />
      </div>
    </VSlideXTransition>
  </template>
</template>

<style scoped lang="scss">
.profile-wrapper {
  background: rgb(var(--v-theme-surface));
}
.profile-cover {
  height: 250px;
  background: url('@images/vec/profile-cover.jpg') no-repeat center center;
  background-size: cover;
  color: #fff;
  padding: 24px;
}

.card-profile-info {
  margin-top: -20%;
  margin-inline: 24px;
  border-radius: 12px !important;

  &__coin {
    padding: 8px;
    border-radius: 8px;
    color: #fff;
    background: linear-gradient(90deg, #6C6C6C 0%, #B2B2B2 50%, #6C6C6C 100%);
    background-size: 400% 400%;
    animation: skeleton 3.5s ease-in-out infinite;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @keyframes skeleton {
      0% {
        background-position: 100% 50%;
      }

      100% {
        background-position: 0 50%;
      }
    }
  }

  &__menu {
    margin-top: 16px;
    margin-bottom: 82px;
  }
}
</style>

<route lang="yaml">
meta:
  hideHeader: true
  hideFooter: true
</route>
