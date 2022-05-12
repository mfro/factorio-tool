<template>
  <div
    class="recipe"
    :class="{ hover, press, active }"
    :style="style"
    v-mouse:hover="hover"
    v-mouse:press="press"
  >
    <icon :icon="recipe.name" />
  </div>
</template>

<script>
import * as gui from '../assets/gui';
import * as icons from '../assets/icons';

import Icon from './Icon';
// import iconUrl from '../data/vanilla-0.17.60.png';

export default {
  name: 'recipe',

  components: {
    Icon,
  },

  props: {
    recipe: Object,
    active: { type: Boolean, default: false },
  },

  data() {
    return {
      hover: false,
      press: false,
    };
  },

  computed: {
    style() {
      let bg;
      if (this.press)
        bg = gui.recipe.active(0.5);
      else if (this.hover || this.active)
        bg = gui.recipe.hover(0.5);
      else
        bg = gui.recipe.base(0.5);

      return {
        ...bg,
      };
    },

    // iconStyle() {
    //   try {
    //     let icon = icons.icon(this.recipe.name);
    //     return {
    //       backgroundImage: `url(${icon})`,
    //       backgroundPosition: `-64px 0`,
    //     };
    //   } catch {
    //     return {
    //       backgroundImage: `url(${iconUrl})`,
    //       backgroundPosition: `${this.item.icon_col * -2}em ${this.item.icon_row * -2}em`,
    //     };
    //   }
    // },
  },
};
</script>

<style lang="scss" scoped>
.recipe {
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;

  &.hover:not(.press) {
    filter: drop-shadow(0 0 2px orange);
  }
}

.icon {
  width: 32px;
  height: 32px;

  filter: drop-shadow(0 0 2px black);
}
</style>
