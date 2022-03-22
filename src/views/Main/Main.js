import React from 'react';
import { NavLink } from 'react-router-dom';


export default function Main() {
  return (
    <div className='nameofstuff'>

      <NavLink exact to = {'/workshops'}>
        <h1>WorkShops</h1>
      </NavLink>

      
      {/* <NavLink exact to = {'/characters'}>
        <h1>Characters</h1>
      </NavLink>

      
      <NavLink exact to = {'/films'}>
        <h1>Films</h1>
      </NavLink> */}
    </div>
   
  );
}
