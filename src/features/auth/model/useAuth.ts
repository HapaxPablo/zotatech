import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { useUserStore } from '@/entities/user/model/userStore'
import type { IRegisterUser } from '@/entities/user/model/type'
import { useValidation } from './useValidation'

export const useAuth = () => {
  const router = useRouter()
  const userStore = useUserStore()
  
  const isAuthenticated = computed(() => userStore.isAuth)
  const currentUser = computed(() => userStore.user?.login)
  
  const form = ref<IRegisterUser & { confirmPassword: string }>({
    login: '',
    password: '',
    confirmPassword: '',
    email: '',
    phone: '',
  })

  const { errors, validate } = useValidation(form.value)

  const register = async () => {
    if (!validate()) return false

    try {
      userStore.register({ login: form.value.login })
      router.push('/profile')
      return true
    } catch (error) {
      console.error('Registration error:', error)
      return false
    }
  }

  const logout = () => {
    userStore.logout()
    router.push('/register')
  }

  return {
    form,
    errors,
    isAuthenticated,
    currentUser,
    register,
    logout,
    validate
  }
} 