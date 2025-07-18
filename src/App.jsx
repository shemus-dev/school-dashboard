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
function App() {
  return (
    <div className="min-h-screen h-screen">
     
        <Routes>
          <Route path="/" element={<Login/>} />
          <Route path="/forgot_password" element={<Forgotpassword/>}/>
          <Route path="/dashboard" element ={<ParentContainer/>} >
             <Route path="analytics" element={<Analytics/>}/>
             <Route path="addschools" element={<AddSchool/>}/>
          </Route>
        </Routes>
    
      
    </div>
  );
}

export default App;
