<script setup lang="ts">
import RegisterForm from '@/features/auth/ui/RegisterForm.vue'
</script>
<template>
  <div class="wrapper">
    <RegisterForm />
  </div>
</template>
<style scoped>
.wrapper {
  --wrapper-background-color: #f5f5f5;
  --wrapper-background-color-mobile: #fffffe;
  --wrapper-min-height: 100vh;
  --wrapper-min-height-mobile: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: var(--wrapper-min-height);
  background-color: var(--wrapper-background-color);
}

@media (max-width: 768px) {
  .wrapper {
    background-color: var(--wrapper-background-color-mobile);
    min-height: var(--wrapper-min-height-mobile);
  }
}
</style>
