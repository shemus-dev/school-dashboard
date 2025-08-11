// import React, { useEffect, useState } from 'react'
// import { BiBadge } from 'react-icons/bi'
// import axios from 'axios'
// import { PieChart } from '@mui/x-charts/PieChart';
// import axiosInstance from '../Registration/api';




// function Analytics(){

//   const [maleCount, setMaleCount] = useState(0)
//   const [femaleCount, setFemaleCount] = useState(0)
//   const [ableCount, setAbleCount] = useState(0);
//   const [differentlyAbledCount, setDifferentlyAbledCount] = useState(0);
//   const [maleStaffCount, setMaleStaffCount] = useState(0);
//   const [femaleStaffCount, setFemaleStaffCount] = useState(0);
//   const [totalStudents, setTotalStudents] = useState(0);
//   const [totalData, setTotalData] = useState(0);
//   const [regions,setRegions] = useState(0)


// const settings = {
//   margin: { right:5 },
//   width: 200,
//   height: 200,
//   hideLegend: true,
// };
//   useEffect (() =>{
//     const fetchData = async () => {
//       try {
//          const schoolsResponse = await axiosInstance.get('/api/v1/superadmin/dashboard/');
//         setTotalData(Response.data.data.schoolsPerRegion);

//         const studentsResponse = await axiosInstance.get('/api/students/count');
//         setTotalStudents(studentsResponse.data.count);

//         const maleResponse = await axiosInstance.get('/api/students/male/count');
//         setMaleCount(maleResponse.data.count);

//         const femaleResponse = await axiosInstance.get('/api/students/female/count');
//         setFemaleCount(femaleResponse.data.count);

//         const ableResponse = await axiosInstance.get('/api/students/able/count');
//         setAbleCount(ableResponse.data.count);

//         const differentlyAbledResponse = await axiosInstance.get('/api/students/differently_abled/count');
//         setDifferentlyAbledCount(differentlyAbledResponse.data.count);

//          const maleStaffResponse = await axiosInstance.get('/api/staff/male/count');
//         setMaleStaffCount(maleStaffResponse.data.count);

//         const femaleStaffResponse = await axiosInstance.get('/api/staff/female/count');
//         setFemaleStaffCount(femaleStaffResponse.data.count);

//         const regionsResponse = await axiosInstance.get('/api/staff//count');
//         setRegions(regionsResponse.data.count);

//       } catch (error) {
//          console.log("Error fetching male count", error);
//       }
        
        
//     } 
//     fetchData()
//   }, []);

//    const studentData = [
//     { label: 'Male', value: maleCount, color: '#0088FE' },
//     { label: 'Female', value: femaleCount, color: '#00C49F' },
//   ];

//   const abilityData = [
//     { label: 'Able', value: ableCount, color: '#FFBB28' },
//     { label: 'Differently Abled', value: differentlyAbledCount, color: '#FF8042' },
//   ];

//   const staffData = [
//     { label: 'Male Staff', value: maleStaffCount, color: '#0088FE' },
//     { label: 'Female Staff', value: femaleStaffCount, color: '#00C49F' },
//   ];

//   const regionsData = [ 
//     {label: 'Region location', value: regions, color: '#FFBB28'},
//     {label: 'Student', value: totalStudents , color: '#FF8042'},
//   ]
//   return (
//     <div>

   
//      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
//       {/* <!-- Metric Item Start --> */}
//       <div className="rounded-2xl border border-gray-500 bg-white  dark:border-gray-800 dark:bg-white/[0.03] md:p-6">
      
//         <div className="flex items-end justify-between mt-1">
//           <div>
//             <span className="text-sm text-gray-500 dark:text-gray-400">
//               No of schools
//             </span>
//             <h4 className="mt-2 font-bold text-gray-800 text-title-sm dark:text-white/90">
//                {totalSchools !== null ? totalSchools.toLocaleString() : "Loading..."}
//             </h4>
//           </div>
//           {/* <Badge color="success">
//             <ArrowUpIcon />
//             11.01%
//           </Badge> */}
//         </div>
//       </div>
//       {/* <!-- Metric Item End --> */}

