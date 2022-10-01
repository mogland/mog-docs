<template>
  <span class="badge" :class="color">{{ text }}</span>
</template>

<script setup lang="ts">
defineProps({
  text: {
    type: String,
    required: true,
  },
  color: {
    type: String,
    default: 'blue',
  },
})
</script>

<style >
.badge {
  background-color: rgba(191,219,254, 1);
  border-radius: 0.75rem;
  padding: 0.25rem 0.5rem;
}

.badge.blue {
  background-color: rgba(191,219,254, 1);
}

.badge.green {
  background-color: rgba(167,242,195, 1);
}

.badge.red {
  background-color: rgba(255, 230, 230, 1);
}

.badge.yellow {
  background-color: rgba(255, 249, 196, 1);
}

.badge.purple {
  background-color: rgba(221, 214, 255, 1);
}

.badge.pink {
  background-color: rgba(255, 207, 243, 1);
}

.badge.orange {
  background-color: rgba(255, 231, 199, 1);
}

.badge.gray {
  background-color: rgba(209, 213, 219, 1);
}

.badge.black {
  background-color: rgba(156, 163, 175, 1);
}

html.dark .badge {
  background-color: rgba(31, 41, 55, 1);
}
</style>
