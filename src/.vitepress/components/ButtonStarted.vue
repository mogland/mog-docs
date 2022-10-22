<script setup lang="ts">
  // 获取传入的 props
  const { text, link = "", disable = true } = defineProps<{
    text: string;
    link?: string
    disable?: boolean
  }>()
</script>

<template>

<button class="go" :disabled="disable">
  <a :href="link" target="_blank" rel="noopener noreferrer">
    {{ text }}
  </a>
</button>

</template>

<style scoped>
.go {
  cursor: default;
    display: inline-block;
    text-align: center;
    white-space: nowrap;
    font-size: 17px;
    line-height: 1.17648;
    font-weight: 400;
    letter-spacing: -0.022em;
    font-family: "SF Pro Text", "SF Pro Icons", "Helvetica Neue", Helvetica, Arial, sans-serif;
    min-width: 28px;
    padding: 8px 16px;
    border-radius: 18px;
    background: var(--glyph-gray-tertiary);
    color: rgb(255, 255, 255);
    border: 0px;
    outline: 0px;
}
</style>