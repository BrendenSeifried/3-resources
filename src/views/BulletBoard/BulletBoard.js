import React, { useState, useEffect } from 'react';
import { fetchBulletBoard } from '../../services/bulletboard';
import './bullet.css';

import SelectByName from '../../components/SelectByName';

export default function BulletBoard() {
  const [bullet, setBullet] = useState([]);
  const [name, setName] = useState('All');
  useEffect(()=> {
    const allBulletFunct = async () => {
      const everyBullet = await fetchBulletBoard(name);
      setBullet(everyBullet);
    };
      
    allBulletFunct();
  }, [name]);
    
  return (
    <div > 
      <SelectByName className='selection'setName={setName}/>BulletBoard:


      {bullet.map((data)=> (
        <div className='bulletboard' key={data.id}>
          <div className='test' style={{ border: 'solid', bordercolor: 'black', backgroundColor: 'yellow', width:'fit-content' }}>
            <h3 className='post'>{data.name}</h3>
            <p className='post'>Date Posted: {data.date}</p>
            <p className='post'>{data.info}</p>
          </div>
        </div>
      ))}
    </div>
  );
}