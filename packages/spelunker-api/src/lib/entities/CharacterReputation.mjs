import DatabaseEntity from '../db/Entity';
import { charactersConnection } from '../db/connections';

import Character from './Character';
import Faction from './Faction';

class CharacterReputation extends DatabaseEntity {
  static get connection() {
    return charactersConnection;
  }

  static get tableName() {
    return 'character_reputation';
  }

  async character() {
    return Character.find(this.data.guid);
  }

  async faction() {
    return Faction.find(this.data.faction);
  }
}

export default CharacterReputation;
