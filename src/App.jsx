import "./App.css";
import React, { useState } from "react";
import PersonalInfoForm from "./Components/PersonalInfoForm";
import RenderedInfoForm from "./Components/RenderedInfoForm";

export default function App() {
  
  
  function handleSubmit(data){
    console.log(data)
    
  }


  return (
    <div className="flex">
        <div>
          <PersonalInfoForm functionToPassDown = {handleSubmit} />
        </div>
        <div className="marginDiv">
          <RenderedInfoForm />
        </div>
   </div>
    
  );
}



