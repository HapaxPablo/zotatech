<script setup lang="ts">
defineProps<{
  text: string
  type: 'button' | 'submit' | 'reset'
  disabled?: boolean
  className?: string
}>()
</script>

<template lang="">
  <button :type="type" :disabled="disabled" :class="className">{{ text }}</button>
</template>
<style lang=""></style>
