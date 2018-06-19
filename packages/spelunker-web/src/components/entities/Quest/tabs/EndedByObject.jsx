import React from 'react';
import gql from 'graphql-tag';

import gameObjectColumns from '../../GameObject/columns';
import { Collection, Table } from '../../../core';

const listEndedByObjectForQuest = gql`
  query($id: Int!) {
    quest(id: $id) {
      id
      endedByObject {
        totalCount
        results {
          ...gameObjectColumns
        }
      }
    }
  }

  ${gameObjectColumns.fragment}
`;

const EndedByObjectTab = ({ match }) => {
  const { id } = match.params;
  return (
    <Collection
      accessor="quest.endedByObject"
      query={listEndedByObjectForQuest}
      variables={{ id }}
    >
      {({ results }) => (
        <Table
          data={results}
          columns={gameObjectColumns}
        />
      )}
    </Collection>
  );
};

export default EndedByObjectTab;
