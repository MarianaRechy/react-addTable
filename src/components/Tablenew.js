import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'id', headerName: '#', width: 70 },
  { field: 'firstName', headerName: 'User', width: 70 },
  { field: 'lastName', headerName: 'Description', width: 300 },
  {
    field: 'age',
    headerName: 'Completed',
    type: 'number',
    width: 130,
  },
];

const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
];

export default function Tablenew() {
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
      />
    </div>
  );
}