<script setup lang="ts">
import { themeConfig } from '@themeConfig'

const title = ref<string | null>('Mr')

const firstName = ref<string>('Steven')

const lastName = ref<string>('Joe')

const idNumber = ref<string>('526372721828384838')
</script>

<template>
  <div class="d-flex flex-column gap-6">
    <VCard
      :flat="themeConfig.isMobile"
      title="Let’s, complete your profile"
      subtitle="By completing your profile you will get other attractive promos"
      class="account-card"
    />

    <VCard
      :flat="themeConfig.isMobile"
      title="Detail Account"
      subtitle="Complete your account details"
    >
      <VCardText>
        <VRow
          no-gutters
          class="gap-6"
          :class="[{ 'flex-column': themeConfig.isMobile }]"
        >
          <VForm class="flex-1 d-flex flex-column gap-4">
            <VSelect
              v-model="title"
              :items="['Mr', 'Mrs']"
              label="Title"
            />

            <VTextField
              v-model="firstName"
              label="First Name"
            />

            <VTextField
              v-model="lastName"
              label="Last Name"
            />

            <VTextField
              v-model="idNumber"
              label="ID Card"
            />

            <VBtn
              width="fit-content"
              size="large"
            >
              Save
            </VBtn>
          </VForm>

          <div class="account-info">
            <VCol>
              <div class="text-sm text-secondary">
                Email
              </div>
              <div class="text-sm text-black font-weight-semibold">
                stevenjoe@gmail.com
              </div>
            </VCol>
            <VCol>
              <div class="text-sm text-secondary">
                Phone Number
              </div>
              <div class="text-sm text-black font-weight-semibold">
                +62 812 3456 7890
              </div>
            </VCol>
          </div>
        </VRow>
      </VCardText>
    </VCard>
  </div>
</template>

<style scoped lang="scss">
.account-card {
  background: url('@images/vec/coupon-gift.png') no-repeat right center;
  background-color: rgb(var(--v-theme-surface));
}

.account-info {
  background: rgb(var(--v-theme-background));
  flex: 1;
  border-radius: 12px;
  padding: 24px;
  height: fit-content;
}
</style>
