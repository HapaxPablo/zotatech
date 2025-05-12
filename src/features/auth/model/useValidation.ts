import { ref } from 'vue'
import type { IRegisterUser } from '@/entities/user/model/type'

export const useValidation = (form: IRegisterUser & { confirmPassword: string }) => {
  const errors = ref<Partial<Record<keyof typeof form, string>>>({})

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
      { validate: (value: string) => value === form.password, message: 'Пароли не совпадают' }
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
      const value = form[field as keyof typeof form]
      
      for (const rule of rules) {
        if (!rule.validate(value as string)) {
          errors.value[field as keyof typeof errors.value] = rule.message
          break
        }
      }
    })

    return Object.keys(errors.value).length === 0
  }

  return {
    errors,
    validate
  }
} 