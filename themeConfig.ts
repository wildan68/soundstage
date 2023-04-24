import Logo from '@core/icons/Logo.vue'

const { VITE_APP_NAME: appName } = import.meta.env

export const themeConfig = {
  app: {
    name: appName,
    logo: Logo,
    copyright: `© 2015 - ${new Date().getFullYear()} ${appName}. All Rights Reserved`,
    appLoadInterval: 2000,
    search: {
      placeholder: [
        'Pop, Rock or Metal Festival',
        'Kpop, Jazz or EDM Festival',
        'Everything is here',
      ],
    },
  },
  screen: {
    mobile: 720,
    tablet: 1024,
    desktop: 1440,
  },
}
