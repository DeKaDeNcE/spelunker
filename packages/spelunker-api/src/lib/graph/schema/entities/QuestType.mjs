import {
  GraphQLInt,
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLString,
} from '../../../graphql';

import CollectionType from '../CollectionType';

import GameObjectType from './GameObjectType';
import ItemType from './ItemType';
import NPCType from './NPCType';
import QuestFactionType from './QuestFactionType';
import QuestItemType from './QuestItemType';
import QuestNPCType from './QuestNPCType';
import QuestGameObjectType from './QuestGameObjectType';

export default new GraphQLObjectType({
  name: 'Quest',
  fields: () => ({
    id: { type: new GraphQLNonNull(GraphQLInt) },
    name: { type: new GraphQLNonNull(GraphQLString) },
    description: { type: new GraphQLNonNull(GraphQLString) },
    requiredMoney: { type: GraphQLInt },
    rewardMoney: { type: GraphQLInt },

    endedBy: CollectionType.definitionFor(NPCType),
    endedByObject: CollectionType.definitionFor(GameObjectType),
    providedItem: { type: ItemType },
    requiredFactions: CollectionType.definitionFor(QuestFactionType),
    requiredNPCs: CollectionType.definitionFor(QuestNPCType),
    requiredObjects: CollectionType.definitionFor(QuestGameObjectType),
    rewardChoiceItems: CollectionType.definitionFor(QuestItemType),
    rewardItems: CollectionType.definitionFor(QuestItemType),
    startedBy: CollectionType.definitionFor(NPCType),
    startedByItem: CollectionType.definitionFor(ItemType),
    startedByObject: CollectionType.definitionFor(GameObjectType),
  }),
});
