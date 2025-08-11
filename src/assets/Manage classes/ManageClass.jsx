import React from 'react'
import { useState } from 'react';
import { MdManageAccounts } from 'react-icons/md';
import { IoIosArrowDown } from 'react-icons/io';
import { IoIosArrowForward } from 'react-icons/io';
import { Link } from 'react-router-dom';

function ManageClass() {
      const [isExpanded, setIsExpanded] = useState(false);
    
  return (
    <div className=''>
      {/* Clickable Header */}
      <div 
        className='rounded hover:shadow hover:bg-blue-500 p-2 m-1 cursor-pointer flex items-center'
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <MdManageAccounts  className='w-6 h-5 mr-2' />
        <span className='flex-grow'> Manage Class</span>
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
            to="addgrade" 
            className='block  rounded hover:bg-blue-500  text-center'
          >
            Add Grade
          </Link>
          
        </div>
      )}
    </div>
)
}

export default ManageClass