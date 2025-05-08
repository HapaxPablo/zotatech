import { useUserStore } from "@/entities/user/model/userStore"
import { computed } from "vue"
import { useRouter } from "vue-router"

export const useProfile = () => {
  const userStore = useUserStore()
  const router = useRouter()
  const user = computed(() => userStore.user)
  const logout = () => {    
    userStore.logout()
    router.push('/login')
  }
  return { user, logout }
}


