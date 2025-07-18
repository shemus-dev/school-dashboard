import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { RiDashboardHorizontalFill } from 'react-icons/ri';
import { IoIosArrowDown, IoIosArrowForward } from 'react-icons/io';

const DashboardModule = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className=''>
      {/* Clickable Header */}
      <div 
        className='rounded hover:shadow hover:bg-blue-500 p-2 m-1 cursor-pointer flex items-center'
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <RiDashboardHorizontalFill className='w-6 h-5 mr-2' />
        <span className='flex-grow'>  Dasboard</span>
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
            to="analytics" 
            className='block  rounded hover:bg-blue-500  text-center'
          >
            Analytics
          </Link>
          
        </div>
      )}
    </div>
  );
};

export default DashboardModule;