import React from 'react'
import AdminSidebar from '../AdminCommon/AdminSidebar'
import AdminTopbar from '../AdminCommon/AdminTopbar'

const AdminDashboard = () => {
  return (
    <section className="main_content dashboard_part large_header_bg">

        <AdminSidebar/>
        <AdminTopbar/>

        

    </section>
  )
}

export default AdminDashboard