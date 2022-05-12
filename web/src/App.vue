<template>
  <div id="app">
    <div class="selector">
      <div class="group" v-for="group in groups" :key="group.name">
        <div class="subgroup" v-for="subgroup in group.subgroups" :key="subgroup.name">
          <recipe
            v-for="pair in subgroup.items"
            :item="pair.item"
            :recipe="pair.recipe"
            :key="pair.item.name"
            :active="selected.includes(pair)"
            @click.native="onClick(pair)"
          />
        </div>
      </div>
    </div>

    <mall-helper v-model="selected" />
  </div>
</template>

<script>
import Vue from 'vue';
import Recipe from './components/Recipe';
import MallHelper from './components/MallHelper';

export default {
  name: 'app',
  components: {
    Recipe,
    MallHelper,
  },

  data() {
    return {
      selected: [],
    };
  },

  computed: {
    output() {
      return JSON.stringify(this.selected.map(a => a.recipe.name));
    },
  },

  created() {
    let raw;
    try {
      raw = JSON.parse(localStorage.getItem('mfro.factorio-tool.selection'));
    } catch { }

    let all_entries = [];
    for (let group of this.groups) {
      for (let subgroup of group.subgroups) {
        all_entries.push(...subgroup.items);
      }
    }

    let mapped = raw.map(name => {
      let entry = all_entries.find(e => e.recipe.name == name);
      return entry;
    });

    this.selected = mapped;
  },

  methods: {
    onClick(pair) {
      let index = this.selected.indexOf(pair);
      if (index == -1)
        this.selected.push(pair);
      else
        this.selected.splice(index, 1);
      localStorage.setItem('mfro.factorio-tool.selection', JSON.stringify(this.selected.map(a => a.recipe.name)));
    },
  },
};
</script>

<style lang="scss">
body,
html {
  margin: 0;
}
</style>

<style lang="scss" scoped>
.selector {
  padding: 8px;
  display: flex;
}

.group {
  display: flex;
  flex-direction: column;
  margin: 8px;
}

.subgroup {
  display: grid;
  grid-template-columns: repeat(10, 1fr);
}
</style>
