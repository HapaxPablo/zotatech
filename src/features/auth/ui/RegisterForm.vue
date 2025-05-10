<template>
  <form @submit.prevent="onSubmit" class="register-form">
    <div class="form-title">Регистрация</div>
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
    <div class="button-container">
      <CustomButton
        text="Зарегистрироваться"
        type="submit"
        className="submit-button"
        :disabled="!form.login" 
      />
    </div>

    <div class="agreement-container">
      <div class="border-t" />
      <span class="agreement-text">
        Нажимая кнопку «Зарегистрироваться», пользователь соглашается с политикой в отношении
        обработки персональных данных и публичной офертой
      </span>
    </div>
  </form>
</template>

<script setup lang="ts">
import CustomButton from '@/shared/ui/Button/CustomButton.vue'
import CustomInput from '@/shared/ui/Input/CustomInput.vue'
import { useAuth } from '../model/useAuth'

const { form, errors, register } = useAuth()

const onSubmit = () => {
  register()
}
</script>

<style scoped>
.register-form {
  padding: var(--spacing-xl);
  display: flex;
  flex-direction: column;
  max-width: var(--container-form);
  width: 100%;
  background-color: var(--color-white);
  gap: var(--spacing-lg);
}

.form-title {
  font-size: var(--font-size-lg);
  font-weight: var(--font-weight-bold);
}

.form-fields {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);
}

.button-container {
  height: var(--button-height);
}

.submit-button {
  background-color: var(--color-button-bg);
  color: var(--color-white);
  width: 100%;
  height: 100%;
  border: none;
  cursor: pointer;
}

.submit-button:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}

.agreement-container {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-lg);
}

.agreement-text {
  font-weight: var(--font-weight-regular);
  font-size: var(--font-size-xs);
  line-height: var(--line-height-xs);
  color: var(--color-text-secondary);
}
</style>
