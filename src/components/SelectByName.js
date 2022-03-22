import React from 'react';

export default function SelectByName({ setName }) {
  return (
    <div>
      <select onChange={(e)=>setName(e.target.value)}>
        <option value="All">All</option>
        <option value="Bren">Bren</option>
        <option value="Bob">Bob</option>
        <option value="Stacy">Stacy</option>
        <option value="Anon">Anon</option>
        <option value="Tanner">Tanner</option>
      </select>
    </div>
  );
}