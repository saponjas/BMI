import React from 'react';

export default function KategorijaItem({ item }) {
  return (
    <tr>
      <td>{item.bmi}</td>
      <td>{item.opis}</td>
      <td>{item.rizik}</td>
    </tr>
  );
}
