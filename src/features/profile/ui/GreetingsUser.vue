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
        --wrapper-max-width: 702px;
        --wrapper-max-height: 219px;
        --wrapper-padding: 42px;
        --wrapper-gap: 16px;
        --wrapper-margin-top: 120px;
        --wrapper-mobile-margin: 24px 16px;
        --wrapper-mobile-max-width: 288px;
        --wrapper-mobile-max-height: 123px;
        --wrapper-mobile-gap: 12px;

        max-width: var(--wrapper-max-width);
        width: 100%;
        max-height: var(--wrapper-max-height);
        height: 100%;
        background-color: #FFFFFE;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        padding: var(--wrapper-padding);
        gap: var(--wrapper-gap);
        margin-top: var(--wrapper-margin-top);

        @media (max-width: 768px) {
            margin: var(--wrapper-mobile-margin);
            padding: 0;
            gap: var(--wrapper-mobile-gap);
            max-width: var(--wrapper-mobile-max-width);
            max-height: var(--wrapper-mobile-max-height);
        }
    }
    .greetings-text {
        --text-size: 40px;
        --text-line-height: 52px;
        --text-color: #000000;
        --text-weight: 500;
        --text-mobile-size: 24px;
        --text-mobile-line-height: 32px;

        font-size: var(--text-size);
        font-weight: var(--text-weight);
        color: var(--text-color);
        line-height: var(--text-line-height);
        
        @media (max-width: 768px) {
            --text-size: var(--text-mobile-size);
            --text-line-height: var(--text-mobile-line-height);
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
        background: none;
        border: none;
        cursor: pointer;
    }
</style>