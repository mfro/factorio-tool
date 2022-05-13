<template>
  <div class="button" :class="{ active }">
    <slot />
  </div>
</template>

<script setup>
const props = defineProps({
  active: Boolean,
});
</script>

<style scoped lang="scss">
.button {
  $x_offset: calc(80 / (593 - 80)) * 100%;
  $y_offset: calc(736 / (1222 - 80)) * 100%;

  background-size: calc(593 / 80) * 100%;
  background-image: url("./gui-new.png");
  background-position: 0 $y_offset;

  width: 40px;
  height: 40px;
  padding: 4px;
  box-sizing: border-box;

  &:hover, &.active {
    background-position: $x_offset $y_offset;

    &:not(:active) {
      filter: drop-shadow(0 0 3px orange);
    }
  }

  &:active {
    background-position: $x_offset * 2 $y_offset;
  }
}
</style>
