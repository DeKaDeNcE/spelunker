import DBC from 'blizzardry/lib/dbc/entities';
import restructure from 'blizzardry/lib/restructure';

import MemoryQuery from '../core/memory/Query';
import cache from '../utils/cache';
import logger from '../utils/logger';
import mpq from '../mpq';

const { DecodeStream } = restructure;

const log = logger('dbc');

class DBCQuery extends MemoryQuery {
  constructor(entity) {
    super(entity);

    this.id = entity.dbc;
    this.filepath = `DBFilesClient\\${this.id}.dbc`;
  }

  async preload() {
    const { id, filepath } = this;

    const file = mpq.files.get(filepath);
    const definition = DBC[id];
    const dbc = definition.dbc.decode(new DecodeStream(file.data));
    const records = await this.build(dbc.records);
    log(`pre-loaded ${filepath}`);
    return records;
  }

  async load() {
    return cache([this.entity], () => this.preload());
  }
}

export default DBCQuery;
