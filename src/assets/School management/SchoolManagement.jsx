import React from 'react'
import { useState } from 'react';
import { IoIosArrowDown } from 'react-icons/io';
import { IoIosArrowForward } from 'react-icons/io';
import { Link } from 'react-router-dom';
import { FaSchool } from 'react-icons/fa';

function SchoolManagement() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className=''>
      <div className='rounded hover:shadow hover:bg-blue-500 py-2 px-2 m-4 cursor-pointer flex items-center'
        onClick={() => setIsExpanded(!isExpanded)}>
           <FaSchool className='w-4 h-5 mr-2'   />
           <span className='flex-grow'>  SchoolManagement</span>  
          {isExpanded ? (<IoIosArrowDown className='w-4 h-4' />) : (<IoIosArrowForward className='w-4 h-4' />)}
            </div>
          {/* submodules */}
          {isExpanded && (
            <div className='ml-12 mt-1'>
          <Link 
            to="schoolsregistered" 
            className='block py-2 px-2 rounded hover:bg-blue-500 ml-2 m-0.5'
          >
            Schools Registered
          </Link>
          <Link 
            to="addschools" 
            className='block py-2 px-2 rounded hover:bg-blue-500 ml-2 m-0.2'
          >
            Add Schools
          </Link>
          <Link 
            to="DownloadImport" 
            className='block py-2 px-2 rounded hover:bg-blue-500 ml-2 m-0.3'
          >
            Download&Import Schools
          </Link>
          
        </div>

          )}


     
    </div>
    

  )
}

export default SchoolManagement