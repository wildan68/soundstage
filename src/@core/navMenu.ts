import type { NavMenu } from './types'

export default [
  {
    key: 'home',
    label: 'Home',
    to: '',
  }, {
    key: 'create-event',
    label: 'Create Event',
    to: 'create-event',
  }, {
    key: 'how-to-buy',
    label: 'How to Buy',
    to: 'how-to-buy',
  }, {
    key: 'my-order',
    label: 'My Order',
    to: 'my-order',
  },
] as NavMenu[]
