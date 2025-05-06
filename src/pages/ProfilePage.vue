<template lang="">
  <div>Привет, {{ user?.login }}</div>
</template>
<script setup lang="ts">
import { useUserStore } from '@/entities/user/model/userStore'

const userStore = useUserStore()
const user = userStore.user
console.log(user)
</script>
<!-- <style lang=""></style>
    
</style> -->
