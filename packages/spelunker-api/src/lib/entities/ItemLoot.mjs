import DatabaseEntity from '../db/Entity';
import { worldConnection } from '../db/connections';

import Item from './Item';

class ItemLoot extends DatabaseEntity {
  static get connection() {
    return worldConnection;
  }

  static get tableName() {
    return 'item_loot_template';
  }

  get chance() {
    return this.data.Chance;
  }

  container() {
    return Item.find(this.data.Entry);
  }

  item() {
    return Item.find(this.data.Item);
  }
}

export default ItemLoot;
