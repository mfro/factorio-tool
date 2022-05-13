import * as zlib from 'zlib';

import { Blueprint, BlueprintBook, data, Entity, Item, Quantity, Recipe } from '../../common/factorio';

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
    if (recipe == null) throw new Error('no recipe: ' + name);
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
    if (recipe == null) throw new Error('no recipe: ' + name);
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
      if (index < 0) throw new Error(`not on the bus: ${name}`);
      let amount = bus.splice(index, 1)[0].amount;

      let ratio = amount / recipe.results[0].amount;

      for (let ingredient of recipe.ingredients) {
        let item = all_items.find(i => i.name == ingredient.name);
        if (item == null) throw new Error(`not an item: ${item}`);
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

function load_blueprint(raw: string): Blueprint | BlueprintBook {
  let bytes = Buffer.from(raw.substr(1), 'base64');
  let inflated = zlib.inflateSync(bytes);
  let object = JSON.parse(inflated.toString('utf8'));
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

  let inflated = Buffer.from(JSON.stringify(object), 'utf8')
  let bytes = zlib.deflateSync(inflated, { level: 9 });
  return '0' + bytes.toString('base64');
}

function robot_mall() {
  let raw = '0eNqFkNtqwzAQRP9lnpUQB18SkT8pxciO2i7ohrQONUb/XsmB0odA33ZWe2Z2tWEyiw6RHENuoNm7BPm2IdGnU6b2eA0aEsTaQsApW1WyypiDUTYgC5C762/IJr8LaMfEpJ8uu1hHt9hJxzLwihcIPhXEu5pWbA590x47gbWUl+HYlYCyFkdvxkl/qQf5WCdnivNCPJa3+y/+QTHx+N/yy5RY7cjTu6h6/6kKG1RUXCNwQ871pJ2Wf35K4KFj2iPPl6Yd2uvQD82p7/qcfwDkxXE+';
  let src = load_blueprint(raw);
  console.log(JSON.stringify(src));

  let assemblers: Blueprint = {
    item: 'blueprint',
    label: 'assmblers',
    entities: [],
    tiles: [],
    icons: [],
    schedules: [],
    version: 281474976710656, // (1.0.0)
  };

  function connect(color: 'green' | 'red', a: Entity, b: Entity) {
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

  function add_recipe(x: number, y: number, name: string) {
    type pos = { x: number, y: number };
    let assembler_position;
    let power_position: pos;
    let input_position: pos, input_inserter_position, input_inserter_direction;
    let output_position: pos, output_inserter_position, output_inserter_direction;

    if (y % 2 == 0) {
      let x0 = 3 * x;
      let y0 = 4.5 * y;
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
      let x0 = 3 * x;
      let y0 = 1.5 + 4.5 * y;
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

    assemblers.entities.push(assembler = {
      entity_number: assemblers.entities.length + 1,
      name: 'assembling-machine-3',
      position: assembler_position,
      recipe: name,
    });

    input = assemblers.entities.find(p => p.name == 'logistic-chest-requester' && p.position.x == input_position.x && p.position.y == input_position.y);
    if (input == null) {
      assemblers.entities.push(input = {
        entity_number: assemblers.entities.length,
        name: 'logistic-chest-requester',
        position: input_position,
        request_filters: [],
      });
    }

    output = assemblers.entities.find(p => p.name == 'logistic-chest-active-provider' && p.position.x == output_position.x && p.position.y == output_position.y);
    if (output == null) {
      assemblers.entities.push(output = {
        entity_number: assemblers.entities.length,
        name: 'logistic-chest-active-provider',
        position: output_position,
      });
    }

    assemblers.entities.push(input_inserter = {
      entity_number: assemblers.entities.length + 1,
      name: 'stack-inserter',
      position: input_inserter_position,
      direction: input_inserter_direction,
    });

    assemblers.entities.push(output_inserter = {
      entity_number: assemblers.entities.length + 1,
      name: 'fast-inserter',
      position: output_inserter_position,
      direction: output_inserter_direction,
    });

    let power = assemblers.entities.find(p => p.name == 'medium-electric-pole' && p.position.x == power_position.x && p.position.y == power_position.y);
    if (power == null) {
      assemblers.entities.push(power = {
        entity_number: assemblers.entities.length + 1,
        name: 'medium-electric-pole',
        position: power_position,
      });

      assemblers.entities.push({
        entity_number: assemblers.entities.length + 1,
        name: 'small-lamp',
        position: { x: power_position.x, y: power_position.y - 1 },
      });

      assemblers.entities.push({
        entity_number: assemblers.entities.length + 1,
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

    connect('green', output_inserter, power);

    let item = all_items.find(r => r.name == name);
    let recipe = all_recipes.find(r => r.results.length == 1 && r.results[0].name == name);
    if (item == null) throw new Error(`no item: ${name}`);
    if (recipe == null) throw new Error(`no recipe: ${name}`);
    for (let ingredient of recipe.ingredients) {
      let item = all_items.find(i => i.name == ingredient.name);
      if (item == null) throw new Error(`no item: ${ingredient.name}`);
      if (item.type == 'fluid') {
        assembler.direction = 2;
        continue;
      }

      let filter = input.request_filters!.find(f => f.name == ingredient.name);
      if (filter == null) {
        input.request_filters!.push(filter = {
          index: input.request_filters!.length + 1,
          name: ingredient.name,
          count: 0,
        });
      }

      if ('stack_size' in item) {
        let ratio = Math.max(1, Math.ceil(100 / recipe.energy_required));
        filter.count += Math.min(2 * item.stack_size, ingredient.amount * ratio);
      }
    }

    let limits = recipe.ingredients.filter(i => include.includes(i.name));
    if (limits.length == 1) {
      let limit = all_items.find(i => i.name == limits[0].name)!;
      if ('stack_size' in limit && 'stack_size' in item) {
        let count = counts.get(item.name) ?? item.stack_size * 10;
        let limit_count = counts.get(limit.name) ?? limit.stack_size * 10;

        console.log(`${item.name} (${count}) -> ${limit.name} (${limit_count})`);
        0
        connect('green', input_inserter, power);
        input_inserter.control_behavior = {
          circuit_condition: {
            first_signal: { type: 'item', name: limit.name },
            second_signal: { type: 'item', name: item.name },
            comparator: '>',
          },
        };
      }
    }
  }

  assemblers.icons.push({
    index: 1,
    signal: {
      name: 'assembling-machine-3',
      type: 'item',
    }
  })

  let include = [
    "steel-chest", "storage-tank",
    "transport-belt", "fast-transport-belt", "express-transport-belt", "underground-belt", "fast-underground-belt", "express-underground-belt", "splitter", "fast-splitter", "express-splitter",
    "inserter", "long-handed-inserter", "fast-inserter", "filter-inserter", "stack-inserter", "stack-filter-inserter",
    "medium-electric-pole", "big-electric-pole", "substation", "pipe", "pipe-to-ground", "pump",
    "rail", "train-stop", "rail-signal", "rail-chain-signal", "locomotive", "cargo-wagon", "fluid-wagon", "artillery-wagon",
    "car", "tank", "spidertron",
    "logistic-chest-active-provider", "logistic-chest-passive-provider", "logistic-chest-storage", "logistic-chest-buffer", "logistic-chest-requester", "roboport",
    "small-lamp", "red-wire", "green-wire", "arithmetic-combinator", "decider-combinator", "constant-combinator", "power-switch", "programmable-speaker",

    "repair-pack",
    "boiler", "steam-engine", "nuclear-reactor", "heat-exchanger", "heat-pipe", "steam-turbine",
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

  const counts = new Map<string, number>([
    ['nuclear-reactor', 20], ['steam-turbine', 100],
    ['solar-panel', 2000], ['accumulator', 2000],
    ['centrifuge', 50],
    ['speed-module', 50], ['speed-module-2', 50], ['speed-module-3', 2000],
    ['efficiency-module', 50], ['efficiency-module-2', 50], ['efficiency-module-3', 50],
    ['productivity-module', 50], ['productivity-module-2', 50], ['productivity-module-3', 2000],
    ['solar-panel-equipment', 20], ['fusion-reactor-equipment', 20], ['battery-equipment', 20], /*['battery-mk2-equipment', 20],*/['belt-immunity-equipment', 20], /*['exoskeleton-equipment', 20],*/['personal-roboport-equipment', 20], /*['personal-roboport-mk2-equipment', 20],*/['night-vision-equipment', 20],
    ['energy-shield-equipment', 20], /*['energy-shield-mk2-equipment', 20],*/ /*['personal-laser-defense-equipment', 20],*/['discharge-defense-equipment', 20], ['discharge-defense-remote', 10],
    ['stone-wall', 4000],
  ]);

  // let splices = [
  //   [4, 16],
  //   [6, 30],
  //   [8, 44],
  //   [86, 89],
  // ] as const;

  // for (let [from, to] of splices) {
  //   let value = include.splice(from, 1)[0];
  //   include.splice(to, 0, value);
  // }

  let width = 15;
  let shifting = [];

  for (let i = 0; i < include.length; ++i) {
    let recipe = all_recipes.find(r => r.results.length == 1 && r.results[0].name == include[i]);
    if (recipe == null) throw new Error(`no recipe: ${include[i]}`);

    for (let ingredient of recipe.ingredients) {
      let item = all_items.find(r => r.name == ingredient.name);
      if (item == null) throw new Error(`no item: ${ingredient.name}`);
      if (item.type != 'fluid') continue;

      let name = include.splice(i, 1)[0];
      shifting.push(name);
      break;
    }
  }

  let insert = width - 1;
  for (let name of shifting) {
    include.splice(insert, 0, name);
    console.log(`${name} moved to ${insert}`);
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

  for (let a of assemblers.entities) {
    if (a.name != 'medium-electric-pole') continue;

    let b = assemblers.entities.find(e => e.position.x == a.position.x + 9 && e.position.y == a.position.y);
    let c = assemblers.entities.find(e => e.position.x == a.position.x && e.position.y == a.position.y + 9);

    // console.log(a.position, b, c);

    if (b) connect('green', a, b);
    if (c) connect('green', a, c);
  }

  let storage: Blueprint = {
    item: 'blueprint',
    label: 'storage',
    entities: [],
    tiles: [],
    icons: [],
    schedules: [],
    version: 281474976710656, // (1.0.0)
  };

  storage.icons.push({
    index: 1,
    signal: {
      name: 'logistic-chest-storage',
      type: 'item',
    }
  });

  let controls: Blueprint = {
    item: 'blueprint',
    label: 'controls',
    entities: [],
    tiles: [],
    icons: [],
    schedules: [],
    version: 281474976710656, // (1.0.0)
  };

  controls.icons.push({
    index: 1,
    signal: {
      name: 'constant-combinator',
      type: 'item',
    }
  });

  let fGroups = groups.filter(a => a.name != 'intermediate-products');

  for (let i = 0; i < fGroups.length; ++i) {
    let bump = 0;

    for (let j = 0; j < fGroups[i].subgroups.length; ++j) {
      for (let k = 0; k < fGroups[i].subgroups[j].items.length; ++k) {
        let { item } = fGroups[i].subgroups[j].items[k];

        if (k > 0 && k % 10 == 0) bump += 1;

        let x = i * 11 + (k % 10);
        let y = j + bump;

        storage.entities.push({
          entity_number: storage.entities.length + 1,
          name: 'logistic-chest-storage',
          position: { x, y },
          request_filters: [{ index: 1, name: item.name, count: 0 }]
        });

        if ('stack_size' in item) {
          let count;
          if (counts.has(item.name))
            count = counts.get(item.name)!;
          else if (include.includes(item.name))
            count = item.stack_size * 10;
          else
            count = 0;

          // let a, b, c;
          // controls.entities.push(a = {
          //   entity_number: controls.entities.length + 1,
          //   name: 'small-lamp',
          //   position: { x: x * 2 + 1, y: y * 2 },
          //   control_behavior: {
          //     circuit_condition: {
          //       first_signal: { type: 'item', name: item.name },
          //       constant: 0,
          //       comparator: '<',
          //     },
          //   },
          // });
          // controls.entities.push(b = {
          //   entity_number: controls.entities.length + 1,
          //   name: 'small-lamp',
          //   position: { x: x * 2, y: y * 2 + 1 },
          //   control_behavior: {
          //     circuit_condition: {
          //       first_signal: { type: 'item', name: item.name },
          //       constant: 0,
          //       comparator: '<',
          //     },
          //   },
          // });
          // controls.entities.push(c = {
          //   entity_number: controls.entities.length + 1,
          //   name: 'small-lamp',
          //   position: { x: x * 2 + 1, y: y * 2 + 1 },
          //   control_behavior: {
          //     circuit_condition: {
          //       first_signal: { type: 'item', name: item.name },
          //       constant: 0,
          //       comparator: '<',
          //     },
          //   },
          // });

          controls.entities.push({
            entity_number: controls.entities.length + 1,
            name: 'constant-combinator',
            position: { x: x, y: y },
            control_behavior: {
              filters: [
                {
                  index: 1,
                  signal: {
                    type: 'item',
                    name: item.name
                  },
                  count,
                }
              ]
            },
          });

          // connect('green', a, c);
          // connect('green', b, c);
        }

        if (k % 10 > 0) {
          let a = controls.entities.find(a => a.position.x == x && a.position.y == y);
          let b = controls.entities.find(a => a.position.x == x - 1 && a.position.y == y);
          if (a == null || b == null) throw new Error(`? ${x} ${y} `);
          connect('green', a, b);

          // let c = controls.entities.find(a => a.position.x == x * 2 && a.position.y == y * 2 + 1);
          // let d = controls.entities.find(a => a.position.x == x * 2 - 1 && a.position.y == y * 2 + 1);
          // if (c == null || d == null) throw new Error(`? ${x} ${y} `);
          // connect('green', c, d);
        } else if (j > 0) {
          let a = controls.entities.find(a => a.position.x == x && a.position.y == y);
          let b = controls.entities.find(a => a.position.x == x && a.position.y == y - 1);
          if (a == null || b == null) throw new Error(`? ${x} ${y}`);
          connect('green', a, b);

          // let c = controls.entities.find(a => a.position.x == x * 2 + 1 && a.position.y == y * 2);
          // let d = controls.entities.find(a => a.position.x == x * 2 + 1 && a.position.y == y * 2 - 1);
          // if (c == null || d == null) throw new Error(`? ${x} ${y} `);
          // connect('green', c, d);
        }
      }
    }
  }

  let book: BlueprintBook = {
    item: 'blueprint-book',
    label: 'mall',
    blueprints: [{ index: 0, blueprint: assemblers }, { index: 1, blueprint: storage }, { index: 2, blueprint: controls }],
    active_index: 0,
    version: 281474976710656, // (1.0.0)
  };

  console.log(save_blueprint(book));
}

robot_mall();
