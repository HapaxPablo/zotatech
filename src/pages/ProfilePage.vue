<script setup lang="ts">
import GreetingsUser from '@/features/profile/ui/GreetingsUser.vue'
</script>
<template>
  <div class="wrapper">
    <GreetingsUser />
  </div>
</template>

<style scoped>
.wrapper {
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100vh;
  background-color: #f1f1f1;
  
}
@media (max-width: 768px) {
  .wrapper {
    background-color: #fffffe;
  }
}
</style>
