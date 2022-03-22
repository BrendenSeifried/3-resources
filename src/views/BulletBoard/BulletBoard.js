import React, { useState, useEffect } from 'react';
import { fetchBulletBoard } from '../../services/bulletboard';

export default function BulletBoard() {
  const [bullet, setBullet] = useState([]);
  useEffect(()=> {
    const allBulletFunct = async () => {
      const everyBullet = await fetchBulletBoard();
      setBullet(everyBullet);
    };
      
    allBulletFunct();
  }, []);
    
  return (
    <div>BulletBoard:
      {bullet.map((data)=> (
        <div className='bulletboard' key={data.id}>
          <h3>{data.name}</h3>
          <p>Date Posted: {data.date}</p>
          <p>{data.info}</p>
        </div>
      ))}
    </div>
  );
}