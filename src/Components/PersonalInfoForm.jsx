import React, { useState } from "react";
import "../Styles/PersonalInfoForm.module.css";

export default function PersonalInfoForm({
  functionToPassDown,
  defaultFormData,
}) {
  const [formData, setFormData] = useState(defaultFormData);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    functionToPassDown(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name:</label>
      <input
        onChange={handleInputChange}
        value={formData.name}
        type="text"
        id="name"
        name="name"
      />

      <label htmlFor="phone">Phone:</label>
      <input
        onChange={handleInputChange}
        value={formData.phone}
        type="tel"
        id="phone"
        name="phone"
      />

      <label htmlFor="email">E-mail:</label>
      <input
        onChange={handleInputChange}
        value={formData.email}
        type="email"
        id="email"
        name="email"
      />

      <label htmlFor="educationalAttainment">Educational Attainment:</label>
      <select
        onChange={handleInputChange}
        value={formData.educationalAttainment}
        id="educationalAttainment"
        name="educationalAttainment"
      >
        <option value="highschoolDiploma">Highschool Diploma</option>
        <option value="ged">GED</option>
        <option value="someCollege">Some College</option>
        <option value="bachelors">Bachelor's</option>
        <option value="masters">Master's</option>
        <option value="phd">PhD</option>
      </select>

      <label htmlFor="collegeMajor">Title of Study:</label>
      <input
        onChange={handleInputChange}
        value={formData.collegeMajor}
        type="text"
        id="collegeMajor"
        name="collegeMajor"
      ></input>

      <label htmlFor="date">Date Achieved:</label>
      <input
        onChange={handleInputChange}
        value={formData.date}
        type="date"
        id="date"
        name="date"
      />

      <label htmlFor="institution">Institution:</label>
      <input
        onChange={handleInputChange}
        value={formData.institution}
        type="text"
        id="institution"
        name="institution"
      />

      <label htmlFor="addSkills">Additional Skills:</label>
      <textarea
        onChange={handleInputChange}
        value={formData.addSkills}
        id="addSkills"
        name="addSkills"
        rows="15"
      ></textarea>
      <button type="submit">Submit</button>
    </form>
  );
}
