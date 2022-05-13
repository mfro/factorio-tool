import data from './data/vanilla-1.1.19.json';

export { data };

export type Item = (typeof data.items)[keyof typeof data.items];
export type Recipe = (typeof data.recipes)[keyof typeof data.recipes];
export type Quantity = { name: string, amount: number };

export interface BlueprintBook {
  item: string;
  label: string;
  label_color?: Color;
  blueprints: { index: number, blueprint: Blueprint }[];
  active_index: number;
  version: number;
}

export interface Blueprint {
  item: string;
  label: string;
  label_color?: Color;
  entities: Entity[];
  tiles: Tile[];
  icons: Icon[];
  schedules: Schedule[];
  version: number;
}

export interface Icon {
  index: number;
  signal: SignalID;
}

export interface SignalID {
  name: string;
  type: 'item' | 'fluid' | 'virtual';
}

export interface Entity {
  entity_number: number
  name: string;
  position: Position;
  direction?: number;
  orientation?: number;
  connections?: { [point: number]: ConnectionPoint };
  control_behavior?: any;
  items?: Item[];
  recipe?: string;
  bar?: number;
  inventory?: Inventory;
  infinity_settings?: InfinitySettings;
  type?: string;
  input_priority?: string;
  output_priority?: string;
  filter?: string;
  filters?: ItemFilter[];
  filter_mode?: string;
  override_stack_size?: number;
  drop_position?: Position;
  pickup_position?: Position;
  request_filters?: LogisticFilter[];
  request_from_buffers?: boolean;
  parameters?: SpeakerParameter;
  alert_parameters?: SpeakerAlertParameter;
  auto_launch?: boolean;
  variation?: number;
  color?: Color;
  station?: string;
}

export interface Inventory {
  filters: ItemFilter[];
  bar?: number;
}

export interface Schedule {
  schedule: ScheduleRecord[];
  locomotives: number[];
}

export interface ScheduleRecord {
  station: string;
  wait_conditions: WaitCondition[];
}

export type WaitConditionType = 'time' | 'inactivity' | 'full' | 'empty' | 'item_count' | 'circuit' | 'robots_inactive' | 'fluid_count' | 'passenger_present' | 'passenger_not_present';
export type CompareType = 'and' | 'or';
export interface WaitCondition {
  type: WaitConditionType;
  compare_type: CompareType;
  ticks?: number;
  condition?: any;
}

export interface Tile {
  name: string;
  position: Position;
}

export interface Position {
  x: number;
  y: number;
}

export interface ConnectionPoint {
  red?: ConnectionData[];
  green?: ConnectionData[];
}

export interface ConnectionData {
  entity_id: number;
  circuit_id?: number;
}

export interface ItemRequest {
  [name: string]: number;
}

export interface ItemFilter {
  name: string;
  index: number;
}

export interface InfinitySettings {
  remove_unfiltered_items: boolean;
  filters: InfinityFilter[];
}

export interface InfinityFilter {
  name: string;
  count: number;
  mode: 'at-least' | 'at-most' | 'exactly';
  index: number;
}

export interface LogisticFilter {
  name: string;
  index: number;
  count: number;
}

export interface SpeakerParameter {
  playback_volume: number;
  playback_globally: boolean;
  allow_polyphony: boolean;
}

export interface SpeakerAlertParameter {
  show_alert: boolean;
  show_on_map: boolean;
  icon_signal_id: SignalID;
  alert_message: string;
}

export interface Color {
  r: number;
  g: number;
  b: number;
  a: number;
}
