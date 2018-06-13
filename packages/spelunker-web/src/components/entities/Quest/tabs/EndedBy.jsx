import React from 'react';
import gql from 'graphql-tag';

import Collection from '../../../Collection';
import NPCReference from '../../NPC/Reference';
import Table from '../../../Table';
import npcColumns from '../../NPC/columns';

const listEndedByForQuest = gql`
  query($id: Int!) {
    quest(id: $id) {
      id
      endedBy {
        totalCount
        results {
          ...NPCReference
        }
      }
    }
  }

  ${NPCReference.fragment}
`;

const EndedByTab = ({ match }) => {
  const { id } = match.params;
  return (
    <Collection
      accessor="quest.endedBy"
      query={listEndedByForQuest}
      variables={{ id }}
    >
      {({ results }) => (
        <Table
          data={results}
          columns={npcColumns}
        />
      )}
    </Collection>
  );
};

export default EndedByTab;
