import React,{useState} from 'react'

import '../../assets/admin/css/styles.css'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import Footer from './Footer'
import Dashboard from '../../components/resturant/Dashboard'
import AddCategory from '../../components/resturant/category/AddCategory'
import EditCategory from '../../components/resturant/category/EditCategory'
import Menu from '../../components/resturant/Menu'
import AddProduct from '../../components/resturant/product/AddProduct'
import EditProduct from '../../components/resturant/product/EditProduct'
import { useParams } from 'react-router-dom'
import AddVariant from '../../components/resturant/variants/AddVariant'
import EditVariant from '../../components/resturant/variants/EditVariant'
import NewAddon from '../../components/resturant/addons/NewAddon'
import EditAddon from '../../components/resturant/addons/EditAddon'
import AssignAddon from '../../components/resturant/addons/AssignAddon'

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
                    {content === 'menu' && <Menu />}
                    {content === 'addCategory' && <AddCategory />}
                    {content === 'editCategory' && <EditCategory />}                    
                    {content === 'addProduct' && <AddProduct />}                    
                    {content === 'editProduct' && <EditProduct />}                    
                    {content === 'addVariant' && <AddVariant />}                    
                    {content === 'editVariant' && <EditVariant />}                    
                    {content === 'newAddon' && <NewAddon />}                    
                    {content === 'editAddon' && <EditAddon />}                    
                    {content === 'assign' && <AssignAddon />}                    
                    
                </main>
                <Footer />
            </div>

        </div>
    </div>
  )
}