//       {/* <!-- Metric Item Start --> */}
//       <div className="rounded-2xl border border-gray-500 bg-white  dark:border-gray-800 dark:bg-white/[0.03] md:p-6">
      
//         <div className="flex items-end justify-between mt-1">
//           <div>
//             <span className="text-sm text-gray-500 dark:text-gray-400">
//               No of students
//             </span>
//             <h4 className="mt-2 font-bold text-gray-800 text-title-sm dark:text-white/90">
//                              {/* {totalStudents !== null ? totalStudents.toLocaleString() : "Loading..."} */}

//             </h4>
//           </div>
          
//         </div>
//       </div>
//       <div className="rounded-2xl border border-gray-500 bg-white  dark:border-gray-800 dark:bg-white/[0.03] md:p-6">
      
//         <div className="flex items-end justify-between mt-1">
//           <div>
//             <span className="text-sm text-gray-500 dark:text-gray-400">
//               No of male students
//             </span>
//             <h4 className="mt-2 font-bold text-gray-800 text-title-sm dark:text-white/90">
//                             {/* {totalStudents !== null ? totalStudents.toLocaleString() : "Loading..."} */}

//             </h4>
//           </div>
         
//         </div>
//       </div>
//       <div className="rounded-2xl border border-gray-500 bg-white  dark:border-gray-800 dark:bg-white/[0.03] md:p-6">
      
//         <div className="flex items-end justify-between mt-1">
//           <div>
//             <span className="text-sm text-gray-500 dark:text-gray-400">
//               No of female students
//             </span>
//             <h4 className="mt-2 font-bold text-gray-800 text-title-sm dark:text-white/90">
//                              {/* {femaleCount !== null ? femaleCount.toLocaleString() : "Loading..."} */}

//             </h4>
//           </div>
          
//         </div>
        
//       </div>
//       <div className="rounded-2xl border border-gray-500 bg-white  dark:border-gray-800 dark:bg-white/[0.03] md:p-6">
      
//         <div className="flex items-end justify-between mt-1">
//           <div>
//             <span className="text-sm text-gray-500 dark:text-gray-400">
//               No of able students
//             </span>
//             <h4 className="mt-2 font-bold text-gray-800 text-title-sm dark:text-white/90">
//                              {/* {ableCount !== null ? ableCount.toLocaleString() : "Loading..."} */}

//             </h4>
//           </div>
          
//         </div>
        
//       </div>
//       <div className="rounded-2xl border border-gray-500 bg-white  dark:border-gray-800 dark:bg-white/[0.03] md:p-6">
      
//         <div className="flex items-end justify-between mt-1">
//           <div>
//             <span className="text-sm text-gray-500 dark:text-gray-400">
//               No of differently abled students
//             </span>
//             <h4 className="mt-2 font-bold text-gray-800 text-title-sm dark:text-white/90">
//                              {/* {differentlyAbledCount !== null ? differentlyAbledCount.toLocaleString() : "Loading..."} */}
//             </h4>
//           </div>
          
//         </div>
        
//       </div>
//       <div className="rounded-2xl border border-gray-500 bg-white  dark:border-gray-800 dark:bg-white/[0.03] md:p-6">
      
//         <div className="flex items-end justify-between mt-1">
//           <div>
//             <span className="text-sm text-gray-500 dark:text-gray-400">
//               No of male staff
//             </span>
//             <h4 className="mt-2 font-bold text-gray-800 text-title-sm dark:text-white/90">
//                              {/* {maleStaffCount !== null ? maleStaffCount.toLocaleString() : "Loading..."} */}

//             </h4>
//           </div>
          
//         </div>
        
//       </div>
//       <div className="rounded-2xl border border-gray-500 bg-white  dark:border-gray-800 dark:bg-white/[0.03] md:p-6">
      
//         <div className="flex items-end justify-between mt-1">
//           <div>
//             <span className="text-sm text-gray-500 dark:text-gray-400">
//               No of female staff
//             </span>
//             <h4 className="mt-2 font-bold text-gray-800 text-title-sm dark:text-white/90">
//               {/* {femaleStaffCount !== null ? femaleStaffCount.toLocaleString() : "loading.."} */}
//             </h4>
//           </div>
          
