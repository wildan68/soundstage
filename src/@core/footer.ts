import type { Footer } from './types'

export default [
  {
    key: 'company',
    label: 'Company',
    children: [
      {
        key: 'blog',
        label: 'Blog',
        to: 'blog',
      }, {
        key: 'career',
        label: 'Career',
        to: 'career',
      }, {
        key: 'corporate',
        label: 'Corporate',
        to: 'corporate',
      }, {
        key: 'partner',
        label: 'Partner',
        to: 'partner',
      }, {
        key: 'customer-service',
        label: 'Customer Service',
        to: 'customer-service',
      }, {
        key: 'contact-us',
        label: 'Contact Us',
        to: 'contact-us',
      },
    ],
  }, {
    key: 'support',
    label: 'Support',
    children: [
      {
        key: 'privacy-policy',
        label: 'Privacy Policy',
        to: 'privacy-policy',
      }, {
        key: 'terms-and-conditions',
        label: 'Terms and Conditions',
        to: 'terms-and-conditions',
      }, {
        key: 'create-event',
        label: 'Create Your Event',
        to: 'create-event',
      }, {
        key: 'media',
        label: 'Media',
        to: 'media',
      },
    ],
  }, {
    key: 'follow-us',
    label: 'Follow Us',
    children: [
      {
        key: 'facebook',
        label: 'Facebook',
        to: () => window.open('https://facebook.com/', '_blank'),
      }, {
        key: 'twitter',
        label: 'Twitter',
        to: () => window.open('https://twitter.com/', '_blank'),
      }, {
        key: 'instagram',
        label: 'Instagram',
        to: () => window.open('https://instagram.com/', '_blank'),
      }, {
        key: 'tiktok',
        label: 'TikTok',
        to: () => window.open('https://tiktok.com/', '_blank'),
      },
    ],
  },
] as Footer[]
