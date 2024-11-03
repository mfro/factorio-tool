import Vue from 'vue'
import pako from 'pako';
import * as b64 from 'js-base64';

import App from './App.vue'

import data from '../../common/data/vanilla-1.0.0.json';
import { assert } from '../../common/util';

type Item = (typeof data.items)[keyof typeof data.items];
type Recipe = (typeof data.recipes)[keyof typeof data.recipes];
type Quantity = { name: string, amount: number };

const disabled = new Set([
  'loader', 'fast-loader', 'express-loader',
  'small-plane',
  'player-port',
  'electric-energy-interface',
  'railgun', 'railgun-dart',
]);

interface Group {
  name: string;
  order: string
  subgroups: Subgroup[];
}

interface Subgroup {
  name: string;
  order: string;
  items: { item: Item, recipe: Recipe }[];
}

Vue.config.productionTip = false;

let groups: Group[] = [];
let all_items = Object.keys(data.items).map(k => data.items[k as keyof typeof data.items]);
let all_recipes = Object.keys(data.recipes).map(k => data.recipes[k as keyof typeof data.recipes]);

for (let id in data.groups) {
  let raw = data.groups[id as keyof typeof data.groups];
  let subgroups = [];
  for (let id2 in raw.subgroups) {
    let raw2: string = raw.subgroups[id2 as keyof typeof raw.subgroups];

    let items = all_items.filter(item => {
      return item.group == id && item.subgroup == id2
        && item.type != 'fluid';
    }).map(item => {
      let recipes = all_recipes.filter(a => {
        return a.results.length == 1
          && a.results[0].name == item.name
          && !disabled.has(a.name);
      })!;

      let recipe = recipes.length == 1 ? recipes[0] : null!;
      return { item, recipe };
    }).filter(pair => {
      return pair.recipe != null;
    });

    if (items.length == 0)
      continue;

    items.sort((a, b) => a.recipe.order.localeCompare(b.recipe.order));

    subgroups.push({
      name: id2,
      order: raw2,
      items: items,
    });
  }

  if (subgroups.length == 0)
    continue;

  subgroups.sort((a, b) => a.order.localeCompare(b.order));

  groups.push({
    name: id,
    order: raw.order,
    subgroups: subgroups,
  });
}

groups.sort((a, b) => a.order.localeCompare(b.order));

Vue.directive('mouse', {
  bind(el, binding, vnode) {
    if (binding.arg == 'hover') {
      el.addEventListener('mouseenter', e => {
        Vue.set(vnode.context!, binding.expression, true);
      });

      el.addEventListener('mouseleave', e => {
        Vue.set(vnode.context!, binding.expression, false);
      });
    }

    else if (binding.arg == 'press') {
      el.addEventListener('mousedown', e => {
        Vue.set(vnode.context!, binding.expression, true);
      });

      el.addEventListener('mouseup', e => {
        Vue.set(vnode.context!, binding.expression, false);
      });

      el.addEventListener('mouseleave', e => {
        Vue.set(vnode.context!, binding.expression, false);
      });
    }
  },
});

Vue.directive('grid', {
  update(el, binding) {
    let raw = binding.expression as string;
    let parts = raw.split('+').map(c => c.trim());

    let start = parts[0].split('/').map(c => parseInt(c.trim()));
    let size;
    if (parts.length > 1)
      size = parts[1].split('/').map(c => parseInt(c.trim()));
    else
      size = [1, 1];

    el.style.gridArea = `${start[1] + 1}/${start[0] + 1}/${start[1] + size[1] + 1}/${start[0] + size[0] + 1}`
  },
});

new Vue({
  mixins: [App],
  data() { return { groups }; },
}).$mount('#app')


const outputs = [
  'automation-science-pack',
  'logistic-science-pack',
  'military-science-pack',
  'chemical-science-pack',
  'production-science-pack',
  'utility-science-pack',
];

const inputs = [
  'coal',
  'stone',

  'iron-plate',
  'copper-plate',
  // 'steel-plate',
  // 'stone-brick',

  // 'rocket-fuel',
  'sulfuric-acid',
  'lubricant',
  'petroleum-gas',
  'water',
];

function base_layout() {
  const recipes = new Map<string, Recipe | null>(inputs.map(c => [c, null]));
  const depths = new Map(inputs.map(c => [c, 0]));

  function get_recipe(name: string): Recipe | null {
    if (recipes.has(name))
      return recipes.get(name)!;

    let recipe = all_recipes.find(r => r.results.length == 1 && r.results[0].name == name);
    assert(recipe != null, 'no recipe: ' + name);
    recipes.set(name, recipe);

    for (let ingredient of recipe.ingredients) {
      get_recipe(ingredient.name);
    }

    return recipe;
  }

  function get_depth(name: string): number {
    if (depths.has(name))
      return depths.get(name)!;

    let recipe = recipes.get(name);
    assert(recipe != null, 'no recipe: ' + name);
    let ingredients = (recipe.ingredients as Quantity[]);

    let input_count = ingredients.reduce((sum, v) => sum + v.amount, 0);
    let output_count = recipe.results[0].amount;

    let depth;
    if (input_count < output_count) {
      let dependents = [...recipes.values()].filter(r => r && r.ingredients.find(i => i.name == name) != null);
      let depths = dependents.map(d => get_depth(d!.name));
      debugger;
      let in_depths = ingredients.map(c => get_depth(c.name))
      depth = 1 + in_depths.reduce((max, v) => Math.max(v, max), 0);
    } else {
      let in_depths = ingredients.map(c => get_depth(c.name))
      depth = 1 + in_depths.reduce((max, v) => Math.max(v, max), 0);
    }

    depths.set(name, depth)

    return depth;
  }

  for (let output of outputs) {
    get_recipe(output);
  }

  for (let output of outputs) {
    get_depth(output);
  }

  let bus: Quantity[] = outputs.map(name => ({ name, amount: 1350 }));
  let max_depth = outputs.reduce((max, v) => Math.max(max, get_depth(v)), 0);
  for (let i = max_depth; i >= 0; --i) {
    let layer = [];

    // console.log(`${i}: `);
    for (let pair of depths) {
      if (pair[1] != i) continue;
      layer.push(pair[0]);
      // console.log(`  ${pair[0]}`);
    }

    for (let name of layer) {
      let recipe = recipes.get(name);
      if (recipe == null) continue;

      let index = bus.findIndex(q => q.name == name);
      assert(index != -1, `not on the bus: ${name}`);
      let amount = bus.splice(index, 1)[0].amount;

      let ratio = amount / recipe.results[0].amount;

      for (let ingredient of recipe.ingredients) {
        let item = all_items.find(i => i.name == ingredient.name);
        assert(item != null, `not an item: ${item}`);
        if (item.type == 'fluid') continue;

        let input = bus.find(q => q.name == ingredient.name);
        if (input == null) {
          input = { name: ingredient.name, amount: 0 };
          bus.push(input);
        }
        input.amount += ingredient.amount * ratio;
      }
    }

    let header = `${i}:`;
    let total = 0;
    for (let entry of bus) {
      header += ` |${entry.name} ${entry.amount / 2700}|`;
      total += Math.ceil(entry.amount / 2700);
    }
    header += ` (${total})`;

    console.log(header);

    for (let pair of layer) {
      console.log(`  ${pair}`);
    }
  }
}
