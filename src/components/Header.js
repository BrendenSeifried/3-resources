import React from 'react';
import { NavLink } from 'react-router-dom';
import './header.css';


export default function SelectionBar() {
  return (
    <div className='navlinkdiv'>

      <NavLink className='nav' exact to = '/'>
        <h1>Home</h1>
      </NavLink>

      <NavLink className='nav' exact to = '/bulletboard'>
        <h1>BulletBoard</h1>
      </NavLink>

      <NavLink className='nav' exact to = '/workshops'>
        <h1>WorkShops</h1>
      </NavLink>

      <NavLink className='nav' exact to = '/loving_families'>
        <h1>Stalked Families</h1>
      </NavLink>
      
    </div>
   
  );
}