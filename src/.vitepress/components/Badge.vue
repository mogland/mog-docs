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
  small: {
    type: Boolean,
    default: false,
  },
  big: {
    type: Boolean,
    default: false,
  },
})
</script>

<template>
  <span class="badge" :class="color + (small ? ' small' : '') + (big ? ' big' : '')">
    {{ text }}
  </span>
</template>

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
  background-color: rgb(149, 153, 159);
  color: #ffffff;
}

.badge.black {
  background-color: rgba(156, 163, 175, 1);
}

html.dark .badge {
  background-color: rgba(31, 41, 55, 1);
}

.badge.small {
  font-size: 1rem;
}

.badge.big {
  font-size: 2.5rem;
}
</style>
