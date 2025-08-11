import { useState, useEffect, useMemo } from 'react';
import DataTable from 'react-data-table-component';
import axiosInstance from '../Registration/api';

const SchoolTable = () => {
  const [schools, setSchools] = useState([]);
  const [loading, setLoading] = useState(true);
  const [totalSchools, setTotalSchools] = useState(0);
  const [filters, setFilters] = useState({
    id: '',
    name: '',
    curriculum: '',
    moeRegNo: '',
    type: '',
    county: '',
    subCounty: '',
  });

  // Fetch data from API
  useEffect(() => {
    const fetchSchools = async () => {
      try {
        setLoading(true);
        
        const response =  await axiosInstance.get('/api/v1/superadmin/schools')
        setSchools(response.data.data)
        setTotalSchools(response.data.data.length); 
        setLoading(false);
      } catch (error) {
        console.error('Error fetching schools:', error);
        setLoading(false);
      }
    };

    fetchSchools();
  }, []);

  // Filter data based on column-specific filters
  const filteredData = useMemo(() => {
    return schools.filter(item =>
      Object.keys(filters).every(key => {
        if (!filters[key]) return true; // Skip empty filters
        return String(item[key])
          .toLowerCase()
          .includes(filters[key].toLowerCase());
      })
    );
  }, [schools, filters]);

  // Handle filter input changes
  const handleFilterChange = (key, value) => {
    setFilters(prev => ({ ...prev, [key]: value }));
  };

  // Handle view action
  const handleView = (row) => {
    alert(`Viewing: ${row.institution}\nStudents: ${row.students}\nStaff: ${row.staff}`);
    // In real app: navigate(`/schools/${row.id}`);
  };

  // Handle edit action
  const handleEdit = (row) => {
    alert(`Editing: ${row.institution}\nID: ${row.id}`);
    // In real app: setEditData(row) and open modal
  };

  // Define columns
  const columns = [
    {
      name: 'id',
      selector: row => row.id,
      sortable: false,
      width: '120px',
    },
    {
      name: 'name',
      selector: row => row.name,
      sortable: false,
      width: '200px',
    },
    {
      name: 'curriculumType',
      selector: row => row.curriculumType,
      sortable: false,
      width: '120px',
    },
     {
      name: 'moeRegNo',
      selector: row => row.moeRegNo,
      sortable: false,
      width: '120px',
    },
    {
      name: 'type',
      selector: row => row.type,
      sortable: false,
      width: '140px',
    },
    {
      name: 'county',
      selector: row => row.county,
      sortable: false,
      width: '140px',
    },
    {
      name: 'subCounty',
      selector: row => row.subCounty,
      sortable: false,
      width: '140px',
    },
    {
      name: 'Actions',
      cell: row => (
        <div className="flex space-x-2">
          <button
            onClick={() => handleView(row)}
            className="px-3 py-1 bg-yellow-500 text-white rounded hover:bg-yellow-600 text-sm"
          >
            View
          </button>
          <button
            onClick={() => handleEdit(row)}
            className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 text-sm"
          >
            Edit
          </button>
        </div>
      ),
      ignoreRowClick: true,
      allowOverflow: true,
      button: true,
      width: '150px',
    },
  ];

  // Custom styles for the table
  const customStyles = {
    headRow: {
      style: {
        backgroundColor: '#3b82f6', // Tailwind blue-500
        color: 'white',
        fontWeight: 'bold',
        fontSize: '0.9rem',
        padding: '0.75rem',
      },
    },
    rows: {
      style: {
        minHeight: '50px',
        fontSize: '0.875rem',
        '&:hover': {
          backgroundColor: '#f3f4f6', // Tailwind gray-100
        },
      },
    },
    cells: {
      style: {
        padding: '0.75rem',
        borderBottom: '1px solid #e5e7eb', // Tailwind gray-200
      },
    },
    pagination: {
      style: {
        borderTop: '1px solid #e5e7eb',
        padding: '0.75rem',
        backgroundColor: '#fff',
      },
    },
  };

  return (
    <div className="container ">
      {/* Header with school count */}
      <div className="flex justify-center mb-1">
        <div className="inline-flex px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg shadow-lg">
          <span className="text-white text-xl font-semibold">
            Total Registered Schools: <span className="text-yellow-300">{totalSchools}</span>
          </span>
        </div>
      </div>

      {/* Filter inputs */}
      <div className="flex mb-4 bg-white rounded-lg shadow">
        {[
          { key: 'id', width: '120px', label: 'id' },
          { key: 'name', width: '200px', label: 'name' },
          { key: 'curriculumType', width: '120px', label: 'curriculumType' },
          { key: 'moeRegNo', width: '120px', label: 'moeRegNo' },
          { key: 'type', width: '140px', label: 'type' },
          { key: 'county', width: '140px', label: 'county' },
          { key: 'subCounty', width: '140px', label: 'subCounty' },
          { key: null, width: '150px', label: '' }, // Spacer for Actions column
        ].map(({ key, width, label }) => (
          <div key={key || 'spacer'} style={{ width, padding: '0.5rem' }}>
            {key ? (
              <input
                type="text"
                value={filters[key]}
                onChange={e => handleFilterChange(key, e.target.value)}
                placeholder={`Filter ${label}`}
                className="w-full p-1 border border-gray-300 rounded text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
            ) : (
              <div></div> // Empty div for Actions column alignment
            )}
          </div>
        ))}
      </div>

      {/* Data Table */}
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <DataTable
          columns={columns}
          data={filteredData}
          progressPending={loading}
          progressComponent={
            <div className="py-8">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500 mx-auto"></div>
            </div>
          }
          customStyles={customStyles}
          pagination
          paginationPerPage={5}
          paginationRowsPerPageOptions={[5, 10, 20]}
          highlightOnHover
          responsive
          striped
        />
      </div>
    </div>
  );
};

export default SchoolTable;