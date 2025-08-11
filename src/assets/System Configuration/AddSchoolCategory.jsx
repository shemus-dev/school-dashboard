import React, { useState, useEffect } from "react";
import axios from 'axios';

function AddSchoolCategory() {
  const [curriculumName, setCurriculumName] = useState('');
  const [schoolCategories, setSchoolCategories] = useState([]);

  useEffect(() => {
    const fetchSchoolCategories = async () => {
      try {
        const response = await axios.get('/api/school-categories');
        setSchoolCategories(response.data);
      } catch (error) {
        console.error("Error fetching school categories:", error);
      }
    };

    fetchSchoolCategories();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post('/api/school-categories', {
        curriculum_name: curriculumName,
      });

      if (response.status === 201) { // Assuming 201 Created on success
        // Fetch updated school categories
        const updatedCategoriesResponse = await axios.get('/api/school-categories');
        setSchoolCategories(updatedCategoriesResponse.data);

        // Clear the form input
        setCurriculumName('');
      } else {
        console.error("Error submitting curriculum:", response.status);
        // Handle error (e.g., display an error message)
      }
    } catch (error) {
      console.error("Error submitting curriculum:", error);
      // Handle error (e.g., display an error message)
    }
  };

  return (
    <div className="flex flex-col items-center bg-gray-50 ">
      <form
        className='flex flex-col space-y-4 max-w-md w-full mx-4 bg-white p-8 rounded-xl shadow-lg border'
        onSubmit={handleSubmit}
      >
        <div className='text-center mb-2'>
          <h2 className='text-2xl font-bold text-gray-900 mb-1'>Add Curriculum</h2>
          <p className='text-gray-600 text-sm'>Enter the curriculum details below</p>
        </div>

        <div className='space-y-2'>
          <label className='block text-center text-sm font-medium text-gray-700'>
            Name of Curriculum *
          </label>
          <input
            name='curriculum_name'
            type='text'
            placeholder='Enter name of curriculum'
            className='w-full px-9 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors placeholder-gray-400'
            required
            value={curriculumName}
            onChange={(e) => setCurriculumName(e.target.value)}
          />
        </div>

        <button
          type='submit'
          className='w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-3 mr-4 rounded-lg font-medium transition-colors shadow-sm hover:shadow-md'
        >
          Submit Curriculum
        </button>
      </form>

      <div class="relative overflow-x-auto mt-4">
        <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" class="px-6 py-3">
                School Category No
              </th>
              <th scope="col" class="px-6 py-3">
                School Category
              </th>
            </tr>
          </thead>
          <tbody>
            {schoolCategories.map((category) => (
              <tr
                key={category.id}
                class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200"
              >
                <td class="px-6 py-4">{category.id}</td>
                <td class="px-6 py-4">{category.curriculum_name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AddSchoolCategory;