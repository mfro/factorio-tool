'use strict';

var zlib = require('zlib');

var accumulator = {
	accumulator: {
		energy_source: {
			buffer_capacity: "5MJ",
			input_flow_limit: "300kW",
			output_flow_limit: "300kW",
			type: "electric",
			usage_priority: "tertiary"
		},
		icon_col: 0,
		icon_row: 0,
		localized_name: {
			en: "Accumulator"
		},
		name: "accumulator"
	}
};
var boiler = {
	boiler: {
		energy_consumption: "1.8MW",
		energy_source: {
			effectivity: 1,
			emissions_per_minute: 30,
			fuel_category: "chemical",
			fuel_inventory_size: 1,
			smoke: [
				{
					east_position: [
						0.625,
						-2.1875
					],
					frequency: 15,
					name: "smoke",
					north_position: [
						-1.1875,
						-1.484375
					],
					south_position: [
						1.203125,
						-1
					],
					starting_frame_deviation: 60,
					starting_vertical_speed: 0,
					west_position: [
						-0.59375,
						-0.265625
					]
				}
			],
			type: "burner"
		},
		icon_col: 7,
		icon_row: 1,
		localized_name: {
			en: "Boiler"
		},
		name: "boiler"
	},
	"heat-exchanger": {
		energy_consumption: "10MW",
		energy_source: {
			connections: [
				{
					direction: 4,
					position: [
						0,
						0.5
					]
				}
			],
			heat_glow: {
				east: {
					filename: "__base__/graphics/entity/heat-exchanger/heatex-E-glow.png",
					height: 62,
					priority: "extra-high",
					shift: [
						-0.6875,
						-0.375
					],
					width: 60
				},
				north: {
					filename: "__base__/graphics/entity/heat-exchanger/heatex-N-glow.png",
					height: 70,
					priority: "extra-high",
					shift: [
						0,
						0.25
					],
					tint: {
						b: 0.75,
						g: 0.85,
						r: 1
					},
					width: 38
				},
				south: {
					filename: "__base__/graphics/entity/heat-exchanger/heatex-S-glow.png",
					height: 40,
					priority: "extra-high",
					shift: [
						0,
						-1.125
					],
					tint: {
						b: 0.75,
						g: 0.85,
						r: 1
					},
					width: 38
				},
				west: {
					filename: "__base__/graphics/entity/heat-exchanger/heatex-W-glow.png",
					height: 64,
					priority: "extra-high",
					shift: [
						0.625,
						-0.375
					],
					width: 60
				}
			},
			heat_picture: {
				east: {
					filename: "__base__/graphics/entity/heat-exchanger/heatex-E-heated.png",
					height: 40,
					hr_version: {
						filename: "__base__/graphics/entity/heat-exchanger/hr-heatex-E-heated.png",
						height: 80,
						priority: "extra-high",
						scale: 0.5,
						shift: [
							-0.65625,
							-0.40625
						],
						width: 80
					},
					priority: "extra-high",
					shift: [
						-0.65625,
						-0.40625
					],
					width: 40
				},
				north: {
					filename: "__base__/graphics/entity/heat-exchanger/heatex-N-heated.png",
					height: 48,
					hr_version: {
						filename: "__base__/graphics/entity/heat-exchanger/hr-heatex-N-heated.png",
						height: 96,
						priority: "extra-high",
						scale: 0.5,
						shift: [
							-0.015625,
							0.265625
						],
						width: 44
					},
					priority: "extra-high",
					shift: [
						-0.03125,
						0.25
					],
					width: 24
				},
				south: {
					filename: "__base__/graphics/entity/heat-exchanger/heatex-S-heated.png",
					height: 20,
					hr_version: {
						filename: "__base__/graphics/entity/heat-exchanger/hr-heatex-S-heated.png",
						height: 40,
						priority: "extra-high",
						scale: 0.5,
						shift: [
							-0.03125,
							-0.9375
						],
						width: 28
					},
					priority: "extra-high",
					shift: [
						-0.03125,
						-0.9375
					],
					width: 16
				},
				west: {
					filename: "__base__/graphics/entity/heat-exchanger/heatex-W-heated.png",
					height: 40,
					hr_version: {
						filename: "__base__/graphics/entity/heat-exchanger/hr-heatex-W-heated.png",
						height: 76,
						priority: "extra-high",
						scale: 0.5,
						shift: [
							0.71875,
							-0.40625
						],
						width: 64
					},
					priority: "extra-high",
					shift: [
						0.71875,
						-0.40625
					],
					width: 32
				}
			},
			heat_pipe_covers: {
				east: {
					filename: "__base__/graphics/entity/heat-exchanger/heatex-endings-heated.png",
					frame_count: 1,
					height: 32,
					hr_version: {
						filename: "__base__/graphics/entity/heat-exchanger/hr-heatex-endings-heated.png",
						frame_count: 1,
						height: 64,
						priority: "high",
						scale: 0.5,
						width: 64,
						x: 64,
						y: 0
					},
					priority: "high",
					scale: 1,
					width: 32,
					x: 32,
					y: 0
				},
				north: {
					filename: "__base__/graphics/entity/heat-exchanger/heatex-endings-heated.png",
					frame_count: 1,
					height: 32,
					hr_version: {
						filename: "__base__/graphics/entity/heat-exchanger/hr-heatex-endings-heated.png",
						frame_count: 1,
						height: 64,
						priority: "high",
						scale: 0.5,
						width: 64,
						x: 0,
						y: 0
					},
					priority: "high",
					scale: 1,
					width: 32,
					x: 0,
					y: 0
				},
				south: {
					filename: "__base__/graphics/entity/heat-exchanger/heatex-endings-heated.png",
					frame_count: 1,
					height: 32,
					hr_version: {
						filename: "__base__/graphics/entity/heat-exchanger/hr-heatex-endings-heated.png",
						frame_count: 1,
						height: 64,
						priority: "high",
						scale: 0.5,
						width: 64,
						x: 128,
						y: 0
					},
					priority: "high",
					scale: 1,
					width: 32,
					x: 64,
					y: 0
				},
				west: {
					filename: "__base__/graphics/entity/heat-exchanger/heatex-endings-heated.png",
					frame_count: 1,
					height: 32,
					hr_version: {
						filename: "__base__/graphics/entity/heat-exchanger/hr-heatex-endings-heated.png",
						frame_count: 1,
						height: 64,
						priority: "high",
						scale: 0.5,
						width: 64,
						x: 192,
						y: 0
					},
					priority: "high",
					scale: 1,
					width: 32,
					x: 96,
					y: 0
				}
			},
			max_temperature: 1000,
			max_transfer: "2GW",
			min_working_temperature: 500,
			minimum_glow_temperature: 350,
			pipe_covers: {
				east: {
					filename: "__base__/graphics/entity/heat-exchanger/heatex-endings.png",
					frame_count: 1,
					height: 32,
					hr_version: {
						filename: "__base__/graphics/entity/heat-exchanger/hr-heatex-endings.png",
						frame_count: 1,
						height: 64,
						priority: "high",
						scale: 0.5,
						width: 64,
						x: 64,
						y: 0
					},
					priority: "high",
					scale: 1,
					width: 32,
					x: 32,
					y: 0
				},
				north: {
					filename: "__base__/graphics/entity/heat-exchanger/heatex-endings.png",
					frame_count: 1,
					height: 32,
					hr_version: {
						filename: "__base__/graphics/entity/heat-exchanger/hr-heatex-endings.png",
						frame_count: 1,
						height: 64,
						priority: "high",
						scale: 0.5,
						width: 64,
						x: 0,
						y: 0
					},
					priority: "high",
					scale: 1,
					width: 32,
					x: 0,
					y: 0
				},
				south: {
					filename: "__base__/graphics/entity/heat-exchanger/heatex-endings.png",
					frame_count: 1,
					height: 32,
					hr_version: {
						filename: "__base__/graphics/entity/heat-exchanger/hr-heatex-endings.png",
						frame_count: 1,
						height: 64,
						priority: "high",
						scale: 0.5,
						width: 64,
						x: 128,
						y: 0
					},
					priority: "high",
					scale: 1,
					width: 32,
					x: 64,
					y: 0
				},
				west: {
					filename: "__base__/graphics/entity/heat-exchanger/heatex-endings.png",
					frame_count: 1,
					height: 32,
					hr_version: {
						filename: "__base__/graphics/entity/heat-exchanger/hr-heatex-endings.png",
						frame_count: 1,
						height: 64,
						priority: "high",
						scale: 0.5,
						width: 64,
						x: 192,
						y: 0
					},
					priority: "high",
					scale: 1,
					width: 32,
					x: 96,
					y: 0
				}
			},
			specific_heat: "1MJ",
			type: "heat"
		},
		icon_col: 12,
		icon_row: 6,
		localized_name: {
			en: "Heat exchanger"
		},
		name: "heat-exchanger"
	}
};
var fluids = [
	"crude-oil",
	"fluid-unknown",
	"heavy-oil",
	"light-oil",
	"lubricant",
	"petroleum-gas",
	"steam",
	"sulfuric-acid",
	"water"
];
var fuel = [
	"coal",
	"nuclear-fuel",
	"rocket-fuel",
	"solid-fuel",
	"wood"
];
var furnace = {
	"electric-furnace": {
		allowed_effects: [
			"consumption",
			"speed",
			"productivity",
			"pollution"
		],
		crafting_categories: [
			"smelting"
		],
		crafting_speed: 2,
		energy_source: {
			emissions_per_minute: 1,
			type: "electric",
			usage_priority: "secondary-input"
		},
		energy_usage: 180000,
		icon_col: 7,
		icon_row: 4,
		localized_name: {
			en: "Electric furnace"
		},
		module_slots: 2,
		name: "electric-furnace"
	},
	"steel-furnace": {
		crafting_categories: [
			"smelting"
		],
		crafting_speed: 2,
		energy_source: {
			effectivity: 1,
			emissions_per_minute: 4,
			fuel_category: "chemical",
			fuel_inventory_size: 1,
			smoke: [
				{
					frequency: 10,
					name: "smoke",
					position: [
						0.7,
						-1.2
					],
					starting_frame_deviation: 60,
					starting_vertical_speed: 0.08
				}
			],
			type: "burner"
		},
		energy_usage: 90000,
		icon_col: 1,
		icon_row: 14,
		localized_name: {
			en: "Steel furnace"
		},
		module_slots: 0,
		name: "steel-furnace"
	},
	"stone-furnace": {
		crafting_categories: [
			"smelting"
		],
		crafting_speed: 1,
		energy_source: {
			effectivity: 1,
			emissions_per_minute: 2,
			fuel_category: "chemical",
			fuel_inventory_size: 1,
			smoke: [
				{
					deviation: [
						0.1,
						0.1
					],
					frequency: 5,
					name: "smoke",
					position: [
						0,
						-0.8
					],
					starting_frame_deviation: 60,
					starting_vertical_speed: 0.08
				}
			],
			type: "burner"
		},
		energy_usage: 90000,
		icon_col: 5,
		icon_row: 14,
		localized_name: {
			en: "Stone furnace"
		},
		module_slots: 0,
		name: "stone-furnace"
	}
};
var generator = {
	"steam-engine": {
		effectivity: 1,
		fluid_usage_per_tick: 0.5,
		icon_col: 12,
		icon_row: 13,
		localized_name: {
			en: "Steam engine"
		},
		name: "steam-engine"
	},
	"steam-turbine": {
		effectivity: 1,
		fluid_usage_per_tick: 1,
		icon_col: 13,
		icon_row: 13,
		localized_name: {
			en: "Steam turbine"
		},
		name: "steam-turbine"
	}
};
var groups = {
	combat: {
		order: "d",
		subgroups: {
			ammo: "b",
			armor: "d",
			capsule: "c",
			"defensive-structure": "g",
			equipment: "e",
			gun: "a",
			"military-equipment": "f"
		}
	},
	effects: {
		order: "y",
		subgroups: {
			"belt-explosions": "ab",
			"campaign-explosions": "bf",
			"capsule-explosions": "cc",
			"circuit-network-explosions": "ah",
			"decorative-explosions": "dc",
			"defensive-structure-explosions": "cb",
			"energy-explosions": "ba",
			"energy-pipe-distribution-explosions": "ad",
			explosions: "de",
			"extraction-machine-explosions": "bb",
			"ground-explosions": "db",
			"gun-explosions": "ca",
			"hit-effects": "e",
			"inserter-explosions": "ac",
			"logistic-network-explosions": "ag",
			"module-explosions": "be",
			particles: "e",
			"production-machine-explosions": "bd",
			"rock-explosions": "da",
			"smelting-machine-explosions": "bc",
			"storage-explosions": "aa",
			"train-transport-explosions": "ae",
			"transport-explosions": "af",
			"tree-explosions": "cd"
		}
	},
	enemies: {
		order: "aa",
		subgroups: {
			enemies: "a"
		}
	},
	environment: {
		order: "a",
		subgroups: {
			"belt-remnants": "db",
			"circuit-network-remnants": "dh",
			cliffs: "a",
			corpses: "c",
			creatures: "a",
			"defensive-structure-remnants": "dl",
			"energy-pipe-distribution-remnants": "dd",
			"energy-remnants": "di",
			"extraction-machine-remnants": "di",
			"generic-remnants": "dl",
			grass: "b",
			"inserter-remnants": "dc",
			"logistic-network-remnants": "dg",
			"production-machine-remnants": "dk",
			remnants: "dz",
			scorchmarks: "dm",
			"smelting-machine-remnants": "dj",
			"storage-remnants": "da",
			"train-transport-remnants": "de",
			"transport-remnants": "df",
			trees: "aa",
			wrecks: "e"
		}
	},
	fluids: {
		order: "e",
		subgroups: {
			fluid: "a"
		}
	},
	"intermediate-products": {
		order: "c",
		subgroups: {
			"empty-barrel": "e",
			"fill-barrel": "d",
			"fluid-recipes": "a",
			"intermediate-product": "f",
			"raw-material": "c",
			"raw-resource": "b",
			"science-pack": "g"
		}
	},
	logistics: {
		order: "aaa",
		subgroups: {
			belt: "b",
			"circuit-network": "h",
			"energy-pipe-distribution": "d",
			inserter: "c",
			"logistic-network": "g",
			storage: "a",
			terrain: "i",
			"train-transport": "e",
			transport: "f"
		}
	},
	other: {
		order: "z",
		subgroups: {
			other: "z"
		}
	},
	production: {
		order: "b",
		subgroups: {
			"crash-site": "x",
			energy: "b",
			"extraction-machine": "c",
			module: "f",
			"production-machine": "e",
			"smelting-machine": "d",
			tool: "a"
		}
	},
	signals: {
		order: "f",
		subgroups: {
			"virtual-signal": "e",
			"virtual-signal-color": "d",
			"virtual-signal-letter": "c",
			"virtual-signal-number": "b",
			"virtual-signal-special": "a"
		}
	}
};
var items = {
	accumulator: {
		group: "production",
		icon_col: 0,
		icon_row: 0,
		localized_name: {
			en: "Accumulator"
		},
		name: "accumulator",
		order: "e[accumulator]-a[accumulator]",
		stack_size: 50,
		subgroup: "energy",
		type: "item"
	},
	"advanced-circuit": {
		group: "intermediate-products",
		icon_col: 1,
		icon_row: 0,
		localized_name: {
			en: "Advanced circuit"
		},
		name: "advanced-circuit",
		order: "f[advanced-circuit]",
		stack_size: 200,
		subgroup: "intermediate-product",
		type: "item"
	},
	"arithmetic-combinator": {
		group: "logistics",
		icon_col: 3,
		icon_row: 0,
		localized_name: {
			en: "Arithmetic combinator"
		},
		name: "arithmetic-combinator",
		order: "c[combinators]-a[arithmetic-combinator]",
		stack_size: 50,
		subgroup: "circuit-network",
		type: "item"
	},
	"artillery-shell": {
		group: "combat",
		icon_col: 4,
		icon_row: 0,
		localized_name: {
			en: "Artillery shell"
		},
		name: "artillery-shell",
		order: "d[explosive-cannon-shell]-d[artillery]",
		stack_size: 1,
		subgroup: "ammo",
		type: "ammo"
	},
	"artillery-targeting-remote": {
		group: "combat",
		icon_col: 5,
		icon_row: 0,
		localized_name: {
			en: "Artillery targeting remote"
		},
		name: "artillery-targeting-remote",
		order: "b[turret]-d[artillery-turret]-b[remote]",
		stack_size: 1,
		subgroup: "defensive-structure",
		type: "capsule"
	},
	"artillery-turret": {
		group: "combat",
		icon_col: 6,
		icon_row: 0,
		localized_name: {
			en: "Artillery turret"
		},
		name: "artillery-turret",
		order: "b[turret]-d[artillery-turret]-a[turret]",
		stack_size: 10,
		subgroup: "defensive-structure",
		type: "item"
	},
	"artillery-wagon": {
		group: "logistics",
		icon_col: 7,
		icon_row: 0,
		localized_name: {
			en: "Artillery wagon"
		},
		name: "artillery-wagon",
		order: "a[train-system]-i[artillery-wagon]",
		stack_size: 5,
		subgroup: "train-transport",
		type: "item-with-entity-data"
	},
	"artillery-wagon-cannon": {
		group: "combat",
		icon_col: 12,
		icon_row: 14,
		localized_name: {
			en: "Artillery cannon"
		},
		name: "artillery-wagon-cannon",
		order: "z[artillery]-a[cannon]",
		stack_size: 1,
		subgroup: "gun",
		type: "gun"
	},
	"assembling-machine-1": {
		group: "production",
		icon_col: 8,
		icon_row: 0,
		localized_name: {
			en: "Assembling machine 1"
		},
		name: "assembling-machine-1",
		order: "a[assembling-machine-1]",
		stack_size: 50,
		subgroup: "production-machine",
		type: "item"
	},
	"assembling-machine-2": {
		group: "production",
		icon_col: 9,
		icon_row: 0,
		localized_name: {
			en: "Assembling machine 2"
		},
		name: "assembling-machine-2",
		order: "b[assembling-machine-2]",
		stack_size: 50,
		subgroup: "production-machine",
		type: "item"
	},
	"assembling-machine-3": {
		group: "production",
		icon_col: 10,
		icon_row: 0,
		localized_name: {
			en: "Assembling machine 3"
		},
		name: "assembling-machine-3",
		order: "c[assembling-machine-3]",
		stack_size: 50,
		subgroup: "production-machine",
		type: "item"
	},
	"atomic-bomb": {
		group: "combat",
		icon_col: 11,
		icon_row: 0,
		localized_name: {
			en: "Atomic bomb"
		},
		name: "atomic-bomb",
		order: "d[rocket-launcher]-c[atomic-bomb]",
		stack_size: 10,
		subgroup: "ammo",
		type: "ammo"
	},
	"automation-science-pack": {
		group: "intermediate-products",
		icon_col: 12,
		icon_row: 0,
		localized_name: {
			en: "Automation science pack"
		},
		name: "automation-science-pack",
		order: "a[automation-science-pack]",
		stack_size: 200,
		subgroup: "science-pack",
		type: "tool"
	},
	battery: {
		group: "intermediate-products",
		icon_col: 14,
		icon_row: 0,
		localized_name: {
			en: "Battery"
		},
		name: "battery",
		order: "h[battery]",
		stack_size: 200,
		subgroup: "raw-material",
		type: "item"
	},
	"battery-equipment": {
		group: "combat",
		icon_col: 0,
		icon_row: 1,
		localized_name: {
			en: "Personal battery"
		},
		name: "battery-equipment",
		order: "b[battery]-a[battery-equipment]",
		stack_size: 20,
		subgroup: "equipment",
		type: "item"
	},
	"battery-mk2-equipment": {
		group: "combat",
		icon_col: 1,
		icon_row: 1,
		localized_name: {
			en: "Personal battery MK2"
		},
		name: "battery-mk2-equipment",
		order: "b[battery]-b[battery-equipment-mk2]",
		stack_size: 20,
		subgroup: "equipment",
		type: "item"
	},
	beacon: {
		group: "production",
		icon_col: 2,
		icon_row: 1,
		localized_name: {
			en: "Beacon"
		},
		name: "beacon",
		order: "a[beacon]",
		stack_size: 10,
		subgroup: "module",
		type: "item"
	},
	"belt-immunity-equipment": {
		group: "combat",
		icon_col: 3,
		icon_row: 1,
		localized_name: {
			en: "Belt immunity equipment"
		},
		name: "belt-immunity-equipment",
		order: "c[belt-immunity]-a[belt-immunity]",
		stack_size: 20,
		subgroup: "equipment",
		type: "item"
	},
	"big-electric-pole": {
		group: "logistics",
		icon_col: 4,
		icon_row: 1,
		localized_name: {
			en: "Big electric pole"
		},
		name: "big-electric-pole",
		order: "a[energy]-c[big-electric-pole]",
		stack_size: 50,
		subgroup: "energy-pipe-distribution",
		type: "item"
	},
	blueprint: {
		group: "production",
		icon_col: 5,
		icon_row: 1,
		localized_name: {
			en: "Blueprint"
		},
		name: "blueprint",
		order: "c[automated-construction]-a[blueprint]",
		stack_size: 1,
		subgroup: "tool",
		type: "blueprint"
	},
	"blueprint-book": {
		group: "production",
		icon_col: 6,
		icon_row: 1,
		localized_name: {
			en: "Blueprint book"
		},
		name: "blueprint-book",
		order: "c[automated-construction]-d[blueprint-book]",
		stack_size: 1,
		subgroup: "tool",
		type: "blueprint-book"
	},
	boiler: {
		group: "production",
		icon_col: 7,
		icon_row: 1,
		localized_name: {
			en: "Boiler"
		},
		name: "boiler",
		order: "b[steam-power]-a[boiler]",
		stack_size: 50,
		subgroup: "energy",
		type: "item"
	},
	"burner-generator": {
		group: "other",
		icon_col: 12,
		icon_row: 13,
		localized_name: {
			en: "Burner generator"
		},
		name: "burner-generator",
		order: "t[item]-o[burner-generator]",
		stack_size: 10,
		subgroup: "other",
		type: "item"
	},
	"burner-inserter": {
		group: "logistics",
		icon_col: 8,
		icon_row: 1,
		localized_name: {
			en: "Burner inserter"
		},
		name: "burner-inserter",
		order: "a[burner-inserter]",
		stack_size: 50,
		subgroup: "inserter",
		type: "item"
	},
	"burner-mining-drill": {
		group: "production",
		icon_col: 9,
		icon_row: 1,
		localized_name: {
			en: "Burner mining drill"
		},
		name: "burner-mining-drill",
		order: "a[items]-a[burner-mining-drill]",
		stack_size: 50,
		subgroup: "extraction-machine",
		type: "item"
	},
	"cannon-shell": {
		group: "combat",
		icon_col: 10,
		icon_row: 1,
		localized_name: {
			en: "Cannon shell"
		},
		name: "cannon-shell",
		order: "d[cannon-shell]-a[basic]",
		stack_size: 200,
		subgroup: "ammo",
		type: "ammo"
	},
	car: {
		group: "logistics",
		icon_col: 11,
		icon_row: 1,
		localized_name: {
			en: "Car"
		},
		name: "car",
		order: "b[personal-transport]-a[car]",
		stack_size: 1,
		subgroup: "transport",
		type: "item-with-entity-data"
	},
	"cargo-wagon": {
		group: "logistics",
		icon_col: 12,
		icon_row: 1,
		localized_name: {
			en: "Cargo wagon"
		},
		name: "cargo-wagon",
		order: "a[train-system]-g[cargo-wagon]",
		stack_size: 5,
		subgroup: "train-transport",
		type: "item-with-entity-data"
	},
	centrifuge: {
		group: "production",
		icon_col: 13,
		icon_row: 1,
		localized_name: {
			en: "Centrifuge"
		},
		name: "centrifuge",
		order: "g[centrifuge]",
		stack_size: 50,
		subgroup: "production-machine",
		type: "item"
	},
	"chemical-plant": {
		group: "production",
		icon_col: 14,
		icon_row: 1,
		localized_name: {
			en: "Chemical plant"
		},
		name: "chemical-plant",
		order: "e[chemical-plant]",
		stack_size: 10,
		subgroup: "production-machine",
		type: "item"
	},
	"chemical-science-pack": {
		group: "intermediate-products",
		icon_col: 0,
		icon_row: 2,
		localized_name: {
			en: "Chemical science pack"
		},
		name: "chemical-science-pack",
		order: "d[chemical-science-pack]",
		stack_size: 200,
		subgroup: "science-pack",
		type: "tool"
	},
	"cliff-explosives": {
		group: "logistics",
		icon_col: 1,
		icon_row: 2,
		localized_name: {
			en: "Cliff explosives"
		},
		name: "cliff-explosives",
		order: "d[cliff-explosives]",
		stack_size: 20,
		subgroup: "terrain",
		type: "capsule"
	},
	"cluster-grenade": {
		group: "combat",
		icon_col: 3,
		icon_row: 2,
		localized_name: {
			en: "Cluster grenade"
		},
		name: "cluster-grenade",
		order: "a[grenade]-b[cluster]",
		stack_size: 100,
		subgroup: "capsule",
		type: "capsule"
	},
	coal: {
		fuel_category: "chemical",
		fuel_value: 4000000,
		group: "intermediate-products",
		icon_col: 4,
		icon_row: 2,
		localized_name: {
			en: "Coal"
		},
		name: "coal",
		order: "b[coal]",
		stack_size: 50,
		subgroup: "raw-resource",
		type: "item"
	},
	coin: {
		group: "intermediate-products",
		icon_col: 6,
		icon_row: 2,
		localized_name: {
			en: "Coin"
		},
		name: "coin",
		order: "y",
		stack_size: 100000,
		subgroup: "science-pack",
		type: "item"
	},
	"combat-shotgun": {
		group: "combat",
		icon_col: 7,
		icon_row: 2,
		localized_name: {
			en: "Combat shotgun"
		},
		name: "combat-shotgun",
		order: "b[shotgun]-a[combat]",
		stack_size: 5,
		subgroup: "gun",
		type: "gun"
	},
	computer: {
		group: "combat",
		icon_col: 8,
		icon_row: 2,
		localized_name: {
			en: "Computer"
		},
		name: "computer",
		order: "g[computer]",
		stack_size: 1,
		subgroup: "defensive-structure",
		type: "item"
	},
	concrete: {
		group: "logistics",
		icon_col: 9,
		icon_row: 2,
		localized_name: {
			en: "Concrete"
		},
		name: "concrete",
		order: "b[concrete]-a[plain]",
		stack_size: 100,
		subgroup: "terrain",
		type: "item"
	},
	"constant-combinator": {
		group: "logistics",
		icon_col: 10,
		icon_row: 2,
		localized_name: {
			en: "Constant combinator"
		},
		name: "constant-combinator",
		order: "c[combinators]-c[constant-combinator]",
		stack_size: 50,
		subgroup: "circuit-network",
		type: "item"
	},
	"construction-robot": {
		group: "logistics",
		icon_col: 11,
		icon_row: 2,
		localized_name: {
			en: "Construction robot"
		},
		name: "construction-robot",
		order: "a[robot]-b[construction-robot]",
		stack_size: 50,
		subgroup: "logistic-network",
		type: "item"
	},
	"copper-cable": {
		group: "intermediate-products",
		icon_col: 12,
		icon_row: 2,
		localized_name: {
			en: "Copper cable"
		},
		name: "copper-cable",
		order: "a[copper-cable]",
		stack_size: 200,
		subgroup: "intermediate-product",
		type: "item"
	},
	"copper-ore": {
		group: "intermediate-products",
		icon_col: 13,
		icon_row: 2,
		localized_name: {
			en: "Copper ore"
		},
		name: "copper-ore",
		order: "f[copper-ore]",
		stack_size: 50,
		subgroup: "raw-resource",
		type: "item"
	},
	"copper-plate": {
		group: "intermediate-products",
		icon_col: 14,
		icon_row: 2,
		localized_name: {
			en: "Copper plate"
		},
		name: "copper-plate",
		order: "c[copper-plate]",
		stack_size: 100,
		subgroup: "raw-material",
		type: "item"
	},
	"crash-site-assembling-machine-1-broken": {
		group: "production",
		icon_col: 0,
		icon_row: 3,
		localized_name: {
			en: "Damaged assembling machine"
		},
		name: "crash-site-assembling-machine-1-broken",
		order: "x[crash-site-assembling-machine-1-broken]",
		stack_size: 1,
		subgroup: "crash-site",
		type: "item"
	},
	"crash-site-assembling-machine-1-repaired": {
		group: "production",
		icon_col: 1,
		icon_row: 3,
		localized_name: {
			en: "Repaired assembling machine"
		},
		name: "crash-site-assembling-machine-1-repaired",
		order: "x[crash-site-assembling-machine-1-repaired]",
		stack_size: 1,
		subgroup: "crash-site",
		type: "item"
	},
	"crash-site-assembling-machine-2-broken": {
		group: "production",
		icon_col: 2,
		icon_row: 3,
		localized_name: {
			en: "Damaged assembling machine"
		},
		name: "crash-site-assembling-machine-2-broken",
		order: "x[crash-site-assembling-machine-2-broken]",
		stack_size: 1,
		subgroup: "crash-site",
		type: "item"
	},
	"crash-site-assembling-machine-2-repaired": {
		group: "production",
		icon_col: 3,
		icon_row: 3,
		localized_name: {
			en: "Repaired assembling machine"
		},
		name: "crash-site-assembling-machine-2-repaired",
		order: "x[crash-site-assembling-machine-2-repaired]",
		stack_size: 1,
		subgroup: "crash-site",
		type: "item"
	},
	"crash-site-chest-1": {
		group: "production",
		icon_col: 4,
		icon_row: 3,
		localized_name: {
			en: "Chest capsule"
		},
		name: "crash-site-chest-1",
		order: "x[crash-site-chest]",
		stack_size: 1,
		subgroup: "crash-site",
		type: "item"
	},
	"crash-site-chest-2": {
		group: "production",
		icon_col: 4,
		icon_row: 3,
		localized_name: {
			en: "Chest capsule"
		},
		name: "crash-site-chest-2",
		order: "x[crash-site-chest]",
		stack_size: 1,
		subgroup: "crash-site",
		type: "item"
	},
	"crash-site-electric-pole": {
		group: "production",
		icon_col: 5,
		icon_row: 3,
		localized_name: {
			en: "Electricity generator electric connection"
		},
		name: "crash-site-electric-pole",
		order: "x[crash-site-electric-pole]",
		stack_size: 1,
		subgroup: "crash-site",
		type: "item"
	},
	"crash-site-generator": {
		group: "production",
		icon_col: 6,
		icon_row: 3,
		localized_name: {
			en: "Electricity generator"
		},
		name: "crash-site-generator",
		order: "x[crash-site-generator]",
		stack_size: 1,
		subgroup: "crash-site",
		type: "item"
	},
	"crash-site-lab-broken": {
		group: "production",
		icon_col: 7,
		icon_row: 3,
		localized_name: {
			en: "Damaged lab"
		},
		name: "crash-site-lab-broken",
		order: "x[crash-site-lab-broken]",
		stack_size: 1,
		subgroup: "crash-site",
		type: "item"
	},
	"crash-site-lab-repaired": {
		group: "production",
		icon_col: 8,
		icon_row: 3,
		localized_name: {
			en: "Repaired lab"
		},
		name: "crash-site-lab-repaired",
		order: "x[crash-site-lab-repaired]",
		stack_size: 1,
		subgroup: "crash-site",
		type: "item"
	},
	"crude-oil": {
		group: "other",
		icon_col: 9,
		icon_row: 3,
		localized_name: {
			en: "Crude oil"
		},
		name: "crude-oil",
		order: "a[fluid]-b[crude-oil]",
		subgroup: "other",
		type: "fluid"
	},
	"decider-combinator": {
		group: "logistics",
		icon_col: 11,
		icon_row: 3,
		localized_name: {
			en: "Decider combinator"
		},
		name: "decider-combinator",
		order: "c[combinators]-b[decider-combinator]",
		stack_size: 50,
		subgroup: "circuit-network",
		type: "item"
	},
	"deconstruction-planner": {
		group: "production",
		icon_col: 12,
		icon_row: 3,
		localized_name: {
			en: "Deconstruction planner"
		},
		name: "deconstruction-planner",
		order: "c[automated-construction]-b[deconstruction-planner]",
		stack_size: 1,
		subgroup: "tool",
		type: "deconstruction-item"
	},
	"defender-capsule": {
		group: "combat",
		icon_col: 13,
		icon_row: 3,
		localized_name: {
			en: "Defender capsule"
		},
		name: "defender-capsule",
		order: "d[defender-capsule]",
		stack_size: 100,
		subgroup: "capsule",
		type: "capsule"
	},
	"destroyer-capsule": {
		group: "combat",
		icon_col: 14,
		icon_row: 3,
		localized_name: {
			en: "Destroyer capsule"
		},
		name: "destroyer-capsule",
		order: "f[destroyer-capsule]",
		stack_size: 100,
		subgroup: "capsule",
		type: "capsule"
	},
	"discharge-defense-equipment": {
		group: "combat",
		icon_col: 0,
		icon_row: 4,
		localized_name: {
			en: "Discharge defense"
		},
		name: "discharge-defense-equipment",
		order: "b[active-defense]-b[discharge-defense-equipment]-a[equipment]",
		stack_size: 20,
		subgroup: "military-equipment",
		type: "item"
	},
	"discharge-defense-remote": {
		group: "combat",
		icon_col: 1,
		icon_row: 4,
		localized_name: {
			en: "Discharge defense remote"
		},
		name: "discharge-defense-remote",
		order: "b[active-defense]-b[discharge-defense-equipment]-b[remote]",
		stack_size: 1,
		subgroup: "military-equipment",
		type: "capsule"
	},
	"distractor-capsule": {
		group: "combat",
		icon_col: 2,
		icon_row: 4,
		localized_name: {
			en: "Distractor capsule"
		},
		name: "distractor-capsule",
		order: "e[defender-capsule]",
		stack_size: 100,
		subgroup: "capsule",
		type: "capsule"
	},
	"dummy-steel-axe": {
		group: "production",
		icon_col: 14,
		icon_row: 13,
		name: "dummy-steel-axe",
		order: "a[mining]-b[steel-axe]",
		stack_size: 1,
		subgroup: "tool",
		type: "mining-tool"
	},
	"effectivity-module": {
		category: "effectivity",
		effect: {
			consumption: {
				bonus: -0.3
			}
		},
		group: "production",
		icon_col: 3,
		icon_row: 4,
		localized_name: {
			en: "Efficiency module"
		},
		name: "effectivity-module",
		order: "c[effectivity]-a[effectivity-module-1]",
		stack_size: 50,
		subgroup: "module",
		type: "module"
	},
	"effectivity-module-2": {
		category: "effectivity",
		effect: {
			consumption: {
				bonus: -0.4
			}
		},
		group: "production",
		icon_col: 4,
		icon_row: 4,
		localized_name: {
			en: "Efficiency module 2"
		},
		name: "effectivity-module-2",
		order: "c[effectivity]-b[effectivity-module-2]",
		stack_size: 50,
		subgroup: "module",
		type: "module"
	},
	"effectivity-module-3": {
		category: "effectivity",
		effect: {
			consumption: {
				bonus: -0.5
			}
		},
		group: "production",
		icon_col: 5,
		icon_row: 4,
		localized_name: {
			en: "Efficiency module 3"
		},
		name: "effectivity-module-3",
		order: "c[effectivity]-c[effectivity-module-3]",
		stack_size: 50,
		subgroup: "module",
		type: "module"
	},
	"electric-energy-interface": {
		group: "other",
		icon_col: 0,
		icon_row: 0,
		localized_name: {
			en: "Electric energy interface"
		},
		name: "electric-energy-interface",
		order: "a[electric-energy-interface]-b[electric-energy-interface]",
		stack_size: 50,
		subgroup: "other",
		type: "item"
	},
	"electric-engine-unit": {
		group: "intermediate-products",
		icon_col: 6,
		icon_row: 4,
		localized_name: {
			en: "Electric engine unit"
		},
		name: "electric-engine-unit",
		order: "i[electric-engine-unit]",
		stack_size: 50,
		subgroup: "intermediate-product",
		type: "item"
	},
	"electric-furnace": {
		group: "production",
		icon_col: 7,
		icon_row: 4,
		localized_name: {
			en: "Electric furnace"
		},
		name: "electric-furnace",
		order: "c[electric-furnace]",
		stack_size: 50,
		subgroup: "smelting-machine",
		type: "item"
	},
	"electric-mining-drill": {
		group: "production",
		icon_col: 8,
		icon_row: 4,
		localized_name: {
			en: "Electric mining drill"
		},
		name: "electric-mining-drill",
		order: "a[items]-b[electric-mining-drill]",
		stack_size: 50,
		subgroup: "extraction-machine",
		type: "item"
	},
	"electronic-circuit": {
		group: "intermediate-products",
		icon_col: 9,
		icon_row: 4,
		localized_name: {
			en: "Electronic circuit"
		},
		name: "electronic-circuit",
		order: "e[electronic-circuit]",
		stack_size: 200,
		subgroup: "intermediate-product",
		type: "item"
	},
	"empty-barrel": {
		group: "intermediate-products",
		icon_col: 10,
		icon_row: 4,
		localized_name: {
			en: "Empty barrel"
		},
		name: "empty-barrel",
		order: "d[empty-barrel]",
		stack_size: 10,
		subgroup: "intermediate-product",
		type: "item"
	},
	"energy-shield-equipment": {
		group: "combat",
		icon_col: 11,
		icon_row: 4,
		localized_name: {
			en: "Energy shield"
		},
		name: "energy-shield-equipment",
		order: "a[shield]-a[energy-shield-equipment]",
		stack_size: 20,
		subgroup: "military-equipment",
		type: "item"
	},
	"energy-shield-mk2-equipment": {
		group: "combat",
		icon_col: 12,
		icon_row: 4,
		localized_name: {
			en: "Energy shield MK2"
		},
		name: "energy-shield-mk2-equipment",
		order: "a[shield]-b[energy-shield-equipment-mk2]",
		stack_size: 20,
		subgroup: "military-equipment",
		type: "item"
	},
	"engine-unit": {
		group: "intermediate-products",
		icon_col: 13,
		icon_row: 4,
		localized_name: {
			en: "Engine unit"
		},
		name: "engine-unit",
		order: "h[engine-unit]",
		stack_size: 50,
		subgroup: "intermediate-product",
		type: "item"
	},
	"exoskeleton-equipment": {
		group: "combat",
		icon_col: 14,
		icon_row: 4,
		localized_name: {
			en: "Exoskeleton"
		},
		name: "exoskeleton-equipment",
		order: "d[exoskeleton]-a[exoskeleton-equipment]",
		stack_size: 20,
		subgroup: "equipment",
		type: "item"
	},
	"explosive-cannon-shell": {
		group: "combat",
		icon_col: 0,
		icon_row: 5,
		localized_name: {
			en: "Explosive cannon shell"
		},
		name: "explosive-cannon-shell",
		order: "d[cannon-shell]-c[explosive]",
		stack_size: 200,
		subgroup: "ammo",
		type: "ammo"
	},
	"explosive-rocket": {
		group: "combat",
		icon_col: 1,
		icon_row: 5,
		localized_name: {
			en: "Explosive rocket"
		},
		name: "explosive-rocket",
		order: "d[rocket-launcher]-b[explosive]",
		stack_size: 200,
		subgroup: "ammo",
		type: "ammo"
	},
	"explosive-uranium-cannon-shell": {
		group: "combat",
		icon_col: 2,
		icon_row: 5,
		localized_name: {
			en: "Explosive uranium cannon shell"
		},
		name: "explosive-uranium-cannon-shell",
		order: "d[explosive-cannon-shell]-c[uranium]",
		stack_size: 200,
		subgroup: "ammo",
		type: "ammo"
	},
	explosives: {
		group: "intermediate-products",
		icon_col: 3,
		icon_row: 5,
		localized_name: {
			en: "Explosives"
		},
		name: "explosives",
		order: "j[explosives]",
		stack_size: 50,
		subgroup: "raw-material",
		type: "item"
	},
	"express-loader": {
		group: "logistics",
		icon_col: 4,
		icon_row: 5,
		localized_name: {
			en: "Express loader"
		},
		name: "express-loader",
		order: "d[loader]-c[express-loader]",
		stack_size: 50,
		subgroup: "belt",
		type: "item"
	},
	"express-splitter": {
		group: "logistics",
		icon_col: 5,
		icon_row: 5,
		localized_name: {
			en: "Express splitter"
		},
		name: "express-splitter",
		order: "c[splitter]-c[express-splitter]",
		stack_size: 50,
		subgroup: "belt",
		type: "item"
	},
	"express-transport-belt": {
		group: "logistics",
		icon_col: 6,
		icon_row: 5,
		localized_name: {
			en: "Express transport belt"
		},
		name: "express-transport-belt",
		order: "a[transport-belt]-c[express-transport-belt]",
		stack_size: 100,
		subgroup: "belt",
		type: "item"
	},
	"express-underground-belt": {
		group: "logistics",
		icon_col: 7,
		icon_row: 5,
		localized_name: {
			en: "Express underground belt"
		},
		name: "express-underground-belt",
		order: "b[underground-belt]-c[express-underground-belt]",
		stack_size: 50,
		subgroup: "belt",
		type: "item"
	},
	"fast-inserter": {
		group: "logistics",
		icon_col: 8,
		icon_row: 5,
		localized_name: {
			en: "Fast inserter"
		},
		name: "fast-inserter",
		order: "d[fast-inserter]",
		stack_size: 50,
		subgroup: "inserter",
		type: "item"
	},
	"fast-loader": {
		group: "logistics",
		icon_col: 9,
		icon_row: 5,
		localized_name: {
			en: "Fast loader"
		},
		name: "fast-loader",
		order: "d[loader]-b[fast-loader]",
		stack_size: 50,
		subgroup: "belt",
		type: "item"
	},
	"fast-splitter": {
		group: "logistics",
		icon_col: 10,
		icon_row: 5,
		localized_name: {
			en: "Fast splitter"
		},
		name: "fast-splitter",
		order: "c[splitter]-b[fast-splitter]",
		stack_size: 50,
		subgroup: "belt",
		type: "item"
	},
	"fast-transport-belt": {
		group: "logistics",
		icon_col: 11,
		icon_row: 5,
		localized_name: {
			en: "Fast transport belt"
		},
		name: "fast-transport-belt",
		order: "a[transport-belt]-b[fast-transport-belt]",
		stack_size: 100,
		subgroup: "belt",
		type: "item"
	},
	"fast-underground-belt": {
		group: "logistics",
		icon_col: 12,
		icon_row: 5,
		localized_name: {
			en: "Fast underground belt"
		},
		name: "fast-underground-belt",
		order: "b[underground-belt]-b[fast-underground-belt]",
		stack_size: 50,
		subgroup: "belt",
		type: "item"
	},
	"filter-inserter": {
		group: "logistics",
		icon_col: 13,
		icon_row: 5,
		localized_name: {
			en: "Filter inserter"
		},
		name: "filter-inserter",
		order: "e[filter-inserter]",
		stack_size: 50,
		subgroup: "inserter",
		type: "item"
	},
	"firearm-magazine": {
		group: "combat",
		icon_col: 14,
		icon_row: 5,
		localized_name: {
			en: "Firearm magazine"
		},
		name: "firearm-magazine",
		order: "a[basic-clips]-a[firearm-magazine]",
		stack_size: 200,
		subgroup: "ammo",
		type: "ammo"
	},
	flamethrower: {
		group: "combat",
		icon_col: 1,
		icon_row: 6,
		localized_name: {
			en: "Flamethrower"
		},
		name: "flamethrower",
		order: "e[flamethrower]",
		stack_size: 5,
		subgroup: "gun",
		type: "gun"
	},
	"flamethrower-ammo": {
		group: "combat",
		icon_col: 2,
		icon_row: 6,
		localized_name: {
			en: "Flamethrower ammo"
		},
		name: "flamethrower-ammo",
		order: "e[flamethrower]",
		stack_size: 100,
		subgroup: "ammo",
		type: "ammo"
	},
	"flamethrower-turret": {
		group: "combat",
		icon_col: 3,
		icon_row: 6,
		localized_name: {
			en: "Flamethrower turret"
		},
		name: "flamethrower-turret",
		order: "b[turret]-c[flamethrower-turret]",
		stack_size: 50,
		subgroup: "defensive-structure",
		type: "item"
	},
	"fluid-unknown": {
		group: "other",
		icon_col: 1,
		icon_row: 15,
		localized_name: {
			en: "Unknown fluid"
		},
		name: "fluid-unknown",
		subgroup: "other",
		type: "fluid"
	},
	"fluid-wagon": {
		group: "logistics",
		icon_col: 4,
		icon_row: 6,
		localized_name: {
			en: "Fluid wagon"
		},
		name: "fluid-wagon",
		order: "a[train-system]-h[fluid-wagon]",
		stack_size: 5,
		subgroup: "train-transport",
		type: "item-with-entity-data"
	},
	"flying-robot-frame": {
		group: "intermediate-products",
		icon_col: 5,
		icon_row: 6,
		localized_name: {
			en: "Flying robot frame"
		},
		name: "flying-robot-frame",
		order: "l[flying-robot-frame]",
		stack_size: 50,
		subgroup: "intermediate-product",
		type: "item"
	},
	"fusion-reactor-equipment": {
		group: "combat",
		icon_col: 6,
		icon_row: 6,
		localized_name: {
			en: "Portable fusion reactor"
		},
		name: "fusion-reactor-equipment",
		order: "a[energy-source]-b[fusion-reactor]",
		stack_size: 20,
		subgroup: "equipment",
		type: "item"
	},
	gate: {
		group: "combat",
		icon_col: 7,
		icon_row: 6,
		localized_name: {
			en: "Gate"
		},
		name: "gate",
		order: "a[wall]-b[gate]",
		stack_size: 50,
		subgroup: "defensive-structure",
		type: "item"
	},
	"green-wire": {
		group: "logistics",
		icon_col: 8,
		icon_row: 6,
		localized_name: {
			en: "Green wire"
		},
		name: "green-wire",
		order: "b[wires]-b[green-wire]",
		stack_size: 200,
		subgroup: "circuit-network",
		type: "item"
	},
	grenade: {
		group: "combat",
		icon_col: 9,
		icon_row: 6,
		localized_name: {
			en: "Grenade"
		},
		name: "grenade",
		order: "a[grenade]-a[normal]",
		stack_size: 100,
		subgroup: "capsule",
		type: "capsule"
	},
	"gun-turret": {
		group: "combat",
		icon_col: 10,
		icon_row: 6,
		localized_name: {
			en: "Gun turret"
		},
		name: "gun-turret",
		order: "b[turret]-a[gun-turret]",
		stack_size: 50,
		subgroup: "defensive-structure",
		type: "item"
	},
	"hazard-concrete": {
		group: "logistics",
		icon_col: 11,
		icon_row: 6,
		localized_name: {
			en: "Hazard concrete"
		},
		name: "hazard-concrete",
		order: "b[concrete]-b[hazard]",
		stack_size: 100,
		subgroup: "terrain",
		type: "item"
	},
	"heat-exchanger": {
		group: "production",
		icon_col: 12,
		icon_row: 6,
		localized_name: {
			en: "Heat exchanger"
		},
		name: "heat-exchanger",
		order: "f[nuclear-energy]-c[heat-exchanger]",
		stack_size: 50,
		subgroup: "energy",
		type: "item"
	},
	"heat-interface": {
		group: "other",
		icon_col: 13,
		icon_row: 6,
		localized_name: {
			en: "Heat interface"
		},
		name: "heat-interface",
		order: "b[heat-interface]",
		stack_size: 20,
		subgroup: "other",
		type: "item"
	},
	"heat-pipe": {
		group: "production",
		icon_col: 14,
		icon_row: 6,
		localized_name: {
			en: "Heat pipe"
		},
		name: "heat-pipe",
		order: "f[nuclear-energy]-b[heat-pipe]",
		stack_size: 50,
		subgroup: "energy",
		type: "item"
	},
	"heavy-armor": {
		group: "combat",
		icon_col: 0,
		icon_row: 7,
		localized_name: {
			en: "Heavy armor"
		},
		name: "heavy-armor",
		order: "b[heavy-armor]",
		stack_size: 1,
		subgroup: "armor",
		type: "armor"
	},
	"heavy-oil": {
		group: "other",
		icon_col: 1,
		icon_row: 7,
		localized_name: {
			en: "Heavy oil"
		},
		name: "heavy-oil",
		order: "a[fluid]-c[heavy-oil]",
		subgroup: "other",
		type: "fluid"
	},
	"infinity-chest": {
		group: "other",
		icon_col: 3,
		icon_row: 7,
		localized_name: {
			en: "Infinity chest"
		},
		name: "infinity-chest",
		order: "c[item]-o[infinity-chest]",
		stack_size: 10,
		subgroup: "other",
		type: "item"
	},
	"infinity-pipe": {
		group: "other",
		icon_col: 0,
		icon_row: 10,
		localized_name: {
			en: "Infinity pipe"
		},
		name: "infinity-pipe",
		order: "d[item]-o[infinity-pipe]",
		stack_size: 10,
		subgroup: "other",
		type: "item"
	},
	inserter: {
		group: "logistics",
		icon_col: 4,
		icon_row: 7,
		localized_name: {
			en: "Inserter"
		},
		name: "inserter",
		order: "b[inserter]",
		stack_size: 50,
		subgroup: "inserter",
		type: "item"
	},
	"iron-chest": {
		group: "logistics",
		icon_col: 5,
		icon_row: 7,
		localized_name: {
			en: "Iron chest"
		},
		name: "iron-chest",
		order: "a[items]-b[iron-chest]",
		stack_size: 50,
		subgroup: "storage",
		type: "item"
	},
	"iron-gear-wheel": {
		group: "intermediate-products",
		icon_col: 6,
		icon_row: 7,
		localized_name: {
			en: "Iron gear wheel"
		},
		name: "iron-gear-wheel",
		order: "c[iron-gear-wheel]",
		stack_size: 100,
		subgroup: "intermediate-product",
		type: "item"
	},
	"iron-ore": {
		group: "intermediate-products",
		icon_col: 7,
		icon_row: 7,
		localized_name: {
			en: "Iron ore"
		},
		name: "iron-ore",
		order: "e[iron-ore]",
		stack_size: 50,
		subgroup: "raw-resource",
		type: "item"
	},
	"iron-plate": {
		group: "intermediate-products",
		icon_col: 8,
		icon_row: 7,
		localized_name: {
			en: "Iron plate"
		},
		name: "iron-plate",
		order: "b[iron-plate]",
		stack_size: 100,
		subgroup: "raw-material",
		type: "item"
	},
	"iron-stick": {
		group: "intermediate-products",
		icon_col: 9,
		icon_row: 7,
		localized_name: {
			en: "Iron stick"
		},
		name: "iron-stick",
		order: "b[iron-stick]",
		stack_size: 100,
		subgroup: "intermediate-product",
		type: "item"
	},
	"item-unknown": {
		group: "other",
		icon_col: 1,
		icon_row: 15,
		localized_name: {
			en: "Unknown item"
		},
		name: "item-unknown",
		stack_size: 1,
		subgroup: "other",
		type: "item"
	},
	lab: {
		group: "production",
		icon_col: 11,
		icon_row: 7,
		localized_name: {
			en: "Lab"
		},
		name: "lab",
		order: "g[lab]",
		stack_size: 10,
		subgroup: "production-machine",
		type: "item"
	},
	"land-mine": {
		group: "combat",
		icon_col: 12,
		icon_row: 7,
		localized_name: {
			en: "Land mine"
		},
		name: "land-mine",
		order: "f[land-mine]",
		stack_size: 100,
		subgroup: "gun",
		type: "item"
	},
	landfill: {
		group: "logistics",
		icon_col: 13,
		icon_row: 7,
		localized_name: {
			en: "Landfill"
		},
		name: "landfill",
		order: "c[landfill]-a[dirt]",
		stack_size: 100,
		subgroup: "terrain",
		type: "item"
	},
	"laser-turret": {
		group: "combat",
		icon_col: 14,
		icon_row: 7,
		localized_name: {
			en: "Laser turret"
		},
		name: "laser-turret",
		order: "b[turret]-b[laser-turret]",
		stack_size: 50,
		subgroup: "defensive-structure",
		type: "item"
	},
	"light-armor": {
		group: "combat",
		icon_col: 0,
		icon_row: 8,
		localized_name: {
			en: "Light armor"
		},
		name: "light-armor",
		order: "a[light-armor]",
		stack_size: 1,
		subgroup: "armor",
		type: "armor"
	},
	"light-oil": {
		group: "other",
		icon_col: 1,
		icon_row: 8,
		localized_name: {
			en: "Light oil"
		},
		name: "light-oil",
		order: "a[fluid]-d[light-oil]",
		subgroup: "other",
		type: "fluid"
	},
	loader: {
		group: "logistics",
		icon_col: 3,
		icon_row: 8,
		localized_name: {
			en: "Loader"
		},
		name: "loader",
		order: "d[loader]-a[basic-loader]",
		stack_size: 50,
		subgroup: "belt",
		type: "item"
	},
	locomotive: {
		group: "logistics",
		icon_col: 4,
		icon_row: 8,
		localized_name: {
			en: "Locomotive"
		},
		name: "locomotive",
		order: "a[train-system]-f[locomotive]",
		stack_size: 5,
		subgroup: "train-transport",
		type: "item-with-entity-data"
	},
	"logistic-chest-active-provider": {
		group: "logistics",
		icon_col: 5,
		icon_row: 8,
		localized_name: {
			en: "Active provider chest"
		},
		name: "logistic-chest-active-provider",
		order: "b[storage]-c[logistic-chest-active-provider]",
		stack_size: 50,
		subgroup: "logistic-network",
		type: "item"
	},
	"logistic-chest-buffer": {
		group: "logistics",
		icon_col: 6,
		icon_row: 8,
		localized_name: {
			en: "Buffer chest"
		},
		name: "logistic-chest-buffer",
		order: "b[storage]-d[logistic-chest-buffer]",
		stack_size: 50,
		subgroup: "logistic-network",
		type: "item"
	},
	"logistic-chest-passive-provider": {
		group: "logistics",
		icon_col: 7,
		icon_row: 8,
		localized_name: {
			en: "Passive provider chest"
		},
		name: "logistic-chest-passive-provider",
		order: "b[storage]-c[logistic-chest-passive-provider]",
		stack_size: 50,
		subgroup: "logistic-network",
		type: "item"
	},
	"logistic-chest-requester": {
		group: "logistics",
		icon_col: 8,
		icon_row: 8,
		localized_name: {
			en: "Requester chest"
		},
		name: "logistic-chest-requester",
		order: "b[storage]-e[logistic-chest-requester]",
		stack_size: 50,
		subgroup: "logistic-network",
		type: "item"
	},
	"logistic-chest-storage": {
		group: "logistics",
		icon_col: 9,
		icon_row: 8,
		localized_name: {
			en: "Storage chest"
		},
		name: "logistic-chest-storage",
		order: "b[storage]-c[logistic-chest-storage]",
		stack_size: 50,
		subgroup: "logistic-network",
		type: "item"
	},
	"logistic-robot": {
		group: "logistics",
		icon_col: 10,
		icon_row: 8,
		localized_name: {
			en: "Logistic robot"
		},
		name: "logistic-robot",
		order: "a[robot]-a[logistic-robot]",
		stack_size: 50,
		subgroup: "logistic-network",
		type: "item"
	},
	"logistic-science-pack": {
		group: "intermediate-products",
		icon_col: 11,
		icon_row: 8,
		localized_name: {
			en: "Logistic science pack"
		},
		name: "logistic-science-pack",
		order: "b[logistic-science-pack]",
		stack_size: 200,
		subgroup: "science-pack",
		type: "tool"
	},
	"long-handed-inserter": {
		group: "logistics",
		icon_col: 12,
		icon_row: 8,
		localized_name: {
			en: "Long handed inserter"
		},
		name: "long-handed-inserter",
		order: "c[long-handed-inserter]",
		stack_size: 50,
		subgroup: "inserter",
		type: "item"
	},
	"low-density-structure": {
		group: "intermediate-products",
		icon_col: 13,
		icon_row: 8,
		localized_name: {
			en: "Low density structure"
		},
		name: "low-density-structure",
		order: "o[low-density-structure]",
		stack_size: 10,
		subgroup: "intermediate-product",
		type: "item"
	},
	lubricant: {
		group: "other",
		icon_col: 14,
		icon_row: 8,
		localized_name: {
			en: "Lubricant"
		},
		name: "lubricant",
		order: "e[lubricant]",
		subgroup: "other",
		type: "fluid"
	},
	"medium-electric-pole": {
		group: "logistics",
		icon_col: 0,
		icon_row: 9,
		localized_name: {
			en: "Medium electric pole"
		},
		name: "medium-electric-pole",
		order: "a[energy]-b[medium-electric-pole]",
		stack_size: 50,
		subgroup: "energy-pipe-distribution",
		type: "item"
	},
	"military-science-pack": {
		group: "intermediate-products",
		icon_col: 1,
		icon_row: 9,
		localized_name: {
			en: "Military science pack"
		},
		name: "military-science-pack",
		order: "c[military-science-pack]",
		stack_size: 200,
		subgroup: "science-pack",
		type: "tool"
	},
	"modular-armor": {
		group: "combat",
		icon_col: 2,
		icon_row: 9,
		localized_name: {
			en: "Modular armor"
		},
		name: "modular-armor",
		order: "c[modular-armor]",
		stack_size: 1,
		subgroup: "armor",
		type: "armor"
	},
	"night-vision-equipment": {
		group: "combat",
		icon_col: 3,
		icon_row: 9,
		localized_name: {
			en: "Nightvision"
		},
		name: "night-vision-equipment",
		order: "f[night-vision]-a[night-vision-equipment]",
		stack_size: 20,
		subgroup: "equipment",
		type: "item"
	},
	"nuclear-fuel": {
		fuel_category: "chemical",
		fuel_value: 1210000000,
		group: "intermediate-products",
		icon_col: 4,
		icon_row: 9,
		localized_name: {
			en: "Nuclear fuel"
		},
		name: "nuclear-fuel",
		order: "q[uranium-rocket-fuel]",
		stack_size: 1,
		subgroup: "intermediate-product",
		type: "item"
	},
	"nuclear-reactor": {
		group: "production",
		icon_col: 6,
		icon_row: 9,
		localized_name: {
			en: "Nuclear reactor"
		},
		name: "nuclear-reactor",
		order: "f[nuclear-energy]-a[reactor]",
		stack_size: 10,
		subgroup: "energy",
		type: "item"
	},
	"offshore-pump": {
		group: "production",
		icon_col: 7,
		icon_row: 9,
		localized_name: {
			en: "Offshore pump"
		},
		name: "offshore-pump",
		order: "b[fluids]-a[offshore-pump]",
		stack_size: 20,
		subgroup: "extraction-machine",
		type: "item"
	},
	"oil-refinery": {
		group: "production",
		icon_col: 8,
		icon_row: 9,
		localized_name: {
			en: "Oil refinery"
		},
		name: "oil-refinery",
		order: "d[refinery]",
		stack_size: 10,
		subgroup: "production-machine",
		type: "item"
	},
	"personal-laser-defense-equipment": {
		group: "combat",
		icon_col: 9,
		icon_row: 9,
		localized_name: {
			en: "Personal laser defense"
		},
		name: "personal-laser-defense-equipment",
		order: "b[active-defense]-a[personal-laser-defense-equipment]",
		stack_size: 20,
		subgroup: "military-equipment",
		type: "item"
	},
	"personal-roboport-equipment": {
		group: "combat",
		icon_col: 10,
		icon_row: 9,
		localized_name: {
			en: "Personal roboport"
		},
		name: "personal-roboport-equipment",
		order: "e[robotics]-a[personal-roboport-equipment]",
		stack_size: 20,
		subgroup: "equipment",
		type: "item"
	},
	"personal-roboport-mk2-equipment": {
		group: "combat",
		icon_col: 11,
		icon_row: 9,
		localized_name: {
			en: "Personal roboport MK2"
		},
		name: "personal-roboport-mk2-equipment",
		order: "e[robotics]-b[personal-roboport-mk2-equipment]",
		stack_size: 20,
		subgroup: "equipment",
		type: "item"
	},
	"petroleum-gas": {
		group: "other",
		icon_col: 12,
		icon_row: 9,
		localized_name: {
			en: "Petroleum gas"
		},
		name: "petroleum-gas",
		order: "a[fluid]-e[petroleum-gas]",
		subgroup: "other",
		type: "fluid"
	},
	"piercing-rounds-magazine": {
		group: "combat",
		icon_col: 13,
		icon_row: 9,
		localized_name: {
			en: "Piercing rounds magazine"
		},
		name: "piercing-rounds-magazine",
		order: "a[basic-clips]-b[piercing-rounds-magazine]",
		stack_size: 200,
		subgroup: "ammo",
		type: "ammo"
	},
	"piercing-shotgun-shell": {
		group: "combat",
		icon_col: 14,
		icon_row: 9,
		localized_name: {
			en: "Piercing shotgun shells"
		},
		name: "piercing-shotgun-shell",
		order: "b[shotgun]-b[piercing]",
		stack_size: 200,
		subgroup: "ammo",
		type: "ammo"
	},
	pipe: {
		group: "logistics",
		icon_col: 0,
		icon_row: 10,
		localized_name: {
			en: "Pipe"
		},
		name: "pipe",
		order: "a[pipe]-a[pipe]",
		stack_size: 100,
		subgroup: "energy-pipe-distribution",
		type: "item"
	},
	"pipe-to-ground": {
		group: "logistics",
		icon_col: 1,
		icon_row: 10,
		localized_name: {
			en: "Pipe to ground"
		},
		name: "pipe-to-ground",
		order: "a[pipe]-b[pipe-to-ground]",
		stack_size: 50,
		subgroup: "energy-pipe-distribution",
		type: "item"
	},
	pistol: {
		group: "combat",
		icon_col: 2,
		icon_row: 10,
		localized_name: {
			en: "Pistol"
		},
		name: "pistol",
		order: "a[basic-clips]-a[pistol]",
		stack_size: 5,
		subgroup: "gun",
		type: "gun"
	},
	"plastic-bar": {
		group: "intermediate-products",
		icon_col: 3,
		icon_row: 10,
		localized_name: {
			en: "Plastic bar"
		},
		name: "plastic-bar",
		order: "f[plastic-bar]",
		stack_size: 100,
		subgroup: "raw-material",
		type: "item"
	},
	"player-port": {
		group: "combat",
		icon_col: 4,
		icon_row: 10,
		localized_name: {
			en: "Player port"
		},
		name: "player-port",
		order: "z[not-used]",
		stack_size: 50,
		subgroup: "defensive-structure",
		type: "item"
	},
	"poison-capsule": {
		group: "combat",
		icon_col: 5,
		icon_row: 10,
		localized_name: {
			en: "Poison capsule"
		},
		name: "poison-capsule",
		order: "b[poison-capsule]",
		stack_size: 100,
		subgroup: "capsule",
		type: "capsule"
	},
	"power-armor": {
		group: "combat",
		icon_col: 6,
		icon_row: 10,
		localized_name: {
			en: "Power armor"
		},
		name: "power-armor",
		order: "d[power-armor]",
		stack_size: 1,
		subgroup: "armor",
		type: "armor"
	},
	"power-armor-mk2": {
		group: "combat",
		icon_col: 7,
		icon_row: 10,
		localized_name: {
			en: "Power armor MK2"
		},
		name: "power-armor-mk2",
		order: "e[power-armor-mk2]",
		stack_size: 1,
		subgroup: "armor",
		type: "armor"
	},
	"power-switch": {
		group: "logistics",
		icon_col: 8,
		icon_row: 10,
		localized_name: {
			en: "Power switch"
		},
		name: "power-switch",
		order: "d[other]-a[power-switch]",
		stack_size: 50,
		subgroup: "circuit-network",
		type: "item"
	},
	"processing-unit": {
		group: "intermediate-products",
		icon_col: 9,
		icon_row: 10,
		localized_name: {
			en: "Processing unit"
		},
		name: "processing-unit",
		order: "g[processing-unit]",
		stack_size: 100,
		subgroup: "intermediate-product",
		type: "item"
	},
	"production-science-pack": {
		group: "intermediate-products",
		icon_col: 10,
		icon_row: 10,
		localized_name: {
			en: "Production science pack"
		},
		name: "production-science-pack",
		order: "e[production-science-pack]",
		stack_size: 200,
		subgroup: "science-pack",
		type: "tool"
	},
	"productivity-module": {
		category: "productivity",
		effect: {
			consumption: {
				bonus: 0.4
			},
			pollution: {
				bonus: 0.05
			},
			productivity: {
				bonus: 0.04
			},
			speed: {
				bonus: -0.15
			}
		},
		group: "production",
		icon_col: 11,
		icon_row: 10,
		limitation: [
			"sulfuric-acid",
			"basic-oil-processing",
			"advanced-oil-processing",
			"coal-liquefaction",
			"heavy-oil-cracking",
			"light-oil-cracking",
			"solid-fuel-from-light-oil",
			"solid-fuel-from-heavy-oil",
			"solid-fuel-from-petroleum-gas",
			"lubricant",
			"iron-plate",
			"copper-plate",
			"steel-plate",
			"stone-brick",
			"sulfur",
			"plastic-bar",
			"empty-barrel",
			"uranium-processing",
			"copper-cable",
			"iron-stick",
			"iron-gear-wheel",
			"electronic-circuit",
			"advanced-circuit",
			"processing-unit",
			"engine-unit",
			"electric-engine-unit",
			"uranium-fuel-cell",
			"explosives",
			"battery",
			"flying-robot-frame",
			"low-density-structure",
			"rocket-fuel",
			"rocket-control-unit",
			"rocket-part",
			"automation-science-pack",
			"logistic-science-pack",
			"chemical-science-pack",
			"military-science-pack",
			"production-science-pack",
			"utility-science-pack",
			"kovarex-enrichment-process"
		],
		localized_name: {
			en: "Productivity module"
		},
		name: "productivity-module",
		order: "c[productivity]-a[productivity-module-1]",
		stack_size: 50,
		subgroup: "module",
		type: "module"
	},
	"productivity-module-2": {
		category: "productivity",
		effect: {
			consumption: {
				bonus: 0.6
			},
			pollution: {
				bonus: 0.07
			},
			productivity: {
				bonus: 0.06
			},
			speed: {
				bonus: -0.15
			}
		},
		group: "production",
		icon_col: 12,
		icon_row: 10,
		limitation: [
			"sulfuric-acid",
			"basic-oil-processing",
			"advanced-oil-processing",
			"coal-liquefaction",
			"heavy-oil-cracking",
			"light-oil-cracking",
			"solid-fuel-from-light-oil",
			"solid-fuel-from-heavy-oil",
			"solid-fuel-from-petroleum-gas",
			"lubricant",
			"iron-plate",
			"copper-plate",
			"steel-plate",
			"stone-brick",
			"sulfur",
			"plastic-bar",
			"empty-barrel",
			"uranium-processing",
			"copper-cable",
			"iron-stick",
			"iron-gear-wheel",
			"electronic-circuit",
			"advanced-circuit",
			"processing-unit",
			"engine-unit",
			"electric-engine-unit",
			"uranium-fuel-cell",
			"explosives",
			"battery",
			"flying-robot-frame",
			"low-density-structure",
			"rocket-fuel",
			"rocket-control-unit",
			"rocket-part",
			"automation-science-pack",
			"logistic-science-pack",
			"chemical-science-pack",
			"military-science-pack",
			"production-science-pack",
			"utility-science-pack",
			"kovarex-enrichment-process"
		],
		localized_name: {
			en: "Productivity module 2"
		},
		name: "productivity-module-2",
		order: "c[productivity]-b[productivity-module-2]",
		stack_size: 50,
		subgroup: "module",
		type: "module"
	},
	"productivity-module-3": {
		category: "productivity",
		effect: {
			consumption: {
				bonus: 0.8
			},
			pollution: {
				bonus: 0.1
			},
			productivity: {
				bonus: 0.1
			},
			speed: {
				bonus: -0.15
			}
		},
		group: "production",
		icon_col: 13,
		icon_row: 10,
		limitation: [
			"sulfuric-acid",
			"basic-oil-processing",
			"advanced-oil-processing",
			"coal-liquefaction",
			"heavy-oil-cracking",
			"light-oil-cracking",
			"solid-fuel-from-light-oil",
			"solid-fuel-from-heavy-oil",
			"solid-fuel-from-petroleum-gas",
			"lubricant",
			"iron-plate",
			"copper-plate",
			"steel-plate",
			"stone-brick",
			"sulfur",
			"plastic-bar",
			"empty-barrel",
			"uranium-processing",
			"copper-cable",
			"iron-stick",
			"iron-gear-wheel",
			"electronic-circuit",
			"advanced-circuit",
			"processing-unit",
			"engine-unit",
			"electric-engine-unit",
			"uranium-fuel-cell",
			"explosives",
			"battery",
			"flying-robot-frame",
			"low-density-structure",
			"rocket-fuel",
			"rocket-control-unit",
			"rocket-part",
			"automation-science-pack",
			"logistic-science-pack",
			"chemical-science-pack",
			"military-science-pack",
			"production-science-pack",
			"utility-science-pack",
			"kovarex-enrichment-process"
		],
		localized_name: {
			en: "Productivity module 3"
		},
		name: "productivity-module-3",
		order: "c[productivity]-c[productivity-module-3]",
		stack_size: 50,
		subgroup: "module",
		type: "module"
	},
	"programmable-speaker": {
		group: "logistics",
		icon_col: 14,
		icon_row: 10,
		localized_name: {
			en: "Programmable speaker"
		},
		name: "programmable-speaker",
		order: "d[other]-b[programmable-speaker]",
		stack_size: 50,
		subgroup: "circuit-network",
		type: "item"
	},
	pump: {
		group: "logistics",
		icon_col: 0,
		icon_row: 11,
		localized_name: {
			en: "Pump"
		},
		name: "pump",
		order: "b[pipe]-c[pump]",
		stack_size: 50,
		subgroup: "energy-pipe-distribution",
		type: "item"
	},
	pumpjack: {
		group: "production",
		icon_col: 1,
		icon_row: 11,
		localized_name: {
			en: "Pumpjack"
		},
		name: "pumpjack",
		order: "b[fluids]-b[pumpjack]",
		stack_size: 20,
		subgroup: "extraction-machine",
		type: "item"
	},
	radar: {
		group: "combat",
		icon_col: 2,
		icon_row: 11,
		localized_name: {
			en: "Radar"
		},
		name: "radar",
		order: "d[radar]-a[radar]",
		stack_size: 50,
		subgroup: "defensive-structure",
		type: "item"
	},
	rail: {
		group: "logistics",
		icon_col: 3,
		icon_row: 11,
		localized_name: {
			en: "<dummy name>"
		},
		name: "rail",
		order: "a[train-system]-a[rail]",
		stack_size: 100,
		subgroup: "train-transport",
		type: "rail-planner"
	},
	"rail-chain-signal": {
		group: "logistics",
		icon_col: 4,
		icon_row: 11,
		localized_name: {
			en: "Rail chain signal"
		},
		name: "rail-chain-signal",
		order: "a[train-system]-e[rail-signal-chain]",
		stack_size: 50,
		subgroup: "train-transport",
		type: "item"
	},
	"rail-signal": {
		group: "logistics",
		icon_col: 5,
		icon_row: 11,
		localized_name: {
			en: "Rail signal"
		},
		name: "rail-signal",
		order: "a[train-system]-d[rail-signal]",
		stack_size: 50,
		subgroup: "train-transport",
		type: "item"
	},
	railgun: {
		group: "combat",
		icon_col: 6,
		icon_row: 11,
		localized_name: {
			en: "Railgun"
		},
		name: "railgun",
		order: "c[railgun]",
		stack_size: 5,
		subgroup: "gun",
		type: "gun"
	},
	"railgun-dart": {
		group: "combat",
		icon_col: 7,
		icon_row: 11,
		localized_name: {
			en: "Railgun darts"
		},
		name: "railgun-dart",
		order: "c[railgun]",
		stack_size: 200,
		subgroup: "ammo",
		type: "ammo"
	},
	"raw-fish": {
		group: "intermediate-products",
		icon_col: 0,
		icon_row: 6,
		localized_name: {
			en: "Raw fish"
		},
		name: "raw-fish",
		order: "h[raw-fish]",
		stack_size: 100,
		subgroup: "raw-resource",
		type: "capsule"
	},
	"red-wire": {
		group: "logistics",
		icon_col: 8,
		icon_row: 11,
		localized_name: {
			en: "Red wire"
		},
		name: "red-wire",
		order: "b[wires]-a[red-wire]",
		stack_size: 200,
		subgroup: "circuit-network",
		type: "item"
	},
	"refined-concrete": {
		group: "logistics",
		icon_col: 9,
		icon_row: 11,
		localized_name: {
			en: "Refined concrete"
		},
		name: "refined-concrete",
		order: "b[concrete]-c[refined]",
		stack_size: 100,
		subgroup: "terrain",
		type: "item"
	},
	"refined-hazard-concrete": {
		group: "logistics",
		icon_col: 10,
		icon_row: 11,
		localized_name: {
			en: "Refined hazard concrete"
		},
		name: "refined-hazard-concrete",
		order: "b[concrete]-d[refined-hazard]",
		stack_size: 100,
		subgroup: "terrain",
		type: "item"
	},
	"repair-pack": {
		group: "production",
		icon_col: 11,
		icon_row: 11,
		localized_name: {
			en: "Repair pack"
		},
		name: "repair-pack",
		order: "b[repair]-a[repair-pack]",
		stack_size: 100,
		subgroup: "tool",
		type: "repair-tool"
	},
	roboport: {
		group: "logistics",
		icon_col: 12,
		icon_row: 11,
		localized_name: {
			en: "Roboport"
		},
		name: "roboport",
		order: "c[signal]-a[roboport]",
		stack_size: 10,
		subgroup: "logistic-network",
		type: "item"
	},
	rocket: {
		group: "combat",
		icon_col: 13,
		icon_row: 11,
		localized_name: {
			en: "Rocket"
		},
		name: "rocket",
		order: "d[rocket-launcher]-a[basic]",
		stack_size: 200,
		subgroup: "ammo",
		type: "ammo"
	},
	"rocket-control-unit": {
		group: "intermediate-products",
		icon_col: 14,
		icon_row: 11,
		localized_name: {
			en: "Rocket control unit"
		},
		name: "rocket-control-unit",
		order: "n[rocket-control-unit]",
		stack_size: 10,
		subgroup: "intermediate-product",
		type: "item"
	},
	"rocket-fuel": {
		fuel_category: "chemical",
		fuel_value: 100000000,
		group: "intermediate-products",
		icon_col: 0,
		icon_row: 12,
		localized_name: {
			en: "Rocket fuel"
		},
		name: "rocket-fuel",
		order: "p[rocket-fuel]",
		stack_size: 10,
		subgroup: "intermediate-product",
		type: "item"
	},
	"rocket-launcher": {
		group: "combat",
		icon_col: 1,
		icon_row: 12,
		localized_name: {
			en: "Rocket launcher"
		},
		name: "rocket-launcher",
		order: "d[rocket-launcher]",
		stack_size: 5,
		subgroup: "gun",
		type: "gun"
	},
	"rocket-part": {
		group: "intermediate-products",
		icon_col: 2,
		icon_row: 12,
		localized_name: {
			en: "Rocket part"
		},
		name: "rocket-part",
		order: "q[rocket-part]",
		stack_size: 5,
		subgroup: "intermediate-product",
		type: "item"
	},
	"rocket-silo": {
		group: "combat",
		icon_col: 3,
		icon_row: 12,
		localized_name: {
			en: "Rocket silo"
		},
		name: "rocket-silo",
		order: "e[rocket-silo]",
		stack_size: 1,
		subgroup: "defensive-structure",
		type: "item"
	},
	satellite: {
		group: "intermediate-products",
		icon_col: 4,
		icon_row: 12,
		localized_name: {
			en: "Satellite"
		},
		name: "satellite",
		order: "m[satellite]",
		stack_size: 1,
		subgroup: "intermediate-product",
		type: "item"
	},
	shotgun: {
		group: "combat",
		icon_col: 5,
		icon_row: 12,
		localized_name: {
			en: "Shotgun"
		},
		name: "shotgun",
		order: "b[shotgun]-a[basic]",
		stack_size: 5,
		subgroup: "gun",
		type: "gun"
	},
	"shotgun-shell": {
		group: "combat",
		icon_col: 6,
		icon_row: 12,
		localized_name: {
			en: "Shotgun shells"
		},
		name: "shotgun-shell",
		order: "b[shotgun]-a[basic]",
		stack_size: 200,
		subgroup: "ammo",
		type: "ammo"
	},
	"simple-entity-with-force": {
		group: "other",
		icon_col: 0,
		icon_row: 14,
		localized_name: {
			en: "Simple entity with force"
		},
		name: "simple-entity-with-force",
		order: "s[simple-entity-with-force]-f[simple-entity-with-force]",
		stack_size: 50,
		subgroup: "other",
		type: "item"
	},
	"simple-entity-with-owner": {
		group: "other",
		icon_col: 14,
		icon_row: 15,
		localized_name: {
			en: "Simple entity with owner"
		},
		name: "simple-entity-with-owner",
		order: "s[simple-entity-with-owner]-o[simple-entity-with-owner]",
		stack_size: 50,
		subgroup: "other",
		type: "item"
	},
	"slowdown-capsule": {
		group: "combat",
		icon_col: 8,
		icon_row: 12,
		localized_name: {
			en: "Slowdown capsule"
		},
		name: "slowdown-capsule",
		order: "c[slowdown-capsule]",
		stack_size: 100,
		subgroup: "capsule",
		type: "capsule"
	},
	"small-electric-pole": {
		group: "logistics",
		icon_col: 9,
		icon_row: 12,
		localized_name: {
			en: "Small electric pole"
		},
		name: "small-electric-pole",
		order: "a[energy]-a[small-electric-pole]",
		stack_size: 50,
		subgroup: "energy-pipe-distribution",
		type: "item"
	},
	"small-lamp": {
		group: "logistics",
		icon_col: 10,
		icon_row: 12,
		localized_name: {
			en: "Lamp"
		},
		name: "small-lamp",
		order: "a[light]-a[small-lamp]",
		stack_size: 50,
		subgroup: "circuit-network",
		type: "item"
	},
	"small-plane": {
		group: "logistics",
		icon_col: 11,
		icon_row: 12,
		localized_name: {
			en: "Small plane"
		},
		name: "small-plane",
		order: "b[personal-transport]-x[small-plane]",
		stack_size: 1,
		subgroup: "transport",
		type: "item"
	},
	"solar-panel": {
		group: "production",
		icon_col: 12,
		icon_row: 12,
		localized_name: {
			en: "Solar panel"
		},
		name: "solar-panel",
		order: "d[solar-panel]-a[solar-panel]",
		stack_size: 50,
		subgroup: "energy",
		type: "item"
	},
	"solar-panel-equipment": {
		group: "combat",
		icon_col: 13,
		icon_row: 12,
		localized_name: {
			en: "Portable solar panel"
		},
		name: "solar-panel-equipment",
		order: "a[energy-source]-a[solar-panel]",
		stack_size: 20,
		subgroup: "equipment",
		type: "item"
	},
	"solid-fuel": {
		fuel_category: "chemical",
		fuel_value: 12000000,
		group: "intermediate-products",
		icon_col: 14,
		icon_row: 12,
		localized_name: {
			en: "Solid fuel"
		},
		name: "solid-fuel",
		order: "c[solid-fuel]",
		stack_size: 50,
		subgroup: "raw-material",
		type: "item"
	},
	"space-science-pack": {
		group: "intermediate-products",
		icon_col: 3,
		icon_row: 13,
		localized_name: {
			en: "Space science pack"
		},
		name: "space-science-pack",
		order: "g[space-science-pack]",
		stack_size: 2000,
		subgroup: "science-pack",
		type: "tool"
	},
	"speed-module": {
		category: "speed",
		effect: {
			consumption: {
				bonus: 0.5
			},
			speed: {
				bonus: 0.2
			}
		},
		group: "production",
		icon_col: 4,
		icon_row: 13,
		localized_name: {
			en: "Speed module"
		},
		name: "speed-module",
		order: "a[speed]-a[speed-module-1]",
		stack_size: 50,
		subgroup: "module",
		type: "module"
	},
	"speed-module-2": {
		category: "speed",
		effect: {
			consumption: {
				bonus: 0.6
			},
			speed: {
				bonus: 0.3
			}
		},
		group: "production",
		icon_col: 5,
		icon_row: 13,
		localized_name: {
			en: "Speed module 2"
		},
		name: "speed-module-2",
		order: "a[speed]-b[speed-module-2]",
		stack_size: 50,
		subgroup: "module",
		type: "module"
	},
	"speed-module-3": {
		category: "speed",
		effect: {
			consumption: {
				bonus: 0.7
			},
			speed: {
				bonus: 0.5
			}
		},
		group: "production",
		icon_col: 6,
		icon_row: 13,
		localized_name: {
			en: "Speed module 3"
		},
		name: "speed-module-3",
		order: "a[speed]-c[speed-module-3]",
		stack_size: 50,
		subgroup: "module",
		type: "module"
	},
	spidertron: {
		group: "logistics",
		icon_col: 7,
		icon_row: 13,
		localized_name: {
			en: "Spidertron"
		},
		name: "spidertron",
		order: "b[personal-transport]-c[spidertron]-a[spider]",
		stack_size: 1,
		subgroup: "transport",
		type: "item-with-entity-data"
	},
	"spidertron-rocket-launcher-1": {
		group: "combat",
		icon_col: 1,
		icon_row: 12,
		localized_name: {
			en: "<dummy name>"
		},
		name: "spidertron-rocket-launcher-1",
		order: "z[spider]-a[rocket-launcher]",
		stack_size: 1,
		subgroup: "gun",
		type: "gun"
	},
	"spidertron-rocket-launcher-2": {
		group: "combat",
		icon_col: 1,
		icon_row: 12,
		localized_name: {
			en: "<dummy name>"
		},
		name: "spidertron-rocket-launcher-2",
		order: "z[spider]-a[rocket-launcher]",
		stack_size: 1,
		subgroup: "gun",
		type: "gun"
	},
	"spidertron-rocket-launcher-3": {
		group: "combat",
		icon_col: 1,
		icon_row: 12,
		localized_name: {
			en: "<dummy name>"
		},
		name: "spidertron-rocket-launcher-3",
		order: "z[spider]-a[rocket-launcher]",
		stack_size: 1,
		subgroup: "gun",
		type: "gun"
	},
	"spidertron-rocket-launcher-4": {
		group: "combat",
		icon_col: 1,
		icon_row: 12,
		localized_name: {
			en: "<dummy name>"
		},
		name: "spidertron-rocket-launcher-4",
		order: "z[spider]-a[rocket-launcher]",
		stack_size: 1,
		subgroup: "gun",
		type: "gun"
	},
	splitter: {
		group: "logistics",
		icon_col: 8,
		icon_row: 13,
		localized_name: {
			en: "Splitter"
		},
		name: "splitter",
		order: "c[splitter]-a[splitter]",
		stack_size: 50,
		subgroup: "belt",
		type: "item"
	},
	"stack-filter-inserter": {
		group: "logistics",
		icon_col: 9,
		icon_row: 13,
		localized_name: {
			en: "Stack filter inserter"
		},
		name: "stack-filter-inserter",
		order: "g[stack-filter-inserter]",
		stack_size: 50,
		subgroup: "inserter",
		type: "item"
	},
	"stack-inserter": {
		group: "logistics",
		icon_col: 10,
		icon_row: 13,
		localized_name: {
			en: "Stack inserter"
		},
		name: "stack-inserter",
		order: "f[stack-inserter]",
		stack_size: 50,
		subgroup: "inserter",
		type: "item"
	},
	steam: {
		group: "other",
		icon_col: 11,
		icon_row: 13,
		localized_name: {
			en: "Steam"
		},
		name: "steam",
		order: "a[fluid]-b[steam]",
		subgroup: "other",
		type: "fluid"
	},
	"steam-engine": {
		group: "production",
		icon_col: 12,
		icon_row: 13,
		localized_name: {
			en: "Steam engine"
		},
		name: "steam-engine",
		order: "b[steam-power]-b[steam-engine]",
		stack_size: 10,
		subgroup: "energy",
		type: "item"
	},
	"steam-turbine": {
		group: "production",
		icon_col: 13,
		icon_row: 13,
		localized_name: {
			en: "Steam turbine"
		},
		name: "steam-turbine",
		order: "f[nuclear-energy]-d[steam-turbine]",
		stack_size: 10,
		subgroup: "energy",
		type: "item"
	},
	"steel-chest": {
		group: "logistics",
		icon_col: 0,
		icon_row: 14,
		localized_name: {
			en: "Steel chest"
		},
		name: "steel-chest",
		order: "a[items]-c[steel-chest]",
		stack_size: 50,
		subgroup: "storage",
		type: "item"
	},
	"steel-furnace": {
		group: "production",
		icon_col: 1,
		icon_row: 14,
		localized_name: {
			en: "Steel furnace"
		},
		name: "steel-furnace",
		order: "b[steel-furnace]",
		stack_size: 50,
		subgroup: "smelting-machine",
		type: "item"
	},
	"steel-plate": {
		group: "intermediate-products",
		icon_col: 2,
		icon_row: 14,
		localized_name: {
			en: "Steel plate"
		},
		name: "steel-plate",
		order: "d[steel-plate]",
		stack_size: 100,
		subgroup: "raw-material",
		type: "item"
	},
	stone: {
		group: "intermediate-products",
		icon_col: 3,
		icon_row: 14,
		localized_name: {
			en: "Stone"
		},
		name: "stone",
		order: "d[stone]",
		stack_size: 50,
		subgroup: "raw-resource",
		type: "item"
	},
	"stone-brick": {
		group: "logistics",
		icon_col: 4,
		icon_row: 14,
		localized_name: {
			en: "Stone brick"
		},
		name: "stone-brick",
		order: "a[stone-brick]",
		stack_size: 100,
		subgroup: "terrain",
		type: "item"
	},
	"stone-furnace": {
		group: "production",
		icon_col: 5,
		icon_row: 14,
		localized_name: {
			en: "Stone furnace"
		},
		name: "stone-furnace",
		order: "a[stone-furnace]",
		stack_size: 50,
		subgroup: "smelting-machine",
		type: "item"
	},
	"stone-wall": {
		group: "combat",
		icon_col: 11,
		icon_row: 15,
		localized_name: {
			en: "Wall"
		},
		name: "stone-wall",
		order: "a[stone-wall]-a[stone-wall]",
		stack_size: 100,
		subgroup: "defensive-structure",
		type: "item"
	},
	"storage-tank": {
		group: "logistics",
		icon_col: 6,
		icon_row: 14,
		localized_name: {
			en: "Storage tank"
		},
		name: "storage-tank",
		order: "b[fluid]-a[storage-tank]",
		stack_size: 50,
		subgroup: "storage",
		type: "item"
	},
	"submachine-gun": {
		group: "combat",
		icon_col: 7,
		icon_row: 14,
		localized_name: {
			en: "Submachine gun"
		},
		name: "submachine-gun",
		order: "a[basic-clips]-b[submachine-gun]",
		stack_size: 5,
		subgroup: "gun",
		type: "gun"
	},
	substation: {
		group: "logistics",
		icon_col: 8,
		icon_row: 14,
		localized_name: {
			en: "Substation"
		},
		name: "substation",
		order: "a[energy]-d[substation]",
		stack_size: 50,
		subgroup: "energy-pipe-distribution",
		type: "item"
	},
	sulfur: {
		group: "intermediate-products",
		icon_col: 9,
		icon_row: 14,
		localized_name: {
			en: "Sulfur"
		},
		name: "sulfur",
		order: "g[sulfur]",
		stack_size: 50,
		subgroup: "raw-material",
		type: "item"
	},
	"sulfuric-acid": {
		group: "other",
		icon_col: 10,
		icon_row: 14,
		localized_name: {
			en: "Sulfuric acid"
		},
		name: "sulfuric-acid",
		order: "a[fluid]-f[sulfuric-acid]",
		subgroup: "other",
		type: "fluid"
	},
	tank: {
		group: "logistics",
		icon_col: 11,
		icon_row: 14,
		localized_name: {
			en: "Tank"
		},
		name: "tank",
		order: "b[personal-transport]-b[tank]",
		stack_size: 1,
		subgroup: "transport",
		type: "item-with-entity-data"
	},
	"tank-cannon": {
		group: "combat",
		icon_col: 12,
		icon_row: 14,
		localized_name: {
			en: "Tank cannon"
		},
		name: "tank-cannon",
		order: "z[tank]-a[cannon]",
		stack_size: 5,
		subgroup: "gun",
		type: "gun"
	},
	"tank-flamethrower": {
		group: "combat",
		icon_col: 1,
		icon_row: 6,
		localized_name: {
			en: "Vehicle flamethrower"
		},
		name: "tank-flamethrower",
		order: "b[flamethrower]-b[tank-flamethrower]",
		stack_size: 1,
		subgroup: "gun",
		type: "gun"
	},
	"tank-machine-gun": {
		group: "combat",
		icon_col: 7,
		icon_row: 14,
		localized_name: {
			en: "Vehicle machine gun"
		},
		name: "tank-machine-gun",
		order: "a[basic-clips]-b[tank-machine-gun]",
		stack_size: 1,
		subgroup: "gun",
		type: "gun"
	},
	"train-stop": {
		group: "logistics",
		icon_col: 13,
		icon_row: 14,
		localized_name: {
			en: "Train stop"
		},
		name: "train-stop",
		order: "a[train-system]-c[train-stop]",
		stack_size: 10,
		subgroup: "train-transport",
		type: "item"
	},
	"transport-belt": {
		group: "logistics",
		icon_col: 14,
		icon_row: 14,
		localized_name: {
			en: "Transport belt"
		},
		name: "transport-belt",
		order: "a[transport-belt]-a[transport-belt]",
		stack_size: 100,
		subgroup: "belt",
		type: "item"
	},
	"underground-belt": {
		group: "logistics",
		icon_col: 0,
		icon_row: 15,
		localized_name: {
			en: "Underground belt"
		},
		name: "underground-belt",
		order: "b[underground-belt]-a[underground-belt]",
		stack_size: 50,
		subgroup: "belt",
		type: "item"
	},
	"uranium-235": {
		group: "intermediate-products",
		icon_col: 2,
		icon_row: 15,
		localized_name: {
			en: "Uranium-235"
		},
		name: "uranium-235",
		order: "r[uranium-235]",
		stack_size: 100,
		subgroup: "intermediate-product",
		type: "item"
	},
	"uranium-238": {
		group: "intermediate-products",
		icon_col: 3,
		icon_row: 15,
		localized_name: {
			en: "Uranium-238"
		},
		name: "uranium-238",
		order: "r[uranium-238]",
		stack_size: 100,
		subgroup: "intermediate-product",
		type: "item"
	},
	"uranium-cannon-shell": {
		group: "combat",
		icon_col: 4,
		icon_row: 15,
		localized_name: {
			en: "Uranium cannon shell"
		},
		name: "uranium-cannon-shell",
		order: "d[cannon-shell]-c[uranium]",
		stack_size: 200,
		subgroup: "ammo",
		type: "ammo"
	},
	"uranium-fuel-cell": {
		fuel_category: "nuclear",
		fuel_value: 8000000000,
		group: "intermediate-products",
		icon_col: 5,
		icon_row: 15,
		localized_name: {
			en: "Uranium fuel cell"
		},
		name: "uranium-fuel-cell",
		order: "r[uranium-processing]-a[uranium-fuel-cell]",
		stack_size: 50,
		subgroup: "intermediate-product",
		type: "item"
	},
	"uranium-ore": {
		group: "intermediate-products",
		icon_col: 6,
		icon_row: 15,
		localized_name: {
			en: "Uranium ore"
		},
		name: "uranium-ore",
		order: "g[uranium-ore]",
		stack_size: 50,
		subgroup: "raw-resource",
		type: "item"
	},
	"uranium-rounds-magazine": {
		group: "combat",
		icon_col: 8,
		icon_row: 15,
		localized_name: {
			en: "Uranium rounds magazine"
		},
		name: "uranium-rounds-magazine",
		order: "a[basic-clips]-c[uranium-rounds-magazine]",
		stack_size: 200,
		subgroup: "ammo",
		type: "ammo"
	},
	"used-up-uranium-fuel-cell": {
		group: "intermediate-products",
		icon_col: 9,
		icon_row: 15,
		localized_name: {
			en: "Used-up uranium fuel cell"
		},
		name: "used-up-uranium-fuel-cell",
		order: "r[used-up-uranium-fuel-cell]",
		stack_size: 50,
		subgroup: "intermediate-product",
		type: "item"
	},
	"utility-science-pack": {
		group: "intermediate-products",
		icon_col: 10,
		icon_row: 15,
		localized_name: {
			en: "Utility science pack"
		},
		name: "utility-science-pack",
		order: "f[utility-science-pack]",
		stack_size: 200,
		subgroup: "science-pack",
		type: "tool"
	},
	"vehicle-machine-gun": {
		group: "combat",
		icon_col: 7,
		icon_row: 14,
		localized_name: {
			en: "Vehicle machine gun"
		},
		name: "vehicle-machine-gun",
		order: "a[basic-clips]-b[vehicle-machine-gun]",
		stack_size: 1,
		subgroup: "gun",
		type: "gun"
	},
	water: {
		group: "other",
		icon_col: 12,
		icon_row: 15,
		localized_name: {
			en: "Water"
		},
		name: "water",
		order: "a[fluid]-a[water]",
		subgroup: "other",
		type: "fluid"
	},
	wood: {
		fuel_category: "chemical",
		fuel_value: 2000000,
		group: "intermediate-products",
		icon_col: 13,
		icon_row: 15,
		localized_name: {
			en: "Wood"
		},
		name: "wood",
		order: "a[wood]",
		stack_size: 100,
		subgroup: "raw-resource",
		type: "item"
	},
	"wooden-chest": {
		group: "logistics",
		icon_col: 14,
		icon_row: 15,
		localized_name: {
			en: "Wooden chest"
		},
		name: "wooden-chest",
		order: "a[items]-a[wooden-chest]",
		stack_size: 50,
		subgroup: "storage",
		type: "item"
	}
};
var modules = [
	"effectivity-module",
	"effectivity-module-2",
	"effectivity-module-3",
	"productivity-module",
	"productivity-module-2",
	"productivity-module-3",
	"speed-module",
	"speed-module-2",
	"speed-module-3"
];
var reactor = {
	"nuclear-reactor": {
		consumption: "40MW",
		icon_col: 6,
		icon_row: 9,
		localized_name: {
			en: "Nuclear reactor"
		},
		name: "nuclear-reactor"
	}
};
var recipes = {
	accumulator: {
		category: "crafting",
		enabled: false,
		energy_required: 10,
		icon_col: 0,
		icon_row: 0,
		ingredients: [
			{
				amount: 2,
				name: "iron-plate"
			},
			{
				amount: 5,
				name: "battery"
			}
		],
		localized_name: {
			en: "Accumulator"
		},
		name: "accumulator",
		order: "e[accumulator]-a[accumulator]",
		results: [
			{
				amount: 1,
				name: "accumulator"
			}
		],
		subgroup: "energy",
		type: "recipe"
	},
	"advanced-circuit": {
		category: "crafting",
		enabled: false,
		energy_required: 6,
		icon_col: 1,
		icon_row: 0,
		ingredients: [
			{
				amount: 2,
				name: "electronic-circuit"
			},
			{
				amount: 2,
				name: "plastic-bar"
			},
			{
				amount: 4,
				name: "copper-cable"
			}
		],
		localized_name: {
			en: "Advanced circuit"
		},
		name: "advanced-circuit",
		order: "f[advanced-circuit]",
		results: [
			{
				amount: 1,
				name: "advanced-circuit"
			}
		],
		subgroup: "intermediate-product",
		type: "recipe"
	},
	"advanced-oil-processing": {
		category: "oil-processing",
		enabled: false,
		energy_required: 5,
		icon_col: 2,
		icon_mipmaps: 4,
		icon_row: 0,
		icon_size: 64,
		ingredients: [
			{
				amount: 50,
				name: "water",
				type: "fluid"
			},
			{
				amount: 100,
				name: "crude-oil",
				type: "fluid"
			}
		],
		localized_name: {
			en: "Advanced oil processing"
		},
		name: "advanced-oil-processing",
		order: "a[oil-processing]-b[advanced-oil-processing]",
		results: [
			{
				amount: 25,
				name: "heavy-oil",
				type: "fluid"
			},
			{
				amount: 45,
				name: "light-oil",
				type: "fluid"
			},
			{
				amount: 55,
				name: "petroleum-gas",
				type: "fluid"
			}
		],
		subgroup: "fluid-recipes",
		type: "recipe"
	},
	"arithmetic-combinator": {
		category: "crafting",
		enabled: false,
		energy_required: 0.5,
		icon_col: 3,
		icon_row: 0,
		ingredients: [
			{
				amount: 5,
				name: "copper-cable"
			},
			{
				amount: 5,
				name: "electronic-circuit"
			}
		],
		localized_name: {
			en: "Arithmetic combinator"
		},
		name: "arithmetic-combinator",
		order: "c[combinators]-a[arithmetic-combinator]",
		results: [
			{
				amount: 1,
				name: "arithmetic-combinator"
			}
		],
		subgroup: "circuit-network",
		type: "recipe"
	},
	"artillery-shell": {
		category: "crafting",
		enabled: false,
		energy_required: 15,
		icon_col: 4,
		icon_row: 0,
		ingredients: [
			{
				amount: 4,
				name: "explosive-cannon-shell"
			},
			{
				amount: 1,
				name: "radar"
			},
			{
				amount: 8,
				name: "explosives"
			}
		],
		localized_name: {
			en: "Artillery shell"
		},
		name: "artillery-shell",
		order: "d[explosive-cannon-shell]-d[artillery]",
		results: [
			{
				amount: 1,
				name: "artillery-shell"
			}
		],
		subgroup: "ammo",
		type: "recipe"
	},
	"artillery-targeting-remote": {
		category: "crafting",
		enabled: false,
		energy_required: 0.5,
		icon_col: 5,
		icon_row: 0,
		ingredients: [
			{
				amount: 1,
				name: "processing-unit"
			},
			{
				amount: 1,
				name: "radar"
			}
		],
		localized_name: {
			en: "Artillery targeting remote"
		},
		name: "artillery-targeting-remote",
		order: "b[turret]-d[artillery-turret]-b[remote]",
		results: [
			{
				amount: 1,
				name: "artillery-targeting-remote"
			}
		],
		subgroup: "defensive-structure",
		type: "recipe"
	},
	"artillery-turret": {
		category: "crafting",
		enabled: false,
		energy_required: 40,
		icon_col: 6,
		icon_row: 0,
		ingredients: [
			{
				amount: 60,
				name: "steel-plate"
			},
			{
				amount: 60,
				name: "concrete"
			},
			{
				amount: 40,
				name: "iron-gear-wheel"
			},
			{
				amount: 20,
				name: "advanced-circuit"
			}
		],
		localized_name: {
			en: "Artillery turret"
		},
		name: "artillery-turret",
		order: "b[turret]-d[artillery-turret]-a[turret]",
		results: [
			{
				amount: 1,
				name: "artillery-turret"
			}
		],
		subgroup: "defensive-structure",
		type: "recipe"
	},
	"artillery-wagon": {
		category: "crafting",
		enabled: false,
		energy_required: 4,
		icon_col: 7,
		icon_row: 0,
		ingredients: [
			{
				amount: 64,
				name: "engine-unit"
			},
			{
				amount: 10,
				name: "iron-gear-wheel"
			},
			{
				amount: 40,
				name: "steel-plate"
			},
			{
				amount: 16,
				name: "pipe"
			},
			{
				amount: 20,
				name: "advanced-circuit"
			}
		],
		localized_name: {
			en: "Artillery wagon"
		},
		name: "artillery-wagon",
		order: "a[train-system]-i[artillery-wagon]",
		results: [
			{
				amount: 1,
				name: "artillery-wagon"
			}
		],
		subgroup: "train-transport",
		type: "recipe"
	},
	"assembling-machine-1": {
		category: "crafting",
		enabled: false,
		energy_required: 0.5,
		icon_col: 8,
		icon_row: 0,
		ingredients: [
			{
				amount: 3,
				name: "electronic-circuit"
			},
			{
				amount: 5,
				name: "iron-gear-wheel"
			},
			{
				amount: 9,
				name: "iron-plate"
			}
		],
		localized_name: {
			en: "Assembling machine 1"
		},
		name: "assembling-machine-1",
		order: "a[assembling-machine-1]",
		results: [
			{
				amount: 1,
				name: "assembling-machine-1"
			}
		],
		subgroup: "production-machine",
		type: "recipe"
	},
	"assembling-machine-2": {
		category: "crafting",
		enabled: false,
		energy_required: 0.5,
		icon_col: 9,
		icon_row: 0,
		ingredients: [
			{
				amount: 2,
				name: "steel-plate"
			},
			{
				amount: 3,
				name: "electronic-circuit"
			},
			{
				amount: 5,
				name: "iron-gear-wheel"
			},
			{
				amount: 1,
				name: "assembling-machine-1"
			}
		],
		localized_name: {
			en: "Assembling machine 2"
		},
		name: "assembling-machine-2",
		order: "b[assembling-machine-2]",
		results: [
			{
				amount: 1,
				name: "assembling-machine-2"
			}
		],
		subgroup: "production-machine",
		type: "recipe"
	},
	"assembling-machine-3": {
		category: "crafting",
		enabled: false,
		energy_required: 0.5,
		icon_col: 10,
		icon_row: 0,
		ingredients: [
			{
				amount: 4,
				name: "speed-module"
			},
			{
				amount: 2,
				name: "assembling-machine-2"
			}
		],
		localized_name: {
			en: "Assembling machine 3"
		},
		name: "assembling-machine-3",
		order: "c[assembling-machine-3]",
		results: [
			{
				amount: 1,
				name: "assembling-machine-3"
			}
		],
		subgroup: "production-machine",
		type: "recipe"
	},
	"atomic-bomb": {
		category: "crafting",
		enabled: false,
		energy_required: 50,
		icon_col: 11,
		icon_row: 0,
		ingredients: [
			{
				amount: 10,
				name: "rocket-control-unit"
			},
			{
				amount: 10,
				name: "explosives"
			},
			{
				amount: 30,
				name: "uranium-235"
			}
		],
		localized_name: {
			en: "Atomic bomb"
		},
		name: "atomic-bomb",
		order: "d[rocket-launcher]-c[atomic-bomb]",
		results: [
			{
				amount: 1,
				name: "atomic-bomb"
			}
		],
		subgroup: "ammo",
		type: "recipe"
	},
	"automation-science-pack": {
		category: "crafting",
		energy_required: 5,
		icon_col: 12,
		icon_row: 0,
		ingredients: [
			{
				amount: 1,
				name: "copper-plate"
			},
			{
				amount: 1,
				name: "iron-gear-wheel"
			}
		],
		localized_name: {
			en: "Automation science pack"
		},
		name: "automation-science-pack",
		order: "a[automation-science-pack]",
		results: [
			{
				amount: 1,
				name: "automation-science-pack"
			}
		],
		subgroup: "science-pack",
		type: "recipe"
	},
	"basic-oil-processing": {
		category: "oil-processing",
		enabled: false,
		energy_required: 5,
		icon_col: 13,
		icon_mipmaps: 4,
		icon_row: 0,
		icon_size: 64,
		ingredients: [
			{
				amount: 100,
				fluidbox_index: 2,
				name: "crude-oil",
				type: "fluid"
			}
		],
		localized_name: {
			en: "Basic oil processing"
		},
		main_product: "",
		name: "basic-oil-processing",
		order: "a[oil-processing]-a[basic-oil-processing]",
		results: [
			{
				amount: 45,
				fluidbox_index: 3,
				name: "petroleum-gas",
				type: "fluid"
			}
		],
		subgroup: "fluid-recipes",
		type: "recipe"
	},
	battery: {
		category: "chemistry",
		crafting_machine_tint: {
			primary: {
				a: 1,
				b: 0.338,
				g: 0.482,
				r: 0.965
			},
			quaternary: {
				a: 1,
				b: 0.191,
				g: 0.763,
				r: 0.939
			},
			secondary: {
				a: 1,
				b: 0.222,
				g: 0.56,
				r: 0.831
			},
			tertiary: {
				a: 1,
				b: 0.443,
				g: 0.818,
				r: 0.728
			}
		},
		enabled: false,
		energy_required: 4,
		icon_col: 14,
		icon_row: 0,
		ingredients: [
			{
				amount: 20,
				name: "sulfuric-acid",
				type: "fluid"
			},
			{
				amount: 1,
				name: "iron-plate"
			},
			{
				amount: 1,
				name: "copper-plate"
			}
		],
		localized_name: {
			en: "Battery"
		},
		name: "battery",
		order: "h[battery]",
		results: [
			{
				amount: 1,
				name: "battery"
			}
		],
		subgroup: "raw-material",
		type: "recipe"
	},
	"battery-equipment": {
		category: "crafting",
		enabled: false,
		energy_required: 10,
		icon_col: 0,
		icon_row: 1,
		ingredients: [
			{
				amount: 5,
				name: "battery"
			},
			{
				amount: 10,
				name: "steel-plate"
			}
		],
		localized_name: {
			en: "Personal battery"
		},
		name: "battery-equipment",
		order: "b[battery]-a[battery-equipment]",
		results: [
			{
				amount: 1,
				name: "battery-equipment"
			}
		],
		subgroup: "equipment",
		type: "recipe"
	},
	"battery-mk2-equipment": {
		category: "crafting",
		enabled: false,
		energy_required: 10,
		icon_col: 1,
		icon_row: 1,
		ingredients: [
			{
				amount: 10,
				name: "battery-equipment"
			},
			{
				amount: 15,
				name: "processing-unit"
			},
			{
				amount: 5,
				name: "low-density-structure"
			}
		],
		localized_name: {
			en: "Personal battery MK2"
		},
		name: "battery-mk2-equipment",
		order: "b[battery]-b[battery-equipment-mk2]",
		results: [
			{
				amount: 1,
				name: "battery-mk2-equipment"
			}
		],
		subgroup: "equipment",
		type: "recipe"
	},
	beacon: {
		category: "crafting",
		enabled: false,
		energy_required: 15,
		icon_col: 2,
		icon_row: 1,
		ingredients: [
			{
				amount: 20,
				name: "electronic-circuit"
			},
			{
				amount: 20,
				name: "advanced-circuit"
			},
			{
				amount: 10,
				name: "steel-plate"
			},
			{
				amount: 10,
				name: "copper-cable"
			}
		],
		localized_name: {
			en: "Beacon"
		},
		name: "beacon",
		order: "a[beacon]",
		results: [
			{
				amount: 1,
				name: "beacon"
			}
		],
		subgroup: "module",
		type: "recipe"
	},
	"belt-immunity-equipment": {
		category: "crafting",
		enabled: false,
		energy_required: 10,
		icon_col: 3,
		icon_row: 1,
		ingredients: [
			{
				amount: 5,
				name: "advanced-circuit"
			},
			{
				amount: 10,
				name: "steel-plate"
			}
		],
		localized_name: {
			en: "Belt immunity equipment"
		},
		name: "belt-immunity-equipment",
		order: "c[belt-immunity]-a[belt-immunity]",
		results: [
			{
				amount: 1,
				name: "belt-immunity-equipment"
			}
		],
		subgroup: "equipment",
		type: "recipe"
	},
	"big-electric-pole": {
		category: "crafting",
		enabled: false,
		energy_required: 0.5,
		icon_col: 4,
		icon_row: 1,
		ingredients: [
			{
				amount: 8,
				name: "iron-stick"
			},
			{
				amount: 5,
				name: "steel-plate"
			},
			{
				amount: 5,
				name: "copper-plate"
			}
		],
		localized_name: {
			en: "Big electric pole"
		},
		name: "big-electric-pole",
		order: "a[energy]-c[big-electric-pole]",
		results: [
			{
				amount: 1,
				name: "big-electric-pole"
			}
		],
		subgroup: "energy-pipe-distribution",
		type: "recipe"
	},
	boiler: {
		category: "crafting",
		energy_required: 0.5,
		icon_col: 7,
		icon_row: 1,
		ingredients: [
			{
				amount: 1,
				name: "stone-furnace"
			},
			{
				amount: 4,
				name: "pipe"
			}
		],
		localized_name: {
			en: "Boiler"
		},
		name: "boiler",
		order: "b[steam-power]-a[boiler]",
		results: [
			{
				amount: 1,
				name: "boiler"
			}
		],
		subgroup: "energy",
		type: "recipe"
	},
	"burner-inserter": {
		category: "crafting",
		energy_required: 0.5,
		icon_col: 8,
		icon_row: 1,
		ingredients: [
			{
				amount: 1,
				name: "iron-plate"
			},
			{
				amount: 1,
				name: "iron-gear-wheel"
			}
		],
		localized_name: {
			en: "Burner inserter"
		},
		name: "burner-inserter",
		order: "a[burner-inserter]",
		results: [
			{
				amount: 1,
				name: "burner-inserter"
			}
		],
		subgroup: "inserter",
		type: "recipe"
	},
	"burner-mining-drill": {
		category: "crafting",
		energy_required: 2,
		icon_col: 9,
		icon_row: 1,
		ingredients: [
			{
				amount: 3,
				name: "iron-gear-wheel"
			},
			{
				amount: 1,
				name: "stone-furnace"
			},
			{
				amount: 3,
				name: "iron-plate"
			}
		],
		localized_name: {
			en: "Burner mining drill"
		},
		name: "burner-mining-drill",
		order: "a[items]-a[burner-mining-drill]",
		results: [
			{
				amount: 1,
				name: "burner-mining-drill"
			}
		],
		subgroup: "extraction-machine",
		type: "recipe"
	},
	"cannon-shell": {
		category: "crafting",
		enabled: false,
		energy_required: 8,
		icon_col: 10,
		icon_row: 1,
		ingredients: [
			{
				amount: 2,
				name: "steel-plate"
			},
			{
				amount: 2,
				name: "plastic-bar"
			},
			{
				amount: 1,
				name: "explosives"
			}
		],
		localized_name: {
			en: "Cannon shell"
		},
		name: "cannon-shell",
		order: "d[cannon-shell]-a[basic]",
		results: [
			{
				amount: 1,
				name: "cannon-shell"
			}
		],
		subgroup: "ammo",
		type: "recipe"
	},
	car: {
		category: "crafting",
		enabled: false,
		energy_required: 2,
		icon_col: 11,
		icon_row: 1,
		ingredients: [
			{
				amount: 8,
				name: "engine-unit"
			},
			{
				amount: 20,
				name: "iron-plate"
			},
			{
				amount: 5,
				name: "steel-plate"
			}
		],
		localized_name: {
			en: "Car"
		},
		name: "car",
		order: "b[personal-transport]-a[car]",
		results: [
			{
				amount: 1,
				name: "car"
			}
		],
		subgroup: "transport",
		type: "recipe"
	},
	"cargo-wagon": {
		category: "crafting",
		enabled: false,
		energy_required: 1,
		icon_col: 12,
		icon_row: 1,
		ingredients: [
			{
				amount: 10,
				name: "iron-gear-wheel"
			},
			{
				amount: 20,
				name: "iron-plate"
			},
			{
				amount: 20,
				name: "steel-plate"
			}
		],
		localized_name: {
			en: "Cargo wagon"
		},
		name: "cargo-wagon",
		order: "a[train-system]-g[cargo-wagon]",
		results: [
			{
				amount: 1,
				name: "cargo-wagon"
			}
		],
		subgroup: "train-transport",
		type: "recipe"
	},
	centrifuge: {
		category: "crafting",
		enabled: false,
		energy_required: 4,
		icon_col: 13,
		icon_row: 1,
		ingredients: [
			{
				amount: 100,
				name: "concrete"
			},
			{
				amount: 50,
				name: "steel-plate"
			},
			{
				amount: 100,
				name: "advanced-circuit"
			},
			{
				amount: 100,
				name: "iron-gear-wheel"
			}
		],
		localized_name: {
			en: "Centrifuge"
		},
		name: "centrifuge",
		order: "g[centrifuge]",
		requester_paste_multiplier: 10,
		results: [
			{
				amount: 1,
				name: "centrifuge"
			}
		],
		subgroup: "production-machine",
		type: "recipe"
	},
	"chemical-plant": {
		category: "crafting",
		enabled: false,
		energy_required: 5,
		icon_col: 14,
		icon_row: 1,
		ingredients: [
			{
				amount: 5,
				name: "steel-plate"
			},
			{
				amount: 5,
				name: "iron-gear-wheel"
			},
			{
				amount: 5,
				name: "electronic-circuit"
			},
			{
				amount: 5,
				name: "pipe"
			}
		],
		localized_name: {
			en: "Chemical plant"
		},
		name: "chemical-plant",
		order: "e[chemical-plant]",
		results: [
			{
				amount: 1,
				name: "chemical-plant"
			}
		],
		subgroup: "production-machine",
		type: "recipe"
	},
	"chemical-science-pack": {
		category: "crafting",
		enabled: false,
		energy_required: 24,
		icon_col: 0,
		icon_row: 2,
		ingredients: [
			{
				amount: 2,
				name: "engine-unit"
			},
			{
				amount: 3,
				name: "advanced-circuit"
			},
			{
				amount: 1,
				name: "sulfur"
			}
		],
		localized_name: {
			en: "Chemical science pack"
		},
		name: "chemical-science-pack",
		order: "d[chemical-science-pack]",
		results: [
			{
				amount: 2,
				name: "chemical-science-pack"
			}
		],
		subgroup: "science-pack",
		type: "recipe"
	},
	"cliff-explosives": {
		category: "crafting",
		enabled: false,
		energy_required: 8,
		icon_col: 1,
		icon_row: 2,
		ingredients: [
			{
				amount: 10,
				name: "explosives"
			},
			{
				amount: 1,
				name: "grenade"
			},
			{
				amount: 1,
				name: "empty-barrel"
			}
		],
		localized_name: {
			en: "Cliff explosives"
		},
		name: "cliff-explosives",
		order: "d[cliff-explosives]",
		results: [
			{
				amount: 1,
				name: "cliff-explosives"
			}
		],
		subgroup: "terrain",
		type: "recipe"
	},
	"cluster-grenade": {
		category: "crafting",
		enabled: false,
		energy_required: 8,
		icon_col: 3,
		icon_row: 2,
		ingredients: [
			{
				amount: 7,
				name: "grenade"
			},
			{
				amount: 5,
				name: "explosives"
			},
			{
				amount: 5,
				name: "steel-plate"
			}
		],
		localized_name: {
			en: "Cluster grenade"
		},
		name: "cluster-grenade",
		order: "a[grenade]-b[cluster]",
		results: [
			{
				amount: 1,
				name: "cluster-grenade"
			}
		],
		subgroup: "capsule",
		type: "recipe"
	},
	"coal-liquefaction": {
		allow_decomposition: false,
		category: "oil-processing",
		enabled: false,
		energy_required: 5,
		icon_col: 5,
		icon_mipmaps: 4,
		icon_row: 2,
		icon_size: 64,
		ingredients: [
			{
				amount: 10,
				name: "coal",
				type: "item"
			},
			{
				amount: 25,
				name: "heavy-oil",
				type: "fluid"
			},
			{
				amount: 50,
				name: "steam",
				type: "fluid"
			}
		],
		localized_name: {
			en: "Coal liquefaction"
		},
		name: "coal-liquefaction",
		order: "a[oil-processing]-c[coal-liquefaction]",
		results: [
			{
				amount: 90,
				name: "heavy-oil",
				type: "fluid"
			},
			{
				amount: 20,
				name: "light-oil",
				type: "fluid"
			},
			{
				amount: 10,
				name: "petroleum-gas",
				type: "fluid"
			}
		],
		subgroup: "fluid-recipes",
		type: "recipe"
	},
	"combat-shotgun": {
		category: "crafting",
		enabled: false,
		energy_required: 10,
		icon_col: 7,
		icon_row: 2,
		ingredients: [
			{
				amount: 15,
				name: "steel-plate"
			},
			{
				amount: 5,
				name: "iron-gear-wheel"
			},
			{
				amount: 10,
				name: "copper-plate"
			},
			{
				amount: 10,
				name: "wood"
			}
		],
		localized_name: {
			en: "Combat shotgun"
		},
		name: "combat-shotgun",
		order: "b[shotgun]-a[combat]",
		results: [
			{
				amount: 1,
				name: "combat-shotgun"
			}
		],
		subgroup: "gun",
		type: "recipe"
	},
	concrete: {
		category: "crafting-with-fluid",
		enabled: false,
		energy_required: 10,
		icon_col: 9,
		icon_row: 2,
		ingredients: [
			{
				amount: 5,
				name: "stone-brick"
			},
			{
				amount: 1,
				name: "iron-ore"
			},
			{
				amount: 100,
				name: "water",
				type: "fluid"
			}
		],
		localized_name: {
			en: "Concrete"
		},
		name: "concrete",
		order: "b[concrete]-a[plain]",
		results: [
			{
				amount: 10,
				name: "concrete"
			}
		],
		subgroup: "terrain",
		type: "recipe"
	},
	"constant-combinator": {
		category: "crafting",
		enabled: false,
		energy_required: 0.5,
		icon_col: 10,
		icon_row: 2,
		ingredients: [
			{
				amount: 5,
				name: "copper-cable"
			},
			{
				amount: 2,
				name: "electronic-circuit"
			}
		],
		localized_name: {
			en: "Constant combinator"
		},
		name: "constant-combinator",
		order: "c[combinators]-c[constant-combinator]",
		results: [
			{
				amount: 1,
				name: "constant-combinator"
			}
		],
		subgroup: "circuit-network",
		type: "recipe"
	},
	"construction-robot": {
		category: "crafting",
		enabled: false,
		energy_required: 0.5,
		icon_col: 11,
		icon_row: 2,
		ingredients: [
			{
				amount: 1,
				name: "flying-robot-frame"
			},
			{
				amount: 2,
				name: "electronic-circuit"
			}
		],
		localized_name: {
			en: "Construction robot"
		},
		name: "construction-robot",
		order: "a[robot]-b[construction-robot]",
		results: [
			{
				amount: 1,
				name: "construction-robot"
			}
		],
		subgroup: "logistic-network",
		type: "recipe"
	},
	"copper-cable": {
		category: "crafting",
		energy_required: 0.5,
		icon_col: 12,
		icon_row: 2,
		ingredients: [
			{
				amount: 1,
				name: "copper-plate"
			}
		],
		localized_name: {
			en: "Copper cable"
		},
		name: "copper-cable",
		order: "a[copper-cable]",
		results: [
			{
				amount: 2,
				name: "copper-cable"
			}
		],
		subgroup: "intermediate-product",
		type: "recipe"
	},
	"copper-plate": {
		category: "smelting",
		energy_required: 3.2,
		icon_col: 14,
		icon_row: 2,
		ingredients: [
			{
				amount: 1,
				name: "copper-ore"
			}
		],
		localized_name: {
			en: "Copper plate"
		},
		name: "copper-plate",
		order: "c[copper-plate]",
		results: [
			{
				amount: 1,
				name: "copper-plate"
			}
		],
		subgroup: "raw-material",
		type: "recipe"
	},
	"decider-combinator": {
		category: "crafting",
		enabled: false,
		energy_required: 0.5,
		icon_col: 11,
		icon_row: 3,
		ingredients: [
			{
				amount: 5,
				name: "copper-cable"
			},
			{
				amount: 5,
				name: "electronic-circuit"
			}
		],
		localized_name: {
			en: "Decider combinator"
		},
		name: "decider-combinator",
		order: "c[combinators]-b[decider-combinator]",
		results: [
			{
				amount: 1,
				name: "decider-combinator"
			}
		],
		subgroup: "circuit-network",
		type: "recipe"
	},
	"defender-capsule": {
		category: "crafting",
		enabled: false,
		energy_required: 8,
		icon_col: 13,
		icon_row: 3,
		ingredients: [
			{
				amount: 3,
				name: "piercing-rounds-magazine"
			},
			{
				amount: 3,
				name: "electronic-circuit"
			},
			{
				amount: 3,
				name: "iron-gear-wheel"
			}
		],
		localized_name: {
			en: "Defender capsule"
		},
		name: "defender-capsule",
		order: "d[defender-capsule]",
		results: [
			{
				amount: 1,
				name: "defender-capsule"
			}
		],
		subgroup: "capsule",
		type: "recipe"
	},
	"destroyer-capsule": {
		category: "crafting",
		enabled: false,
		energy_required: 15,
		icon_col: 14,
		icon_row: 3,
		ingredients: [
			{
				amount: 4,
				name: "distractor-capsule"
			},
			{
				amount: 1,
				name: "speed-module"
			}
		],
		localized_name: {
			en: "Destroyer capsule"
		},
		name: "destroyer-capsule",
		order: "f[destroyer-capsule]",
		results: [
			{
				amount: 1,
				name: "destroyer-capsule"
			}
		],
		subgroup: "capsule",
		type: "recipe"
	},
	"discharge-defense-equipment": {
		category: "crafting",
		enabled: false,
		energy_required: 10,
		icon_col: 0,
		icon_row: 4,
		ingredients: [
			{
				amount: 5,
				name: "processing-unit"
			},
			{
				amount: 20,
				name: "steel-plate"
			},
			{
				amount: 10,
				name: "laser-turret"
			}
		],
		localized_name: {
			en: "Discharge defense"
		},
		name: "discharge-defense-equipment",
		order: "b[active-defense]-b[discharge-defense-equipment]-a[equipment]",
		results: [
			{
				amount: 1,
				name: "discharge-defense-equipment"
			}
		],
		subgroup: "military-equipment",
		type: "recipe"
	},
	"discharge-defense-remote": {
		category: "crafting",
		enabled: false,
		energy_required: 0.5,
		icon_col: 1,
		icon_row: 4,
		ingredients: [
			{
				amount: 1,
				name: "electronic-circuit"
			}
		],
		localized_name: {
			en: "Discharge defense remote"
		},
		name: "discharge-defense-remote",
		order: "b[active-defense]-b[discharge-defense-equipment]-b[remote]",
		results: [
			{
				amount: 1,
				name: "discharge-defense-remote"
			}
		],
		subgroup: "military-equipment",
		type: "recipe"
	},
	"distractor-capsule": {
		category: "crafting",
		enabled: false,
		energy_required: 15,
		icon_col: 2,
		icon_row: 4,
		ingredients: [
			{
				amount: 4,
				name: "defender-capsule"
			},
			{
				amount: 3,
				name: "advanced-circuit"
			}
		],
		localized_name: {
			en: "Distractor capsule"
		},
		name: "distractor-capsule",
		order: "e[defender-capsule]",
		results: [
			{
				amount: 1,
				name: "distractor-capsule"
			}
		],
		subgroup: "capsule",
		type: "recipe"
	},
	"effectivity-module": {
		category: "crafting",
		enabled: false,
		energy_required: 15,
		icon_col: 3,
		icon_row: 4,
		ingredients: [
			{
				amount: 5,
				name: "advanced-circuit"
			},
			{
				amount: 5,
				name: "electronic-circuit"
			}
		],
		localized_name: {
			en: "Efficiency module"
		},
		name: "effectivity-module",
		order: "c[effectivity]-a[effectivity-module-1]",
		results: [
			{
				amount: 1,
				name: "effectivity-module"
			}
		],
		subgroup: "module",
		type: "recipe"
	},
	"effectivity-module-2": {
		category: "crafting",
		enabled: false,
		energy_required: 30,
		icon_col: 4,
		icon_row: 4,
		ingredients: [
			{
				amount: 4,
				name: "effectivity-module"
			},
			{
				amount: 5,
				name: "advanced-circuit"
			},
			{
				amount: 5,
				name: "processing-unit"
			}
		],
		localized_name: {
			en: "Efficiency module 2"
		},
		name: "effectivity-module-2",
		order: "c[effectivity]-b[effectivity-module-2]",
		results: [
			{
				amount: 1,
				name: "effectivity-module-2"
			}
		],
		subgroup: "module",
		type: "recipe"
	},
	"effectivity-module-3": {
		category: "crafting",
		enabled: false,
		energy_required: 60,
		icon_col: 5,
		icon_row: 4,
		ingredients: [
			{
				amount: 5,
				name: "effectivity-module-2"
			},
			{
				amount: 5,
				name: "advanced-circuit"
			},
			{
				amount: 5,
				name: "processing-unit"
			}
		],
		localized_name: {
			en: "Efficiency module 3"
		},
		name: "effectivity-module-3",
		order: "c[effectivity]-c[effectivity-module-3]",
		results: [
			{
				amount: 1,
				name: "effectivity-module-3"
			}
		],
		subgroup: "module",
		type: "recipe"
	},
	"electric-energy-interface": {
		category: "crafting",
		enabled: false,
		energy_required: 0.5,
		icon_col: 0,
		icon_row: 0,
		ingredients: [
			{
				amount: 2,
				name: "iron-plate"
			},
			{
				amount: 5,
				name: "electronic-circuit"
			}
		],
		localized_name: {
			en: "Electric energy interface"
		},
		name: "electric-energy-interface",
		order: "a[electric-energy-interface]-b[electric-energy-interface]",
		results: [
			{
				amount: 1,
				name: "electric-energy-interface"
			}
		],
		subgroup: "other",
		type: "recipe"
	},
	"electric-engine-unit": {
		category: "crafting-with-fluid",
		enabled: false,
		energy_required: 10,
		icon_col: 6,
		icon_row: 4,
		ingredients: [
			{
				amount: 1,
				name: "engine-unit"
			},
			{
				amount: 15,
				name: "lubricant",
				type: "fluid"
			},
			{
				amount: 2,
				name: "electronic-circuit"
			}
		],
		localized_name: {
			en: "Electric engine unit"
		},
		name: "electric-engine-unit",
		order: "i[electric-engine-unit]",
		results: [
			{
				amount: 1,
				name: "electric-engine-unit"
			}
		],
		subgroup: "intermediate-product",
		type: "recipe"
	},
	"electric-furnace": {
		category: "crafting",
		enabled: false,
		energy_required: 5,
		icon_col: 7,
		icon_row: 4,
		ingredients: [
			{
				amount: 10,
				name: "steel-plate"
			},
			{
				amount: 5,
				name: "advanced-circuit"
			},
			{
				amount: 10,
				name: "stone-brick"
			}
		],
		localized_name: {
			en: "Electric furnace"
		},
		name: "electric-furnace",
		order: "c[electric-furnace]",
		results: [
			{
				amount: 1,
				name: "electric-furnace"
			}
		],
		subgroup: "smelting-machine",
		type: "recipe"
	},
	"electric-mining-drill": {
		category: "crafting",
		energy_required: 2,
		icon_col: 8,
		icon_row: 4,
		ingredients: [
			{
				amount: 3,
				name: "electronic-circuit"
			},
			{
				amount: 5,
				name: "iron-gear-wheel"
			},
			{
				amount: 10,
				name: "iron-plate"
			}
		],
		localized_name: {
			en: "Electric mining drill"
		},
		name: "electric-mining-drill",
		order: "a[items]-b[electric-mining-drill]",
		results: [
			{
				amount: 1,
				name: "electric-mining-drill"
			}
		],
		subgroup: "extraction-machine",
		type: "recipe"
	},
	"electronic-circuit": {
		category: "crafting",
		energy_required: 0.5,
		icon_col: 9,
		icon_row: 4,
		ingredients: [
			{
				amount: 1,
				name: "iron-plate"
			},
			{
				amount: 3,
				name: "copper-cable"
			}
		],
		localized_name: {
			en: "Electronic circuit"
		},
		name: "electronic-circuit",
		order: "e[electronic-circuit]",
		results: [
			{
				amount: 1,
				name: "electronic-circuit"
			}
		],
		subgroup: "intermediate-product",
		type: "recipe"
	},
	"empty-barrel": {
		category: "crafting",
		enabled: false,
		energy_required: 1,
		icon_col: 10,
		icon_row: 4,
		ingredients: [
			{
				amount: 1,
				name: "steel-plate",
				type: "item"
			}
		],
		localized_name: {
			en: "Empty barrel"
		},
		name: "empty-barrel",
		order: "d[empty-barrel]",
		results: [
			{
				amount: 1,
				name: "empty-barrel",
				type: "item"
			}
		],
		subgroup: "intermediate-product",
		type: "recipe"
	},
	"energy-shield-equipment": {
		category: "crafting",
		enabled: false,
		energy_required: 10,
		icon_col: 11,
		icon_row: 4,
		ingredients: [
			{
				amount: 5,
				name: "advanced-circuit"
			},
			{
				amount: 10,
				name: "steel-plate"
			}
		],
		localized_name: {
			en: "Energy shield"
		},
		name: "energy-shield-equipment",
		order: "a[shield]-a[energy-shield-equipment]",
		results: [
			{
				amount: 1,
				name: "energy-shield-equipment"
			}
		],
		subgroup: "military-equipment",
		type: "recipe"
	},
	"energy-shield-mk2-equipment": {
		category: "crafting",
		enabled: false,
		energy_required: 10,
		icon_col: 12,
		icon_row: 4,
		ingredients: [
			{
				amount: 10,
				name: "energy-shield-equipment"
			},
			{
				amount: 5,
				name: "processing-unit"
			},
			{
				amount: 5,
				name: "low-density-structure"
			}
		],
		localized_name: {
			en: "Energy shield MK2"
		},
		name: "energy-shield-mk2-equipment",
		order: "a[shield]-b[energy-shield-equipment-mk2]",
		results: [
			{
				amount: 1,
				name: "energy-shield-mk2-equipment"
			}
		],
		subgroup: "military-equipment",
		type: "recipe"
	},
	"engine-unit": {
		category: "advanced-crafting",
		enabled: false,
		energy_required: 10,
		icon_col: 13,
		icon_row: 4,
		ingredients: [
			{
				amount: 1,
				name: "steel-plate"
			},
			{
				amount: 1,
				name: "iron-gear-wheel"
			},
			{
				amount: 2,
				name: "pipe"
			}
		],
		localized_name: {
			en: "Engine unit"
		},
		name: "engine-unit",
		order: "h[engine-unit]",
		results: [
			{
				amount: 1,
				name: "engine-unit"
			}
		],
		subgroup: "intermediate-product",
		type: "recipe"
	},
	"exoskeleton-equipment": {
		category: "crafting",
		enabled: false,
		energy_required: 10,
		icon_col: 14,
		icon_row: 4,
		ingredients: [
			{
				amount: 10,
				name: "processing-unit"
			},
			{
				amount: 30,
				name: "electric-engine-unit"
			},
			{
				amount: 20,
				name: "steel-plate"
			}
		],
		localized_name: {
			en: "Exoskeleton"
		},
		name: "exoskeleton-equipment",
		order: "d[exoskeleton]-a[exoskeleton-equipment]",
		results: [
			{
				amount: 1,
				name: "exoskeleton-equipment"
			}
		],
		subgroup: "equipment",
		type: "recipe"
	},
	"explosive-cannon-shell": {
		category: "crafting",
		enabled: false,
		energy_required: 8,
		icon_col: 0,
		icon_row: 5,
		ingredients: [
			{
				amount: 2,
				name: "steel-plate"
			},
			{
				amount: 2,
				name: "plastic-bar"
			},
			{
				amount: 2,
				name: "explosives"
			}
		],
		localized_name: {
			en: "Explosive cannon shell"
		},
		name: "explosive-cannon-shell",
		order: "d[cannon-shell]-c[explosive]",
		results: [
			{
				amount: 1,
				name: "explosive-cannon-shell"
			}
		],
		subgroup: "ammo",
		type: "recipe"
	},
	"explosive-rocket": {
		category: "crafting",
		enabled: false,
		energy_required: 8,
		icon_col: 1,
		icon_row: 5,
		ingredients: [
			{
				amount: 1,
				name: "rocket"
			},
			{
				amount: 2,
				name: "explosives"
			}
		],
		localized_name: {
			en: "Explosive rocket"
		},
		name: "explosive-rocket",
		order: "d[rocket-launcher]-b[explosive]",
		results: [
			{
				amount: 1,
				name: "explosive-rocket"
			}
		],
		subgroup: "ammo",
		type: "recipe"
	},
	"explosive-uranium-cannon-shell": {
		category: "crafting",
		enabled: false,
		energy_required: 12,
		icon_col: 2,
		icon_row: 5,
		ingredients: [
			{
				amount: 1,
				name: "explosive-cannon-shell"
			},
			{
				amount: 1,
				name: "uranium-238"
			}
		],
		localized_name: {
			en: "Explosive uranium cannon shell"
		},
		name: "explosive-uranium-cannon-shell",
		order: "d[explosive-cannon-shell]-c[uranium]",
		results: [
			{
				amount: 1,
				name: "explosive-uranium-cannon-shell"
			}
		],
		subgroup: "ammo",
		type: "recipe"
	},
	explosives: {
		category: "chemistry",
		crafting_machine_tint: {
			primary: {
				a: 1,
				b: 0.259,
				g: 0.381,
				r: 0.968
			},
			quaternary: {
				a: 1,
				b: 0.013,
				g: 0.17,
				r: 0.21
			},
			secondary: {
				a: 1,
				b: 0.534,
				g: 0.664,
				r: 0.892
			},
			tertiary: {
				a: 1,
				b: 0.513,
				g: 0.978,
				r: 1
			}
		},
		enabled: false,
		energy_required: 4,
		icon_col: 3,
		icon_row: 5,
		ingredients: [
			{
				amount: 1,
				name: "sulfur",
				type: "item"
			},
			{
				amount: 1,
				name: "coal",
				type: "item"
			},
			{
				amount: 10,
				name: "water",
				type: "fluid"
			}
		],
		localized_name: {
			en: "Explosives"
		},
		name: "explosives",
		order: "j[explosives]",
		results: [
			{
				amount: 2,
				name: "explosives"
			}
		],
		subgroup: "raw-material",
		type: "recipe"
	},
	"express-loader": {
		category: "crafting",
		enabled: false,
		energy_required: 10,
		icon_col: 4,
		icon_row: 5,
		ingredients: [
			{
				amount: 5,
				name: "express-transport-belt"
			},
			{
				amount: 1,
				name: "fast-loader"
			}
		],
		localized_name: {
			en: "Express loader"
		},
		name: "express-loader",
		order: "d[loader]-c[express-loader]",
		results: [
			{
				amount: 1,
				name: "express-loader"
			}
		],
		subgroup: "belt",
		type: "recipe"
	},
	"express-splitter": {
		category: "crafting-with-fluid",
		enabled: false,
		energy_required: 2,
		icon_col: 5,
		icon_row: 5,
		ingredients: [
			{
				amount: 1,
				name: "fast-splitter"
			},
			{
				amount: 10,
				name: "iron-gear-wheel"
			},
			{
				amount: 10,
				name: "advanced-circuit"
			},
			{
				amount: 80,
				name: "lubricant",
				type: "fluid"
			}
		],
		localized_name: {
			en: "Express splitter"
		},
		name: "express-splitter",
		order: "c[splitter]-c[express-splitter]",
		results: [
			{
				amount: 1,
				name: "express-splitter"
			}
		],
		subgroup: "belt",
		type: "recipe"
	},
	"express-transport-belt": {
		category: "crafting-with-fluid",
		enabled: false,
		energy_required: 0.5,
		icon_col: 6,
		icon_row: 5,
		ingredients: [
			{
				amount: 10,
				name: "iron-gear-wheel"
			},
			{
				amount: 1,
				name: "fast-transport-belt"
			},
			{
				amount: 20,
				name: "lubricant",
				type: "fluid"
			}
		],
		localized_name: {
			en: "Express transport belt"
		},
		name: "express-transport-belt",
		order: "a[transport-belt]-c[express-transport-belt]",
		results: [
			{
				amount: 1,
				name: "express-transport-belt"
			}
		],
		subgroup: "belt",
		type: "recipe"
	},
	"express-underground-belt": {
		category: "crafting-with-fluid",
		enabled: false,
		energy_required: 2,
		icon_col: 7,
		icon_row: 5,
		ingredients: [
			{
				amount: 80,
				name: "iron-gear-wheel"
			},
			{
				amount: 2,
				name: "fast-underground-belt"
			},
			{
				amount: 40,
				name: "lubricant",
				type: "fluid"
			}
		],
		localized_name: {
			en: "Express underground belt"
		},
		name: "express-underground-belt",
		order: "b[underground-belt]-c[express-underground-belt]",
		results: [
			{
				amount: 2,
				name: "express-underground-belt"
			}
		],
		subgroup: "belt",
		type: "recipe"
	},
	"fast-inserter": {
		category: "crafting",
		enabled: false,
		energy_required: 0.5,
		icon_col: 8,
		icon_row: 5,
		ingredients: [
			{
				amount: 2,
				name: "electronic-circuit"
			},
			{
				amount: 2,
				name: "iron-plate"
			},
			{
				amount: 1,
				name: "inserter"
			}
		],
		localized_name: {
			en: "Fast inserter"
		},
		name: "fast-inserter",
		order: "d[fast-inserter]",
		results: [
			{
				amount: 1,
				name: "fast-inserter"
			}
		],
		subgroup: "inserter",
		type: "recipe"
	},
	"fast-loader": {
		category: "crafting",
		enabled: false,
		energy_required: 3,
		icon_col: 9,
		icon_row: 5,
		ingredients: [
			{
				amount: 5,
				name: "fast-transport-belt"
			},
			{
				amount: 1,
				name: "loader"
			}
		],
		localized_name: {
			en: "Fast loader"
		},
		name: "fast-loader",
		order: "d[loader]-b[fast-loader]",
		results: [
			{
				amount: 1,
				name: "fast-loader"
			}
		],
		subgroup: "belt",
		type: "recipe"
	},
	"fast-splitter": {
		category: "crafting",
		enabled: false,
		energy_required: 2,
		icon_col: 10,
		icon_row: 5,
		ingredients: [
			{
				amount: 1,
				name: "splitter"
			},
			{
				amount: 10,
				name: "iron-gear-wheel"
			},
			{
				amount: 10,
				name: "electronic-circuit"
			}
		],
		localized_name: {
			en: "Fast splitter"
		},
		name: "fast-splitter",
		order: "c[splitter]-b[fast-splitter]",
		results: [
			{
				amount: 1,
				name: "fast-splitter"
			}
		],
		subgroup: "belt",
		type: "recipe"
	},
	"fast-transport-belt": {
		category: "crafting",
		enabled: false,
		energy_required: 0.5,
		icon_col: 11,
		icon_row: 5,
		ingredients: [
			{
				amount: 5,
				name: "iron-gear-wheel"
			},
			{
				amount: 1,
				name: "transport-belt"
			}
		],
		localized_name: {
			en: "Fast transport belt"
		},
		name: "fast-transport-belt",
		order: "a[transport-belt]-b[fast-transport-belt]",
		results: [
			{
				amount: 1,
				name: "fast-transport-belt"
			}
		],
		subgroup: "belt",
		type: "recipe"
	},
	"fast-underground-belt": {
		category: "crafting",
		enabled: false,
		energy_required: 2,
		icon_col: 12,
		icon_row: 5,
		ingredients: [
			{
				amount: 40,
				name: "iron-gear-wheel"
			},
			{
				amount: 2,
				name: "underground-belt"
			}
		],
		localized_name: {
			en: "Fast underground belt"
		},
		name: "fast-underground-belt",
		order: "b[underground-belt]-b[fast-underground-belt]",
		results: [
			{
				amount: 2,
				name: "fast-underground-belt"
			}
		],
		subgroup: "belt",
		type: "recipe"
	},
	"filter-inserter": {
		category: "crafting",
		enabled: false,
		energy_required: 0.5,
		icon_col: 13,
		icon_row: 5,
		ingredients: [
			{
				amount: 1,
				name: "fast-inserter"
			},
			{
				amount: 4,
				name: "electronic-circuit"
			}
		],
		localized_name: {
			en: "Filter inserter"
		},
		name: "filter-inserter",
		order: "e[filter-inserter]",
		results: [
			{
				amount: 1,
				name: "filter-inserter"
			}
		],
		subgroup: "inserter",
		type: "recipe"
	},
	"firearm-magazine": {
		category: "crafting",
		energy_required: 1,
		icon_col: 14,
		icon_row: 5,
		ingredients: [
			{
				amount: 4,
				name: "iron-plate"
			}
		],
		localized_name: {
			en: "Firearm magazine"
		},
		name: "firearm-magazine",
		order: "a[basic-clips]-a[firearm-magazine]",
		results: [
			{
				amount: 1,
				name: "firearm-magazine"
			}
		],
		subgroup: "ammo",
		type: "recipe"
	},
	flamethrower: {
		category: "crafting",
		enabled: false,
		energy_required: 10,
		icon_col: 1,
		icon_row: 6,
		ingredients: [
			{
				amount: 5,
				name: "steel-plate"
			},
			{
				amount: 10,
				name: "iron-gear-wheel"
			}
		],
		localized_name: {
			en: "Flamethrower"
		},
		name: "flamethrower",
		order: "e[flamethrower]",
		results: [
			{
				amount: 1,
				name: "flamethrower"
			}
		],
		subgroup: "gun",
		type: "recipe"
	},
	"flamethrower-ammo": {
		category: "chemistry",
		crafting_machine_tint: {
			primary: {
				a: 1,
				b: 0.643,
				g: 0.735,
				r: 1
			},
			quaternary: {
				a: 1,
				b: 0.283,
				g: 0.283,
				r: 0.283
			},
			secondary: {
				a: 1,
				b: 0.49,
				g: 0.557,
				r: 0.749
			},
			tertiary: {
				a: 1,
				b: 0.637,
				g: 0.637,
				r: 0.637
			}
		},
		enabled: false,
		energy_required: 6,
		icon_col: 2,
		icon_row: 6,
		ingredients: [
			{
				amount: 5,
				name: "steel-plate",
				type: "item"
			},
			{
				amount: 100,
				name: "crude-oil",
				type: "fluid"
			}
		],
		localized_name: {
			en: "Flamethrower ammo"
		},
		name: "flamethrower-ammo",
		order: "e[flamethrower]",
		results: [
			{
				amount: 1,
				name: "flamethrower-ammo"
			}
		],
		subgroup: "ammo",
		type: "recipe"
	},
	"flamethrower-turret": {
		category: "crafting",
		enabled: false,
		energy_required: 20,
		icon_col: 3,
		icon_row: 6,
		ingredients: [
			{
				amount: 30,
				name: "steel-plate"
			},
			{
				amount: 15,
				name: "iron-gear-wheel"
			},
			{
				amount: 10,
				name: "pipe"
			},
			{
				amount: 5,
				name: "engine-unit"
			}
		],
		localized_name: {
			en: "Flamethrower turret"
		},
		name: "flamethrower-turret",
		order: "b[turret]-c[flamethrower-turret]",
		results: [
			{
				amount: 1,
				name: "flamethrower-turret"
			}
		],
		subgroup: "defensive-structure",
		type: "recipe"
	},
	"fluid-wagon": {
		category: "crafting",
		enabled: false,
		energy_required: 1.5,
		icon_col: 4,
		icon_row: 6,
		ingredients: [
			{
				amount: 10,
				name: "iron-gear-wheel"
			},
			{
				amount: 16,
				name: "steel-plate"
			},
			{
				amount: 8,
				name: "pipe"
			},
			{
				amount: 1,
				name: "storage-tank"
			}
		],
		localized_name: {
			en: "Fluid wagon"
		},
		name: "fluid-wagon",
		order: "a[train-system]-h[fluid-wagon]",
		results: [
			{
				amount: 1,
				name: "fluid-wagon"
			}
		],
		subgroup: "train-transport",
		type: "recipe"
	},
	"flying-robot-frame": {
		category: "crafting",
		enabled: false,
		energy_required: 20,
		icon_col: 5,
		icon_row: 6,
		ingredients: [
			{
				amount: 1,
				name: "electric-engine-unit"
			},
			{
				amount: 2,
				name: "battery"
			},
			{
				amount: 1,
				name: "steel-plate"
			},
			{
				amount: 3,
				name: "electronic-circuit"
			}
		],
		localized_name: {
			en: "Flying robot frame"
		},
		name: "flying-robot-frame",
		order: "l[flying-robot-frame]",
		results: [
			{
				amount: 1,
				name: "flying-robot-frame"
			}
		],
		subgroup: "intermediate-product",
		type: "recipe"
	},
	"fusion-reactor-equipment": {
		category: "crafting",
		enabled: false,
		energy_required: 10,
		icon_col: 6,
		icon_row: 6,
		ingredients: [
			{
				amount: 200,
				name: "processing-unit"
			},
			{
				amount: 50,
				name: "low-density-structure"
			}
		],
		localized_name: {
			en: "Portable fusion reactor"
		},
		name: "fusion-reactor-equipment",
		order: "a[energy-source]-b[fusion-reactor]",
		results: [
			{
				amount: 1,
				name: "fusion-reactor-equipment"
			}
		],
		subgroup: "equipment",
		type: "recipe"
	},
	gate: {
		category: "crafting",
		enabled: false,
		energy_required: 0.5,
		icon_col: 7,
		icon_row: 6,
		ingredients: [
			{
				amount: 1,
				name: "stone-wall"
			},
			{
				amount: 2,
				name: "steel-plate"
			},
			{
				amount: 2,
				name: "electronic-circuit"
			}
		],
		localized_name: {
			en: "Gate"
		},
		name: "gate",
		order: "a[wall]-b[gate]",
		results: [
			{
				amount: 1,
				name: "gate"
			}
		],
		subgroup: "defensive-structure",
		type: "recipe"
	},
	"green-wire": {
		category: "crafting",
		enabled: false,
		energy_required: 0.5,
		icon_col: 8,
		icon_row: 6,
		ingredients: [
			{
				amount: 1,
				name: "electronic-circuit"
			},
			{
				amount: 1,
				name: "copper-cable"
			}
		],
		localized_name: {
			en: "Green wire"
		},
		name: "green-wire",
		order: "b[wires]-b[green-wire]",
		results: [
			{
				amount: 1,
				name: "green-wire"
			}
		],
		subgroup: "circuit-network",
		type: "recipe"
	},
	grenade: {
		category: "crafting",
		enabled: false,
		energy_required: 8,
		icon_col: 9,
		icon_row: 6,
		ingredients: [
			{
				amount: 5,
				name: "iron-plate"
			},
			{
				amount: 10,
				name: "coal"
			}
		],
		localized_name: {
			en: "Grenade"
		},
		name: "grenade",
		order: "a[grenade]-a[normal]",
		results: [
			{
				amount: 1,
				name: "grenade"
			}
		],
		subgroup: "capsule",
		type: "recipe"
	},
	"gun-turret": {
		category: "crafting",
		enabled: false,
		energy_required: 8,
		icon_col: 10,
		icon_row: 6,
		ingredients: [
			{
				amount: 10,
				name: "iron-gear-wheel"
			},
			{
				amount: 10,
				name: "copper-plate"
			},
			{
				amount: 20,
				name: "iron-plate"
			}
		],
		localized_name: {
			en: "Gun turret"
		},
		name: "gun-turret",
		order: "b[turret]-a[gun-turret]",
		results: [
			{
				amount: 1,
				name: "gun-turret"
			}
		],
		subgroup: "defensive-structure",
		type: "recipe"
	},
	"hazard-concrete": {
		category: "crafting",
		enabled: false,
		energy_required: 0.25,
		icon_col: 11,
		icon_row: 6,
		ingredients: [
			{
				amount: 10,
				name: "concrete"
			}
		],
		localized_name: {
			en: "Hazard concrete"
		},
		name: "hazard-concrete",
		order: "b[concrete]-b[hazard]",
		results: [
			{
				amount: 10,
				name: "hazard-concrete"
			}
		],
		subgroup: "terrain",
		type: "recipe"
	},
	"heat-exchanger": {
		category: "crafting",
		enabled: false,
		energy_required: 3,
		icon_col: 12,
		icon_row: 6,
		ingredients: [
			{
				amount: 10,
				name: "steel-plate"
			},
			{
				amount: 100,
				name: "copper-plate"
			},
			{
				amount: 10,
				name: "pipe"
			}
		],
		localized_name: {
			en: "Heat exchanger"
		},
		name: "heat-exchanger",
		order: "f[nuclear-energy]-c[heat-exchanger]",
		results: [
			{
				amount: 1,
				name: "heat-exchanger"
			}
		],
		subgroup: "energy",
		type: "recipe"
	},
	"heat-pipe": {
		category: "crafting",
		enabled: false,
		energy_required: 1,
		icon_col: 14,
		icon_row: 6,
		ingredients: [
			{
				amount: 10,
				name: "steel-plate"
			},
			{
				amount: 20,
				name: "copper-plate"
			}
		],
		localized_name: {
			en: "Heat pipe"
		},
		name: "heat-pipe",
		order: "f[nuclear-energy]-b[heat-pipe]",
		results: [
			{
				amount: 1,
				name: "heat-pipe"
			}
		],
		subgroup: "energy",
		type: "recipe"
	},
	"heavy-armor": {
		category: "crafting",
		enabled: false,
		energy_required: 8,
		icon_col: 0,
		icon_row: 7,
		ingredients: [
			{
				amount: 100,
				name: "copper-plate"
			},
			{
				amount: 50,
				name: "steel-plate"
			}
		],
		localized_name: {
			en: "Heavy armor"
		},
		name: "heavy-armor",
		order: "b[heavy-armor]",
		results: [
			{
				amount: 1,
				name: "heavy-armor"
			}
		],
		subgroup: "armor",
		type: "recipe"
	},
	"heavy-oil-cracking": {
		category: "chemistry",
		crafting_machine_tint: {
			primary: {
				a: 1,
				b: 0.261,
				g: 0.642,
				r: 1
			},
			quaternary: {
				a: 1,
				b: 0.271,
				g: 0.494,
				r: 1
			},
			secondary: {
				a: 1,
				b: 0.376,
				g: 0.722,
				r: 1
			},
			tertiary: {
				a: 1,
				b: 0.576,
				g: 0.659,
				r: 0.854
			}
		},
		enabled: false,
		energy_required: 2,
		icon_col: 2,
		icon_mipmaps: 4,
		icon_row: 7,
		icon_size: 64,
		ingredients: [
			{
				amount: 30,
				name: "water",
				type: "fluid"
			},
			{
				amount: 40,
				name: "heavy-oil",
				type: "fluid"
			}
		],
		localized_name: {
			en: "Heavy oil cracking to light oil"
		},
		main_product: "",
		name: "heavy-oil-cracking",
		order: "b[fluid-chemistry]-a[heavy-oil-cracking]",
		results: [
			{
				amount: 30,
				name: "light-oil",
				type: "fluid"
			}
		],
		subgroup: "fluid-recipes",
		type: "recipe"
	},
	inserter: {
		category: "crafting",
		energy_required: 0.5,
		icon_col: 4,
		icon_row: 7,
		ingredients: [
			{
				amount: 1,
				name: "electronic-circuit"
			},
			{
				amount: 1,
				name: "iron-gear-wheel"
			},
			{
				amount: 1,
				name: "iron-plate"
			}
		],
		localized_name: {
			en: "Inserter"
		},
		name: "inserter",
		order: "b[inserter]",
		results: [
			{
				amount: 1,
				name: "inserter"
			}
		],
		subgroup: "inserter",
		type: "recipe"
	},
	"iron-chest": {
		category: "crafting",
		enabled: true,
		energy_required: 0.5,
		icon_col: 5,
		icon_row: 7,
		ingredients: [
			{
				amount: 8,
				name: "iron-plate"
			}
		],
		localized_name: {
			en: "Iron chest"
		},
		name: "iron-chest",
		order: "a[items]-b[iron-chest]",
		results: [
			{
				amount: 1,
				name: "iron-chest"
			}
		],
		subgroup: "storage",
		type: "recipe"
	},
	"iron-gear-wheel": {
		category: "crafting",
		energy_required: 0.5,
		icon_col: 6,
		icon_row: 7,
		ingredients: [
			{
				amount: 2,
				name: "iron-plate"
			}
		],
		localized_name: {
			en: "Iron gear wheel"
		},
		name: "iron-gear-wheel",
		order: "c[iron-gear-wheel]",
		results: [
			{
				amount: 1,
				name: "iron-gear-wheel"
			}
		],
		subgroup: "intermediate-product",
		type: "recipe"
	},
	"iron-plate": {
		category: "smelting",
		energy_required: 3.2,
		icon_col: 8,
		icon_row: 7,
		ingredients: [
			{
				amount: 1,
				name: "iron-ore"
			}
		],
		localized_name: {
			en: "Iron plate"
		},
		name: "iron-plate",
		order: "b[iron-plate]",
		results: [
			{
				amount: 1,
				name: "iron-plate"
			}
		],
		subgroup: "raw-material",
		type: "recipe"
	},
	"iron-stick": {
		category: "crafting",
		energy_required: 0.5,
		icon_col: 9,
		icon_row: 7,
		ingredients: [
			{
				amount: 1,
				name: "iron-plate"
			}
		],
		localized_name: {
			en: "Iron stick"
		},
		name: "iron-stick",
		order: "b[iron-stick]",
		results: [
			{
				amount: 2,
				name: "iron-stick"
			}
		],
		subgroup: "intermediate-product",
		type: "recipe"
	},
	"kovarex-enrichment-process": {
		allow_decomposition: false,
		category: "centrifuging",
		enabled: false,
		energy_required: 60,
		icon_col: 10,
		icon_mipmaps: 4,
		icon_row: 7,
		icon_size: 64,
		ingredients: [
			{
				amount: 40,
				name: "uranium-235"
			},
			{
				amount: 5,
				name: "uranium-238"
			}
		],
		localized_name: {
			en: "Kovarex enrichment process"
		},
		main_product: "",
		name: "kovarex-enrichment-process",
		order: "r[uranium-processing]-c[kovarex-enrichment-process]",
		results: [
			{
				amount: 41,
				name: "uranium-235"
			},
			{
				amount: 2,
				name: "uranium-238"
			}
		],
		subgroup: "intermediate-product",
		type: "recipe"
	},
	lab: {
		category: "crafting",
		energy_required: 2,
		icon_col: 11,
		icon_row: 7,
		ingredients: [
			{
				amount: 10,
				name: "electronic-circuit"
			},
			{
				amount: 10,
				name: "iron-gear-wheel"
			},
			{
				amount: 4,
				name: "transport-belt"
			}
		],
		localized_name: {
			en: "Lab"
		},
		name: "lab",
		order: "g[lab]",
		results: [
			{
				amount: 1,
				name: "lab"
			}
		],
		subgroup: "production-machine",
		type: "recipe"
	},
	"land-mine": {
		category: "crafting",
		enabled: false,
		energy_required: 5,
		icon_col: 12,
		icon_row: 7,
		ingredients: [
			{
				amount: 1,
				name: "steel-plate"
			},
			{
				amount: 2,
				name: "explosives"
			}
		],
		localized_name: {
			en: "Land mine"
		},
		name: "land-mine",
		order: "f[land-mine]",
		results: [
			{
				amount: 4,
				name: "land-mine"
			}
		],
		subgroup: "gun",
		type: "recipe"
	},
	landfill: {
		category: "crafting",
		enabled: false,
		energy_required: 0.5,
		icon_col: 13,
		icon_row: 7,
		ingredients: [
			{
				amount: 20,
				name: "stone"
			}
		],
		localized_name: {
			en: "Landfill"
		},
		name: "landfill",
		order: "c[landfill]-a[dirt]",
		results: [
			{
				amount: 1,
				name: "landfill"
			}
		],
		subgroup: "terrain",
		type: "recipe"
	},
	"laser-turret": {
		category: "crafting",
		enabled: false,
		energy_required: 20,
		icon_col: 14,
		icon_row: 7,
		ingredients: [
			{
				amount: 20,
				name: "steel-plate"
			},
			{
				amount: 20,
				name: "electronic-circuit"
			},
			{
				amount: 12,
				name: "battery"
			}
		],
		localized_name: {
			en: "Laser turret"
		},
		name: "laser-turret",
		order: "b[turret]-b[laser-turret]",
		results: [
			{
				amount: 1,
				name: "laser-turret"
			}
		],
		subgroup: "defensive-structure",
		type: "recipe"
	},
	"light-armor": {
		category: "crafting",
		enabled: true,
		energy_required: 3,
		icon_col: 0,
		icon_row: 8,
		ingredients: [
			{
				amount: 40,
				name: "iron-plate"
			}
		],
		localized_name: {
			en: "Light armor"
		},
		name: "light-armor",
		order: "a[light-armor]",
		results: [
			{
				amount: 1,
				name: "light-armor"
			}
		],
		subgroup: "armor",
		type: "recipe"
	},
	"light-oil-cracking": {
		category: "chemistry",
		crafting_machine_tint: {
			primary: {
				a: 1,
				b: 0.78,
				g: 0.596,
				r: 0.764
			},
			quaternary: {
				a: 1,
				b: 0.29,
				g: 0.734,
				r: 1
			},
			secondary: {
				a: 1,
				b: 0.844,
				g: 0.551,
				r: 0.762
			},
			tertiary: {
				a: 1,
				b: 0.596,
				g: 0.773,
				r: 0.895
			}
		},
		enabled: false,
		energy_required: 2,
		icon_col: 2,
		icon_mipmaps: 4,
		icon_row: 8,
		icon_size: 64,
		ingredients: [
			{
				amount: 30,
				name: "water",
				type: "fluid"
			},
			{
				amount: 30,
				name: "light-oil",
				type: "fluid"
			}
		],
		localized_name: {
			en: "Light oil cracking to petroleum gas"
		},
		main_product: "",
		name: "light-oil-cracking",
		order: "b[fluid-chemistry]-b[light-oil-cracking]",
		results: [
			{
				amount: 20,
				name: "petroleum-gas",
				type: "fluid"
			}
		],
		subgroup: "fluid-recipes",
		type: "recipe"
	},
	loader: {
		category: "crafting",
		enabled: false,
		energy_required: 1,
		icon_col: 3,
		icon_row: 8,
		ingredients: [
			{
				amount: 5,
				name: "inserter"
			},
			{
				amount: 5,
				name: "electronic-circuit"
			},
			{
				amount: 5,
				name: "iron-gear-wheel"
			},
			{
				amount: 5,
				name: "iron-plate"
			},
			{
				amount: 5,
				name: "transport-belt"
			}
		],
		localized_name: {
			en: "Loader"
		},
		name: "loader",
		order: "d[loader]-a[basic-loader]",
		results: [
			{
				amount: 1,
				name: "loader"
			}
		],
		subgroup: "belt",
		type: "recipe"
	},
	locomotive: {
		category: "crafting",
		enabled: false,
		energy_required: 4,
		icon_col: 4,
		icon_row: 8,
		ingredients: [
			{
				amount: 20,
				name: "engine-unit"
			},
			{
				amount: 10,
				name: "electronic-circuit"
			},
			{
				amount: 30,
				name: "steel-plate"
			}
		],
		localized_name: {
			en: "Locomotive"
		},
		name: "locomotive",
		order: "a[train-system]-f[locomotive]",
		results: [
			{
				amount: 1,
				name: "locomotive"
			}
		],
		subgroup: "train-transport",
		type: "recipe"
	},
	"logistic-chest-active-provider": {
		category: "crafting",
		enabled: false,
		energy_required: 0.5,
		icon_col: 5,
		icon_row: 8,
		ingredients: [
			{
				amount: 1,
				name: "steel-chest"
			},
			{
				amount: 3,
				name: "electronic-circuit"
			},
			{
				amount: 1,
				name: "advanced-circuit"
			}
		],
		localized_name: {
			en: "Active provider chest"
		},
		name: "logistic-chest-active-provider",
		order: "b[storage]-c[logistic-chest-active-provider]",
		results: [
			{
				amount: 1,
				name: "logistic-chest-active-provider"
			}
		],
		subgroup: "logistic-network",
		type: "recipe"
	},
	"logistic-chest-buffer": {
		category: "crafting",
		enabled: false,
		energy_required: 0.5,
		icon_col: 6,
		icon_row: 8,
		ingredients: [
			{
				amount: 1,
				name: "steel-chest"
			},
			{
				amount: 3,
				name: "electronic-circuit"
			},
			{
				amount: 1,
				name: "advanced-circuit"
			}
		],
		localized_name: {
			en: "Buffer chest"
		},
		name: "logistic-chest-buffer",
		order: "b[storage]-d[logistic-chest-buffer]",
		results: [
			{
				amount: 1,
				name: "logistic-chest-buffer"
			}
		],
		subgroup: "logistic-network",
		type: "recipe"
	},
	"logistic-chest-passive-provider": {
		category: "crafting",
		enabled: false,
		energy_required: 0.5,
		icon_col: 7,
		icon_row: 8,
		ingredients: [
			{
				amount: 1,
				name: "steel-chest"
			},
			{
				amount: 3,
				name: "electronic-circuit"
			},
			{
				amount: 1,
				name: "advanced-circuit"
			}
		],
		localized_name: {
			en: "Passive provider chest"
		},
		name: "logistic-chest-passive-provider",
		order: "b[storage]-c[logistic-chest-passive-provider]",
		results: [
			{
				amount: 1,
				name: "logistic-chest-passive-provider"
			}
		],
		subgroup: "logistic-network",
		type: "recipe"
	},
	"logistic-chest-requester": {
		category: "crafting",
		enabled: false,
		energy_required: 0.5,
		icon_col: 8,
		icon_row: 8,
		ingredients: [
			{
				amount: 1,
				name: "steel-chest"
			},
			{
				amount: 3,
				name: "electronic-circuit"
			},
			{
				amount: 1,
				name: "advanced-circuit"
			}
		],
		localized_name: {
			en: "Requester chest"
		},
		name: "logistic-chest-requester",
		order: "b[storage]-e[logistic-chest-requester]",
		results: [
			{
				amount: 1,
				name: "logistic-chest-requester"
			}
		],
		subgroup: "logistic-network",
		type: "recipe"
	},
	"logistic-chest-storage": {
		category: "crafting",
		enabled: false,
		energy_required: 0.5,
		icon_col: 9,
		icon_row: 8,
		ingredients: [
			{
				amount: 1,
				name: "steel-chest"
			},
			{
				amount: 3,
				name: "electronic-circuit"
			},
			{
				amount: 1,
				name: "advanced-circuit"
			}
		],
		localized_name: {
			en: "Storage chest"
		},
		name: "logistic-chest-storage",
		order: "b[storage]-c[logistic-chest-storage]",
		results: [
			{
				amount: 1,
				name: "logistic-chest-storage"
			}
		],
		subgroup: "logistic-network",
		type: "recipe"
	},
	"logistic-robot": {
		category: "crafting",
		enabled: false,
		energy_required: 0.5,
		icon_col: 10,
		icon_row: 8,
		ingredients: [
			{
				amount: 1,
				name: "flying-robot-frame"
			},
			{
				amount: 2,
				name: "advanced-circuit"
			}
		],
		localized_name: {
			en: "Logistic robot"
		},
		name: "logistic-robot",
		order: "a[robot]-a[logistic-robot]",
		results: [
			{
				amount: 1,
				name: "logistic-robot"
			}
		],
		subgroup: "logistic-network",
		type: "recipe"
	},
	"logistic-science-pack": {
		category: "crafting",
		enabled: false,
		energy_required: 6,
		icon_col: 11,
		icon_row: 8,
		ingredients: [
			{
				amount: 1,
				name: "inserter"
			},
			{
				amount: 1,
				name: "transport-belt"
			}
		],
		localized_name: {
			en: "Logistic science pack"
		},
		name: "logistic-science-pack",
		order: "b[logistic-science-pack]",
		results: [
			{
				amount: 1,
				name: "logistic-science-pack"
			}
		],
		subgroup: "science-pack",
		type: "recipe"
	},
	"long-handed-inserter": {
		category: "crafting",
		enabled: false,
		energy_required: 0.5,
		icon_col: 12,
		icon_row: 8,
		ingredients: [
			{
				amount: 1,
				name: "iron-gear-wheel"
			},
			{
				amount: 1,
				name: "iron-plate"
			},
			{
				amount: 1,
				name: "inserter"
			}
		],
		localized_name: {
			en: "Long handed inserter"
		},
		name: "long-handed-inserter",
		order: "c[long-handed-inserter]",
		results: [
			{
				amount: 1,
				name: "long-handed-inserter"
			}
		],
		subgroup: "inserter",
		type: "recipe"
	},
	"low-density-structure": {
		category: "crafting",
		enabled: false,
		energy_required: 20,
		icon_col: 13,
		icon_row: 8,
		ingredients: [
			{
				amount: 2,
				name: "steel-plate"
			},
			{
				amount: 20,
				name: "copper-plate"
			},
			{
				amount: 5,
				name: "plastic-bar"
			}
		],
		localized_name: {
			en: "Low density structure"
		},
		name: "low-density-structure",
		order: "o[low-density-structure]",
		results: [
			{
				amount: 1,
				name: "low-density-structure"
			}
		],
		subgroup: "intermediate-product",
		type: "recipe"
	},
	lubricant: {
		category: "chemistry",
		crafting_machine_tint: {
			primary: {
				a: 1,
				b: 0.223,
				g: 0.723,
				r: 0.268
			},
			quaternary: {
				a: 1,
				b: 0.127,
				g: 0.395,
				r: 1
			},
			secondary: {
				a: 1,
				b: 0.386,
				g: 0.793,
				r: 0.432
			},
			tertiary: {
				a: 1,
				b: 0.396,
				g: 0.471,
				r: 0.647
			}
		},
		enabled: false,
		energy_required: 1,
		icon_col: 14,
		icon_row: 8,
		ingredients: [
			{
				amount: 10,
				name: "heavy-oil",
				type: "fluid"
			}
		],
		localized_name: {
			en: "Lubricant"
		},
		name: "lubricant",
		order: "e[lubricant]",
		results: [
			{
				amount: 10,
				name: "lubricant",
				type: "fluid"
			}
		],
		subgroup: "fluid-recipes",
		type: "recipe"
	},
	"medium-electric-pole": {
		category: "crafting",
		enabled: false,
		energy_required: 0.5,
		icon_col: 0,
		icon_row: 9,
		ingredients: [
			{
				amount: 4,
				name: "iron-stick"
			},
			{
				amount: 2,
				name: "steel-plate"
			},
			{
				amount: 2,
				name: "copper-plate"
			}
		],
		localized_name: {
			en: "Medium electric pole"
		},
		name: "medium-electric-pole",
		order: "a[energy]-b[medium-electric-pole]",
		results: [
			{
				amount: 1,
				name: "medium-electric-pole"
			}
		],
		subgroup: "energy-pipe-distribution",
		type: "recipe"
	},
	"military-science-pack": {
		category: "crafting",
		enabled: false,
		energy_required: 10,
		icon_col: 1,
		icon_row: 9,
		ingredients: [
			{
				amount: 1,
				name: "piercing-rounds-magazine"
			},
			{
				amount: 1,
				name: "grenade"
			},
			{
				amount: 2,
				name: "stone-wall"
			}
		],
		localized_name: {
			en: "Military science pack"
		},
		name: "military-science-pack",
		order: "c[military-science-pack]",
		results: [
			{
				amount: 2,
				name: "military-science-pack"
			}
		],
		subgroup: "science-pack",
		type: "recipe"
	},
	"modular-armor": {
		category: "crafting",
		enabled: false,
		energy_required: 15,
		icon_col: 2,
		icon_row: 9,
		ingredients: [
			{
				amount: 30,
				name: "advanced-circuit"
			},
			{
				amount: 50,
				name: "steel-plate"
			}
		],
		localized_name: {
			en: "Modular armor"
		},
		name: "modular-armor",
		order: "c[modular-armor]",
		results: [
			{
				amount: 1,
				name: "modular-armor"
			}
		],
		subgroup: "armor",
		type: "recipe"
	},
	"night-vision-equipment": {
		category: "crafting",
		enabled: false,
		energy_required: 10,
		icon_col: 3,
		icon_row: 9,
		ingredients: [
			{
				amount: 5,
				name: "advanced-circuit"
			},
			{
				amount: 10,
				name: "steel-plate"
			}
		],
		localized_name: {
			en: "Nightvision"
		},
		name: "night-vision-equipment",
		order: "f[night-vision]-a[night-vision-equipment]",
		results: [
			{
				amount: 1,
				name: "night-vision-equipment"
			}
		],
		subgroup: "equipment",
		type: "recipe"
	},
	"nuclear-fuel": {
		category: "centrifuging",
		enabled: false,
		energy_required: 90,
		icon_col: 4,
		icon_mipmaps: 4,
		icon_row: 9,
		icon_size: 64,
		ingredients: [
			{
				amount: 1,
				name: "uranium-235"
			},
			{
				amount: 1,
				name: "rocket-fuel"
			}
		],
		localized_name: {
			en: "Nuclear fuel"
		},
		name: "nuclear-fuel",
		order: "q[uranium-rocket-fuel]",
		results: [
			{
				amount: 1,
				name: "nuclear-fuel"
			}
		],
		subgroup: "intermediate-product",
		type: "recipe"
	},
	"nuclear-fuel-reprocessing": {
		allow_decomposition: false,
		category: "centrifuging",
		enabled: false,
		energy_required: 60,
		icon_col: 5,
		icon_mipmaps: 4,
		icon_row: 9,
		icon_size: 64,
		ingredients: [
			{
				amount: 5,
				name: "used-up-uranium-fuel-cell"
			}
		],
		localized_name: {
			en: "Nuclear fuel reprocessing"
		},
		main_product: "",
		name: "nuclear-fuel-reprocessing",
		order: "r[uranium-processing]-b[nuclear-fuel-reprocessing]",
		results: [
			{
				amount: 3,
				name: "uranium-238"
			}
		],
		subgroup: "intermediate-product",
		type: "recipe"
	},
	"nuclear-reactor": {
		category: "crafting",
		enabled: false,
		energy_required: 8,
		icon_col: 6,
		icon_row: 9,
		ingredients: [
			{
				amount: 500,
				name: "concrete"
			},
			{
				amount: 500,
				name: "steel-plate"
			},
			{
				amount: 500,
				name: "advanced-circuit"
			},
			{
				amount: 500,
				name: "copper-plate"
			}
		],
		localized_name: {
			en: "Nuclear reactor"
		},
		name: "nuclear-reactor",
		order: "f[nuclear-energy]-a[reactor]",
		requester_paste_multiplier: 1,
		results: [
			{
				amount: 1,
				name: "nuclear-reactor"
			}
		],
		subgroup: "energy",
		type: "recipe"
	},
	"offshore-pump": {
		category: "crafting",
		energy_required: 0.5,
		icon_col: 7,
		icon_row: 9,
		ingredients: [
			{
				amount: 2,
				name: "electronic-circuit"
			},
			{
				amount: 1,
				name: "pipe"
			},
			{
				amount: 1,
				name: "iron-gear-wheel"
			}
		],
		localized_name: {
			en: "Offshore pump"
		},
		name: "offshore-pump",
		order: "b[fluids]-a[offshore-pump]",
		results: [
			{
				amount: 1,
				name: "offshore-pump"
			}
		],
		subgroup: "extraction-machine",
		type: "recipe"
	},
	"oil-refinery": {
		category: "crafting",
		enabled: false,
		energy_required: 8,
		icon_col: 8,
		icon_row: 9,
		ingredients: [
			{
				amount: 15,
				name: "steel-plate"
			},
			{
				amount: 10,
				name: "iron-gear-wheel"
			},
			{
				amount: 10,
				name: "stone-brick"
			},
			{
				amount: 10,
				name: "electronic-circuit"
			},
			{
				amount: 10,
				name: "pipe"
			}
		],
		localized_name: {
			en: "Oil refinery"
		},
		name: "oil-refinery",
		order: "d[refinery]",
		results: [
			{
				amount: 1,
				name: "oil-refinery"
			}
		],
		subgroup: "production-machine",
		type: "recipe"
	},
	"personal-laser-defense-equipment": {
		category: "crafting",
		enabled: false,
		energy_required: 10,
		icon_col: 9,
		icon_row: 9,
		ingredients: [
			{
				amount: 20,
				name: "processing-unit"
			},
			{
				amount: 5,
				name: "low-density-structure"
			},
			{
				amount: 5,
				name: "laser-turret"
			}
		],
		localized_name: {
			en: "Personal laser defense"
		},
		name: "personal-laser-defense-equipment",
		order: "b[active-defense]-a[personal-laser-defense-equipment]",
		results: [
			{
				amount: 1,
				name: "personal-laser-defense-equipment"
			}
		],
		subgroup: "military-equipment",
		type: "recipe"
	},
	"personal-roboport-equipment": {
		category: "crafting",
		enabled: false,
		energy_required: 10,
		icon_col: 10,
		icon_row: 9,
		ingredients: [
			{
				amount: 10,
				name: "advanced-circuit"
			},
			{
				amount: 40,
				name: "iron-gear-wheel"
			},
			{
				amount: 20,
				name: "steel-plate"
			},
			{
				amount: 45,
				name: "battery"
			}
		],
		localized_name: {
			en: "Personal roboport"
		},
		name: "personal-roboport-equipment",
		order: "e[robotics]-a[personal-roboport-equipment]",
		results: [
			{
				amount: 1,
				name: "personal-roboport-equipment"
			}
		],
		subgroup: "equipment",
		type: "recipe"
	},
	"personal-roboport-mk2-equipment": {
		category: "crafting",
		enabled: false,
		energy_required: 20,
		icon_col: 11,
		icon_row: 9,
		ingredients: [
			{
				amount: 5,
				name: "personal-roboport-equipment"
			},
			{
				amount: 100,
				name: "processing-unit"
			},
			{
				amount: 20,
				name: "low-density-structure"
			}
		],
		localized_name: {
			en: "Personal roboport MK2"
		},
		name: "personal-roboport-mk2-equipment",
		order: "e[robotics]-b[personal-roboport-mk2-equipment]",
		results: [
			{
				amount: 1,
				name: "personal-roboport-mk2-equipment"
			}
		],
		subgroup: "equipment",
		type: "recipe"
	},
	"piercing-rounds-magazine": {
		category: "crafting",
		enabled: false,
		energy_required: 3,
		icon_col: 13,
		icon_row: 9,
		ingredients: [
			{
				amount: 1,
				name: "firearm-magazine"
			},
			{
				amount: 1,
				name: "steel-plate"
			},
			{
				amount: 5,
				name: "copper-plate"
			}
		],
		localized_name: {
			en: "Piercing rounds magazine"
		},
		name: "piercing-rounds-magazine",
		order: "a[basic-clips]-b[piercing-rounds-magazine]",
		results: [
			{
				amount: 1,
				name: "piercing-rounds-magazine"
			}
		],
		subgroup: "ammo",
		type: "recipe"
	},
	"piercing-shotgun-shell": {
		category: "crafting",
		enabled: false,
		energy_required: 8,
		icon_col: 14,
		icon_row: 9,
		ingredients: [
			{
				amount: 2,
				name: "shotgun-shell"
			},
			{
				amount: 5,
				name: "copper-plate"
			},
			{
				amount: 2,
				name: "steel-plate"
			}
		],
		localized_name: {
			en: "Piercing shotgun shells"
		},
		name: "piercing-shotgun-shell",
		order: "b[shotgun]-b[piercing]",
		results: [
			{
				amount: 1,
				name: "piercing-shotgun-shell"
			}
		],
		subgroup: "ammo",
		type: "recipe"
	},
	pipe: {
		category: "crafting",
		energy_required: 0.5,
		icon_col: 0,
		icon_row: 10,
		ingredients: [
			{
				amount: 1,
				name: "iron-plate"
			}
		],
		localized_name: {
			en: "Pipe"
		},
		name: "pipe",
		order: "a[pipe]-a[pipe]",
		results: [
			{
				amount: 1,
				name: "pipe"
			}
		],
		subgroup: "energy-pipe-distribution",
		type: "recipe"
	},
	"pipe-to-ground": {
		category: "crafting",
		energy_required: 0.5,
		icon_col: 1,
		icon_row: 10,
		ingredients: [
			{
				amount: 10,
				name: "pipe"
			},
			{
				amount: 5,
				name: "iron-plate"
			}
		],
		localized_name: {
			en: "Pipe to ground"
		},
		name: "pipe-to-ground",
		order: "a[pipe]-b[pipe-to-ground]",
		results: [
			{
				amount: 2,
				name: "pipe-to-ground"
			}
		],
		subgroup: "energy-pipe-distribution",
		type: "recipe"
	},
	pistol: {
		category: "crafting",
		energy_required: 5,
		icon_col: 2,
		icon_row: 10,
		ingredients: [
			{
				amount: 5,
				name: "copper-plate"
			},
			{
				amount: 5,
				name: "iron-plate"
			}
		],
		localized_name: {
			en: "Pistol"
		},
		name: "pistol",
		order: "a[basic-clips]-a[pistol]",
		results: [
			{
				amount: 1,
				name: "pistol"
			}
		],
		subgroup: "gun",
		type: "recipe"
	},
	"plastic-bar": {
		category: "chemistry",
		crafting_machine_tint: {
			primary: {
				a: 1,
				b: 1,
				g: 1,
				r: 1
			},
			quaternary: {
				a: 1,
				b: 0,
				g: 0,
				r: 0
			},
			secondary: {
				a: 1,
				b: 0.771,
				g: 0.771,
				r: 0.771
			},
			tertiary: {
				a: 1,
				b: 0.762,
				g: 0.665,
				r: 0.768
			}
		},
		enabled: false,
		energy_required: 1,
		icon_col: 3,
		icon_row: 10,
		ingredients: [
			{
				amount: 20,
				name: "petroleum-gas",
				type: "fluid"
			},
			{
				amount: 1,
				name: "coal",
				type: "item"
			}
		],
		localized_name: {
			en: "Plastic bar"
		},
		name: "plastic-bar",
		order: "f[plastic-bar]",
		results: [
			{
				amount: 2,
				name: "plastic-bar",
				type: "item"
			}
		],
		subgroup: "raw-material",
		type: "recipe"
	},
	"player-port": {
		category: "crafting",
		enabled: false,
		energy_required: 0.5,
		icon_col: 4,
		icon_row: 10,
		ingredients: [
			{
				amount: 10,
				name: "electronic-circuit"
			},
			{
				amount: 5,
				name: "iron-gear-wheel"
			},
			{
				amount: 1,
				name: "iron-plate"
			}
		],
		localized_name: {
			en: "Player port"
		},
		name: "player-port",
		order: "z[not-used]",
		results: [
			{
				amount: 1,
				name: "player-port"
			}
		],
		subgroup: "defensive-structure",
		type: "recipe"
	},
	"poison-capsule": {
		category: "crafting",
		enabled: false,
		energy_required: 8,
		icon_col: 5,
		icon_row: 10,
		ingredients: [
			{
				amount: 3,
				name: "steel-plate"
			},
			{
				amount: 3,
				name: "electronic-circuit"
			},
			{
				amount: 10,
				name: "coal"
			}
		],
		localized_name: {
			en: "Poison capsule"
		},
		name: "poison-capsule",
		order: "b[poison-capsule]",
		results: [
			{
				amount: 1,
				name: "poison-capsule"
			}
		],
		subgroup: "capsule",
		type: "recipe"
	},
	"power-armor": {
		category: "crafting",
		enabled: false,
		energy_required: 20,
		icon_col: 6,
		icon_row: 10,
		ingredients: [
			{
				amount: 40,
				name: "processing-unit"
			},
			{
				amount: 20,
				name: "electric-engine-unit"
			},
			{
				amount: 40,
				name: "steel-plate"
			}
		],
		localized_name: {
			en: "Power armor"
		},
		name: "power-armor",
		order: "d[power-armor]",
		requester_paste_multiplier: 1,
		results: [
			{
				amount: 1,
				name: "power-armor"
			}
		],
		subgroup: "armor",
		type: "recipe"
	},
	"power-armor-mk2": {
		category: "crafting",
		enabled: false,
		energy_required: 25,
		icon_col: 7,
		icon_row: 10,
		ingredients: [
			{
				amount: 25,
				name: "effectivity-module-2"
			},
			{
				amount: 25,
				name: "speed-module-2"
			},
			{
				amount: 60,
				name: "processing-unit"
			},
			{
				amount: 40,
				name: "electric-engine-unit"
			},
			{
				amount: 30,
				name: "low-density-structure"
			}
		],
		localized_name: {
			en: "Power armor MK2"
		},
		name: "power-armor-mk2",
		order: "e[power-armor-mk2]",
		requester_paste_multiplier: 1,
		results: [
			{
				amount: 1,
				name: "power-armor-mk2"
			}
		],
		subgroup: "armor",
		type: "recipe"
	},
	"power-switch": {
		category: "crafting",
		enabled: false,
		energy_required: 2,
		icon_col: 8,
		icon_row: 10,
		ingredients: [
			{
				amount: 5,
				name: "iron-plate"
			},
			{
				amount: 5,
				name: "copper-cable"
			},
			{
				amount: 2,
				name: "electronic-circuit"
			}
		],
		localized_name: {
			en: "Power switch"
		},
		name: "power-switch",
		order: "d[other]-a[power-switch]",
		results: [
			{
				amount: 1,
				name: "power-switch"
			}
		],
		subgroup: "circuit-network",
		type: "recipe"
	},
	"processing-unit": {
		category: "crafting-with-fluid",
		enabled: false,
		energy_required: 10,
		icon_col: 9,
		icon_row: 10,
		ingredients: [
			{
				amount: 20,
				name: "electronic-circuit"
			},
			{
				amount: 2,
				name: "advanced-circuit"
			},
			{
				amount: 5,
				name: "sulfuric-acid",
				type: "fluid"
			}
		],
		localized_name: {
			en: "Processing unit"
		},
		name: "processing-unit",
		order: "g[processing-unit]",
		results: [
			{
				amount: 1,
				name: "processing-unit"
			}
		],
		subgroup: "intermediate-product",
		type: "recipe"
	},
	"production-science-pack": {
		category: "crafting",
		enabled: false,
		energy_required: 21,
		icon_col: 10,
		icon_row: 10,
		ingredients: [
			{
				amount: 1,
				name: "electric-furnace"
			},
			{
				amount: 1,
				name: "productivity-module"
			},
			{
				amount: 30,
				name: "rail"
			}
		],
		localized_name: {
			en: "Production science pack"
		},
		name: "production-science-pack",
		order: "e[production-science-pack]",
		results: [
			{
				amount: 3,
				name: "production-science-pack"
			}
		],
		subgroup: "science-pack",
		type: "recipe"
	},
	"productivity-module": {
		category: "crafting",
		enabled: false,
		energy_required: 15,
		icon_col: 11,
		icon_row: 10,
		ingredients: [
			{
				amount: 5,
				name: "advanced-circuit"
			},
			{
				amount: 5,
				name: "electronic-circuit"
			}
		],
		localized_name: {
			en: "Productivity module"
		},
		name: "productivity-module",
		order: "c[productivity]-a[productivity-module-1]",
		results: [
			{
				amount: 1,
				name: "productivity-module"
			}
		],
		subgroup: "module",
		type: "recipe"
	},
	"productivity-module-2": {
		category: "crafting",
		enabled: false,
		energy_required: 30,
		icon_col: 12,
		icon_row: 10,
		ingredients: [
			{
				amount: 4,
				name: "productivity-module"
			},
			{
				amount: 5,
				name: "advanced-circuit"
			},
			{
				amount: 5,
				name: "processing-unit"
			}
		],
		localized_name: {
			en: "Productivity module 2"
		},
		name: "productivity-module-2",
		order: "c[productivity]-b[productivity-module-2]",
		results: [
			{
				amount: 1,
				name: "productivity-module-2"
			}
		],
		subgroup: "module",
		type: "recipe"
	},
	"productivity-module-3": {
		category: "crafting",
		enabled: false,
		energy_required: 60,
		icon_col: 13,
		icon_row: 10,
		ingredients: [
			{
				amount: 5,
				name: "productivity-module-2"
			},
			{
				amount: 5,
				name: "advanced-circuit"
			},
			{
				amount: 5,
				name: "processing-unit"
			}
		],
		localized_name: {
			en: "Productivity module 3"
		},
		name: "productivity-module-3",
		order: "c[productivity]-c[productivity-module-3]",
		results: [
			{
				amount: 1,
				name: "productivity-module-3"
			}
		],
		subgroup: "module",
		type: "recipe"
	},
	"programmable-speaker": {
		category: "crafting",
		enabled: false,
		energy_required: 2,
		icon_col: 14,
		icon_row: 10,
		ingredients: [
			{
				amount: 3,
				name: "iron-plate"
			},
			{
				amount: 4,
				name: "iron-stick"
			},
			{
				amount: 5,
				name: "copper-cable"
			},
			{
				amount: 4,
				name: "electronic-circuit"
			}
		],
		localized_name: {
			en: "Programmable speaker"
		},
		name: "programmable-speaker",
		order: "d[other]-b[programmable-speaker]",
		results: [
			{
				amount: 1,
				name: "programmable-speaker"
			}
		],
		subgroup: "circuit-network",
		type: "recipe"
	},
	pump: {
		category: "crafting",
		enabled: false,
		energy_required: 2,
		icon_col: 0,
		icon_row: 11,
		ingredients: [
			{
				amount: 1,
				name: "engine-unit"
			},
			{
				amount: 1,
				name: "steel-plate"
			},
			{
				amount: 1,
				name: "pipe"
			}
		],
		localized_name: {
			en: "Pump"
		},
		name: "pump",
		order: "b[pipe]-c[pump]",
		results: [
			{
				amount: 1,
				name: "pump"
			}
		],
		subgroup: "energy-pipe-distribution",
		type: "recipe"
	},
	pumpjack: {
		category: "crafting",
		enabled: false,
		energy_required: 5,
		icon_col: 1,
		icon_row: 11,
		ingredients: [
			{
				amount: 5,
				name: "steel-plate"
			},
			{
				amount: 10,
				name: "iron-gear-wheel"
			},
			{
				amount: 5,
				name: "electronic-circuit"
			},
			{
				amount: 10,
				name: "pipe"
			}
		],
		localized_name: {
			en: "Pumpjack"
		},
		name: "pumpjack",
		order: "b[fluids]-b[pumpjack]",
		results: [
			{
				amount: 1,
				name: "pumpjack"
			}
		],
		subgroup: "extraction-machine",
		type: "recipe"
	},
	radar: {
		category: "crafting",
		energy_required: 0.5,
		icon_col: 2,
		icon_row: 11,
		ingredients: [
			{
				amount: 5,
				name: "electronic-circuit"
			},
			{
				amount: 5,
				name: "iron-gear-wheel"
			},
			{
				amount: 10,
				name: "iron-plate"
			}
		],
		localized_name: {
			en: "Radar"
		},
		name: "radar",
		order: "d[radar]-a[radar]",
		results: [
			{
				amount: 1,
				name: "radar"
			}
		],
		subgroup: "defensive-structure",
		type: "recipe"
	},
	rail: {
		category: "crafting",
		enabled: false,
		energy_required: 0.5,
		icon_col: 3,
		icon_row: 11,
		ingredients: [
			{
				amount: 1,
				name: "stone"
			},
			{
				amount: 1,
				name: "iron-stick"
			},
			{
				amount: 1,
				name: "steel-plate"
			}
		],
		localized_name: {
			en: "Rail"
		},
		name: "rail",
		order: "a[train-system]-a[rail]",
		results: [
			{
				amount: 2,
				name: "rail"
			}
		],
		subgroup: "train-transport",
		type: "recipe"
	},
	"rail-chain-signal": {
		category: "crafting",
		enabled: false,
		energy_required: 0.5,
		icon_col: 4,
		icon_row: 11,
		ingredients: [
			{
				amount: 1,
				name: "electronic-circuit"
			},
			{
				amount: 5,
				name: "iron-plate"
			}
		],
		localized_name: {
			en: "Rail chain signal"
		},
		name: "rail-chain-signal",
		order: "a[train-system]-e[rail-signal-chain]",
		results: [
			{
				amount: 1,
				name: "rail-chain-signal"
			}
		],
		subgroup: "train-transport",
		type: "recipe"
	},
	"rail-signal": {
		category: "crafting",
		enabled: false,
		energy_required: 0.5,
		icon_col: 5,
		icon_row: 11,
		ingredients: [
			{
				amount: 1,
				name: "electronic-circuit"
			},
			{
				amount: 5,
				name: "iron-plate"
			}
		],
		localized_name: {
			en: "Rail signal"
		},
		name: "rail-signal",
		order: "a[train-system]-d[rail-signal]",
		results: [
			{
				amount: 1,
				name: "rail-signal"
			}
		],
		subgroup: "train-transport",
		type: "recipe"
	},
	railgun: {
		category: "crafting",
		enabled: false,
		energy_required: 8,
		icon_col: 6,
		icon_row: 11,
		ingredients: [
			{
				amount: 15,
				name: "steel-plate"
			},
			{
				amount: 15,
				name: "copper-plate"
			},
			{
				amount: 10,
				name: "electronic-circuit"
			},
			{
				amount: 5,
				name: "advanced-circuit"
			}
		],
		localized_name: {
			en: "Railgun"
		},
		name: "railgun",
		order: "c[railgun]",
		results: [
			{
				amount: 1,
				name: "railgun"
			}
		],
		subgroup: "gun",
		type: "recipe"
	},
	"railgun-dart": {
		category: "crafting",
		enabled: false,
		energy_required: 8,
		icon_col: 7,
		icon_row: 11,
		ingredients: [
			{
				amount: 5,
				name: "steel-plate"
			},
			{
				amount: 5,
				name: "electronic-circuit"
			}
		],
		localized_name: {
			en: "Railgun darts"
		},
		name: "railgun-dart",
		order: "c[railgun]",
		results: [
			{
				amount: 1,
				name: "railgun-dart"
			}
		],
		subgroup: "ammo",
		type: "recipe"
	},
	"red-wire": {
		category: "crafting",
		enabled: false,
		energy_required: 0.5,
		icon_col: 8,
		icon_row: 11,
		ingredients: [
			{
				amount: 1,
				name: "electronic-circuit"
			},
			{
				amount: 1,
				name: "copper-cable"
			}
		],
		localized_name: {
			en: "Red wire"
		},
		name: "red-wire",
		order: "b[wires]-a[red-wire]",
		results: [
			{
				amount: 1,
				name: "red-wire"
			}
		],
		subgroup: "circuit-network",
		type: "recipe"
	},
	"refined-concrete": {
		category: "crafting-with-fluid",
		enabled: false,
		energy_required: 15,
		icon_col: 9,
		icon_row: 11,
		ingredients: [
			{
				amount: 20,
				name: "concrete"
			},
			{
				amount: 8,
				name: "iron-stick"
			},
			{
				amount: 1,
				name: "steel-plate"
			},
			{
				amount: 100,
				name: "water",
				type: "fluid"
			}
		],
		localized_name: {
			en: "Refined concrete"
		},
		name: "refined-concrete",
		order: "b[concrete]-c[refined]",
		results: [
			{
				amount: 10,
				name: "refined-concrete"
			}
		],
		subgroup: "terrain",
		type: "recipe"
	},
	"refined-hazard-concrete": {
		category: "crafting",
		enabled: false,
		energy_required: 0.25,
		icon_col: 10,
		icon_row: 11,
		ingredients: [
			{
				amount: 10,
				name: "refined-concrete"
			}
		],
		localized_name: {
			en: "Refined hazard concrete"
		},
		name: "refined-hazard-concrete",
		order: "b[concrete]-d[refined-hazard]",
		results: [
			{
				amount: 10,
				name: "refined-hazard-concrete"
			}
		],
		subgroup: "terrain",
		type: "recipe"
	},
	"repair-pack": {
		category: "crafting",
		energy_required: 0.5,
		icon_col: 11,
		icon_row: 11,
		ingredients: [
			{
				amount: 2,
				name: "electronic-circuit"
			},
			{
				amount: 2,
				name: "iron-gear-wheel"
			}
		],
		localized_name: {
			en: "Repair pack"
		},
		name: "repair-pack",
		order: "b[repair]-a[repair-pack]",
		results: [
			{
				amount: 1,
				name: "repair-pack"
			}
		],
		subgroup: "tool",
		type: "recipe"
	},
	roboport: {
		category: "crafting",
		enabled: false,
		energy_required: 5,
		icon_col: 12,
		icon_row: 11,
		ingredients: [
			{
				amount: 45,
				name: "steel-plate"
			},
			{
				amount: 45,
				name: "iron-gear-wheel"
			},
			{
				amount: 45,
				name: "advanced-circuit"
			}
		],
		localized_name: {
			en: "Roboport"
		},
		name: "roboport",
		order: "c[signal]-a[roboport]",
		results: [
			{
				amount: 1,
				name: "roboport"
			}
		],
		subgroup: "logistic-network",
		type: "recipe"
	},
	rocket: {
		category: "crafting",
		enabled: false,
		energy_required: 8,
		icon_col: 13,
		icon_row: 11,
		ingredients: [
			{
				amount: 1,
				name: "electronic-circuit"
			},
			{
				amount: 1,
				name: "explosives"
			},
			{
				amount: 2,
				name: "iron-plate"
			}
		],
		localized_name: {
			en: "Rocket"
		},
		name: "rocket",
		order: "d[rocket-launcher]-a[basic]",
		results: [
			{
				amount: 1,
				name: "rocket"
			}
		],
		subgroup: "ammo",
		type: "recipe"
	},
	"rocket-control-unit": {
		category: "crafting",
		enabled: false,
		energy_required: 30,
		icon_col: 14,
		icon_row: 11,
		ingredients: [
			{
				amount: 1,
				name: "processing-unit"
			},
			{
				amount: 1,
				name: "speed-module"
			}
		],
		localized_name: {
			en: "Rocket control unit"
		},
		name: "rocket-control-unit",
		order: "n[rocket-control-unit]",
		results: [
			{
				amount: 1,
				name: "rocket-control-unit"
			}
		],
		subgroup: "intermediate-product",
		type: "recipe"
	},
	"rocket-fuel": {
		category: "crafting-with-fluid",
		enabled: false,
		energy_required: 30,
		icon_col: 0,
		icon_row: 12,
		ingredients: [
			{
				amount: 10,
				name: "solid-fuel"
			},
			{
				amount: 10,
				name: "light-oil",
				type: "fluid"
			}
		],
		localized_name: {
			en: "Rocket fuel"
		},
		name: "rocket-fuel",
		order: "p[rocket-fuel]",
		results: [
			{
				amount: 1,
				name: "rocket-fuel"
			}
		],
		subgroup: "intermediate-product",
		type: "recipe"
	},
	"rocket-launcher": {
		category: "crafting",
		enabled: false,
		energy_required: 10,
		icon_col: 1,
		icon_row: 12,
		ingredients: [
			{
				amount: 5,
				name: "iron-plate"
			},
			{
				amount: 5,
				name: "iron-gear-wheel"
			},
			{
				amount: 5,
				name: "electronic-circuit"
			}
		],
		localized_name: {
			en: "Rocket launcher"
		},
		name: "rocket-launcher",
		order: "d[rocket-launcher]",
		results: [
			{
				amount: 1,
				name: "rocket-launcher"
			}
		],
		subgroup: "gun",
		type: "recipe"
	},
	"rocket-part": {
		category: "rocket-building",
		enabled: false,
		energy_required: 3,
		hidden: true,
		icon_col: 2,
		icon_row: 12,
		ingredients: [
			{
				amount: 10,
				name: "rocket-control-unit"
			},
			{
				amount: 10,
				name: "low-density-structure"
			},
			{
				amount: 10,
				name: "rocket-fuel"
			}
		],
		localized_name: {
			en: "Rocket part"
		},
		name: "rocket-part",
		order: "q[rocket-part]",
		results: [
			{
				amount: 1,
				name: "rocket-part"
			}
		],
		subgroup: "intermediate-product",
		type: "recipe"
	},
	"rocket-silo": {
		category: "crafting",
		enabled: false,
		energy_required: 30,
		icon_col: 3,
		icon_row: 12,
		ingredients: [
			{
				amount: 1000,
				name: "steel-plate"
			},
			{
				amount: 1000,
				name: "concrete"
			},
			{
				amount: 100,
				name: "pipe"
			},
			{
				amount: 200,
				name: "processing-unit"
			},
			{
				amount: 200,
				name: "electric-engine-unit"
			}
		],
		localized_name: {
			en: "Rocket silo"
		},
		name: "rocket-silo",
		order: "e[rocket-silo]",
		requester_paste_multiplier: 1,
		results: [
			{
				amount: 1,
				name: "rocket-silo"
			}
		],
		subgroup: "defensive-structure",
		type: "recipe"
	},
	satellite: {
		category: "crafting",
		enabled: false,
		energy_required: 5,
		icon_col: 4,
		icon_row: 12,
		ingredients: [
			{
				amount: 100,
				name: "low-density-structure"
			},
			{
				amount: 100,
				name: "solar-panel"
			},
			{
				amount: 100,
				name: "accumulator"
			},
			{
				amount: 5,
				name: "radar"
			},
			{
				amount: 100,
				name: "processing-unit"
			},
			{
				amount: 50,
				name: "rocket-fuel"
			}
		],
		localized_name: {
			en: "Satellite"
		},
		name: "satellite",
		order: "m[satellite]",
		requester_paste_multiplier: 1,
		results: [
			{
				amount: 1,
				name: "satellite"
			}
		],
		subgroup: "intermediate-product",
		type: "recipe"
	},
	shotgun: {
		category: "crafting",
		enabled: false,
		energy_required: 10,
		icon_col: 5,
		icon_row: 12,
		ingredients: [
			{
				amount: 15,
				name: "iron-plate"
			},
			{
				amount: 5,
				name: "iron-gear-wheel"
			},
			{
				amount: 10,
				name: "copper-plate"
			},
			{
				amount: 5,
				name: "wood"
			}
		],
		localized_name: {
			en: "Shotgun"
		},
		name: "shotgun",
		order: "b[shotgun]-a[basic]",
		results: [
			{
				amount: 1,
				name: "shotgun"
			}
		],
		subgroup: "gun",
		type: "recipe"
	},
	"shotgun-shell": {
		category: "crafting",
		enabled: false,
		energy_required: 3,
		icon_col: 6,
		icon_row: 12,
		ingredients: [
			{
				amount: 2,
				name: "copper-plate"
			},
			{
				amount: 2,
				name: "iron-plate"
			}
		],
		localized_name: {
			en: "Shotgun shells"
		},
		name: "shotgun-shell",
		order: "b[shotgun]-a[basic]",
		results: [
			{
				amount: 1,
				name: "shotgun-shell"
			}
		],
		subgroup: "ammo",
		type: "recipe"
	},
	"slowdown-capsule": {
		category: "crafting",
		enabled: false,
		energy_required: 8,
		icon_col: 8,
		icon_row: 12,
		ingredients: [
			{
				amount: 2,
				name: "steel-plate"
			},
			{
				amount: 2,
				name: "electronic-circuit"
			},
			{
				amount: 5,
				name: "coal"
			}
		],
		localized_name: {
			en: "Slowdown capsule"
		},
		name: "slowdown-capsule",
		order: "c[slowdown-capsule]",
		results: [
			{
				amount: 1,
				name: "slowdown-capsule"
			}
		],
		subgroup: "capsule",
		type: "recipe"
	},
	"small-electric-pole": {
		category: "crafting",
		energy_required: 0.5,
		icon_col: 9,
		icon_row: 12,
		ingredients: [
			{
				amount: 1,
				name: "wood"
			},
			{
				amount: 2,
				name: "copper-cable"
			}
		],
		localized_name: {
			en: "Small electric pole"
		},
		name: "small-electric-pole",
		order: "a[energy]-a[small-electric-pole]",
		results: [
			{
				amount: 2,
				name: "small-electric-pole"
			}
		],
		subgroup: "energy-pipe-distribution",
		type: "recipe"
	},
	"small-lamp": {
		category: "crafting",
		enabled: false,
		energy_required: 0.5,
		icon_col: 10,
		icon_row: 12,
		ingredients: [
			{
				amount: 1,
				name: "electronic-circuit"
			},
			{
				amount: 3,
				name: "copper-cable"
			},
			{
				amount: 1,
				name: "iron-plate"
			}
		],
		localized_name: {
			en: "Lamp"
		},
		name: "small-lamp",
		order: "a[light]-a[small-lamp]",
		results: [
			{
				amount: 1,
				name: "small-lamp"
			}
		],
		subgroup: "circuit-network",
		type: "recipe"
	},
	"small-plane": {
		category: "crafting",
		enabled: false,
		energy_required: 30,
		icon_col: 11,
		icon_row: 12,
		ingredients: [
			{
				amount: 100,
				name: "plastic-bar"
			},
			{
				amount: 200,
				name: "advanced-circuit"
			},
			{
				amount: 20,
				name: "electric-engine-unit"
			},
			{
				amount: 100,
				name: "battery"
			}
		],
		localized_name: {
			en: "Small plane"
		},
		name: "small-plane",
		order: "b[personal-transport]-x[small-plane]",
		results: [
			{
				amount: 1,
				name: "small-plane"
			}
		],
		subgroup: "transport",
		type: "recipe"
	},
	"solar-panel": {
		category: "crafting",
		enabled: false,
		energy_required: 10,
		icon_col: 12,
		icon_row: 12,
		ingredients: [
			{
				amount: 5,
				name: "steel-plate"
			},
			{
				amount: 15,
				name: "electronic-circuit"
			},
			{
				amount: 5,
				name: "copper-plate"
			}
		],
		localized_name: {
			en: "Solar panel"
		},
		name: "solar-panel",
		order: "d[solar-panel]-a[solar-panel]",
		results: [
			{
				amount: 1,
				name: "solar-panel"
			}
		],
		subgroup: "energy",
		type: "recipe"
	},
	"solar-panel-equipment": {
		category: "crafting",
		enabled: false,
		energy_required: 10,
		icon_col: 13,
		icon_row: 12,
		ingredients: [
			{
				amount: 1,
				name: "solar-panel"
			},
			{
				amount: 2,
				name: "advanced-circuit"
			},
			{
				amount: 5,
				name: "steel-plate"
			}
		],
		localized_name: {
			en: "Portable solar panel"
		},
		name: "solar-panel-equipment",
		order: "a[energy-source]-a[solar-panel]",
		results: [
			{
				amount: 1,
				name: "solar-panel-equipment"
			}
		],
		subgroup: "equipment",
		type: "recipe"
	},
	"solid-fuel-from-heavy-oil": {
		category: "chemistry",
		crafting_machine_tint: {
			primary: {
				a: 1,
				b: 0.566,
				g: 0.628,
				r: 0.889
			},
			quaternary: {
				a: 1,
				b: 0.127,
				g: 0.395,
				r: 1
			},
			secondary: {
				a: 1,
				b: 0.644,
				g: 0.668,
				r: 0.803
			},
			tertiary: {
				a: 1,
				b: 0.576,
				g: 0.659,
				r: 0.854
			}
		},
		enabled: false,
		energy_required: 2,
		icon_col: 0,
		icon_mipmaps: 4,
		icon_row: 13,
		icon_size: 64,
		ingredients: [
			{
				amount: 20,
				name: "heavy-oil",
				type: "fluid"
			}
		],
		localized_name: {
			en: "Solid fuel"
		},
		name: "solid-fuel-from-heavy-oil",
		order: "b[fluid-chemistry]-e[solid-fuel-from-heavy-oil]",
		results: [
			{
				amount: 1,
				name: "solid-fuel",
				type: "item"
			}
		],
		subgroup: "fluid-recipes",
		type: "recipe"
	},
	"solid-fuel-from-light-oil": {
		category: "chemistry",
		crafting_machine_tint: {
			primary: {
				a: 1,
				b: 0.482,
				g: 0.633,
				r: 0.71
			},
			quaternary: {
				a: 1,
				b: 0.202,
				g: 0.583,
				r: 0.812
			},
			secondary: {
				a: 1,
				b: 0.527,
				g: 0.672,
				r: 0.745
			},
			tertiary: {
				a: 1,
				b: 0.596,
				g: 0.773,
				r: 0.894
			}
		},
		enabled: false,
		energy_required: 2,
		icon_col: 1,
		icon_mipmaps: 4,
		icon_row: 13,
		icon_size: 64,
		ingredients: [
			{
				amount: 10,
				name: "light-oil",
				type: "fluid"
			}
		],
		localized_name: {
			en: "Solid fuel"
		},
		name: "solid-fuel-from-light-oil",
		order: "b[fluid-chemistry]-c[solid-fuel-from-light-oil]",
		results: [
			{
				amount: 1,
				name: "solid-fuel",
				type: "item"
			}
		],
		subgroup: "fluid-recipes",
		type: "recipe"
	},
	"solid-fuel-from-petroleum-gas": {
		category: "chemistry",
		crafting_machine_tint: {
			primary: {
				a: 1,
				b: 0.768,
				g: 0.631,
				r: 0.768
			},
			quaternary: {
				a: 1,
				b: 0.564,
				g: 0.364,
				r: 0.564
			},
			secondary: {
				a: 1,
				b: 0.678,
				g: 0.592,
				r: 0.659
			},
			tertiary: {
				a: 1,
				b: 0.766,
				g: 0.631,
				r: 0.774
			}
		},
		enabled: false,
		energy_required: 2,
		icon_col: 2,
		icon_mipmaps: 4,
		icon_row: 13,
		icon_size: 64,
		ingredients: [
			{
				amount: 20,
				name: "petroleum-gas",
				type: "fluid"
			}
		],
		localized_name: {
			en: "Solid fuel"
		},
		name: "solid-fuel-from-petroleum-gas",
		order: "b[fluid-chemistry]-d[solid-fuel-from-petroleum-gas]",
		results: [
			{
				amount: 1,
				name: "solid-fuel",
				type: "item"
			}
		],
		subgroup: "fluid-recipes",
		type: "recipe"
	},
	"speed-module": {
		category: "crafting",
		enabled: false,
		energy_required: 15,
		icon_col: 4,
		icon_row: 13,
		ingredients: [
			{
				amount: 5,
				name: "advanced-circuit"
			},
			{
				amount: 5,
				name: "electronic-circuit"
			}
		],
		localized_name: {
			en: "Speed module"
		},
		name: "speed-module",
		order: "a[speed]-a[speed-module-1]",
		results: [
			{
				amount: 1,
				name: "speed-module"
			}
		],
		subgroup: "module",
		type: "recipe"
	},
	"speed-module-2": {
		category: "crafting",
		enabled: false,
		energy_required: 30,
		icon_col: 5,
		icon_row: 13,
		ingredients: [
			{
				amount: 4,
				name: "speed-module"
			},
			{
				amount: 5,
				name: "advanced-circuit"
			},
			{
				amount: 5,
				name: "processing-unit"
			}
		],
		localized_name: {
			en: "Speed module 2"
		},
		name: "speed-module-2",
		order: "a[speed]-b[speed-module-2]",
		results: [
			{
				amount: 1,
				name: "speed-module-2"
			}
		],
		subgroup: "module",
		type: "recipe"
	},
	"speed-module-3": {
		category: "crafting",
		enabled: false,
		energy_required: 60,
		icon_col: 6,
		icon_row: 13,
		ingredients: [
			{
				amount: 5,
				name: "speed-module-2"
			},
			{
				amount: 5,
				name: "advanced-circuit"
			},
			{
				amount: 5,
				name: "processing-unit"
			}
		],
		localized_name: {
			en: "Speed module 3"
		},
		name: "speed-module-3",
		order: "a[speed]-c[speed-module-3]",
		results: [
			{
				amount: 1,
				name: "speed-module-3"
			}
		],
		subgroup: "module",
		type: "recipe"
	},
	spidertron: {
		category: "crafting",
		enabled: false,
		energy_required: 10,
		icon_col: 7,
		icon_row: 13,
		ingredients: [
			{
				amount: 4,
				name: "exoskeleton-equipment"
			},
			{
				amount: 2,
				name: "fusion-reactor-equipment"
			},
			{
				amount: 4,
				name: "rocket-launcher"
			},
			{
				amount: 16,
				name: "rocket-control-unit"
			},
			{
				amount: 150,
				name: "low-density-structure"
			},
			{
				amount: 2,
				name: "radar"
			},
			{
				amount: 2,
				name: "effectivity-module-3"
			},
			{
				amount: 1,
				name: "raw-fish"
			}
		],
		localized_name: {
			en: "Spidertron"
		},
		name: "spidertron",
		order: "b[personal-transport]-c[spidertron]-a[spider]",
		results: [
			{
				amount: 1,
				name: "spidertron"
			}
		],
		subgroup: "transport",
		type: "recipe"
	},
	splitter: {
		category: "crafting",
		enabled: false,
		energy_required: 1,
		icon_col: 8,
		icon_row: 13,
		ingredients: [
			{
				amount: 5,
				name: "electronic-circuit"
			},
			{
				amount: 5,
				name: "iron-plate"
			},
			{
				amount: 4,
				name: "transport-belt"
			}
		],
		localized_name: {
			en: "Splitter"
		},
		name: "splitter",
		order: "c[splitter]-a[splitter]",
		results: [
			{
				amount: 1,
				name: "splitter"
			}
		],
		subgroup: "belt",
		type: "recipe"
	},
	"stack-filter-inserter": {
		category: "crafting",
		enabled: false,
		energy_required: 0.5,
		icon_col: 9,
		icon_row: 13,
		ingredients: [
			{
				amount: 1,
				name: "stack-inserter"
			},
			{
				amount: 5,
				name: "electronic-circuit"
			}
		],
		localized_name: {
			en: "Stack filter inserter"
		},
		name: "stack-filter-inserter",
		order: "g[stack-filter-inserter]",
		results: [
			{
				amount: 1,
				name: "stack-filter-inserter"
			}
		],
		subgroup: "inserter",
		type: "recipe"
	},
	"stack-inserter": {
		category: "crafting",
		enabled: false,
		energy_required: 0.5,
		icon_col: 10,
		icon_row: 13,
		ingredients: [
			{
				amount: 15,
				name: "iron-gear-wheel"
			},
			{
				amount: 15,
				name: "electronic-circuit"
			},
			{
				amount: 1,
				name: "advanced-circuit"
			},
			{
				amount: 1,
				name: "fast-inserter"
			}
		],
		localized_name: {
			en: "Stack inserter"
		},
		name: "stack-inserter",
		order: "f[stack-inserter]",
		results: [
			{
				amount: 1,
				name: "stack-inserter"
			}
		],
		subgroup: "inserter",
		type: "recipe"
	},
	"steam-engine": {
		category: "crafting",
		energy_required: 0.5,
		icon_col: 12,
		icon_row: 13,
		ingredients: [
			{
				amount: 8,
				name: "iron-gear-wheel"
			},
			{
				amount: 5,
				name: "pipe"
			},
			{
				amount: 10,
				name: "iron-plate"
			}
		],
		localized_name: {
			en: "Steam engine"
		},
		name: "steam-engine",
		order: "b[steam-power]-b[steam-engine]",
		results: [
			{
				amount: 1,
				name: "steam-engine"
			}
		],
		subgroup: "energy",
		type: "recipe"
	},
	"steam-turbine": {
		category: "crafting",
		enabled: false,
		energy_required: 3,
		icon_col: 13,
		icon_row: 13,
		ingredients: [
			{
				amount: 50,
				name: "iron-gear-wheel"
			},
			{
				amount: 50,
				name: "copper-plate"
			},
			{
				amount: 20,
				name: "pipe"
			}
		],
		localized_name: {
			en: "Steam turbine"
		},
		name: "steam-turbine",
		order: "f[nuclear-energy]-d[steam-turbine]",
		results: [
			{
				amount: 1,
				name: "steam-turbine"
			}
		],
		subgroup: "energy",
		type: "recipe"
	},
	"steel-chest": {
		category: "crafting",
		enabled: false,
		energy_required: 0.5,
		icon_col: 0,
		icon_row: 14,
		ingredients: [
			{
				amount: 8,
				name: "steel-plate"
			}
		],
		localized_name: {
			en: "Steel chest"
		},
		name: "steel-chest",
		order: "a[items]-c[steel-chest]",
		results: [
			{
				amount: 1,
				name: "steel-chest"
			}
		],
		subgroup: "storage",
		type: "recipe"
	},
	"steel-furnace": {
		category: "crafting",
		enabled: false,
		energy_required: 3,
		icon_col: 1,
		icon_row: 14,
		ingredients: [
			{
				amount: 6,
				name: "steel-plate"
			},
			{
				amount: 10,
				name: "stone-brick"
			}
		],
		localized_name: {
			en: "Steel furnace"
		},
		name: "steel-furnace",
		order: "b[steel-furnace]",
		results: [
			{
				amount: 1,
				name: "steel-furnace"
			}
		],
		subgroup: "smelting-machine",
		type: "recipe"
	},
	"steel-plate": {
		category: "smelting",
		enabled: false,
		energy_required: 16,
		icon_col: 2,
		icon_row: 14,
		ingredients: [
			{
				amount: 5,
				name: "iron-plate"
			}
		],
		localized_name: {
			en: "Steel plate"
		},
		name: "steel-plate",
		order: "d[steel-plate]",
		results: [
			{
				amount: 1,
				name: "steel-plate"
			}
		],
		subgroup: "raw-material",
		type: "recipe"
	},
	"stone-brick": {
		category: "smelting",
		enabled: true,
		energy_required: 3.2,
		icon_col: 4,
		icon_row: 14,
		ingredients: [
			{
				amount: 2,
				name: "stone"
			}
		],
		localized_name: {
			en: "Stone brick"
		},
		name: "stone-brick",
		order: "a[stone-brick]",
		results: [
			{
				amount: 1,
				name: "stone-brick"
			}
		],
		subgroup: "terrain",
		type: "recipe"
	},
	"stone-furnace": {
		category: "crafting",
		energy_required: 0.5,
		icon_col: 5,
		icon_row: 14,
		ingredients: [
			{
				amount: 5,
				name: "stone"
			}
		],
		localized_name: {
			en: "Stone furnace"
		},
		name: "stone-furnace",
		order: "a[stone-furnace]",
		results: [
			{
				amount: 1,
				name: "stone-furnace"
			}
		],
		subgroup: "smelting-machine",
		type: "recipe"
	},
	"stone-wall": {
		category: "crafting",
		enabled: false,
		energy_required: 0.5,
		icon_col: 11,
		icon_row: 15,
		ingredients: [
			{
				amount: 5,
				name: "stone-brick"
			}
		],
		localized_name: {
			en: "Wall"
		},
		name: "stone-wall",
		order: "a[stone-wall]-a[stone-wall]",
		results: [
			{
				amount: 1,
				name: "stone-wall"
			}
		],
		subgroup: "defensive-structure",
		type: "recipe"
	},
	"storage-tank": {
		category: "crafting",
		enabled: false,
		energy_required: 3,
		icon_col: 6,
		icon_row: 14,
		ingredients: [
			{
				amount: 20,
				name: "iron-plate"
			},
			{
				amount: 5,
				name: "steel-plate"
			}
		],
		localized_name: {
			en: "Storage tank"
		},
		name: "storage-tank",
		order: "b[fluid]-a[storage-tank]",
		results: [
			{
				amount: 1,
				name: "storage-tank"
			}
		],
		subgroup: "storage",
		type: "recipe"
	},
	"submachine-gun": {
		category: "crafting",
		enabled: false,
		energy_required: 10,
		icon_col: 7,
		icon_row: 14,
		ingredients: [
			{
				amount: 10,
				name: "iron-gear-wheel"
			},
			{
				amount: 5,
				name: "copper-plate"
			},
			{
				amount: 10,
				name: "iron-plate"
			}
		],
		localized_name: {
			en: "Submachine gun"
		},
		name: "submachine-gun",
		order: "a[basic-clips]-b[submachine-gun]",
		results: [
			{
				amount: 1,
				name: "submachine-gun"
			}
		],
		subgroup: "gun",
		type: "recipe"
	},
	substation: {
		category: "crafting",
		enabled: false,
		energy_required: 0.5,
		icon_col: 8,
		icon_row: 14,
		ingredients: [
			{
				amount: 10,
				name: "steel-plate"
			},
			{
				amount: 5,
				name: "advanced-circuit"
			},
			{
				amount: 5,
				name: "copper-plate"
			}
		],
		localized_name: {
			en: "Substation"
		},
		name: "substation",
		order: "a[energy]-d[substation]",
		results: [
			{
				amount: 1,
				name: "substation"
			}
		],
		subgroup: "energy-pipe-distribution",
		type: "recipe"
	},
	sulfur: {
		category: "chemistry",
		crafting_machine_tint: {
			primary: {
				a: 1,
				b: 0.089,
				g: 0.995,
				r: 1
			},
			quaternary: {
				a: 1,
				b: 0.35,
				g: 1,
				r: 0.954
			},
			secondary: {
				a: 1,
				b: 0.691,
				g: 0.974,
				r: 1
			},
			tertiary: {
				a: 1,
				b: 0.714,
				g: 0.638,
				r: 0.723
			}
		},
		enabled: false,
		energy_required: 1,
		icon_col: 9,
		icon_row: 14,
		ingredients: [
			{
				amount: 30,
				name: "water",
				type: "fluid"
			},
			{
				amount: 30,
				name: "petroleum-gas",
				type: "fluid"
			}
		],
		localized_name: {
			en: "Sulfur"
		},
		name: "sulfur",
		order: "g[sulfur]",
		results: [
			{
				amount: 2,
				name: "sulfur",
				type: "item"
			}
		],
		subgroup: "raw-material",
		type: "recipe"
	},
	"sulfuric-acid": {
		category: "chemistry",
		crafting_machine_tint: {
			primary: {
				a: 1,
				b: 0,
				g: 0.958,
				r: 1
			},
			quaternary: {
				a: 1,
				b: 0.019,
				g: 1,
				r: 0.969
			},
			secondary: {
				a: 1,
				b: 0.172,
				g: 0.852,
				r: 1
			},
			tertiary: {
				a: 1,
				b: 0.597,
				g: 0.869,
				r: 0.876
			}
		},
		enabled: false,
		energy_required: 1,
		icon_col: 10,
		icon_row: 14,
		ingredients: [
			{
				amount: 5,
				name: "sulfur",
				type: "item"
			},
			{
				amount: 1,
				name: "iron-plate",
				type: "item"
			},
			{
				amount: 100,
				name: "water",
				type: "fluid"
			}
		],
		localized_name: {
			en: "Sulfuric acid"
		},
		name: "sulfuric-acid",
		order: "a[fluid]-f[sulfuric-acid]",
		results: [
			{
				amount: 50,
				name: "sulfuric-acid",
				type: "fluid"
			}
		],
		subgroup: "fluid-recipes",
		type: "recipe"
	},
	tank: {
		category: "crafting",
		enabled: false,
		energy_required: 5,
		icon_col: 11,
		icon_row: 14,
		ingredients: [
			{
				amount: 32,
				name: "engine-unit"
			},
			{
				amount: 50,
				name: "steel-plate"
			},
			{
				amount: 15,
				name: "iron-gear-wheel"
			},
			{
				amount: 10,
				name: "advanced-circuit"
			}
		],
		localized_name: {
			en: "Tank"
		},
		name: "tank",
		order: "b[personal-transport]-b[tank]",
		results: [
			{
				amount: 1,
				name: "tank"
			}
		],
		subgroup: "transport",
		type: "recipe"
	},
	"train-stop": {
		category: "crafting",
		enabled: false,
		energy_required: 0.5,
		icon_col: 13,
		icon_row: 14,
		ingredients: [
			{
				amount: 5,
				name: "electronic-circuit"
			},
			{
				amount: 6,
				name: "iron-plate"
			},
			{
				amount: 6,
				name: "iron-stick"
			},
			{
				amount: 3,
				name: "steel-plate"
			}
		],
		localized_name: {
			en: "Train stop"
		},
		name: "train-stop",
		order: "a[train-system]-c[train-stop]",
		results: [
			{
				amount: 1,
				name: "train-stop"
			}
		],
		subgroup: "train-transport",
		type: "recipe"
	},
	"transport-belt": {
		category: "crafting",
		energy_required: 0.5,
		icon_col: 14,
		icon_row: 14,
		ingredients: [
			{
				amount: 1,
				name: "iron-plate"
			},
			{
				amount: 1,
				name: "iron-gear-wheel"
			}
		],
		localized_name: {
			en: "Transport belt"
		},
		name: "transport-belt",
		order: "a[transport-belt]-a[transport-belt]",
		results: [
			{
				amount: 2,
				name: "transport-belt"
			}
		],
		subgroup: "belt",
		type: "recipe"
	},
	"underground-belt": {
		category: "crafting",
		enabled: false,
		energy_required: 1,
		icon_col: 0,
		icon_row: 15,
		ingredients: [
			{
				amount: 10,
				name: "iron-plate"
			},
			{
				amount: 5,
				name: "transport-belt"
			}
		],
		localized_name: {
			en: "Underground belt"
		},
		name: "underground-belt",
		order: "b[underground-belt]-a[underground-belt]",
		results: [
			{
				amount: 2,
				name: "underground-belt"
			}
		],
		subgroup: "belt",
		type: "recipe"
	},
	"uranium-cannon-shell": {
		category: "crafting",
		enabled: false,
		energy_required: 12,
		icon_col: 4,
		icon_row: 15,
		ingredients: [
			{
				amount: 1,
				name: "cannon-shell"
			},
			{
				amount: 1,
				name: "uranium-238"
			}
		],
		localized_name: {
			en: "Uranium cannon shell"
		},
		name: "uranium-cannon-shell",
		order: "d[cannon-shell]-c[uranium]",
		results: [
			{
				amount: 1,
				name: "uranium-cannon-shell"
			}
		],
		subgroup: "ammo",
		type: "recipe"
	},
	"uranium-fuel-cell": {
		category: "crafting",
		enabled: false,
		energy_required: 10,
		icon_col: 5,
		icon_row: 15,
		ingredients: [
			{
				amount: 10,
				name: "iron-plate"
			},
			{
				amount: 1,
				name: "uranium-235"
			},
			{
				amount: 19,
				name: "uranium-238"
			}
		],
		localized_name: {
			en: "Uranium fuel cell"
		},
		name: "uranium-fuel-cell",
		order: "r[uranium-processing]-a[uranium-fuel-cell]",
		results: [
			{
				amount: 10,
				name: "uranium-fuel-cell"
			}
		],
		subgroup: "intermediate-product",
		type: "recipe"
	},
	"uranium-processing": {
		category: "centrifuging",
		enabled: false,
		energy_required: 12,
		icon_col: 7,
		icon_mipmaps: 4,
		icon_row: 15,
		icon_size: 64,
		ingredients: [
			{
				amount: 10,
				name: "uranium-ore"
			}
		],
		localized_name: {
			en: "Uranium processing"
		},
		name: "uranium-processing",
		order: "k[uranium-processing]",
		results: [
			{
				amount: 1,
				name: "uranium-235",
				probability: 0.007
			},
			{
				amount: 1,
				name: "uranium-238",
				probability: 0.993
			}
		],
		subgroup: "raw-material",
		type: "recipe"
	},
	"uranium-rounds-magazine": {
		category: "crafting",
		enabled: false,
		energy_required: 10,
		icon_col: 8,
		icon_row: 15,
		ingredients: [
			{
				amount: 1,
				name: "piercing-rounds-magazine"
			},
			{
				amount: 1,
				name: "uranium-238"
			}
		],
		localized_name: {
			en: "Uranium rounds magazine"
		},
		name: "uranium-rounds-magazine",
		order: "a[basic-clips]-c[uranium-rounds-magazine]",
		results: [
			{
				amount: 1,
				name: "uranium-rounds-magazine"
			}
		],
		subgroup: "ammo",
		type: "recipe"
	},
	"utility-science-pack": {
		category: "crafting",
		enabled: false,
		energy_required: 21,
		icon_col: 10,
		icon_row: 15,
		ingredients: [
			{
				amount: 3,
				name: "low-density-structure"
			},
			{
				amount: 2,
				name: "processing-unit"
			},
			{
				amount: 1,
				name: "flying-robot-frame"
			}
		],
		localized_name: {
			en: "Utility science pack"
		},
		name: "utility-science-pack",
		order: "f[utility-science-pack]",
		results: [
			{
				amount: 3,
				name: "utility-science-pack"
			}
		],
		subgroup: "science-pack",
		type: "recipe"
	},
	"wooden-chest": {
		category: "crafting",
		energy_required: 0.5,
		icon_col: 14,
		icon_row: 15,
		ingredients: [
			{
				amount: 2,
				name: "wood"
			}
		],
		localized_name: {
			en: "Wooden chest"
		},
		name: "wooden-chest",
		order: "a[items]-a[wooden-chest]",
		results: [
			{
				amount: 1,
				name: "wooden-chest"
			}
		],
		subgroup: "storage",
		type: "recipe"
	}
};
var resource = {
	coal: {
		icon_col: 4,
		icon_row: 2,
		localized_name: {
			en: "Coal"
		},
		minable: {
			mining_particle: "coal-particle",
			mining_time: 1,
			results: [
				{
					amount: 1,
					name: "coal"
				}
			]
		},
		name: "coal"
	},
	"copper-ore": {
		icon_col: 13,
		icon_row: 2,
		localized_name: {
			en: "Copper ore"
		},
		minable: {
			mining_particle: "copper-ore-particle",
			mining_time: 1,
			results: [
				{
					amount: 1,
					name: "copper-ore"
				}
			]
		},
		name: "copper-ore"
	},
	"crude-oil": {
		category: "basic-fluid",
		icon_col: 10,
		icon_row: 3,
		localized_name: {
			en: "Crude oil"
		},
		minable: {
			mining_time: 1,
			results: [
				{
					amount_max: 10,
					amount_min: 10,
					name: "crude-oil",
					probability: 1,
					type: "fluid"
				}
			]
		},
		name: "crude-oil"
	},
	"iron-ore": {
		icon_col: 7,
		icon_row: 7,
		localized_name: {
			en: "Iron ore"
		},
		minable: {
			mining_particle: "iron-ore-particle",
			mining_time: 1,
			results: [
				{
					amount: 1,
					name: "iron-ore"
				}
			]
		},
		name: "iron-ore"
	},
	stone: {
		icon_col: 3,
		icon_row: 14,
		localized_name: {
			en: "Stone"
		},
		minable: {
			mining_particle: "stone-particle",
			mining_time: 1,
			results: [
				{
					amount: 1,
					name: "stone"
				}
			]
		},
		name: "stone"
	},
	"uranium-ore": {
		icon_col: 6,
		icon_row: 15,
		localized_name: {
			en: "Uranium ore"
		},
		minable: {
			fluid_amount: 10,
			mining_particle: "stone-particle",
			mining_time: 2,
			required_fluid: "sulfuric-acid",
			results: [
				{
					amount: 1,
					name: "uranium-ore"
				}
			]
		},
		name: "uranium-ore"
	}
};
var sprites = {
	extra: {
		clock: {
			icon_col: 2,
			icon_row: 2,
			name: "time"
		},
		slot_icon_module: {
			icon_col: 7,
			icon_row: 12,
			name: "no module"
		}
	},
	hash: "886196189fb7e8d6251c449fe812f7ba",
	height: 512,
	width: 480
};
var data = {
	accumulator: accumulator,
	"assembling-machine": {
	"assembling-machine-1": {
		crafting_categories: [
			"crafting",
			"basic-crafting",
			"advanced-crafting"
		],
		crafting_speed: 0.5,
		energy_usage: 75000,
		icon_col: 8,
		icon_row: 0,
		localized_name: {
			en: "Assembling machine 1"
		},
		module_slots: 0,
		name: "assembling-machine-1"
	},
	"assembling-machine-2": {
		allowed_effects: [
			"consumption",
			"speed",
			"productivity",
			"pollution"
		],
		crafting_categories: [
			"basic-crafting",
			"crafting",
			"advanced-crafting",
			"crafting-with-fluid"
		],
		crafting_speed: 0.75,
		energy_usage: 150000,
		icon_col: 9,
		icon_row: 0,
		localized_name: {
			en: "Assembling machine 2"
		},
		module_slots: 2,
		name: "assembling-machine-2"
	},
	"assembling-machine-3": {
		allowed_effects: [
			"consumption",
			"speed",
			"productivity",
			"pollution"
		],
		crafting_categories: [
			"basic-crafting",
			"crafting",
			"advanced-crafting",
			"crafting-with-fluid"
		],
		crafting_speed: 1.25,
		energy_usage: 375000,
		icon_col: 10,
		icon_row: 0,
		localized_name: {
			en: "Assembling machine 3"
		},
		module_slots: 4,
		name: "assembling-machine-3"
	},
	centrifuge: {
		allowed_effects: [
			"consumption",
			"speed",
			"productivity",
			"pollution"
		],
		crafting_categories: [
			"centrifuging"
		],
		crafting_speed: 1,
		energy_usage: 350000,
		icon_col: 13,
		icon_row: 1,
		localized_name: {
			en: "Centrifuge"
		},
		module_slots: 2,
		name: "centrifuge"
	},
	"chemical-plant": {
		allowed_effects: [
			"consumption",
			"speed",
			"productivity",
			"pollution"
		],
		crafting_categories: [
			"chemistry"
		],
		crafting_speed: 1,
		energy_usage: 210000,
		icon_col: 14,
		icon_row: 1,
		localized_name: {
			en: "Chemical plant"
		},
		module_slots: 3,
		name: "chemical-plant"
	},
	"oil-refinery": {
		allowed_effects: [
			"consumption",
			"speed",
			"productivity",
			"pollution"
		],
		crafting_categories: [
			"oil-processing"
		],
		crafting_speed: 1,
		energy_usage: 420000,
		icon_col: 8,
		icon_row: 9,
		localized_name: {
			en: "Oil refinery"
		},
		module_slots: 3,
		name: "oil-refinery"
	}
},
	boiler: boiler,
	fluids: fluids,
	fuel: fuel,
	furnace: furnace,
	generator: generator,
	groups: groups,
	items: items,
	"mining-drill": {
	"burner-mining-drill": {
		energy_source: {
			effectivity: 1,
			emissions_per_minute: 12,
			fuel_category: "chemical",
			fuel_inventory_size: 1,
			smoke: [
				{
					deviation: [
						0.1,
						0.1
					],
					frequency: 3,
					name: "smoke"
				}
			],
			type: "burner"
		},
		energy_usage: 150000,
		icon_col: 9,
		icon_row: 1,
		localized_name: {
			en: "Burner mining drill"
		},
		mining_speed: 0.25,
		module_slots: 0,
		name: "burner-mining-drill",
		resource_categories: [
			"basic-solid"
		]
	},
	"electric-mining-drill": {
		energy_source: {
			emissions_per_minute: 10,
			type: "electric",
			usage_priority: "secondary-input"
		},
		energy_usage: 90000,
		icon_col: 8,
		icon_row: 4,
		localized_name: {
			en: "Electric mining drill"
		},
		mining_speed: 0.5,
		module_slots: 3,
		name: "electric-mining-drill",
		resource_categories: [
			"basic-solid"
		]
	},
	pumpjack: {
		energy_source: {
			emissions_per_minute: 10,
			type: "electric",
			usage_priority: "secondary-input"
		},
		energy_usage: 90000,
		icon_col: 1,
		icon_row: 11,
		localized_name: {
			en: "Pumpjack"
		},
		mining_speed: 1,
		module_slots: 2,
		name: "pumpjack",
		resource_categories: [
			"basic-fluid"
		]
	}
},
	modules: modules,
	"offshore-pump": {
	"offshore-pump": {
		fluid: "water",
		icon_col: 7,
		icon_row: 9,
		localized_name: {
			en: "Offshore pump"
		},
		name: "offshore-pump",
		pumping_speed: 20
	}
},
	reactor: reactor,
	recipes: recipes,
	resource: resource,
	"rocket-silo": {
	"rocket-silo": {
		active_energy_usage: "3990KW",
		allowed_effects: [
			"consumption",
			"speed",
			"productivity",
			"pollution"
		],
		crafting_categories: [
			"rocket-building"
		],
		crafting_speed: 1,
		energy_usage: 250000,
		icon_col: 3,
		icon_row: 12,
		idle_energy_usage: "10KW",
		lamp_energy_usage: "10KW",
		localized_name: {
			en: "Rocket silo"
		},
		module_slots: 4,
		name: "rocket-silo",
		rocket_parts_required: 100
	}
},
	"solar-panel": {
	"solar-panel": {
		icon_col: 12,
		icon_row: 12,
		localized_name: {
			en: "Solar panel"
		},
		name: "solar-panel",
		production: "60kW"
	}
},
	sprites: sprites,
	"transport-belt": {
	"express-transport-belt": {
		icon_col: 6,
		icon_row: 5,
		localized_name: {
			en: "Express transport belt"
		},
		name: "express-transport-belt",
		speed: 0.09375
	},
	"fast-transport-belt": {
		icon_col: 11,
		icon_row: 5,
		localized_name: {
			en: "Fast transport belt"
		},
		name: "fast-transport-belt",
		speed: 0.0625
	},
	"transport-belt": {
		icon_col: 14,
		icon_row: 14,
		localized_name: {
			en: "Transport belt"
		},
		name: "transport-belt",
		speed: 0.03125
	}
}
};

