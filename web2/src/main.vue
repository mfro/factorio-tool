<template>
  <div class="root">
    <div class="recipes">
      <div class="group"
           v-for="group in groups">
        <div class="subgroup"
             v-for="subgroup in group.subgroups">
          <Button v-for="item in subgroup.items"
                  :active="selected.has(item.recipe)"
                  @click="toggle(selected, item.recipe)">
            <Recipe :value="item.recipe" />
          </Button>
        </div>
      </div>
    </div>

    <div class="results">
      <div class="column"
           v-for="[recipe, dependent] in inputs">
        <Recipe :value="recipe" />

        <Recipe v-for="input in dependent"
                :value="input" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, shallowReactive } from 'vue';

import Recipe from './ui/Recipe.vue';
import Button from './ui/Button.vue';

import { compute_inputs } from './main';

const props = defineProps({
  groups: Array,
  all_items: Array,
  all_recipes: Array,
});

const selected = shallowReactive(new Set);

const inputs = computed(() => {
  return compute_inputs([...selected]);
});

function toggle(set, value) {
  if (!set.delete(value)) {
    set.add(value);
  }
}

let include = [
  "steel-chest", "storage-tank",
  "transport-belt", "fast-transport-belt", "express-transport-belt", "underground-belt", "fast-underground-belt", "express-underground-belt", "splitter", "fast-splitter", "express-splitter",
  "inserter", "long-handed-inserter", "fast-inserter", "filter-inserter", "stack-inserter", "stack-filter-inserter",
  "medium-electric-pole", "big-electric-pole", "substation", "pipe", "pipe-to-ground", "pump",
  "rail", "train-stop", "rail-signal", "rail-chain-signal", "locomotive", "cargo-wagon", "fluid-wagon", "artillery-wagon",
  "car", "tank", "spidertron",
  "logistic-robot", "construction-robot", "logistic-chest-active-provider", "logistic-chest-passive-provider", "logistic-chest-storage", "logistic-chest-buffer", "logistic-chest-requester", "roboport",
  "small-lamp", "red-wire", "green-wire", "arithmetic-combinator", "decider-combinator", "constant-combinator", "power-switch", "programmable-speaker",
  "cliff-explosives",

  "repair-pack",
  "boiler", "steam-engine", "solar-panel", "accumulator", "nuclear-reactor", "heat-exchanger", "heat-pipe", "steam-turbine",
  "electric-mining-drill", "offshore-pump", "pumpjack",
  "steel-furnace", "electric-furnace",
  "assembling-machine-1", "assembling-machine-2", "assembling-machine-3", "oil-refinery", "chemical-plant", "centrifuge", "lab",
  "beacon",

  "pistol", "submachine-gun", "shotgun", "combat-shotgun", "rocket-launcher", "flamethrower", "land-mine",
  "firearm-magazine", "piercing-rounds-magazine", "uranium-rounds-magazine", "shotgun-shell", "piercing-shotgun-shell", "cannon-shell", "explosive-cannon-shell", "uranium-cannon-shell", "explosive-uranium-cannon-shell", "artillery-shell",
  "rocket", "explosive-rocket", "atomic-bomb", "flamethrower-ammo",
  "grenade", "cluster-grenade", "poison-capsule", "slowdown-capsule", "defender-capsule", "distractor-capsule", "destroyer-capsule",
  "light-armor", "heavy-armor", "modular-armor", "power-armor", "power-armor-mk2",
  "solar-panel-equipment", "fusion-reactor-equipment", "battery-equipment", "battery-mk2-equipment", "belt-immunity-equipment", "exoskeleton-equipment", "personal-roboport-equipment", "personal-roboport-mk2-equipment", "night-vision-equipment",
  "energy-shield-equipment", "energy-shield-mk2-equipment", "personal-laser-defense-equipment", "discharge-defense-equipment", "discharge-defense-remote",
  "stone-wall", "gate", "gun-turret", "laser-turret", "flamethrower-turret", "artillery-turret", "artillery-targeting-remote", "radar", "rocket-silo",
];

for (const name of include) {
  selected.add(props.all_recipes.find(r => r.results.length == 1 && r.results[0].name == name));
}
</script>

<style scoped lang="scss">
.recipes {
  display: flex;
}

.results {
  margin-top: 30px;
  display: flex;
}

.group {
  display: flex;
  flex-direction: column;
}

.subgroup {
  display: grid;
  grid-auto-rows: 40px;
  grid-template-columns: repeat(10, 40px);
}

.column {
  flex: 0 0 auto;
  display: flex;
  flex-direction: column;
}
</style>
