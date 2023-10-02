import React from "react";
import "../Styles/PersonalInfoForm.module.css";

export default function PersonalInfoForm({functionToPassDown}) {
  
    const handleClick = (event) => {
        event.preventDefault();
        functionToPassDown("John") 
    }

    return (
    <form action="/submit" className="test" onSubmit={handleClick} method="POST">
      <label htmlFor="name">Name:</label>
      <input type="text" id="name" name="name" />
      <label htmlFor="phone">Phone:</label>
      <input type="tel" id="phone" name="phone" />
      <label htmlFor="email">E-mail:</label>
      <input type="email" id="email" name="email" />
      <label htmlFor="educationalAttainment">Educational Attainment:</label>
      <select id="educationalAttainment" name="educationalAttainment">
        <option value="highschoolDiploma">Highschool Diploma</option>
        <option value="ged">GED</option>
        <option value="someCollege">Some College</option>
        <option value="bachelors">Bachelor's</option>
        <option value="masters">Master's</option>
        <option value="phd">PhD</option>
      </select>

      <label htmlFor="collegeMajor">Title of Study:</label>
      <input type="text" id="collegeMajor" name="collegeMajor"></input>

      <label htmlFor="email">Date Achieved:</label>
      <input type="date" id="date" name="date" />

      <label htmlFor="institution">Institution:</label>
      <input type="text" id="institution" name="institution" />

      <label htmlFor="addSkills">Additional Skills:</label>
      <textarea id="addSkills" name="addSkills" rows="15"></textarea>
      <button type="submit">
        Submit
      </button>
    </form>
  );
}
