import React from 'react'
import { Link } from 'react-router-dom'

export default function Sidebar() {
    return (
        <nav className="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
            <div className="sb-sidenav-menu">
                <div className="nav">
                    <div className="sb-sidenav-menu-heading">Core</div>
                    <Link className="nav-link" to="/admin/dashboard">
                        <div className="sb-nav-link-icon"><i className="fas fa-tachometer-alt"></i></div>
                        Dashboard
                    </Link>
                    <Link className="nav-link" to="/admin/resturants">
                        <div className="sb-nav-link-icon"><i className="fa-solid fa-utensils"></i></div>
                        Resturants
                    </Link>
                    <Link className="nav-link" to="/admin/users">
                        <div className="sb-nav-link-icon"><i className="fas fa-user fa-fw"></i></div>
                        Users
                    </Link>
                    <Link className="nav-link" to="/admin/orders">
                        <div className="sb-nav-link-icon"><i className="fa-solid fa-book"></i></div>
                        Orders
                    </Link>
                </div>
            </div>
            <div className="sb-sidenav-footer">
                <div className="small">Logged in as:</div>
                admin
            </div>
        </nav>
    )
}