import React from 'react'

export default function CardInventory({ inventario }) {
    return (
        <>
        <div className="container-card">
        <div className="activos">
            <h2>Activos</h2>
            <div className="card-inventory">
                <div className="card-container">
                    <div className="card-bd">
                        <h3>Laptops</h3>
                        <img src="img/laptop.png" alt="laptop"/>
                    </div>
                    <span>{inventario.laptops}</span>
                </div>
                <div className="card-container">
                    <div className="card-bd">
                        <h3>Monitores</h3>
                        <img src="img/monitor.png" alt="monitor"/>
                    </div>
                    <span>{inventario.monitor}</span>
                </div>
                <div className="card-container">
                    <div className="card-bd">
                        <h3>Teclados</h3>
                        <img src="img/teclado.png" alt="teclado"/>
                    </div>
                    <span>{inventario.teclado}</span>
                </div>
                <div className="card-container">
                    <div className="card-bd">
                        <h3>Mouses</h3>
                        <img src="img/mouse.png" alt="mouse"/>
                    </div>
                    <span>{inventario.mouse}</span>
                </div>
            </div>
        </div>
        <div className="activos">
            <h2>Usuarios</h2>
            <div className="card-inventory">
                <div className="card-container">
                    <div className="card-bd">
                        <h3>Activos</h3>
                        <img src="img/user.png" alt="user"/>
                    </div>
                    <span>{inventario.user}</span>
                </div>
            </div>
        </div>
        </div>
        </>
    )
}
