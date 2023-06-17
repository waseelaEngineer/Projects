import React from 'react'
import { Link, useParams } from 'react-router-dom'

export default function Sidebar() {

    const {url} = useParams();

    return (
        <nav className="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
            <div className="sb-sidenav-menu">
                <div className="nav">
                    <div className="sb-sidenav-menu-heading">Core</div>
                    <Link className="nav-link" to={`/admin/resturant/${url}/dashboard`}>
                        <div className="sb-nav-link-icon"><i className="fas fa-tachometer-alt"></i></div>
                        Dashboard
                    </Link>
                    <Link className="nav-link" to={`/admin/resturant/${url}/menu`}>
                        <div className="sb-nav-link-icon"><i className="fa-solid fa-book-open"></i></div>
                        Menu
                    </Link>
                    <Link className="nav-link" to={`/${url}/menu`} target="_blank">
                        <div className="sb-nav-link-icon"><i className="fa-solid fa-building-circle-arrow-right"></i></div>
                        Show
                    </Link>
                    <Link className="nav-link" to="/admin/resturants">
                        <div className="sb-nav-link-icon"><i className="fa-solid fa-arrow-left-long"></i></div>
                        Exit
                    </Link>
                </div>
            </div>
            <div className="sb-sidenav-footer">
                <div className="small">Logged in as:</div>
                {url}
            </div>
        </nav>
    )
}