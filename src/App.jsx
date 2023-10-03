import "./App.css";
import React, { useState } from "react";
import PersonalInfoForm from "./Components/PersonalInfoForm";
import RenderedInfoForm from "./Components/RenderedInfoForm";

export default function App() {
  
  const [myState, setmyState] = useState()


  function handleSubmit({data}){
    console.log(data.name)
    
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



