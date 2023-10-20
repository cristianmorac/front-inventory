import React, { useState, useEffect } from 'react';
import { getEquipos } from '../../services/inventoryService';
import Card from '../Card';

export default function Equipos(page, name) {

  const [equipo, setEquipo] = useState([]);
  const listLaptops = async () => {
    try {
      const { data } = await getEquipos(page);
      console.log(data);
      setEquipo(data[page])
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    listLaptops()
  }, [])


  return (
    <>
      <Card equipo={equipo} name={name}/>
    </>
  )
}
