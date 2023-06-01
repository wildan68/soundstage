import type { ProfileMenu } from './profile.d'

export const profileMenu: ProfileMenu[] = [
  {
    key: 'account',
    label: 'Account',
    icon: 'tabler-user-circle',
    component: defineAsyncComponent(() => import('./component/Account.vue')),
  }, {
    key: 'my-order',
    label: 'My Order',
    icon: 'tabler-ticket',
    component: defineAsyncComponent(() => import('./component/MyOrder.vue')),
  }, {
    key: 'my-coupon',
    label: 'My Coupon',
    icon: 'tabler-discount-2',
    component: defineAsyncComponent(() => import('./component/MyCoupon.vue')),
  }, {
    key: 'bookmark',
    label: 'Bookmark',
    icon: 'tabler-bookmarks',
    component: defineAsyncComponent(() => import('./component/Bookmark.vue')),
    separator: true,
  }, {
    key: 'event-partner',
    label: 'Event Partner',
    icon: 'tabler-award',
    component: defineAsyncComponent(() => import('./component/EventPartner.vue')),
  }, {
    key: 'review',
    label: 'Review',
    icon: 'tabler-pencil-minus',
    component: defineAsyncComponent(() => import('./component/Review.vue')),
  }, {
    key: 'refund-list',
    label: 'Refund List',
    icon: 'tabler-ticket-off',
    component: defineAsyncComponent(() => import('./component/RefundList.vue')),
    separator: true,
  }, {
    key: 'settings',
    label: 'Settings',
    icon: 'tabler-settings',
    component: defineAsyncComponent(() => import('./component/Settings.vue')),
  }, {
    key: 'hel-center',
    label: 'Help Center',
    icon: 'tabler-message-chatbot',
    to: '/help-center',
    separator: true,
  }, {
    key: 'logout',
    label: 'Logout',
    icon: 'tabler-logout',
    to: '/',
  },
]
