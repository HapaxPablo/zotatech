import { defineStore } from 'pinia'
import type { IUser } from './type'

export const useUserStore = defineStore('user', {
  state: () => ({
    user: null as IUser | null,
    isAuth: false,
  }),
  actions: {
    register(user: IUser) {
      this.user = user
      this.isAuth = true
    },
    logout() {
      this.user = null
      this.isAuth = false
    },
    checkAuth() {
      this.isAuth = !!this.user
    },
  },
  persist: true,
})
