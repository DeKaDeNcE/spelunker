import {
  GraphQLFloat,
  GraphQLInt,
  GraphQLNonNull,
  GraphQLObjectType,
} from '../../../graphql';

import AreaType from './AreaType';
import MapType from './MapType';
import NPCType from './NPCType';

export default new GraphQLObjectType({
  name: 'NPCSpawn',
  fields: () => ({
    id: { type: new GraphQLNonNull(GraphQLInt) },
    npc: { type: new GraphQLNonNull(NPCType) },

    x: { type: new GraphQLNonNull(GraphQLFloat) },
    y: { type: new GraphQLNonNull(GraphQLFloat) },
    z: { type: new GraphQLNonNull(GraphQLFloat) },

    area: { type: AreaType },
    map: { type: new GraphQLNonNull(MapType) },
  }),
});
