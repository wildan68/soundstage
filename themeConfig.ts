import Logo from '@core/icons/Logo.vue'

const { VITE_APP_NAME: appName } = import.meta.env

const { width } = useWindowSize()

export const themeConfig = {
  app: {
    name: appName,
    logo: Logo,
    copyright: `© 2015 - ${new Date().getFullYear()} ${appName}. All Rights Reserved`,
    appLoadInterval: 1000,
    search: {
      placeholder: [
        'Pop, Rock or Metal Festival',
        'Kpop, Jazz or EDM Festival',
        'Everything is here',
      ],
    },
  },
  isMobile: width.value <= 768,
  isTablet: width.value > 768 && width.value <= 1024,
}
