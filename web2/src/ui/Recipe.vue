<template>
  <Icon :row="value.icon_row" :col="value.icon_col" />
</template>

<script setup>
import Icon from './Icon.vue';

const props = defineProps({
  value: Object,
});
</script>
