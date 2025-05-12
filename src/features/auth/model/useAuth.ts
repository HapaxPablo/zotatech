import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { useUserStore } from '@/entities/user/model/userStore'
import type { IRegisterUser } from '@/entities/user/model/type'

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

  const errors = ref<Partial<Record<keyof typeof form.value, string>>>({})

  const validationRules = {
    login: [
      { validate: (value: string) => !!value, message: 'Логин обязателен' },
      { validate: (value: string) => value.length >= 6, message: 'Логин должен быть не менее 6 символов' }
    ],
    email: [
      { validate: (value: string) => !!value, message: 'Email обязателен' },
      { validate: (value: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value), message: 'Введите корректный email' }
    ],
    password: [
      { validate: (value: string) => !!value, message: 'Пароль обязателен' }
    ],
    confirmPassword: [
      { validate: (value: string) => !!value, message: 'Подтвердите пароль' },
      { validate: (value: string) => value === form.value.password, message: 'Пароли не совпадают' }
    ],
    phone: [
      { validate: (value: string) => !!value, message: 'Телефон обязателен' },
      { 
        validate: (value: string) => {
          const digits = value.replace(/\D/g, '');
          return digits.length === 11;
        }, 
        message: 'Введите корректный номер телефона' 
      }
    ]
  }

  const validate = () => {
    errors.value = {}

    Object.entries(validationRules).forEach(([field, rules]) => {
      const value = form.value[field as keyof typeof form.value]
      
      for (const rule of rules) {
        if (!rule.validate(value as string)) {
          errors.value[field as keyof typeof errors.value] = rule.message
          break
        }
      }
    })

    return Object.keys(errors.value).length === 0
  }

  const register = async () => {
    if (!validate()) return false

    try {
      // В реальном приложении здесь был бы API запрос
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