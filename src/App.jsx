import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Login from "./assets/Registration/Login";
import Forgotpassword from "./assets/Registration/Forgotpassword";
import {Routes, Route } from "react-router-dom";
import Navigationbar from "./assets/Dashboards/Navigationbar";
import Sidebar from "./assets/Dashboards/Sidebar";
import ParentContainer from "./assets/Dashboards/ParentContainer";
import Analytics from "./assets/Dashboards/Analytics";
import AddSchool from "./assets/School management/AddSchool";
import Filesubmission from "./assets/School management/Filesubmission";
import SchoolTable from "./assets/School management/SchoolTable.jsx";
import AddSchoolCategory from "./assets/System Configuration/AddSchoolCategory.jsx";
import AddSchooltypes from "./assets/System Configuration/AddSchooltypes.jsx";
import AddGrade from "./assets/Manage classes/AddGrade.jsx";
import ViewSchool from "./assets/School management/ViewSchools.jsx";
import Headui from "./assets/School management/Headui.jsx";
function App() {
  return (
    <div className="min-h-screen h-screen">
     
        <Routes>
          <Route path="/" element={<Login/>} />
          <Route path="/forgot_password" element={<Forgotpassword/>}/>
          <Route path="/dashboard" element ={<ParentContainer/>} >
             <Route path="analytics" element={<Analytics/>}/>
             <Route path="addschools" element={<AddSchool/>}/>
             <Route path="Filesubmission" element={<Filesubmission/>}/>
             <Route path="Schooltable" element={<SchoolTable/>}/>
             <Route path="addschoolcategories" element={<AddSchoolCategory/>}/>
             <Route path="addschooltypes" element={<AddSchooltypes/>}/> 
             <Route path= "addgrade" element = {<AddGrade/>}/> 
             <Route path= "viewschool" element = {<ViewSchool/>}/> 
             <Route path= "headui" element = {<Headui/>}/> 
          </Route>
        </Routes>
    
      
    </div>
  );
}

export default App;
