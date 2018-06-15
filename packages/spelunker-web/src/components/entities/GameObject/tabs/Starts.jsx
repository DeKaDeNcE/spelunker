import React from 'react';
import gql from 'graphql-tag';

import Collection from '../../../Collection';
import Table from '../../../Table';
import questColumns from '../../Quest/columns';

const listStartsForGameObject = gql`
  query($id: Int!, $offset: Int) {
    object(id: $id) {
      id
      starts(offset: $offset) {
        totalCount
        results {
          ...questColumns
        }
      }
    }
  }

  ${questColumns.fragment}
`;

const StartsTab = ({ match }) => {
  const { id } = match.params;
  return (
    <Collection
      accessor="object.starts"
      query={listStartsForGameObject}
      variables={{ id }}
    >
      {({ results }) => (
        <Table
          data={results}
          columns={questColumns}
        />
      )}
    </Collection>
  );
};

export default StartsTab;
