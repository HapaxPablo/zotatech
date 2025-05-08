<script setup lang="ts">
import CustomButton from '@/shared/ui/Button/CustomButton.vue'
import { useProfile } from '../model/useProfile';

const { user, logout } = useProfile()


</script>

<template>
    <div class="greetings-wrapper">
        <div class="greetings-text">Здравствуйте, {{user?.login}}</div>
        <div class="border-t" />
        <CustomButton text="Выйти" @click="logout" type="button" class="logout-button"/>
    </div>
</template>

<style scoped>
    .greetings-wrapper {
        /* CSS переменные для легкой кастомизации */
        --container-max-width-desktop: 702px;
        --container-max-height-desktop: 219px;
        --container-max-width-mobile: 288px;
        --container-max-height-mobile: 72px;
        --container-padding: 42px;
        --container-gap: 20px;
        --container-margin-top: 120px;
        --container-bg-color: #FFFFFE;

        /* Layout */
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        
        /* Spacing */
        margin-top: var(--container-margin-top);
        gap: var(--container-gap);
        padding: var(--container-padding);
        
        /* Sizing */
        width: clamp(300px, 100%, var(--container-max-width-desktop));
        min-height: 100px;
        max-height: var(--container-max-height-desktop);
        height: 100%;
        
        /* Visual */
        background-color: var(--container-bg-color);
        
        /* Responsive */
        @media (max-width: 768px) {
            --container-padding: 16px;
            --container-margin-top: 24px;
            --container-gap: 16px;
            --container-max-width-desktop: var(--container-max-width-mobile);
            --container-max-height-desktop: var(--container-max-height-mobile);
        }
    }
    .greetings-text {
        /* CSS переменные для текста */
        --text-size: 40px;
        --text-line-height: 52px;
        --text-color: #000000;
        --text-weight: 500;

        /* Typography */
        font-size: var(--text-size);
        font-weight: var(--text-weight);
        color: var(--text-color);
        line-height: var(--text-line-height);
        
        /* Responsive */
        @media (max-width: 768px) {
            --text-size: 32px;
            --text-line-height: 42px;
        }
        
        @media (max-width: 480px) {
            --text-size: 24px;
            --text-line-height: 32px;
        }
    }

    .logout-button {

        --button-text-size: 16px;   
        --button-text-line-height: 26px;
        --button-text-color: #2B2A29;

        text-decoration: underline;
        font-size: var(--button-text-size);
        font-weight: 400;
        line-height: var(--button-text-line-height);
        color: var(--button-text-color);
    }
</style>