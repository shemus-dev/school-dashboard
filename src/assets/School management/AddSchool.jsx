import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { ChevronDownIcon } from "@heroicons/react/16/solid";
import axiosInstance from "../Registration/api";

const SchoolForm = () => {
  const [boarding, setBoarding] = useState([]);
  const [levelSchool, setLevelSchool] = useState([]);
const [curriculum, setCurriculum] = useState([]);
const [school, setSchool] = useState([{name: "", type: "", location: "", population: "", registrationDate: ""}]);

  const [county, setCounty] = useState([]);
  const [subcounty, setSubcounty] = useState([]);
  const [schoolName, setSchoolname] = useState([]);
    const [region, setRegion] = useState([]);
    const base_url = "https://60a03e3318b7.ngrok-free.app";

useEffect(() => {
  const fetchtdata = async () => {
    try {
      // Fetch type (boarding)
      const res1 = await fetch(`${base_url}/api/v1/superadmin/school-types`);
      const data1 = await res1.json();
      setBoarding(data1.data);

      // Fetch school name
      const res2 = await fetch(`${base_url}/api/v1/superadmin/schools`);
      const data2 = await res2.json();
      setSchoolname(data2);

      // Fetch school level(category)
      const res3 = await fetch(`${base_url}/api/v1/superadmin/school-categories`);
      const data3 = await res3.json();
      setLevelSchool(data3);

      const res4 = await fetch(`${base_url}/api/v1/superadmin/curriculum`);
      const data4 = await res4.json();
      setCurriculum(data4.data);

      // Fetch county
      const res5 = await fetch(`${base_url}/api/v1/superadmin/regions/{regionId}/counties`);
      const data5 = await res5.json();
      setCounty(data5);

      // Fetch regions
      const res6 = await fetch(`${base_url}/api/v1/superadmin/regions`);
      const data6 = await res6.json();
      setRegion(data6);

      // Fetch subcounty
      const res7 = await fetch(`${base_url}/api/v1/superadmin/subcounties/by-county/{countyId}`);
      const data7 = await res7.json();
      setSubcounty(data7);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  fetchtdata();
}, []);


  const formik = useFormik({
    initialValues: {
      schoolName: "",
      schooltype: "",
      phone: "",
      curriculum: "",
      county: "",
      subcounty: "",
      schoolLevel: "",  
      moenumber: "",
      postalcode: "",
      postaladdress: "",
      mobilenumber: "",
      schoolemail: "",
      domain: "",
      location: "",
      region: "",
      genderType: ""  
    },
    validationSchema: Yup.object({
      schoolName: Yup.string().required("School name is required"),
      schooltype: Yup.string().required("School type is required"),
      curriculum: Yup.string().required("Curriculum is required"),
      county: Yup.string().required("County is required"),
      subcounty: Yup.string().required("Subcounty is required"),
      schoolLevel: Yup.string().required("School level is required"),  // Fixed field name
      moenumber: Yup.string().required("MoE registration number is required"),
      postalcode: Yup.string().required("Postal code is required"),
      postaladdress: Yup.string().required("Postal address is required"),
      mobilenumber: Yup.string().required("Mobile number is required"),
      schoolemail: Yup.string()
        .email("Invalid email address")
        .required("School email is required"),
      domain: Yup.string().required("Domain is required"),
      location: Yup.string().required("Location is required"),
      region: Yup.string().required("Region is required"),
      genderType: Yup.string().required("school type is required")  
    }),
    onSubmit: (values) => {
      console.log("Form submitted:", values);

      try {
        
        const response =  fetch(`${base_url}//api/v1/superadmin/schools`)
      } catch (error) {

        console.log("Error submitting form:", error);
        
      }
    },
    validateOnMount: true,
    validateOnChange: true
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
        {/* <input type="text" value={school.name} onChange={e=> {...school, name: e,target.value}} /> */}
        

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* SCHOOL TYPE */}
          <div className="flex flex-col">
            <label className="mb-1 text-sm font-semibold text-gray-700">
              SCHOOL TYPE
            </label>
            <div className="relative">
              <select
                name="schooltype"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.schooltype}
                className="mt-1 block w-full appearance-none border border-gray-300 rounded-md bg-white py-2 pl-3 pr-10 text-sm shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="">SELECT</option>
                {boarding.map((board) => (
                  <option key={board.id} value={board.type}>
                    {board.type}
                  </option>
                ))}
              </select>
              
              
              <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center">
                <ChevronDownIcon className="h-5 w-5 text-gray-400" />
              </div>
              {formik.errors.schooltype && (
                <span className="text-red-500 text-sm">{formik.errors.schooltype}</span>
              )}
            </div>
          </div>

          {/* BOYS / GIRLS */}
          <div className="flex flex-col">
            <label className="mb-1 text-sm font-semibold text-gray-700">
              BOYS / GIRLS
            </label>
            <div className="relative">
              <select
                name="genderType"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.genderType}
                className="mt-1 block w-full appearance-none border border-gray-300 rounded-md bg-white py-2 pl-3 pr-10 text-sm shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="">SELECT</option>
                <option value="boys">Boys School</option>
                <option value="girls">Girls School</option>
                <option value="mixed">Mixed School</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center">
                <ChevronDownIcon className="h-5 w-5 text-gray-400" />
              </div>
              {formik.errors.genderType && (
                <span className="text-red-500 text-sm">{formik.errors.genderType}</span>
              )}
            </div>
          </div>

          {/* SCHOOL LEVEL */}
          <div className="flex flex-col">
            <label className="mb-1 text-sm font-semibold text-gray-700">
              Select School Level
            </label>
            <div className="relative">
              <select
                name="schoolLevel"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.schoolLevel}
                className="mt-1 block w-full appearance-none border border-gray-300 rounded-md bg-white py-2 pl-3 pr-10 text-sm shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="">SELECT</option>
                {levelSchool.map((lev) => (
                  <option key={lev.id} value={lev.category}>
                    {lev.category}
                  </option>
                ))}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center">
                <ChevronDownIcon className="h-5 w-5 text-gray-400" />
              </div>
              {formik.errors.schoolLevel && (
                <span className="text-red-500 text-sm">{formik.errors.schoolLevel}</span>
              )}
            </div>
          </div>

          {/* CURRICULUM */}
          <div className="flex flex-col">
            <label className="mb-1 text-sm font-semibold text-gray-700">
              Choose Curriculum
            </label>
            <div className="relative">
<select
  name="curriculum"
  onChange={formik.handleChange}
  onBlur={formik.handleBlur}
  value={formik.values.curriculum}
  className="mt-1 block w-full appearance-none border border-gray-300 rounded-md bg-white py-2 pl-3 pr-10 text-sm shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
>
  <option value="">SELECT</option>
  {curriculum.map((item) => (
    <option key={item.id} value={item.name}>
      {item.name}
    </option>
  ))}
</select>

              <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center">
                <ChevronDownIcon className="h-5 w-5 text-gray-400" />
              </div>
              {formik.errors.curriculum && (
                <span className="text-red-500 text-sm">{formik.errors.curriculum}</span>
              )}
            </div>
          </div>

          {/* SCHOOL NAME */}
          <div className="flex flex-col">
            <label className="mb-1 text-sm font-semibold text-gray-700">
              School Name
            </label>
            <input
              type="text"
              name="schoolName"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.schoolName}
              className="border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            {formik.errors.schoolName && (
              <span className="text-red-500 text-sm">{formik.errors.schoolName}</span>
            )}
          </div>

          {/* POSTAL CODE */}
          <div className="flex flex-col">
            <label className="mb-1 text-sm font-semibold text-gray-700">
              Postal Code
            </label>
            <input
              type="text"
              name="postalcode"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.postalcode}
              className="border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            {formik.errors.postalcode && (
              <span className="text-red-500 text-sm">{formik.errors.postalcode}</span>
            )}
          </div>

          {/* POSTAL ADDRESS */}
          <div className="flex flex-col">
            <label className="mb-1 text-sm font-semibold text-gray-700">
              Postal Address
            </label>
            <input
              type="text"
              name="postaladdress"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.postaladdress}
              className="border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            {formik.errors.postaladdress && (
              <span className="text-red-500 text-sm">{formik.errors.postaladdress}</span>
            )}
          </div>

          {/* MOE REGISTRATION NUMBER */}
          <div className="flex flex-col">
            <label className="mb-1 text-sm font-semibold text-gray-700">
              MoE Registration Number
            </label>
            <input
              type="text"
              name="moenumber"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.moenumber}
              className="border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            {formik.errors.moenumber && (
              <span className="text-red-500 text-sm">{formik.errors.moenumber}</span>
            )}
          </div>

          {/* MOBILE NUMBER */}
          <div className="flex flex-col">
            <label className="mb-1 text-sm font-semibold text-gray-700">
              Mobile Number
            </label>
            <input
              type="text"
              name="mobilenumber"
              placeholder="07XXXXXXXX"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.mobilenumber}
              className="border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            {formik.errors.mobilenumber && (
              <span className="text-red-500 text-sm">{formik.errors.mobilenumber}</span>
            )}
          </div>

          {/* SCHOOL EMAIL */}
          <div className="flex flex-col">
            <label className="mb-1 text-sm font-semibold text-gray-700">
              School Email
            </label>
            <input
              type="email"
              name="schoolemail"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.schoolemail}
              className="border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            {formik.errors.schoolemail && (
              <span className="text-red-500 text-sm">{formik.errors.schoolemail}</span>
            )}
          </div>

          {/* DOMAIN */}
          <div className="flex flex-col">
            <label className="mb-1 text-sm font-semibold text-gray-700">
              Domain
            </label>
            <input
              type="text"
              name="domain"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.domain}
              className="border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            {formik.errors.domain && (
              <span className="text-red-500 text-sm">{formik.errors.domain}</span>
            )}
          </div>

          {/* COUNTY */}
          <div className="flex flex-col">
            <label className="mb-1 text-sm font-semibold text-gray-700">
              Select County
            </label>
            <div className="relative">
              <select
                name="county"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.county}
                className="mt-1 block w-full appearance-none border border-gray-300 rounded-md bg-white py-2 pl-3 pr-10 text-sm shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="">SELECT</option>
                {county.map((count) => (
                  <option key={count.id} value={count.county}>
                    {count.county}
                  </option>
                ))}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center">
                <ChevronDownIcon className="h-5 w-5 text-gray-400" />
              </div>
              {formik.errors.county && (
                <span className="text-red-500 text-sm">{formik.errors.county}</span>
              )}
            </div>
          </div>

          {/* SUB-COUNTY */}
          <div className="flex flex-col">
            <label className="mb-1 text-sm font-semibold text-gray-700">
              Select Sub-county
            </label>
            <div className="relative">
              <select
                name="subcounty"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.subcounty}
                className="mt-1 block w-full appearance-none border border-gray-300 rounded-md bg-white py-2 pl-3 pr-10 text-sm shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="">SELECT</option>
                {subcounty.map((count1) => (
                  <option key={count1.id} value={count1.subCounty}>
                    {count1.subCounty}
                  </option>
                ))}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center">
                <ChevronDownIcon className="h-5 w-5 text-gray-400" />
              </div>
              {formik.errors.subcounty && (
                <span className="text-red-500 text-sm">{formik.errors.subcounty}</span>
              )}
            </div>
          </div>

          {/* LOCATION */}
          <div className="flex flex-col">
            <label className="mb-1 text-sm font-semibold text-gray-700">
              Location
            </label>
            <input
              type="text"
              name="location"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.location}
              className="border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            {formik.errors.location && (
              <span className="text-red-500 text-sm">{formik.errors.location}</span>
            )}
          </div>

          {/* REGION */}
          <div className="flex flex-col">
            <label className="mb-1 text-sm font-semibold text-gray-700">
              Select Region
            </label>
            <div className="relative">
              <select
                name="region"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.region}
                className="mt-1 block w-full appearance-none border border-gray-300 rounded-md bg-white py-2 pl-3 pr-10 text-sm shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="">SELECT</option>
                {region.map((place) => (
                  <option key={place.id} value={place.region}>
                    {place.region}
                  </option>
                ))}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center">
                <ChevronDownIcon className="h-5 w-5 text-gray-400" />
              </div>
              {formik.errors.region && (
                <span className="text-red-500 text-sm">{formik.errors.region}</span>
              )}
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