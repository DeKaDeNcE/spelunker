import { notImplemented } from '../utils/abstract';

class Query {
  constructor(entity) {
    this.entity = entity;
  }

  slice() {
    notImplemented(this, 'slice');
  }

  count() {
    notImplemented(this, 'count');
  }

  then() {
    notImplemented(this, 'then');
  }

  build(data) {
    if (Array.isArray(data)) {
      return data.map(item => this.build(item));
    }

    const Entity = this.entity;
    return new Entity(data);
  }
}

export default Query;
