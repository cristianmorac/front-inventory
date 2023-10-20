
import React, { useState, useEffect } from 'react';
import CardInventory from './CardInventory'
import { getEquipos } from '../services/inventoryService';

export default function Home() {
  const [count, setCount] = useState([]);
  const listCount = async () => {
    try {
      const { data } = await getEquipos('inventory');
      console.log(data);
      setCount(data)
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    listCount()
  }, [])
  return (
    <>
        <CardInventory inventario={count}/>
    </>
  )
}
