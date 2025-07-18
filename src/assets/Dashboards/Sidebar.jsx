import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaSchool} from 'react-icons/fa';
import { RiDashboardHorizontalFill } from 'react-icons/ri';
import { FaUsersLine } from 'react-icons/fa6';
import { GrConfigure } from "react-icons/gr";
import { MdManageAccounts } from "react-icons/md";
import { TbReportSearch } from "react-icons/tb";
import DashboardModule from './DashboardModule';
import SchoolManagement from '../School management/SchoolManagement';
import UserManagement from '../User Management/UserManagement';
import SystemConfiguration from '../System Configuration/SystemConfiguration';
import ManageClases from '../Manage classes/ManageClases';
import Reports from '../Reports/Reports';


function Sidebar() {
  return (
    <div>
        <div className='w-64 bg-yellow-600 h-full text-white '>
               <h1 className='text-2x text-white font-bold p-3 '>Admin Dashboard</h1>
       
                <hr className='bold'/>
                
           <ul className='text-white'>
               <li className=''>
                   
                   <DashboardModule />
               </li>
               <li>
                   <SchoolManagement/>
               </li>
               <li >
                   <UserManagement/>                                                                                                                                       
               </li>
               <li>
                   <SystemConfiguration/>
               </li>
               <li >
                   <ManageClases/>
               </li>
                <li>
                   <Reports/>
               </li>
           </ul>
           </div>
    </div>
  )
}

export default Sidebar
