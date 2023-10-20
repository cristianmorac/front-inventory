import React from 'react'

export default function Card({ equipo, name }) {
    return (
        <>
            <div className='container-fluid'>
                <h3 className="text-center">{name}</h3>
                <div className="row row-cols-1 row-cols-md-3 g-4 mt-1" >
                    {
                        equipo.map((Equip) => {
                            if (Equip.processor != undefined){
                                return (
                                    <div className='col-sm-6 mb-3 mb-sm-0' key={Equip.id}>
                                        <div className='card h-100'>
                                            <div className='card-body'>
                                                <h5 className='card-title'>Description</h5>
                                                <p className='card-text'>Model: {Equip.model}</p>
                                                <p className='card-text'>Brand: {Equip.brand}</p>
                                                <p className='card-text'>Model: {Equip.model}</p>
                                                <p className='card-text'>Processor: {Equip.processor}</p>
                                                <p className='card-text'>Storage: {Equip.hdd}</p>
                                                <p className='card-text'>RAM: {Equip.ram}</p>
                                            </div>
                                        </div>
                                    </div>
                                )
                            }else {
                                return (
                                    <div className='col-sm-6 mb-3 mb-sm-0' key={Equip.id}>
                                        <div className='card h-100'>
                                            <div className='card-body'>
                                                <h5 className='card-title'>Description</h5>
                                                <p className='card-text'>Model: {Equip.model}</p>
                                                <p className='card-text'>Brand: {Equip.brand}</p>
                                                <p className='card-text'>Model: {Equip.model}</p>
                                            </div>
                                        </div>
                                    </div>
                                )
                            }

                            
                        })
                    }
                </div>
            </div>
        </>
    )
}
