import DatabaseEntity from '../db/Entity';
import { charactersConnection } from '../db/connections';

import Character from './Character';
import Quest from './Quest';

class CharacterQuestStatus extends DatabaseEntity {
  static get connection() {
    return charactersConnection;
  }

  static get tableName() {
    return 'character_queststatus';
  }

  async character() {
    return Character.find(this.data.guid);
  }

  async quest() {
    return Quest.find(this.data.quest);
  }
}

export default CharacterQuestStatus;
