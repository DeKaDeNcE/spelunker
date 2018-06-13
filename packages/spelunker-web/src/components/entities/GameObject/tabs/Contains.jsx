import React from 'react';
import gql from 'graphql-tag';

import Collection from '../../../Collection';
import ItemReference from '../../Item/Reference';
import Table, { ChanceColumn } from '../../../Table';
import itemColumns from '../../Item/columns';

const listContainsForGameObject = gql`
  query($id: Int!, $offset: Int) {
    object(id: $id) {
      id
      contains(offset: $offset) {
        totalCount
        results {
          chance
          item {
            ...ItemReference
          }
        }
      }
    }
  }

  ${ItemReference.fragment}
`;

const ContainsTab = ({ match }) => {
  const { id } = match.params;
  return (
    <Collection
      accessor="object.contains"
      query={listContainsForGameObject}
      variables={{ id }}
    >
      {({ results }) => (
        <Table
          data={results}
          columns={[
            ...itemColumns,
            <ChanceColumn />,
          ]}
        />
      )}
    </Collection>
  );
};

export default ContainsTab;
