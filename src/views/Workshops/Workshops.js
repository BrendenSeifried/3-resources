import React, { useState, useEffect } from 'react';
import { fetchWorkshops } from '../../services/workshops';

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
    <div>WorkShops:
      {workShops.map((data)=> (
        <div className='workshops' key={data.id}>
          <h1>{data.wname}</h1>
        </div>
      ))}
    </div>
  );
}