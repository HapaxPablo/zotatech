
<script setup lang="ts">
import { useUserStore } from '@/entities/user/model/userStore';
import { useRouter } from 'vue-router';
import CustomButton from '@/shared/ui/Button/CustomButton.vue'

const userStore = useUserStore()
const router = useRouter()

const logout = () => {
    userStore.logout()
    router.push('/login')
}
</script>

<template>
    <div>
        Здравствуйте, {{userStore.user?.login}}
    </div>
    <CustomButton text="Выйти" @click="logout" type="button"/>
</template>

<style lang="">
    
</style>