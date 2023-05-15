import axios from 'axios'

const ls = JSON.parse(localStorage.getItem('persisted-auth') as string || '{}')

const token = ls.user?.token

const instance = axios.create({
  baseURL: import.meta.env.VITE_API_URL as string || `${window.location.origin}/api`,

  headers: { Authorization: `Bearer ${token}` || '' },
})

export default instance
