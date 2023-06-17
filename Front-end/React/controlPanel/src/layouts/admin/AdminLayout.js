import React,{useState} from 'react'

import '../../assets/admin/css/styles.css'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import Footer from './Footer'
import Dashboard from '../../components/admin/Dashboard'
import Resturants from '../../components/admin/resturants/Resturants'
import AddResturant from '../../components/admin/resturants/AddResturant'
import EditResturant from '../../components/admin/resturants/EditResturant'
import Users from '../../components/admin/Users'
import Orders from '../../components/admin/Orders'

export default function MasterLayout(props) {

    const {content} = props
    const [sidebarToggled, setSidebarToggled] = useState(false);

  return (
    <div className={`sb-nav-fixed ${sidebarToggled && 'sb-sidenav-toggled'}`}>
        <Navbar sidebarToggled={sidebarToggled} setSidebarToggled={setSidebarToggled}/>
        <div id="layoutSidenav">

            <div id="layoutSidenav_nav">
                <Sidebar />
            </div>

            <div id="layoutSidenav_content">
                <main>

                    {content === 'dashboard' && <Dashboard />}                 
                    {content === 'resturants' && <Resturants />}                 
                    {content === 'resturantsAdd' && <AddResturant />}                 
                    {content === 'resturantsEdit' && <EditResturant />}                 
                    {content === 'users' && <Users />}                 
                    {content === 'orders' && <Orders />}                 
                    
                </main>
                <Footer />
            </div>

        </div>
    </div>
  )
}