import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

export default function Header() {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark" >
                <div className="container-fluid">
                    <NavLink className="navbar-brand" to="/home">Inventory</NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link" aria-current="page" to="/home">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/users">User</NavLink>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Equipos
                                </a>
                                <ul className="dropdown-menu bg-dark">
                                    <li><NavLink className="nav-link" to="/laptops">Laptops</NavLink></li>
                                    <li><hr className="dropdown-divider"/></li>
                                    <li><NavLink className="nav-link" to="/monitores">Monitores</NavLink></li>
                                    <li><hr className="dropdown-divider"/></li>
                                    <li><NavLink className="nav-link" to="/perifericos">Perifericos</NavLink></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav >
            <section>
                <Outlet></Outlet>
            </section>

        </>
    )
}
