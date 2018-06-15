import React from 'react';
import gql from 'graphql-tag';

import Collection from '../../../Collection';
import Table from '../../../Table';
import questColumns from '../../Quest/columns';

const listProvidedForForItem = gql`
  query($id: Int!, $offset: Int) {
    item(id: $id) {
      id
      providedFor(offset: $offset) {
        totalCount
        results {
          ...questColumns
        }
      }
    }
  }

  ${questColumns.fragment}
`;

const ProvidedForTab = ({ match }) => {
  const { id } = match.params;
  return (
    <Collection
      accessor="item.providedFor"
      query={listProvidedForForItem}
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

export default ProvidedForTab;
