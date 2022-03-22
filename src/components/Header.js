import React from 'react';
import { NavLink } from 'react-router-dom';


export default function SelectionBar() {
  return (
    <div className='nameofstuff'>

      <NavLink exact to = '/'>
        <h1>Home</h1>
      </NavLink>

      <NavLink exact to = '/bulletboard'>
        <h1>BulletBoard</h1>
      </NavLink>

      <NavLink exact to = '/workshops'>
        <h1>WorkShops</h1>
      </NavLink>

      <NavLink exact to = '/loving_families'>
        <h1>Stalked Families</h1>
      </NavLink>
      
    </div>
   
  );
}