import "./App.css";
import React, { useState } from "react";
import PersonalInfoForm from "./Components/PersonalInfoForm";
import RenderedInfoForm from "./Components/RenderedInfoForm";

export default function App() {
  const defaultFormData = {
    name: "John",
    phone: "123-456-7890",
    email: "johndoe@johndoe.com",
    educationalAttainment: "bachelors",
    collegeMajor: "Psychology",
    date: "2023-10-04",
    institution: "Harvard",
    addSkills: "Elite kickboxer",
  };
  const [myState, setmyState] = useState(defaultFormData);
  const dataToPassDown = myState;

  const handleSubmit = (sendUp) => {
    setmyState(sendUp);
  };

  return (
    <div className="flex">
      <div className="personalInfo">
        <PersonalInfoForm
          functionToPassDown={handleSubmit}
          defaultFormData={defaultFormData}
        />
      </div>
      <div className="renderedInfo">
        <RenderedInfoForm obj={dataToPassDown} />
      </div>
    </div>
  );
}
