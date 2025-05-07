<template>
  <div>
    <label>{{ label }}</label>
    <input
      :value="modelValue"
      @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
      :type="type"
      v-mask="mask"
      v-if="mask"
    />
    <input
      :value="modelValue"
      @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
      :type="type"
      v-else
    />
    <span v-if="error" class="error">{{ error }}</span>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  modelValue: string
  label: string
  type?: string
  mask?: string
  error?: string
}>()

defineEmits<{
  'update:modelValue': [value: string]
}>()
</script>

<style scoped>
label {
  font-weight: bold;
}

input {
  width: 100%;
  padding: 8px 0;
  border: none;
  border-bottom: 1px solid #222;
  background: transparent;
  color: #222;
  font-size: 1rem;
  border-radius: 0;
  outline: none;
  transition: border-color 0.2s;
}

input:focus {
  border-bottom: 2px solid #2b2a29;
}

.error {
  color: red;
  font-size: 0.9rem;
}
</style>
