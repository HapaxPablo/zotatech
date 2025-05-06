<template>
  <form @submit.prevent="onSubmit" class="register-form">
    <div class="text-2xl font-bold">Регистрация</div>
    <div class="form-fields">
      <div>
        <label>Логин *</label>
        <input v-model="form.login" type="text" class="border-none" />
        <span v-if="errors.login" class="error">{{ errors.login }}</span>
      </div>

      <div>
        <label>Email</label>
        <input v-model="form.email" type="email" />
        <span v-if="errors.email" class="error">{{ errors.email }}</span>
      </div>

      <div>
        <label>Телефон</label>
        <input v-model="form.phone" v-mask="'+7 (###) ###-##-##'" type="tel" />
        <span v-if="errors.phone" class="error">{{ errors.phone }}</span>
      </div>

      <div>
        <label>Пароль *</label>
        <input v-model="form.password" type="password" />
        <span v-if="errors.password" class="error">{{ errors.password }}</span>
      </div>

      <div>
        <label>Подтверждение пароля *</label>
        <input v-model="form.confirmPassword" type="password" />
        <span v-if="errors.confirmPassword" class="error">{{ errors.confirmPassword }}</span>
      </div>
    </div>
    <!-- <button type="submit">Зарегистрироваться</button> -->
    <div class="h-[50px] mt-[42px]">
      <CustomButton
        text="Зарегистрироваться"
        type="submit"
        className="bg-[#2B2A29] text-white w-full h-full"
      />
    </div>

    <div>
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
  max-height: 701px;
  height: 100vh;
  width: 100%;
  background-color: #fffffe;
  justify-content: space-between;
}

.form-fields {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

label {
  font-weight: bold;
}

input {
  width: 100%;
  padding: 8px 0;
  border: none;
  border-bottom: 1px solid #222;
  background: transparent;
  color: #222;
  font-size: 1rem;
  border-radius: 0;
  outline: none;
  transition: border-color 0.2s;
}

input:focus {
  border-bottom: 2px solid #2b2a29;
}

.error {
  color: red;
  font-size: 0.9rem;
}

.border-t {
  border-top: 1px solid #ccc;
  margin: 1rem 0;
}
</style>
