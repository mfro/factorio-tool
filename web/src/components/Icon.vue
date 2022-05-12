<template>
  <div class="icon" :style="iconStyle">
    <span class="label" v-if="label !== null">{{ label }}</span>
  </div>
</template>

<script>
import * as icons from '../assets/icons';

export default {
  name: 'recipe',

  props: {
    size: Number,
    icon: String,
    label: { default: null },
  },

  computed: {
    iconStyle() {
      let url = icons.icon(this.icon);
      return {
        backgroundImage: `url(${url})`,
        backgroundPosition: `-64px 0`,
      };
    },
  },
};
</script>

<style lang="scss" scoped>
.icon {
  width: 32px;
  height: 32px;

  filter: drop-shadow(0 0 2px black);
}

.label {
  position: absolute;
  bottom: 4%;
  right: 5%;
  color: white;
  font-weight: bold;
  font-family: sans-serif;
  font-size: 12px;
  text-shadow: 0 0 10px black;
}
</style>