const disabled = new Set([
    'loader', 'fast-loader', 'express-loader',
    'small-plane',
    'player-port',
    'electric-energy-interface',
    'railgun', 'railgun-dart',
]);
let groups$1 = [];
let all_items = Object.keys(data.items).map(k => data.items[k]);
let all_recipes = Object.keys(data.recipes).map(k => data.recipes[k]);
for (let id in data.groups) {
    let raw = data.groups[id];
    let subgroups = [];
    for (let id2 in raw.subgroups) {
        let raw2 = raw.subgroups[id2];
        let items = all_items.filter(item => {
            return item.group == id && item.subgroup == id2
                && item.type != 'fluid';
        }).map(item => {
            let recipes = all_recipes.filter(a => {
                return a.results.length == 1
                    && a.results[0].name == item.name
                    && !disabled.has(a.name);
            });
            let recipe = recipes.length == 1 ? recipes[0] : null;
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
    groups$1.push({
        name: id,
        order: raw.order,
        subgroups: subgroups,
    });
}
groups$1.sort((a, b) => a.order.localeCompare(b.order));
function load_blueprint(raw) {
    let bytes = Buffer.from(raw.substr(1), 'base64');
    let inflated = zlib.inflateSync(bytes);
    let object = JSON.parse(inflated.toString('utf8'));
    if ('blueprint' in object)
        return object['blueprint'];
    return object['blueprint_book'];
}
function save_blueprint(src) {
    let object;
    if ('blueprints' in src)
        object = { ['blueprint_book']: src };
    else
        object = { ['blueprint']: src };
    let inflated = Buffer.from(JSON.stringify(object), 'utf8');
    let bytes = zlib.deflateSync(inflated, { level: 9 });
    return '0' + bytes.toString('base64');
}
function robot_mall() {
    let raw = '0eNqFkNtqwzAQRP9lnpUQB18SkT8pxciO2i7ohrQONUb/XsmB0odA33ZWe2Z2tWEyiw6RHENuoNm7BPm2IdGnU6b2eA0aEsTaQsApW1WyypiDUTYgC5C762/IJr8LaMfEpJ8uu1hHt9hJxzLwihcIPhXEu5pWbA590x47gbWUl+HYlYCyFkdvxkl/qQf5WCdnivNCPJa3+y/+QTHx+N/yy5RY7cjTu6h6/6kKG1RUXCNwQ871pJ2Wf35K4KFj2iPPl6Yd2uvQD82p7/qcfwDkxXE+';
    let src = load_blueprint(raw);
    console.log(JSON.stringify(src));
    let assemblers = {
        item: 'blueprint',
        label: 'assmblers',
        entities: [],
        tiles: [],
        icons: [],
        schedules: [],
        version: 281474976710656,
    };
    function connect(color, a, b) {
        if (!a.connections)
            a.connections = {};
        if (!a.connections[1])
            a.connections[1] = {};
        if (!a.connections[1][color])
            a.connections[1][color] = [];
        if (!a.connections[1][color].find(c => c.entity_id == b.entity_number))
            a.connections[1][color].push({ entity_id: b.entity_number });
        if (!b.connections)
            b.connections = {};
        if (!b.connections[1])
            b.connections[1] = {};
        if (!b.connections[1][color])
            b.connections[1][color] = [];
        if (!b.connections[1][color].find(c => c.entity_id == a.entity_number))
            b.connections[1][color].push({ entity_id: a.entity_number });
    }
    function add_recipe(x, y, name) {
        var _a, _b;
        let assembler_position;
        let power_position;
        let input_position, input_inserter_position, input_inserter_direction;
        let output_position, output_inserter_position, output_inserter_direction;
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
            }
            else if (x % 3 == 1) {
                input_position = { x: 3 * x - 1, y: y0 + 3 };
                input_inserter_position = { x: 3 * x - 1, y: y0 + 2 };
                output_position = { x: 3 * x + 1, y: y0 + 3 };
                output_inserter_position = { x: 3 * x + 1, y: y0 + 2 };
                power_position = { x: x0, y: y0 + 3 };
            }
            else {
                input_position = { x: 3 * x - 1, y: y0 + 3 };
                input_inserter_position = { x: 3 * x - 1, y: y0 + 2 };
                output_position = { x: 3 * x, y: y0 + 3 };
                output_inserter_position = { x: 3 * x, y: y0 + 2 };
                power_position = { x: x0 - 3, y: y0 + 3 };
            }
        }
        else {
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
            }
            else if (x % 3 == 1) {
                input_position = { x: 3 * x - 1, y: y0 - 3 };
                input_inserter_position = { x: 3 * x - 1, y: y0 - 2 };
                output_position = { x: 3 * x + 1, y: y0 - 3 };
                output_inserter_position = { x: 3 * x + 1, y: y0 - 2 };
                power_position = { x: x0, y: y0 - 3 };
            }
            else {
                input_position = { x: 3 * x - 1, y: y0 - 3 };
                input_inserter_position = { x: 3 * x - 1, y: y0 - 2 };
                output_position = { x: 3 * x, y: y0 - 3 };
                output_inserter_position = { x: 3 * x, y: y0 - 2 };
                power_position = { x: x0 - 3, y: y0 - 3 };
            }
        }
        let assembler;
        let input, input_inserter;
        let output, output_inserter;
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
        if (item == null)
            throw new Error(`no item: ${name}`);
        if (recipe == null)
            throw new Error(`no recipe: ${name}`);
        for (let ingredient of recipe.ingredients) {
            let item = all_items.find(i => i.name == ingredient.name);
            if (item == null)
                throw new Error(`no item: ${ingredient.name}`);
            if (item.type == 'fluid') {
                assembler.direction = 2;
                continue;
            }
            let filter = input.request_filters.find(f => f.name == ingredient.name);
            if (filter == null) {
                input.request_filters.push(filter = {
                    index: input.request_filters.length + 1,
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
            let limit = all_items.find(i => i.name == limits[0].name);
            if ('stack_size' in limit && 'stack_size' in item) {
                let count = (_a = counts.get(item.name)) !== null && _a !== void 0 ? _a : item.stack_size * 10;
                let limit_count = (_b = counts.get(limit.name)) !== null && _b !== void 0 ? _b : limit.stack_size * 10;
                console.log(`${item.name} (${count}) -> ${limit.name} (${limit_count})`);
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
    });
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
        "nuclear-reactor", "heat-exchanger", "heat-pipe", "steam-turbine",
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
    const counts = new Map([
        ['nuclear-reactor', 20], ['steam-turbine', 100],
        ['solar-panel', 2000], ['accumulator', 2000],
        ['centrifuge', 50],
        ['speed-module', 50], ['speed-module-2', 50], ['speed-module-3', 2000],
        ['efficiency-module', 50], ['efficiency-module-2', 50], ['efficiency-module-3', 50],
        ['productivity-module', 50], ['productivity-module-2', 50], ['productivity-module-3', 2000],
        ['solar-panel-equipment', 20], ['fusion-reactor-equipment', 20], ['battery-equipment', 20], /*['battery-mk2-equipment', 20],*/ ['belt-immunity-equipment', 20], /*['exoskeleton-equipment', 20],*/ ['personal-roboport-equipment', 20], /*['personal-roboport-mk2-equipment', 20],*/ ['night-vision-equipment', 20],
        ['energy-shield-equipment', 20], /*['energy-shield-mk2-equipment', 20],*/ /*['personal-laser-defense-equipment', 20],*/ ['discharge-defense-equipment', 20], ['discharge-defense-remote', 10],
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
        if (recipe == null)
            throw new Error(`no recipe: ${include[i]}`);
        for (let ingredient of recipe.ingredients) {
            let item = all_items.find(r => r.name == ingredient.name);
            if (item == null)
                throw new Error(`no item: ${ingredient.name}`);
            if (item.type != 'fluid')
                continue;
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
        }
        else {
            x += 1;
        }
        add_recipe(x, y, include[i]);
    }
    for (let a of assemblers.entities) {
        if (a.name != 'medium-electric-pole')
            continue;
        let b = assemblers.entities.find(e => e.position.x == a.position.x + 9 && e.position.y == a.position.y);
        let c = assemblers.entities.find(e => e.position.x == a.position.x && e.position.y == a.position.y + 9);
        // console.log(a.position, b, c);
        if (b)
            connect('green', a, b);
        if (c)
            connect('green', a, c);
    }
    let storage = {
        item: 'blueprint',
        label: 'storage',
        entities: [],
        tiles: [],
        icons: [],
        schedules: [],
        version: 281474976710656,
    };
    storage.icons.push({
        index: 1,
        signal: {
            name: 'logistic-chest-storage',
            type: 'item',
        }
    });
    let controls = {
        item: 'blueprint',
        label: 'controls',
        entities: [],
        tiles: [],
        icons: [],
        schedules: [],
        version: 281474976710656,
    };
    controls.icons.push({
        index: 1,
        signal: {
            name: 'constant-combinator',
            type: 'item',
        }
    });
    let fGroups = groups$1.filter(a => a.name != 'intermediate-products');
    for (let i = 0; i < fGroups.length; ++i) {
        let bump = 0;
        for (let j = 0; j < fGroups[i].subgroups.length; ++j) {
            for (let k = 0; k < fGroups[i].subgroups[j].items.length; ++k) {
                let { item } = fGroups[i].subgroups[j].items[k];
                if (k > 0 && k % 10 == 0)
                    bump += 1;
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
                        count = counts.get(item.name);
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
                    if (a == null || b == null)
                        throw new Error(`? ${x} ${y} `);
                    connect('green', a, b);
                    // let c = controls.entities.find(a => a.position.x == x * 2 && a.position.y == y * 2 + 1);
                    // let d = controls.entities.find(a => a.position.x == x * 2 - 1 && a.position.y == y * 2 + 1);
                    // if (c == null || d == null) throw new Error(`? ${x} ${y} `);
                    // connect('green', c, d);
                }
                else if (j > 0) {
                    let a = controls.entities.find(a => a.position.x == x && a.position.y == y);
                    let b = controls.entities.find(a => a.position.x == x && a.position.y == y - 1);
                    if (a == null || b == null)
                        throw new Error(`? ${x} ${y}`);
                    connect('green', a, b);
                    // let c = controls.entities.find(a => a.position.x == x * 2 + 1 && a.position.y == y * 2);
                    // let d = controls.entities.find(a => a.position.x == x * 2 + 1 && a.position.y == y * 2 - 1);
                    // if (c == null || d == null) throw new Error(`? ${x} ${y} `);
                    // connect('green', c, d);
                }
            }
        }
    }
    let book = {
        item: 'blueprint-book',
        label: 'mall',
        blueprints: [{ index: 0, blueprint: assemblers }, { index: 1, blueprint: storage }, { index: 2, blueprint: controls }],
        active_index: 0,
        version: 281474976710656,
    };
    console.log(save_blueprint(book));
}
robot_mall();
//# sourceMappingURL=main.js.map