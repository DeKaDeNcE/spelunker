
import Account from '../entities/Account';
import Character from '../entities/Character';
import Class from '../entities/Class';
import Collection from '../core/Collection';
import GameObject from '../entities/GameObject';
import Item from '../entities/Item';
import Map from '../entities/Map';
import NPC from '../entities/NPC';
import Quest from '../entities/Quest';
import Race from '../entities/Race';

export default {
  accounts: async (args) => new Collection(Account.query, args),
  account: async ({ id }) => Account.find(id),

  characters: async (args) => new Collection(Character.query, args),
  character: async ({ id }) => Character.find(id),

  classes: async (args) => new Collection(Class.query, args),
  class: async ({ id }) => Class.find(id),

  items: async (args) => new Collection(Item.query, args),
  item: async ({ id }) => Item.find(id),

  maps: async (args) => new Collection(Map.query, args),
  map: async ({ id }) => Map.find(id),

  npcs: async (args) => new Collection(NPC.query, args),
  npc: async ({ id }) => NPC.find(id),

  objects: async (args) => new Collection(GameObject.query, args),
  object: async ({ id }) => GameObject.find(id),

  quests: async (args) => new Collection(Quest.query, args),
  quest: async ({ id }) => Quest.find(id),

  races: async (args) => new Collection(Race.query, args),
  race: async ({ id }) => Race.find(id),
};