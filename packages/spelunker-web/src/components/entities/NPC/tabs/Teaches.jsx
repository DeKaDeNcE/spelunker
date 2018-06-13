import React from 'react';
import gql from 'graphql-tag';

import Collection from '../../../Collection';
import SpellReference from '../../Spell/Reference';
import Table, { CurrencyColumn, prefixAccessors } from '../../../Table';
import spellColumns from '../../Spell/columns';

const listTeachesForNPC = gql`
  query($id: Int!, $offset: Int) {
    npc(id: $id) {
      id
      teaches(offset: $offset) {
        totalCount
        results {
          cost
          spell {
            ...SpellReference
          }
        }
      }
    }
  }

  ${SpellReference.fragment}
`;

const TeachesTab = ({ match }) => {
  const { id } = match.params;
  return (
    <Collection
      accessor="npc.teaches"
      query={listTeachesForNPC}
      variables={{ id }}
    >
      {({ results }) => (
        <Table
          data={results}
          columns={[
            ...prefixAccessors(spellColumns, 'spell'),
            <CurrencyColumn label="Cost" accessor="cost" />,
          ]}
        />
      )}
    </Collection>
  );
};

export default TeachesTab;
