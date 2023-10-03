import "./App.css";
import React, { useState } from "react";
import PersonalInfoForm from "./Components/PersonalInfoForm";
import RenderedInfoForm from "./Components/RenderedInfoForm";

export default function App() {
  const [myState, setmyState] = useState({ name: "" });
  const dataToPassDown = myState

  const handleSubmit = (sendUp) => {
    setmyState(sendUp)
    console.log(myState)
    }
  
  return (
    <div className="flex">
      <div>
        <PersonalInfoForm functionToPassDown={handleSubmit} />
      </div>
      <div className="marginDiv">
        <RenderedInfoForm obj={dataToPassDown} />
      </div>
    </div>
  );
}