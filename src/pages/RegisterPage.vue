<script setup lang="ts">
import RegisterForm from '@/features/auth/RegisterForm.vue'
</script>
<template>
  <div class="wrapper">
    <RegisterForm />
  </div>
</template>
<style scoped>
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 100vh;
  background-color: #f5f5f5;
}

@media (max-width: 600px) {
  .wrapper {
    background-color: #fffffe;
  }
}
</style>
