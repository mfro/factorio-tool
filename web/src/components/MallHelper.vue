<template>
  <div class="mall-helper">
    <div class="entries">
      <div class="entry" v-for="entry in entries" :key="entry.recipe.name">
        <recipe :recipe="entry.recipe" @click.native="onClick(entry)" />

        <div class="ingredient" v-for="input in entry.recipe.ingredients" :key="input.name">
          <icon :icon="input.name" :label="input.amount" />
        </div>
      </div>
    </div>

    <div class="external">
      <div class="ingredient" v-for="input in external" :key="input.name">
        <icon :icon="input.name" :label="input.amount" />
      </div>
    </div>
  </div>
</template>

<script>
import Recipe from './Recipe';
import Icon from './Icon';

export default {
  name: 'mall-helper',

  components: {
    Recipe,
    Icon,
  },

  props: {
    value: Array,
  },

  data() {
    return {
      hover: false,
      press: false,
    };
  },

  computed: {
    entries() {
      return this.value;
    },

    external() {
      let internal = new Set();
      for (let entry of this.entries) {
        for (let result of entry.recipe.results) {
          internal.add(result.name);
        }
      }

      let external = new Map();
      for (let entry of this.entries) {
        for (let input of entry.recipe.ingredients) {
          if (internal.has(input.name)) continue;
          let amount = external.get(input.name) ?? 0;
          external.set(input.name, amount + 1);
        }
      }

      let array = [...external].map(a => {
        return { name: a[0], amount: a[1] };
      });

      array.sort((a, b) => b.amount - a.amount);

      return array;
    },
  },

  methods: {
    onClick(entry) {
      let copy = this.value.slice();
      let index = copy.indexOf(entry);
      copy.splice(index, 1);
      this.$emit('input', copy);
    },
  },
};
</script>

<style lang="scss" scoped>
.ingredient {
  margin-left: 8px;
}

.mall-helper {
  padding: 16px;

  .entries {
    display: grid;
    grid-auto-flow: column;
    grid-template-rows: repeat(13, 1fr);

    .entry {
      display: flex;
      align-items: center;
    }
  }

  .external {
    display: flex;
    padding-top: 8px;
  }
}
</style>
