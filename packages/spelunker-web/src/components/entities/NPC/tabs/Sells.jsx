import React from 'react';
import gql from 'graphql-tag';

import Collection from '../../../Collection';
import ItemReference from '../../Item/Reference';
import Table, { CurrencyColumn, prefixAccessors } from '../../../Table';
import itemColumns from '../../Item/columns';

const listSellsForNPC = gql`
  query($id: Int!, $offset: Int) {
    npc(id: $id) {
      id
      sells(offset: $offset) {
        totalCount
        results {
          maxCount
          restockTime
          item {
            ...ItemReference
            buyPrice
            sellPrice
          }
        }
      }
    }
  }

  ${ItemReference.fragment}
`;

const SellsTab = ({ match }) => {
  const { id } = match.params;
  return (
    <Collection
      accessor="npc.sells"
      query={listSellsForNPC}
      variables={{ id }}
    >
      {({ results }) => (
        <Table
          data={results}
          columns={[
            ...prefixAccessors(itemColumns, 'item'),
            <CurrencyColumn label="Cost" accessor="item.buyPrice" />,
            <CurrencyColumn label="Sells for" accessor="item.sellPrice" />,
          ]}
        />
      )}
    </Collection>
  );
};

export default SellsTab;
