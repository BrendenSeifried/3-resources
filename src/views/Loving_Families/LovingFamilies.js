import React, { useEffect, useState } from 'react';
import { fetchLovingFamilies } from '../../services/loving_families';

export default function LovingFamilies() {
  const [families, setFamilies] = useState([]);
  useEffect(()=> {
    const allFamiliesFunct = async () => {
      const allFamilies = await fetchLovingFamilies();
      setFamilies(allFamilies);
    };
    allFamiliesFunct();
  }, []);

  return (
    <h1>Loving Families that I stalk:
      {families.map((data)=> (
        <div className='families' key={data.id}>
          <p>{data.name}</p>
        </div>
      ))}
    </h1>
  );
}