import { createApp } from 'vue';
import App from './main.vue';

import { data, Item, Recipe } from '../../common/factorio';

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

let groups: Group[] = [];
const all_items = Object.keys(data.items).map(k => data.items[k as keyof typeof data.items]);
const all_recipes = Object.keys(data.recipes).map(k => data.recipes[k as keyof typeof data.recipes]);

for (let id in data.groups) {
  let raw = data.groups[id as keyof typeof data.groups];
  let subgroups = [];
  for (let id2 in raw.subgroups) {
    let raw2: string = raw.subgroups[id2 as keyof typeof raw.subgroups];

    let items = all_items.filter(item => {
      return item.group == id && item.subgroup == id2;
    }).map(item => {
      let recipes = all_recipes.filter(a => {
        return a.results.length == 1
          && a.results[0].name == item.name;
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

export function compute_inputs(include: Recipe[]) {
  console.log(include);

  const recipes = new Set<Recipe>();
  const inputs = new Map<Item, Recipe[]>();

  function add_input(i: Item, recipe: Recipe) {
    let list = inputs.get(i);
    if (!list) inputs.set(i, list = []);

    list.push(recipe);
  }

  function add_recipe(r: Recipe) {
    recipes.add(r);

    for (const ingredient of r.ingredients) {
      const item = get_item(ingredient.name);
      add_input(item!, r);
    }
  }

  for (const r of include)
    add_recipe(r);

  for (const r of recipes)
    for (const output of r.results)
      inputs.delete(get_item(output.name)!);

  return inputs;
}

function get_item(name: string): Item | undefined {
  return all_items.find(i => i.name == name);
}

function get_recipe(name: string): Recipe | undefined {
  return all_recipes.find(r => r.results.length == 1 && r.results[0].name == name);
}

const app = createApp(App, {
  groups,
  all_items,
  all_recipes,
});

app.mount('#app');
