import axios from 'axios'
import { defineStore } from 'pinia'
import type { AxiosResponse } from 'axios'

const graphql = axios.create({
  baseURL: 'https://graphqlzero.almansi.me/api',
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },
})

export const useGraphqlStore = defineStore({
  id: 'graphql',
  actions: {
    async getPosts() {
      const query = `{
                posts {
                  data {
                    id
                    title
                  }
                  meta {
                    totalCount
                  }
                }
              }`

      const { data } = graphql.post<Promise<AxiosResponse>>('', JSON.stringify({ query }))

      return data
    },
  },
})

