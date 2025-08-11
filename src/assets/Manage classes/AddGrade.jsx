import React, { useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
// import { ClassNames } from '@emotion/react'; // This import is unused and can be removed
import { Toaster, toast } from 'react-hot-toast';
import { FaCheckCircle, FaExclamationCircle } from 'react-icons/fa'; // Import icons


function AddGrade() {
  const [showForm, setShowForm] = useState(false);
  // Correctly initialize state as empty strings for form inputs
  const [grade, setGrade] = useState('');
  const [curriculum, setCurriculum] = useState('');

  const rows = [
    { id: 1, name: 'CBC', description: 'Grade 1, Grade 2, Grade 3, Grade 4, Grade 5' },
    { id: 2, name: 'Junior level', description: 'Grade 6,Grade 7, Grade 8, Grade 9' },
    { id: 3, name: '844-System', description: 'Form1, Form2, Form3, Form4' },
  ];

  const columns = [
    { field: 'name', headerName: 'Curicullum', width: 200 },
    { field: 'description', headerName: 'Grade', width: 300 },
  ];

  // The main function to handle form submission and validation
  const handleSubmit = (e) => {
    // Prevent the form from reloading the page
    e.preventDefault();

    // Countercheck if all required information is filled in
    if (!curriculum || !grade) {
      toast.error('Please fill in all fields.');
      return; // Stop the function from proceeding
    }

    // If validation passes, proceed with the save logic
    // In a real application, you would make an API call here.
    console.log(`Saving new grade: "${grade}" for curriculum: "${curriculum}"`);
    
    // Show a success toast
    toast.success('Grade created successfully!');

    // Reset the form fields
    setCurriculum('');
    setGrade('');

    // Hide the form
    setShowForm(false);
  };

  // Function to handle cancelling the form
  const handleCancel = () => {
    // Reset the form fields
    setCurriculum('');
    setGrade('');

    // Hide the form
    setShowForm(false);
  };

  return (
    <div>
       <Toaster 
        position="top-right" 
        toastOptions={{
          style: {
            padding: '16px',
            color: '#fff',
            fontWeight: 'bold',
          },
          success: {
            duration: 3000,
            icon: <FaCheckCircle size={20} />,
            iconTheme: {
              primary: 'white',
              secondary: 'green',
            },
          },
          error: {
            duration: 5000,
            icon: <FaExclamationCircle size={20} />,
            iconTheme: {
              primary: 'white',
              secondary: 'red',
            },
            style: {
              background: '#F44336', // The specified red background
            },
          },
        }}
      />

      <div style={{ height: 200, width: '100%' }}>
        <DataGrid rows={rows} columns={columns} />
      </div>

      <div className='flex justify-center items-center'>
        <button
          className='items-center ring-2 ring-blue-500 bg-blue-800 rounded-full mt-7 text-blue-50 p-2'
          onClick={() => setShowForm(true)}
        >
          Create New Grade
        </button>
      </div>

      {/* Conditional rendering of the form */}
      {showForm && (
        <div className='mt-7 p-5 border rounded-lg shadow-lg max-w-md mx-auto'>
          <h3 className='text-lg font-bold mb-4'>Create New Grade</h3>
          
          <form onSubmit={handleSubmit}>
            <label className='block text-gray-700 font-bold mb-2'>
              Assign Curriculum
            </label>
            <select
              id='curiculum'
              value={curriculum}
              onChange={(e) => setCurriculum(e.target.value)}
              className='shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
            >
              <option value=''>Select Curriculum</option>
              {rows.map((row) => (
                <option key={row.id} value={row.name}>
                  {row.name}
                </option>
              ))}
            </select>

            <label className='block text-gray-700 font-bold mb-2 mt-4'>Grade Name</label>
            <input
              type='text'
              value={grade} // Control the input with state
              onChange={(e) => setGrade(e.target.value)} // Correctly pass event 'e'
              className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
            />

            <div className='flex justify-end space-x-4'>
              <button
                type='submit' // Button inside a form should be of type submit
                className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4'
              >
                Save details
              </button>
              <button
                type='button' // Changed to type="button" to prevent form submission
                onClick={handleCancel}
                className='bg-gray-500 hover:bg-gray-700 text-white font-bold py-1 px-2 rounded focus:outline-none focus:shadow-outline mt-4'
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}

export default AddGrade;