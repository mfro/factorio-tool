import * as zlib from 'zlib';

import { Blueprint, BlueprintBook, data, Entity, Item, LogisticSection, Quantity, Recipe, v2_0_0 } from '../../common/factorio';
import { assert } from '../../common/util';

const VERSION_NUMBER = v2_0_0;

const disabled_recipes = new Set([
  'loader', 'fast-loader', 'express-loader', 'turbo-loader',
]);

const disabled_recipe_categories = new Set([
  'recycling',
  'metallurgy'
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

const groups: Group[] = [];
const all_items = data.items;
const all_recipes = data.recipes;

for (const id in data.groups) {
  const raw = data.groups[id as keyof typeof data.groups];
  const subgroups = [];
  for (const id2 in raw.subgroups) {
    const raw2: string = raw.subgroups[id2 as keyof typeof raw.subgroups];

    const items = all_items
      .filter(item => {
        return item.group == id && item.subgroup == id2
          && item.type != 'fluid';
      })
      .map(item => {
        const recipes = all_recipes.filter(recipe => {
          return recipe.results.length == 1
            && recipe.results[0].name == item.key
            && !disabled_recipe_categories.has(recipe.category)
            && !disabled_recipes.has(recipe.key);
        })!;

        const recipe = recipes.length == 1 ? recipes[0] : null!;

        if (!recipe) {
          console.log(`recipe missing (${recipes.length}): ${item.key}`);
        }

        return { item, recipe };
      })
      .filter(pair => {
        return pair.recipe != null;
      });

    if (items.length == 0)
      continue;

    items.sort((a, b) => {
      if (!a.recipe.order)
        return -1;
      else if (!b.recipe.order)
        return 1;
      else
        return a.recipe.order.localeCompare(b.recipe.order);
    });

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

    const recipe = all_recipes.find(r => r.results.length == 1 && r.results[0].name == name);
    assert(recipe != null, 'no recipe: ' + name);
    recipes.set(name, recipe);

    for (const ingredient of recipe.ingredients) {
      get_recipe(ingredient.name);
    }

    return recipe;
  }

  function get_depth(name: string): number {
    if (depths.has(name))
      return depths.get(name)!;

    const recipe = recipes.get(name);
    assert(recipe != null, 'no recipe: ' + name);
    const ingredients = (recipe.ingredients as Quantity[]);

    const input_count = ingredients.reduce((sum, v) => sum + v.amount, 0);
    const output_count = recipe.results[0].amount;

    let depth;
    if (input_count < output_count) {
      const dependents = [...recipes.values()].filter(r => r && r.ingredients.find(i => i.name == name) != null);
      const depths = dependents.map(d => get_depth(d!.key));
      debugger;
      const in_depths = ingredients.map(c => get_depth(c.name))
      depth = 1 + in_depths.reduce((max, v) => Math.max(v, max), 0);
    } else {
      const in_depths = ingredients.map(c => get_depth(c.name))
      depth = 1 + in_depths.reduce((max, v) => Math.max(v, max), 0);
    }

    depths.set(name, depth)

    return depth;
  }

  for (const output of outputs) {
    get_recipe(output);
  }

  for (const output of outputs) {
    get_depth(output);
  }

  const bus: Quantity[] = outputs.map(name => ({ name, amount: 1350 }));
  const max_depth = outputs.reduce((max, v) => Math.max(max, get_depth(v)), 0);
  for (let i = max_depth; i >= 0; --i) {
    const layer = [];

    // console.log(`${i}: `);
    for (const pair of depths) {
      if (pair[1] != i) continue;
      layer.push(pair[0]);
      // console.log(`  ${pair[0]}`);
    }

    for (const name of layer) {
      const recipe = recipes.get(name);
      if (recipe == null) continue;

      const index = bus.findIndex(q => q.name == name);
      assert(index != -1, `not on the bus: ${name}`);
      const amount = bus.splice(index, 1)[0].amount;

      const ratio = amount / recipe.results[0].amount;

      for (const ingredient of recipe.ingredients) {
        const item = all_items.find(i => i.key == ingredient.name);
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
    for (const entry of bus) {
      header += ` |${entry.name} ${entry.amount / 2700}|`;
      total += Math.ceil(entry.amount / 2700);
    }
    header += ` (${total})`;

    console.log(header);

    for (const pair of layer) {
      console.log(`  ${pair}`);
    }
  }
}

function load_blueprint(raw: string): Blueprint | BlueprintBook {
  const bytes = Buffer.from(raw.substr(1), 'base64');
  const inflated = zlib.inflateSync(bytes);
  const object = JSON.parse(inflated.toString('utf8'));
  if ('blueprint' in object)
    return object['blueprint'];
  return object['blueprint_book'];
}

function save_blueprint(src: Blueprint | BlueprintBook): string {
  let object;
  if ('blueprints' in src)
    object = { ['blueprint_book']: src };
  else
    object = { ['blueprint']: src };

  const inflated = Buffer.from(JSON.stringify(object), 'utf8')
  const bytes = zlib.deflateSync(inflated, { level: 9 });
  return '0' + bytes.toString('base64');
}

function connect_wire(color: 'green' | 'red', a: Entity, b: Entity) {
  if (!a.connections) a.connections = {};
  if (!a.connections[1]) a.connections[1] = {};
  if (!a.connections[1][color]) a.connections[1][color] = [];

  if (!a.connections[1][color]!.find(c => c.entity_id == b.entity_number))
    a.connections[1][color]!.push({ entity_id: b.entity_number });

  if (!b.connections) b.connections = {};
  if (!b.connections[1]) b.connections[1] = {};
  if (!b.connections[1][color]) b.connections[1][color] = [];

  if (!b.connections[1][color]!.find(c => c.entity_id == a.entity_number))
    b.connections[1][color]!.push({ entity_id: a.entity_number });
}

function robot_mall() {
  const assemblers: Blueprint = {
    item: 'blueprint',
    label: 'assmblers',
    entities: [],
    tiles: [],
    icons: [],
    schedules: [],
    version: VERSION_NUMBER,
  };

  function add_recipe(x: number, y: number, name: string) {
    type pos = { x: number, y: number };
    let assembler_position;
    let power_position: pos;
    let input_position: pos, input_inserter_position, input_inserter_direction;
    let output_position: pos, output_inserter_position, output_inserter_direction;

    if (y % 2 == 0) {
      const x0 = 3 * x;
      const y0 = 4.5 * y;
      input_inserter_direction = 4;
      output_inserter_direction = 0;
      assembler_position = { x: x0, y: y0 };

      if (x % 3 == 0) {
        input_position = { x: x0 + 1, y: y0 + 3 };
        input_inserter_position = { x: x0 + 1, y: y0 + 2 };
        output_position = { x: x0, y: y0 + 3 };
        output_inserter_position = { x: x0, y: y0 + 2 };
        power_position = { x: x0 + 3, y: y0 + 3 };
      } else if (x % 3 == 1) {
        input_position = { x: 3 * x - 1, y: y0 + 3 };
        input_inserter_position = { x: 3 * x - 1, y: y0 + 2 };
        output_position = { x: 3 * x + 1, y: y0 + 3 };
        output_inserter_position = { x: 3 * x + 1, y: y0 + 2 };
        power_position = { x: x0, y: y0 + 3 };
      } else {
        input_position = { x: 3 * x - 1, y: y0 + 3 };
        input_inserter_position = { x: 3 * x - 1, y: y0 + 2 };
        output_position = { x: 3 * x, y: y0 + 3 };
        output_inserter_position = { x: 3 * x, y: y0 + 2 };
        power_position = { x: x0 - 3, y: y0 + 3 };
      }
    } else {
      const x0 = 3 * x;
      const y0 = 1.5 + 4.5 * y;
      input_inserter_direction = 0;
      output_inserter_direction = 4;
      assembler_position = { x: x0, y: y0 };

      if (x % 3 == 0) {
        input_position = { x: x0 + 1, y: y0 - 3 };
        input_inserter_position = { x: x0 + 1, y: y0 - 2 };
        output_position = { x: x0, y: y0 - 3 };
        output_inserter_position = { x: x0, y: y0 - 2 };
        power_position = { x: x0 + 3, y: y0 - 3 };
      } else if (x % 3 == 1) {
        input_position = { x: 3 * x - 1, y: y0 - 3 };
        input_inserter_position = { x: 3 * x - 1, y: y0 - 2 };
        output_position = { x: 3 * x + 1, y: y0 - 3 };
        output_inserter_position = { x: 3 * x + 1, y: y0 - 2 };
        power_position = { x: x0, y: y0 - 3 };
      } else {
        input_position = { x: 3 * x - 1, y: y0 - 3 };
        input_inserter_position = { x: 3 * x - 1, y: y0 - 2 };
        output_position = { x: 3 * x, y: y0 - 3 };
        output_inserter_position = { x: 3 * x, y: y0 - 2 };
        power_position = { x: x0 - 3, y: y0 - 3 };
      }
    }

    let assembler: Entity;
    let input, input_inserter: Entity;
    let output, output_inserter: Entity;

    assemblers.entities!.push(assembler = {
      entity_number: assemblers.entities!.length + 1,
      name: 'assembling-machine-3',
      position: assembler_position,
      recipe: name,
    });

    input = assemblers.entities!.find(p => p.name == 'requester-chest' && p.position.x == input_position.x && p.position.y == input_position.y);
    if (input == null) {
      assemblers.entities!.push(input = {
        entity_number: assemblers.entities!.length,
        name: 'requester-chest',
        position: input_position,
        request_filters: {
          sections: [
            {
              index: 1,
              filters: [],
            }
          ],
        },
      });
    }

    output = assemblers.entities!.find(p => p.name == 'active-provider-chest' && p.position.x == output_position.x && p.position.y == output_position.y);
    if (output == null) {
      assemblers.entities!.push(output = {
        entity_number: assemblers.entities!.length,
        name: 'active-provider-chest',
        position: output_position,
      });
    }

    assemblers.entities!.push(input_inserter = {
      entity_number: assemblers.entities!.length + 1,
      name: 'stack-inserter',
      position: input_inserter_position,
      direction: input_inserter_direction,
    });

    assemblers.entities!.push(output_inserter = {
      entity_number: assemblers.entities!.length + 1,
      name: 'fast-inserter',
      position: output_inserter_position,
      direction: output_inserter_direction,
    });

    let power = assemblers.entities!.find(p => p.name == 'medium-electric-pole' && p.position.x == power_position.x && p.position.y == power_position.y);
    if (power == null) {
      assemblers.entities!.push(power = {
        entity_number: assemblers.entities!.length + 1,
        name: 'medium-electric-pole',
        position: power_position,
      });

      assemblers.entities!.push({
        entity_number: assemblers.entities!.length + 1,
        name: 'small-lamp',
        position: { x: power_position.x, y: power_position.y - 1 },
      });

      assemblers.entities!.push({
        entity_number: assemblers.entities!.length + 1,
        name: 'small-lamp',
        position: { x: power_position.x, y: power_position.y + 1 },
      });
    }

    output_inserter.override_stack_size = 1;
    output_inserter.control_behavior = {
      circuit_condition: {
        first_signal: { type: 'item', name },
        constant: 0,
        comparator: '<'
      },
    };

    connect_wire('green', output_inserter, power);

    const item = all_items.find(r => r.key == name);
    const recipe = all_recipes.find(r => r.results.length == 1 && r.results[0].name == name);
    assert(item != null, `no item: ${name}`);
    assert(recipe != null, `no recipe: ${name}`);
    for (const ingredient of recipe.ingredients) {
      const item = all_items.find(i => i.key == ingredient.name);
      assert(item != null, `no item: ${ingredient.name}`);
      if (item.type == 'fluid') {
        assembler.direction = 2;
        continue;
      }

      const filters = input.request_filters!.sections[0].filters;
      let filter = filters!.find(f => f.name == ingredient.name);
      if (filter == null) {
        filters!.push(filter = {
          index: filters!.length + 1,
          name: ingredient.name,
          count: 0,
          quality: 'normal',
          comparator: '=',
        });
      }

      if (item.stack_size) {
        const ratio = Math.max(1, Math.ceil(40 / recipe.energy_required));
        filter.count += Math.min(2 * item.stack_size, ingredient.amount * ratio);
      }
    }

    // const limits = recipe.ingredients.filter(i => include.includes(i.name));
    // if (limits.length == 1) {
    //   const limit = all_items.find(i => i.name == limits[0].name)!;
    //   if ('stack_size' in limit && 'stack_size' in item) {
    //     // const count = counts.get(item.name) ?? item.stack_size * 10;
    //     // const limit_count = counts.get(limit.name) ?? limit.stack_size * 10;

    //     // console.log(`${item.name} (${count}) -> ${limit.name} (${limit_count})`);

    //     connect('green', input_inserter, power);
    //     input_inserter.control_behavior = {
    //       circuit_condition: {
    //         first_signal: { type: 'item', name: limit.name },
    //         second_signal: { type: 'item', name: item.name },
    //         comparator: '>',
    //       },
    //     };
    //   }
    // }
  }

  assemblers.icons!.push({
    index: 1,
    signal: {
      name: 'assembling-machine-3',
      type: 'item',
    }
  })

  const include = [
    "wooden-chest", "iron-chest", "steel-chest", "storage-tank",
    "transport-belt", "fast-transport-belt", "express-transport-belt", "underground-belt", "fast-underground-belt", "express-underground-belt", "splitter", "fast-splitter", "express-splitter",
    "burner-inserter", "inserter", "long-handed-inserter", "fast-inserter", "bulk-inserter",
    "small-electric-pole", "medium-electric-pole", "big-electric-pole", "substation", "pipe", "pipe-to-ground", "pump",
    "rail", "rail-ramp", "rail-support", "train-stop", "rail-signal", "rail-chain-signal", "locomotive", "cargo-wagon", "fluid-wagon", "artillery-wagon",
    "car", "tank", "spidertron",
    "logistic-robot", "construction-robot", "active-provider-chest", "passive-provider-chest", "storage-chest", "buffer-chest", "requester-chest", "roboport",
    "small-lamp", "arithmetic-combinator", "decider-combinator", "decider-combinator", "selector-combinator", "constant-combinator", "power-switch", "programmable-speaker", "display-panel",
    "hazard-concrete", "refined-hazard-concrete", "cliff-explosives",

    "repair-pack",
    "boiler", "steam-engine", "solar-panel", "accumulator", "nuclear-reactor", "heat-exchanger", "heat-pipe", "steam-turbine", "fusion-reactor", "fusion-generator",
    "burner-mining-drill", "electric-mining-drill", "offshore-pump", "pumpjack",
    "stone-furnace", "steel-furnace", "electric-furnace", "foundry", "recycler",
    "agricultural-tower",
    "assembling-machine-1", "assembling-machine-2", "assembling-machine-3", "oil-refinery", "chemical-plant", "centrifuge", "electromagnetic-plant", "cryogenic-plant", "lab",
    "lightning-rod", "lightning-collector", "heating-tower",
    "beacon",

    "rocket-silo", "cargo-landing-pad",
    "space-platform-foundation", "cargo-bay", "asteroid-collector", "crusher", "thruster",

    "pistol", "submachine-gun", "shotgun", "combat-shotgun", "rocket-launcher", "railgun", "teslagun", "flamethrower",
    "firearm-magazine", "piercing-rounds-magazine", "uranium-rounds-magazine", "shotgun-shell", "piercing-shotgun-shell", "cannon-shell", "explosive-cannon-shell", "uranium-cannon-shell", "explosive-uranium-cannon-shell", "artillery-shell", "tesla-ammo", "railgun-ammo",
    "rocket", "explosive-rocket", "atomic-bomb", "flamethrower-ammo",
    "grenade", "cluster-grenade", "poison-capsule", "slowdown-capsule", "defender-capsule", "distractor-capsule", "destroyer-capsule",
    "light-armor", "heavy-armor", "modular-armor", "power-armor", "power-armor-mk2", "mech-armor",
    "solar-panel-equipment", "fission-reactor-equipment", "fusion-reactor-equipment", "battery-equipment", "battery-mk2-equipment", "battery-mk3-equipment",
    "belt-immunity-equipment", "exoskeleton-equipment", "personal-roboport-equipment", "personal-roboport-mk2-equipment", "night-vision-equipment", "toolbelt-equipment",
    "energy-shield-equipment", "energy-shield-mk2-equipment", "personal-laser-defense-equipment", "discharge-defense-equipment",
    "stone-wall", "gate", "radar", "land-mine",
    "gun-turret", "laser-turret", "flamethrower-turret", "artillery-turret", "rocket-turret", "tesla-turret", "railgun-turret",
  ];

  for (const group of groups) {
    if (group.name == 'other') continue;

    for (const subgroup of group.subgroups) {
      const items = subgroup.items.filter(i => !include.includes(i.item.key));
      console.log(items.map(i => i.item.key).join(' '));
    }
  }

  for (const key of include) {
    const match = groups.find(g => g.subgroups.some(s => s.items.some(i => i.item.key == key)));

    assert(match != null, `no recipe: ${key}`);
  }

  const counts = new Map<string, number>([
    ['nuclear-reactor', 20], ['steam-turbine', 400],
    ['solar-panel', 2000], ['accumulator', 2000],
    ['centrifuge', 50],
    ['power-armor-mk2', 1],
    ['stone-wall', 4000],
    // ['speed-module', 50], ['speed-module-2', 50], ['speed-module-3', 2000],
    // ['efficiency-module', 50], ['efficiency-module-2', 50], ['efficiency-module-3', 50],
    // ['productivity-module', 50], ['productivity-module-2', 50], ['productivity-module-3', 2000],
    // ['solar-panel-equipment', 20], ['fusion-reactor-equipment', 20], ['battery-equipment', 20], /*['battery-mk2-equipment', 20],*/['belt-immunity-equipment', 20], /*['exoskeleton-equipment', 20],*/['personal-roboport-equipment', 20], /*['personal-roboport-mk2-equipment', 20],*/['night-vision-equipment', 20],
    // ['energy-shield-equipment', 20], /*['energy-shield-mk2-equipment', 20],*/ /*['personal-laser-defense-equipment', 20],*/['discharge-defense-equipment', 20], ['discharge-defense-remote', 10],
  ]);

  // const splices = [
  //   [4, 16],
  //   [6, 30],
  //   [8, 44],
  //   [86, 89],
  // ] as const;

  // for (const [from, to] of splices) {
  //   const value = include.splice(from, 1)[0];
  //   include.splice(to, 0, value);
  // }

  const width = 15;
  const shifting = [];

  for (let i = 0; i < include.length; ++i) {
    const recipe = all_recipes.find(r => r.results.length == 1 && r.results[0].name == include[i]);
    assert(recipe != null, `no recipe: ${include[i]}`);

    for (const ingredient of recipe.ingredients) {
      const item = all_items.find(r => r.key == ingredient.name);
      assert(item != null, `no item: ${ingredient.name}`);
      if (item.type != 'fluid') continue;

      const name = include.splice(i, 1)[0];
      shifting.push(name);
      break;
    }
  }

  let insert = width - 1;
  for (const name of shifting) {
    include.splice(insert, 0, name);
    insert += width;
  }

  let x = 0;
  let y = -1;
  for (let i = 0; i < include.length; ++i) {
    if (i % width == 0) {
      x = 0;
      y += 1;
    } else {
      x += 1;
    }

    add_recipe(x, y, include[i]);
  }

  for (const a of assemblers.entities!) {
    if (a.name != 'medium-electric-pole') continue;

    const b = assemblers.entities!.find(e => e.position.x == a.position.x + 9 && e.position.y == a.position.y);
    const c = assemblers.entities!.find(e => e.position.x == a.position.x && e.position.y == a.position.y + 9);

    if (b) connect_wire('green', a, b);
    if (c) connect_wire('green', a, c);
  }

  const storage: Blueprint = {
    item: 'blueprint',
    label: 'storage',
    entities: [],
    tiles: [],
    icons: [],
    schedules: [],
    version: VERSION_NUMBER,
  };

  storage.icons!.push({
    index: 1,
    signal: {
      name: 'storage-chest',
      type: 'item',
    }
  });

  const controls: Blueprint = {
    item: 'blueprint',
    label: 'controls',
    entities: [],
    tiles: [],
    icons: [],
    schedules: [],
    version: VERSION_NUMBER,
  };

  controls.icons!.push({
    index: 1,
    signal: {
      name: 'constant-combinator',
      type: 'item',
    }
  });

  const control_combinator: Entity = {
    entity_number: controls.entities!.length + 1,
    name: 'constant-combinator',
    position: { x: 0, y: 0 },
    control_behavior: {
      sections: {
        sections: []
      },
    },
  };

  controls.entities?.push(control_combinator);

  const f_groups = groups.filter(a => a.name != 'intermediate-products' && a.name != 'other');

  let section_index = 1;
  for (let i = 0; i < f_groups.length; ++i) {
    const section: LogisticSection = {
      index: section_index++,
      filters: [],
    };

    let bump = 0;

    for (let j = 0; j < f_groups[i].subgroups.length; ++j) {
      for (let k = 0; k < f_groups[i].subgroups[j].items.length; ++k) {
        if (k > 0 && k % 10 == 0) bump += 1;

        const { item } = f_groups[i].subgroups[j].items[k];

        const x = i * 11 + (k % 10);
        const y = j + bump;

        const filter_index = 1 + ((j + bump) * 10) + (k % 10);

        storage.entities!.push({
          entity_number: storage.entities!.length + 1,
          name: 'storage-chest',
          position: { x, y },
          request_filters: {
            sections: [
              {
                index: 1,
                filters: [
                  {
                    index: 1,
                    name: item.key,
                    count: 0,
                    quality: 'normal',
                    comparator: '=',
                  },
                ],
              },
            ],
          },
        });

        if (item.stack_size) {
          let count;
          if (counts.has(item.key)) {
            count = counts.get(item.key)!;
            console.log(`${item.key} ${count} ${item.stack_size * 10}`)
          } else if (include.includes(item.key)) {
            count = item.stack_size * 10;
          } else {
            count = 0;
          }

          section.filters.push({
            index: filter_index,
            name: item.key,
            count: 0,
            quality: 'normal',
            comparator: '=',
          })
        }
      }
    }

    if (section.filters.length > 0) {
      control_combinator.control_behavior.sections.sections.push(section);
    }
  }

  const book: BlueprintBook = {
    item: 'blueprint-book',
    label: 'mall',
    blueprints: [{ index: 0, blueprint: assemblers }, { index: 1, blueprint: storage }, { index: 2, blueprint: controls }],
    active_index: 0,
    version: VERSION_NUMBER,
  };

  console.log(save_blueprint(storage));
  console.log(save_blueprint(controls));
}

function experiments() {
  // const raw = '0eNqFkNtqwzAQRP9lnpUQB18SkT8pxciO2i7ohrQONUb/XsmB0odA33ZWe2Z2tWEyiw6RHENuoNm7BPm2IdGnU6b2eA0aEsTaQsApW1WyypiDUTYgC5C762/IJr8LaMfEpJ8uu1hHt9hJxzLwihcIPhXEu5pWbA590x47gbWUl+HYlYCyFkdvxkl/qQf5WCdnivNCPJa3+y/+QTHx+N/yy5RY7cjTu6h6/6kKG1RUXCNwQ871pJ2Wf35K4KFj2iPPl6Yd2uvQD82p7/qcfwDkxXE+';
  const raw = '0eNptj81uhDAMhN9lzmm1ICi7eZWqqgLrXVkKDsoPKkJ5903g0sMefLDH/ma8Y7SJFs8SoXfw5CRAf+8I/BRj6yxuC0GDI81QEDPXzrrJzS7ySsgKLHf6g27zjwJJ5Mh0Uo5m+5U0j+Shm3f3CosL5cRJdSuYvlPYynI3FLTzXCDmlC+fQ6+OJKHuSposGf/xSFSSNrnaHzH1v68UrBmrjlQzKKzkw0Frr8Xi1g5ffalmyPkFGdtYnw==';
  const src = load_blueprint(raw);
  console.log(JSON.stringify(src));

  const x: Blueprint = {
    "entities": [
      {
        "entity_number": 1,
        "name": "car",
        "position": {
          "x": 0,
          "y": 0
        },
        items: {
          "nuclear-fuel": 1,
        },
      },
    ],
    "item": "blueprint",
    "label": "test",
    "version": v2_0_0,
  };

  console.log(save_blueprint(x));
}

function dump_blueprint(raw: string) {
  const src = load_blueprint(raw);
  console.log(JSON.stringify(src, null, '  '));
}

if (process.argv[2]) {
  dump_blueprint(process.argv[2])
} else {
  experiments();
  // robot_mall();
}
