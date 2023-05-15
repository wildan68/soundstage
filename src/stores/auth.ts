import { defineStore } from 'pinia'
import type { AxiosResponse } from 'axios'
import type { Auth, Register } from './types'
import axios from '@axios'
import { isLoggedin } from '@/@core/app'

export const useAuthStore = defineStore({
  id: 'auth',
  state: () => ({
    user: {
      email: null,
      fullname: null,
      token: null,
    },
  }),
  persist: {
    key: 'persisted-auth',
    serializer: {
      deserialize: JSON.parse,
      serialize: JSON.stringify,
    },
  },
  actions: {
    async login(payload: Auth) {
      try {
        const { data } = await axios.post<Promise<AxiosResponse>>('/auth/login', payload)

        this.user.email = (await data).data.email
        this.user.fullname = (await data).data.fullname
        this.user.token = (await data).data.token

        isLoggedin.value = true

        return data
      }
      catch (err) {
        if (err instanceof Error)
          throw new Error(err.message)
      }
    },

    async checkEmail(payload: { email: string }) {
      try {
        const { data } = await axios.post<Promise<AxiosResponse>>('/auth/check-email', payload)

        return data
      }
      catch (err) {
        if (err instanceof Error)
          throw new Error(err.message)
      }
    },

    async verifyOtp(payload: { email: string; otp_code: string }) {
      try {
        const { data } = await axios.post<Promise<AxiosResponse>>('/auth/verify-otp', payload)

        return data
      }
      catch (err) {
        if (err instanceof Error)
          throw new Error(err.message)
      }
    },

    async register(payload: Register) {
      try {
        const { data } = await axios.post<Promise<AxiosResponse>>('/auth/register', payload)

        this.user.email = (await data).data.email
        this.user.fullname = (await data).data.fullname
        this.user.token = (await data).data.token

        isLoggedin.value = true

        return data
      }
      catch (err) {
        if (err instanceof Error)
          throw new Error(err.message)
      }
    },

    async logout() {
      this.user.email = null
      this.user.fullname = null
      this.user.token = null

      isLoggedin.value = false

      window.open('/', '_self')
    },
  },
})
