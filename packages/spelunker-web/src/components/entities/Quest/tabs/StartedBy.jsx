import React from 'react';
import gql from 'graphql-tag';

import Collection from '../../../Collection';
import NPCReference from '../../NPC/Reference';
import Table from '../../../Table';
import npcColumns from '../../NPC/columns';

const listStartedByForQuest = gql`
  query($id: Int!) {
    quest(id: $id) {
      id
      startedBy {
        totalCount
        results {
          ...NPCReference
        }
      }
    }
  }

  ${NPCReference.fragment}
`;

const StartedByTab = ({ match }) => {
  const { id } = match.params;
  return (
    <Collection
      accessor="quest.startedBy"
      query={listStartedByForQuest}
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

export default StartedByTab;
