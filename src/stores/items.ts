import { defineStore } from 'pinia'
import type { AxiosResponse } from 'axios'
import axios from '@axios'

export const useItemsStore = defineStore({
  id: 'items',
  state: () => ({}),
  actions: {
    async listItems() {
      try {
        const { data } = await axios.get<Promise<AxiosResponse>>('/list-items')

        return data
      }

      catch (err) {
        if (err instanceof Error)
          throw new Error(err.message)
      }
    },
  },
})
