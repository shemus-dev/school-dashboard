import React, { useState } from 'react'
import Sidebar from './Sidebar'
import Navigationbar from './Navigationbar'
import Analytics from './Analytics';
import { Outlet } from 'react-router-dom';


function ParentContainer({children}) {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true)

    const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className='flex h-screen'>
        {/* //navigation */}
        <Navigationbar toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen}/>
        <div className= {`fixed h-full bg-yellow-600 mt-12 transition-all duration-300 z-20 ${
        isSidebarOpen ? 'w-64' : 'w-0 opacity-0'
      }`}>
            {/* sidebar  */}
            <Sidebar/>
        </div>

        {/* Main Content Area (adjusts automatically) */}
        <div className= {`flex-1 transition-all duration-300 ${
        isSidebarOpen ? 'ml-64' : 'ml-0'}`}>
         <div className="p-4 mt-16">
          {children} {/* Your tables/content go here */}
          <Outlet/>
        </div>
        </div>
    </div>
  )
}

export default ParentContainer