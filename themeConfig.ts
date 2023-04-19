import Logo from '@core/icons/Logo.vue'

export const themeConfig = {
  app: {
    name: 'soundstage',
    logo: Logo,
    copyright: `© 2015 - ${new Date().getFullYear()} soundstage. All Rights Reserved`,
    appLoadInterval: 2000,
  },
  screen: {
    mobile: 720,
    tablet: 1024,
    desktop: 1440,
  },
}
