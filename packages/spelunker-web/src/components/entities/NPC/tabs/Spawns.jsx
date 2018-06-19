import React from 'react';
import gql from 'graphql-tag';

import MapReference from '../../Map/Reference';
import { Collection, Column, IDColumn, Table } from '../../../core';
import { MapReferenceColumn } from '../../Map/columns';

const listSpawnsForNPC = gql`
  query($id: Int!, $offset: Int) {
    npc(id: $id) {
      id
      spawns(offset: $offset) {
        totalCount
        results {
          id
          map {
            ...MapReference
          }
          x
          y
          z
        }
      }
    }
  }

  ${MapReference.fragment}
`;

const SpawnsTab = ({ match }) => {
  const { id } = match.params;
  return (
    <Collection
      accessor="npc.spawns"
      query={listSpawnsForNPC}
      variables={{ id }}
    >
      {({ results }) => (
        <Table
          data={results}
          columns={[
            <IDColumn />,
            <MapReferenceColumn accessor="map" />,
            <Column id="x" label="X" accessor="x" />,
            <Column id="y" label="Y" accessor="y" />,
            <Column id="z" label="Z" accessor="z" />,
          ]}
        />
      )}
    </Collection>
  );
};

export default SpawnsTab;
