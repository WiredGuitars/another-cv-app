import React, { useState } from "react";
import "../Styles/PersonalInfoForm.module.css";

export default function PersonalInfoForm({functionToPassDown}) {
  
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    educationalAttainment: "highschoolDiploma",
    collegeMajor: "",
    date: "",
    institution: "",
    addSkills: "",
  })

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value })};

    const handleSubmit = (event) => {
      event.preventDefault();
      functionToPassDown(formData);
    }
    

    return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name:</label>
      <input onChange={handleInputChange} type="text" id="name" name="name" />
      <label htmlFor="phone">Phone:</label>
      <input onChange={handleInputChange} type="tel" id="phone" name="phone" />
      <label htmlFor="email">E-mail:</label>
      <input onChange={handleInputChange} type="email" id="email" name="email" />
      <label htmlFor="educationalAttainment">Educational Attainment:</label>
      <select onChange={handleInputChange} id="educationalAttainment" name="educationalAttainment">
        <option value="highschoolDiploma">Highschool Diploma</option>
        <option value="ged">GED</option>
        <option value="someCollege">Some College</option>
        <option value="bachelors">Bachelor's</option>
        <option value="masters">Master's</option>
        <option value="phd">PhD</option>
      </select>

      <label htmlFor="collegeMajor">Title of Study:</label>
      <input onChange={handleInputChange} type="text" id="collegeMajor" name="collegeMajor"></input>

      <label htmlFor="email">Date Achieved:</label>
      <input onChange={handleInputChange} type="date" id="date" name="date" />

      <label htmlFor="institution">Institution:</label>
      <input onChange={handleInputChange} type="text" id="institution" name="institution" />

      <label htmlFor="addSkills">Additional Skills:</label>
      <textarea onChange={handleInputChange} id="addSkills" name="addSkills" rows="15"></textarea>
      <button type="submit">Submit</button>
      
      </form>
  );
}
