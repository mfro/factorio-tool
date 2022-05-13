<template>
  <div class="icon"
       :style="style" />
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  row: Number,
  col: Number,
});

const style = computed(() => ({
  'background-position': `-${props.col * 32}px -${props.row * 32}px`,
}));
</script>

<style scoped lang="scss">
.icon {
  width: 32px;
  height: 32px;
  background-image: url("../../../common/data/vanilla-1.1.19.png");
}
</style>