//         </div>
        
//       </div>
//       </div>
      
//       {/* <!-- Metric Item End --> */}
//       <div className="flex flex-wrap justify-between">
//          <div className='w-full sm:w-1/2 p-4'>
//     <PieChart
//         series={[{ innerRadius: 40, outerRadius: 100, data: studentData, arcLabel: 'value' }]}
//         {...settings}
//     />
// </div>
// <div className='w-full sm:w-1/2 p-4'>
//     <PieChart
//         series={[{ innerRadius: 40, outerRadius: 100, data: abilityData, arcLabel: 'value' }]}
//         {...settings}
//     />
// </div>
// <div className='w-full sm:w-1/2 p-4'>
//     <PieChart
//         series={[{ innerRadius: 40, outerRadius: 100, data: staffData, arcLabel: 'value' }]}
//         {...settings}
//     />
// </div>
//      </div>
//      </div>
//   )
// }

// export default Analytics
import React, { useEffect, useState } from 'react'
import { BiBadge } from 'react-icons/bi'
import { PieChart } from '@mui/x-charts/PieChart';
import axiosInstance from '../Registration/api';

function Analytics() {
  // State for dashboard data
  const [dashboardData, setDashboardData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const settings = {
    margin: { right: 5 },
    width: 200,
    height: 200,
    hideLegend: true,
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        
        // Single API call to get all dashboard data
        const response = await axiosInstance.get('/api/v1/superadmin/dashboard');
        
        // Extract data from response.data.data based on your backend response
        setDashboardData(response.data.data);
        console.log('Dashboard data:', response.data.data);
        
      } catch (error) {
        console.log("Error fetching dashboard data", error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    
    fetchData();
  }, []);

  // Helper functions to calculate totals
  const getTotalStudents = () => {
    if (!dashboardData?.studentCountByGender) return 0;
    return (dashboardData.studentCountByGender.MALE || 0) + (dashboardData.studentCountByGender.FEMALE || 0);
  };

  const getTotalTeachers = () => {
    if (!dashboardData?.teacherCountByGender) return 0;
    return (dashboardData.teacherCountByGender.MALE || 0) + (dashboardData.teacherCountByGender.FEMALE || 0);
  };

  const getTotalSchools = () => {
    if (!dashboardData?.schoolsPerRegion) return 0;
    return Object.values(dashboardData.schoolsPerRegion).reduce((sum, count) => sum + count, 0);
  };

  const getTotalDifferentlyAbled = () => {
    if (!dashboardData?.differentlyAbledByGender) return 0;
    return (dashboardData.differentlyAbledByGender.MALE || 0) + (dashboardData.differentlyAbledByGender.FEMALE || 0);
  };

  // Chart data based on backend response
  const studentData = [
    { label: 'Male', value: dashboardData?.studentCountByGender?.MALE || 0, color: '#0088FE' },
    { label: 'Female', value: dashboardData?.studentCountByGender?.FEMALE || 0, color: '#00C49F' },
  ];

  const abilityData = [
    { label: 'Male Differently Abled', value: dashboardData?.differentlyAbledByGender?.MALE || 0, color: '#FFBB28' },
    { label: 'Female Differently Abled', value: dashboardData?.differentlyAbledByGender?.FEMALE || 0, color: '#FF8042' },
  ];

  const staffData = [
    { label: 'Male Staff', value: dashboardData?.teacherCountByGender?.MALE || 0, color: '#0088FE' },
    { label: 'Female Staff', value: dashboardData?.teacherCountByGender?.FEMALE || 0, color: '#00C49F' },
  ];

  const regionsData = dashboardData?.schoolsPerRegion ? 
    Object.entries(dashboardData.schoolsPerRegion).map(([region, count], index) => ({
      label: region,
      value: count,
      color: ['#FFBB28', '#FF8042', '#0088FE', '#00C49F'][index % 4]
    })) : [];

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="text-lg">Loading dashboard data...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="text-lg text-red-500">Error loading data: {error}</div>
      </div>
    );
  }

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        
        {/* Total Schools */}
        <div className="rounded-2xl border border-gray-500 bg-white dark:border-gray-800 dark:bg-white/[0.03] p-6">
          <div className="flex items-end justify-between mt-1">
            <div>
              <span className="text-sm text-gray-500 dark:text-gray-400">
                No of schools
              </span>
              <h4 className="mt-2 font-bold text-gray-800 text-title-sm dark:text-white/90">
                {getTotalSchools().toLocaleString()}
              </h4>
            </div>
          </div>
        </div>

        {/* Total Students */}
        <div className="rounded-2xl border border-gray-500 bg-white dark:border-gray-800 dark:bg-white/[0.03] p-6">
          <div className="flex items-end justify-between mt-1">
            <div>
              <span className="text-sm text-gray-500 dark:text-gray-400">
                No of students
              </span>
              <h4 className="mt-2 font-bold text-gray-800 text-title-sm dark:text-white/90">
                {getTotalStudents().toLocaleString()}
              </h4>
            </div>
          </div>
        </div>

        {/* Male Students */}
        <div className="rounded-2xl border border-gray-500 bg-white dark:border-gray-800 dark:bg-white/[0.03] p-6">
          <div className="flex items-end justify-between mt-1">
            <div>
              <span className="text-sm text-gray-500 dark:text-gray-400">
                No of male students
              </span>
              <h4 className="mt-2 font-bold text-gray-800 text-title-sm dark:text-white/90">
                {(dashboardData?.studentCountByGender?.MALE || 0).toLocaleString()}
              </h4>
            </div>
          </div>
        </div>

        {/* Female Students */}
        <div className="rounded-2xl border border-gray-500 bg-white dark:border-gray-800 dark:bg-white/[0.03] p-6">
          <div className="flex items-end justify-between mt-1">
            <div>
              <span className="text-sm text-gray-500 dark:text-gray-400">
                No of female students
              </span>
              <h4 className="mt-2 font-bold text-gray-800 text-title-sm dark:text-white/90">
                {(dashboardData?.studentCountByGender?.FEMALE || 0).toLocaleString()}
              </h4>
            </div>
          </div>
        </div>

        {/* Total Differently Abled Students */}
        <div className="rounded-2xl border border-gray-500 bg-white dark:border-gray-800 dark:bg-white/[0.03] p-6">
          <div className="flex items-end justify-between mt-1">
            <div>
              <span className="text-sm text-gray-500 dark:text-gray-400">
                No of differently abled students
              </span>
              <h4 className="mt-2 font-bold text-gray-800 text-title-sm dark:text-white/90">
                {getTotalDifferentlyAbled().toLocaleString()}
              </h4>
            </div>
          </div>
        </div>

        {/* Male Teachers */}
        <div className="rounded-2xl border border-gray-500 bg-white dark:border-gray-800 dark:bg-white/[0.03] p-6">
          <div className="flex items-end justify-between mt-1">
            <div>
              <span className="text-sm text-gray-500 dark:text-gray-400">
                No of male teachers
              </span>
              <h4 className="mt-2 font-bold text-gray-800 text-title-sm dark:text-white/90">
                {(dashboardData?.teacherCountByGender?.MALE || 0).toLocaleString()}
              </h4>
            </div>
          </div>
        </div>

        {/* Female Teachers */}
        <div className="rounded-2xl border border-gray-500 bg-white dark:border-gray-800 dark:bg-white/[0.03] p-6">
          <div className="flex items-end justify-between mt-1">
            <div>
              <span className="text-sm text-gray-500 dark:text-gray-400">
                No of female teachers
              </span>
              <h4 className="mt-2 font-bold text-gray-800 text-title-sm dark:text-white/90">
                {(dashboardData?.teacherCountByGender?.FEMALE || 0).toLocaleString()}
              </h4>
            </div>
          </div>
        </div>

        {/* Total Guardians */}
        <div className="rounded-2xl border border-gray-500 bg-white dark:border-gray-800 dark:bg-white/[0.03] p-6">
          <div className="flex items-end justify-between mt-1">
            <div>
              <span className="text-sm text-gray-500 dark:text-gray-400">
                No of guardians
              </span>
              <h4 className="mt-2 font-bold text-gray-800 text-title-sm dark:text-white/90">
                {(dashboardData?.guardianCount || 0).toLocaleString()}
              </h4>
            </div>
          </div>
        </div>
      </div>

      {/* Charts Section */}
      <div className="flex flex-wrap justify-between mt-8">
        
        {/* Student Gender Distribution */}
        <div className='w-full sm:w-1/2 lg:w-1/3 p-4'>
          <div className="rounded-2xl border border-gray-500 bg-white dark:border-gray-800 dark:bg-white/[0.03] p-4">
            <h3 className="text-lg font-semibold mb-4 text-center text-gray-800 dark:text-white">
              Student Gender Distribution
            </h3>
            <PieChart
              series={[{ innerRadius: 40, outerRadius: 100, data: studentData, arcLabel: 'value' }]}
              {...settings}
            />
          </div>
        </div>

        {/* Differently Abled Students */}
        <div className='w-full sm:w-1/2 lg:w-1/3 p-4'>
          <div className="rounded-2xl border border-gray-500 bg-white dark:border-gray-800 dark:bg-white/[0.03] p-4">
            <h3 className="text-lg font-semibold mb-4 text-center text-gray-800 dark:text-white">
              Differently Abled Students
            </h3>
            <PieChart
              series={[{ innerRadius: 40, outerRadius: 100, data: abilityData, arcLabel: 'value' }]}
              {...settings}
            />
          </div>
        </div>

        {/* Teacher Gender Distribution */}
        <div className='w-full sm:w-1/2 lg:w-1/3 p-4'>
          <div className="rounded-2xl border border-gray-500 bg-white dark:border-gray-800 dark:bg-white/[0.03] p-4">
            <h3 className="text-lg font-semibold mb-4 text-center text-gray-800 dark:text-white">
              Teacher Gender Distribution
            </h3>
            <PieChart
              series={[{ innerRadius: 40, outerRadius: 100, data: staffData, arcLabel: 'value' }]}
              {...settings}
            />
          </div>
        </div>

        {/* Schools Per Region */}
        {regionsData.length > 0 && (
          <div className='w-full sm:w-1/2 lg:w-1/3 p-4'>
            <div className="rounded-2xl border border-gray-500 bg-white dark:border-gray-800 dark:bg-white/[0.03] p-4">
              <h3 className="text-lg font-semibold mb-4 text-center text-gray-800 dark:text-white">
                Schools Per Region
              </h3>
              <PieChart
                series={[{ innerRadius: 40, outerRadius: 100, data: regionsData, arcLabel: 'value' }]}
                {...settings}
              />
            </div>
          </div>
        )}
      </div>

      {/* Students Per Class Section */}
      {dashboardData?.studentsPerClass && (
        <div className="mt-8">
          <div className="rounded-2xl border border-gray-500 bg-white dark:border-gray-800 dark:bg-white/[0.03] p-6">
            <h3 className="text-xl font-semibold mb-6 text-gray-800 dark:text-white">
              Students Per Class
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {Object.entries(dashboardData.studentsPerClass)
                .filter(([className, count]) => count > 0) // Only show classes with students
                .map(([className, count]) => (
                <div key={className} className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg border">
                  <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                    {className}
                  </div>
                  <div className="text-2xl font-bold text-gray-800 dark:text-white">
                    {count}
                  </div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">
                    {count === 1 ? 'student' : 'students'}
                  </div>
                </div>
              ))}
            </div>
            
            {/* Show empty classes if needed */}
            <div className="mt-6">
              <h4 className="text-lg font-medium mb-3 text-gray-700 dark:text-gray-300">
                Classes with No Students
              </h4>
              <div className="flex flex-wrap gap-2">
                {Object.entries(dashboardData.studentsPerClass)
                  .filter(([className, count]) => count === 0)
                  .map(([className]) => (
                    <span key={className} className="px-3 py-1 bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-400 rounded-full text-sm">
                      {className}
                    </span>
                  ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Analytics;