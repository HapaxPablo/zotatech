<template>
  <form @submit.prevent="onSubmit" class="register-form">
    <div class="text-2xl font-bold">Регистрация</div>
    <div class="form-fields">
      <CustomInput v-model="form.login" label="Логин *" type="text" :error="errors.login" />

      <CustomInput v-model="form.email" label="Email" type="email" :error="errors.email" />

      <CustomInput
        v-model="form.phone"
        label="Телефон"
        type="tel"
        mask="+7 (###) ###-##-##"
        :error="errors.phone"
      />

      <CustomInput
        v-model="form.password"
        label="Пароль *"
        type="password"
        :error="errors.password"
      />

      <CustomInput
        v-model="form.confirmPassword"
        label="Подтверждение пароля *"
        type="password"
        :error="errors.confirmPassword"
      />
    </div>
    <div class="h-[50px]">
      <CustomButton
        text="Зарегистрироваться"
        type="submit"
        className="bg-[#2B2A29] text-white w-full h-full"
      />
    </div>

    <div class="flex flex-col gap-6">
      <div class="border-t" />
      <span class="font-normal text-[14px] leading-[18px] text-[#878787]">
        Нажимая кнопку «Зарегистрироваться», пользователь соглашается с политикой в отношении
        обработки персональных данных и публичной офертой
      </span>
    </div>
  </form>
</template>

<script setup lang="ts">
import type { IRegisterUser } from '@/entities/user/model/type'
import { useUserStore } from '@/entities/user/model/userStore'
import CustomButton from '@/shared/ui/Button/CustomButton.vue'
import CustomInput from '@/shared/ui/Input/CustomInput.vue'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const userStore = useUserStore()

// форма + confirmPassword отдельно
const form = ref<IRegisterUser & { confirmPassword: string }>({
  login: '',
  password: '',
  confirmPassword: '',
  email: '',
  phone: '',
})

const errors = ref<Partial<Record<keyof typeof form.value, string>>>({})

// Простая валидация
const validate = () => {
  errors.value = {}

  if (!form.value.login) errors.value.login = 'Логин обязателен'
  if (!form.value.password) errors.value.password = 'Пароль обязателен'
  if (!form.value.confirmPassword) errors.value.confirmPassword = 'Подтвердите пароль'
  if (form.value.password !== form.value.confirmPassword)
    errors.value.confirmPassword = 'Пароли не совпадают'

  // Можно добавить email и phone по необходимости

  return Object.keys(errors.value).length === 0
}

const onSubmit = () => {
  if (!validate()) return

  userStore.register({ login: form.value.login })

  router.push('/profile')
}
</script>

<style scoped>
.register-form {
  padding: 42px;
  display: flex;
  flex-direction: column;
  max-width: 614px;
  width: 100%;
  background-color: #fffffe;
  gap: 24px;
}

.form-fields {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.border-t {
  border-top: 1px solid #ccc;
}
</style>
