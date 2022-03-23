import React, { useState, useEffect } from 'react';
import { fetchWorkshops } from '../../services/workshops';
import './work.css';

export default function WorkShops() {
  const [workShops, setWorkshops] = useState([]);
  useEffect(()=> {
    const allWorkShopsFunct = async () => {
      const everyShop = await fetchWorkshops();
      setWorkshops(everyShop);
    };
      
    allWorkShopsFunct();
  }, []);
    
  return (
    <h1 className='top'>WorkShops:
      {workShops.map((data)=> (
        <div className='workshops' key={data.id}>
          <p>{data.wname}</p>
        </div>
      ))}
    </h1>
  );
}