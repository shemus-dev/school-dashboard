import React from 'react'
import { IoIosArrowDown} from 'react-icons/io'
import { IoIosArrowForward } from 'react-icons/io'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FcDataConfiguration } from "react-icons/fc";

function ManageClases() {
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <div>
       <div className=''>
            {/* Clickable Header */}
            <div 
              className='rounded hover:shadow hover:bg-blue-500 p-2 m-1 cursor-pointer flex items-center'
              onClick={() => setIsExpanded(!isExpanded)}
            >
              <FcDataConfiguration className='w-4 h-4'/>
              <span className='flex-grow'> System Configuration </span>
              {isExpanded ? (
                <IoIosArrowDown className='w-4 h-4' />
              ) : (
                <IoIosArrowForward className='w-4 h-4' />
              )}
            </div>
      
            {/* Submodules */}
            {isExpanded && (
              <div className='ml-12'>
                <Link 
                  to="addschooltypes" 
                  className='block  rounded hover:bg-blue-500  text-center'
                >
                  Add School Types
                </Link>
                <Link 
                  to="" 
                  className='block  rounded hover:bg-blue-500  text-center'
                >
                  Add School Categories
                </Link>
                
              </div>
            )}
          </div>
    </div>
  )
}

export default ManageClases