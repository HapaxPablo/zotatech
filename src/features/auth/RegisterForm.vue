<template>
  <form @submit.prevent="onSubmit" class="register-form">
    <div>
      <label>Логин *</label>
      <input v-model="form.login" type="text" />
      <span v-if="errors.login">{{ errors.login }}</span>
    </div>

    <div>
      <label>Email</label>
      <input v-model="form.email" type="email" />
      <span v-if="errors.email">{{ errors.email }}</span>
    </div>

    <div>
      <label>Телефон</label>
      <input v-model="form.phone" v-mask="'+7 (###) ###-##-##'" type="tel" />
      <span v-if="errors.phone">{{ errors.phone }}</span>
    </div>

    <div>
      <label>Пароль *</label>
      <input v-model="form.password" type="password" />
      <span v-if="errors.password">{{ errors.password }}</span>
    </div>

    <div>
      <label>Подтверждение пароля *</label>
      <input v-model="form.confirmPassword" type="password" />
      <span v-if="errors.confirmPassword">{{ errors.confirmPassword }}</span>
    </div>

    <!-- <button type="submit">Зарегистрироваться</button> -->
    <CustomButton
      text="Зарегистрироваться"
      type="submit"
      className="bg-[#2B2A29] text-white w-full h-[50px]"
    />
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
  gap: 1rem;
  width: 50%;
  background-color: #fffffe;
}

label {
  font-weight: bold;
}

input {
  padding: 0.5rem;
  border: 1px solid #ccc;
}

span {
  color: red;
  font-size: 0.9rem;
}
</style>
