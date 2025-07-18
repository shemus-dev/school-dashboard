import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { ChevronDownIcon } from "@heroicons/react/16/solid";
import { data } from "autoprefixer";
const SchoolForm = () => {

   const [boarding , setBoarding ] = useState([])
   const [levelSchool , setLevelSchool ] = useState([])
   const [curiculum , setCuricullum ] = useState([])
   const [county, setCounty] = useState([])
   const [constituency, setConstituency] = useState([])
   const [diocese, setDiocese] = useState([])
  
   useEffect(() => {
    const fetchtdata = async () => {
      try {
        //fetch boarding 
        const res1 = await fetch()
        const data1 =  await res1.json();
        setBoarding(data)
        
        //fetch level school
        const res2 = await fetch()
        const data2 = await res2.json()
        setLevelSchool(data2)

        //fetch curiculum
        const res3 = await fetch()
        const data3 = await res3.json()
        setCuricullum(data3)

        //fetch county
        const res4 = await fetch()
        const data4 = await fetch()
        setConstituency(data4)

        //fetch constituency
        const res5 = await fetch()
        const data5 = await fetch()
        setConstituency(data5)

        //fetch diocese
        const res6 = await fetch()
        const data6 = res6.json()
        setDiocese(res6)

      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
   fetchtdata();

   } , [])
  const formik = useFormik({
    initialValues: {
      schoolName: "",
      regNumber: "",
      email: "",
      phone: "",
      county: "",
      subCounty: "",
      ward: "",
      village: "",
      headTeacher: "",
      deputyTeacher: "",
      numTeachers: "",
      numStudents: "",
      establishmentYear: "",
      schoolCode: "",
      typeOfSchool: "",
      ownership: "",
      cluster: "",
      zone: "",
      logo: null
    },
    validationSchema: Yup.object({
      schoolName: Yup.string().required("School name is required"),
      regNumber: Yup.string().required("Registration number is required"),
      email: Yup.string().email("Invalid email address").required("Email is required")
    }),
    onSubmit: (values) => {
      console.log("Form submitted:", values);
    },
  });


  return (
    <div>
        <h2 className="text-2xl font-bold mb-6 text-blue-600 text-center">
        School Registration Form
      </h2>

   
    <form
      onSubmit={formik.handleSubmit}
      className="max-w-screen-xl mx-auto p-4 bg-white rounded shadow"
    >
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="flex flex-col">
          <label className="mb-1 text-sm font-semibold text-gray-700">
            DAY/BOARDING
          </label>
          <div className="relative "> 
            <select
          
          onChange={formik.handleChange}
          className="mt-1 block w-full appearance-none border border-gray-300 rounded-md bg-white py-2 pl-3 pr-10 text-sm shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
        
        >
          <option value="">SELECT</option>
          
          {boarding.map((board) =>( 
            <option key={board.id}>{board.name}</option>
          ))}
          
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center">
        <ChevronDownIcon className="h-5 w-5 text-gray-400" />
      </div>
          </div>
          
        
          {formik.touched.schoolName && formik.errors.schoolName && (
            <span className="text-red-500 text-sm">{formik.errors.schoolName}</span>
          )}
        </div>
         <div className="flex flex-col">
          <label className="mb-1 text-sm font-semibold text-gray-700">
            BOYS / GIRLS
          </label>
          <div className="relative "> 
            <select
          onChange={formik.handleChange}
          className="mt-1 block w-full appearance-none border border-gray-300 rounded-md bg-white py-2 pl-3 pr-10 text-sm shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
        >

          <option value="">SELECT</option>
          <option value="">Boys School</option>
          <option value="finance">Girls School</option>
          <option value="it">Mixed School</option>
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center">
        <ChevronDownIcon className="h-5 w-5 text-gray-400" />
      </div>
          </div>
          {formik.touched.schoolName && formik.errors.schoolName && (
            <span className="text-red-500 text-sm">{formik.errors.schoolName}</span>
          )}
        </div>
         <div className="flex flex-col">
          <label className="mb-1 text-sm font-semibold text-gray-700">
            Select Logo
          </label>
          <input
            type="file"
            name="logo"
            onChange={(event) => formik.setFieldValue("logo", event.currentTarget.files[0])}
            className="border border-gray-300 rounded-md px-3 py-2 text-sm"
          />
          {formik.touched.schoolName && formik.errors.schoolName && (
            <span className="text-red-500 text-sm">{formik.errors.schoolName}</span>
          )}
        </div>
         <div className="flex flex-col">
          <label className="mb-1 text-sm font-semibold text-gray-700">
            Select School Level
          </label>
           <div className="relative "> 
            <select
          onChange={formik.handleChange}
          className="mt-1 block w-full appearance-none border border-gray-300 rounded-md bg-white py-2 pl-3 pr-10 text-sm shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
        >

          <option value="">SELECT</option>
          {levelSchool.map((lev) => (
            <option key={lev.id}> {lev.name}</option>
          ))}
         
          {/* <option value="">ECDE</option>
          <option value="">Lower Primary</option>
          <option value="">Upper Primary</option>
          <option value="">Junior School</option>
          <option value="">Senior School</option>
          <option value="">British Sytem</option>
          <option value="">Form I</option>
          <option value="">Form II</option>
          <option value="">Form III</option>
          <option value="">Form IV</option>
          <option value="">Nursery & Reception Years</option>
          <option value="">844 Secondary School</option>
          <option value="">CBC Comprehensive School (ECDE, Primary and Junior School)</option>
          <option value=""></option> */}
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center">
        <ChevronDownIcon className="h-5 w-5 text-gray-400" />
      </div>
          </div>
          {formik.touched.schoolName && formik.errors.schoolName && (
            <span className="text-red-500 text-sm">{formik.errors.schoolName}</span>
          )}
        </div>
         <div className="flex flex-col">
          <label className="mb-1 text-sm font-semibold text-gray-700">
            Choose Curriculum
          </label>
         <div className="relative "> 
            <select
          onChange={formik.handleChange}
          className="mt-1 block w-full appearance-none border border-gray-300 rounded-md bg-white py-2 pl-3 pr-10 text-sm shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
        >

          <option value="">SELECT</option>
           {curiculum.map((curicul) =>( 
            <option key={curicul.id}>{curicul.name}</option>
          ))}
          {/* <option value="">CBC</option>
          <option value="finance">CBC (SNE)</option>
          <option value="it">844</option>
          <option value="it">British System</option>
          <option value="it">test12</option> */}
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center">
        <ChevronDownIcon className="h-5 w-5 text-gray-400" />
      </div>
          </div>
          {formik.touched.schoolName && formik.errors.schoolName && (
            <span className="text-red-500 text-sm">{formik.errors.schoolName}</span>
          )}
        </div>
         <div className="flex flex-col">
          <label className="mb-1 text-sm font-semibold text-gray-700">
            School Name
          </label>
          <input
            type="text"
            name="schoolName"
            onChange={formik.handleChange}
            value={formik.values.schoolName}
            className="border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          {formik.touched.schoolName && formik.errors.schoolName && (
            <span className="text-red-500 text-sm">{formik.errors.schoolName}</span>
          )}
        </div>
         <div className="flex flex-col">
          <label className="mb-1 text-sm font-semibold text-gray-700">
            Postal Code
          </label>
          <input
            type="text"
            name="Postal code"
            onChange={formik.handleChange}
            value={formik.values.schoolName}
            className="border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          {formik.touched.schoolName && formik.errors.schoolName && (
            <span className="text-red-500 text-sm">{formik.errors.schoolName}</span>
          )}
        </div>
         <div className="flex flex-col">
          <label className="mb-1 text-sm font-semibold text-gray-700">
            Postal Address
          </label>
          <input
            type="text"
            name="schoolName"
            onChange={formik.handleChange}
            value={formik.values.schoolName}
            className="border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          {formik.touched.schoolName && formik.errors.schoolName && (
            <span className="text-red-500 text-sm">{formik.errors.schoolName}</span>
          )}
        </div>
         <div className="flex flex-col">
          <label className="mb-1 text-sm font-semibold text-gray-700">
            MoE Registration Number
          </label>
          <input
            type="text"
            name="schoolName"
            onChange={formik.handleChange}
            value={formik.values.schoolName}
            className="border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          {formik.touched.schoolName && formik.errors.schoolName && (
            <span className="text-red-500 text-sm">{formik.errors.schoolName}</span>
          )}
        </div>
         <div className="flex flex-col">
          <label className="mb-1 text-sm font-semibold text-gray-700">
            Mobile Number
          </label>
          <input
            type="text"
            name="schoolName"
            placeholder="07XXXXXXXX"
            onChange={formik.handleChange}
            value={formik.values.schoolName}
            className="border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          {formik.touched.schoolName && formik.errors.schoolName && (
            <span className="text-red-500 text-sm">{formik.errors.schoolName}</span>
          )}
        </div>
         <div className="flex flex-col">
          <label className="mb-1 text-sm font-semibold text-gray-700">
            School Email 
          </label>
          <input
            type="text"
            name="schoolName"
            onChange={formik.handleChange}
            value={formik.values.schoolName}
            className="border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          {formik.touched.schoolName && formik.errors.schoolName && (
            <span className="text-red-500 text-sm">{formik.errors.schoolName}</span>
          )}
        </div>
         <div className="flex flex-col">
          <label className="mb-1 text-sm font-semibold text-gray-700">
            Domain
          </label>
          <input
            type="text"
            name="schoolName"
            onChange={formik.handleChange}
            value={formik.values.schoolName}
            className="border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          {formik.touched.schoolName && formik.errors.schoolName && (
            <span className="text-red-500 text-sm">{formik.errors.schoolName}</span>
          )}
        </div>
         <div className="flex flex-col">
          <label className="mb-1 text-sm font-semibold text-gray-700">
            Select County
          </label>
          <div className="relative "> 
            <select
          onChange={formik.handleChange}
          className="mt-1 block w-full appearance-none border border-gray-300 rounded-md bg-white py-2 pl-3 pr-10 text-sm shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
        >

          <option value="">SELECT</option>
           {county.map((count) =>( 
            <option key={count.id}>{count.name}</option>
          ))}
          {/* <option value="">CBC</option>
          <option value="finance">CBC (SNE)</option>
          <option value="it">844</option>
          <option value="it">British System</option>
          <option value="it">test12</option> */}
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center">
        <ChevronDownIcon className="h-5 w-5 text-gray-400" />
      </div>
      </div>
          {formik.touched.schoolName && formik.errors.schoolName && (
            <span className="text-red-500 text-sm">{formik.errors.schoolName}</span>
          )}
        </div>


        <div className="flex flex-col">
          <label className="mb-1 text-sm font-semibold text-gray-700">
            Select Sub-county
          </label>
        <div className="relative "> 
            <select
          onChange={formik.handleChange}
          className="mt-1 block w-full appearance-none border border-gray-300 rounded-md bg-white py-2 pl-3 pr-10 text-sm shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
        >

          <option value="">SELECT</option>
           {constituency.map((count1) =>( 
            <option key={count1.id}>{count1.name}</option>
          ))}
          {/* <option value="">CBC</option>
          <option value="finance">CBC (SNE)</option>
          <option value="it">844</option>
          <option value="it">British System</option>
          <option value="it">test12</option> */}
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center">
        <ChevronDownIcon className="h-5 w-5 text-gray-400" />
      </div>
      </div>
          {formik.touched.regNumber && formik.errors.regNumber && (
            <span className="text-red-500 text-sm">{formik.errors.regNumber}</span>
          )}
        </div>

        <div className="flex flex-col">
          <label className="mb-1 text-sm font-semibold text-gray-700">
            Location
          </label>
          <input
            type="text"
            name="text"
            onChange={formik.handleChange}

            className="border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          {formik.touched.email && formik.errors.email && (
            <span className="text-red-500 text-sm">{formik.errors.email}</span>
          )}
        </div>

        {/* Add other fields as needed */}

        <div className="flex flex-col">
          <label className="mb-1 text-sm font-semibold text-gray-700">
            Select Diocese
          </label>
        <div className="relative "> 
            <select
          onChange={formik.handleChange}
          className="mt-1 block w-full appearance-none border border-gray-300 rounded-md bg-white py-2 pl-3 pr-10 text-sm shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
        >

          <option value="">SELECT</option>
           {diocese.map((place) =>(
            <option key={place.id}>{place.name}</option>
          ))}
          
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center">
        <ChevronDownIcon className="h-5 w-5 text-gray-400" />
      </div>
      </div>
        </div>
      </div>

      <div className="mt-6 text-center">
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded"
        >
          Submit
        </button>
      </div>
    </form>
     </div>
  );
};

export default SchoolForm;
