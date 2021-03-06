import React from 'react';
import gql from 'graphql-tag';

import npcColumns from '../../NPC/columns';
import { Collection, Table } from '../../../core';

const listEndedByForQuest = gql`
  query($id: Int!) {
    quest(id: $id) {
      id
      endedBy {
        totalCount
        results {
          ...npcColumns
        }
      }
    }
  }

  ${npcColumns.fragment}
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
