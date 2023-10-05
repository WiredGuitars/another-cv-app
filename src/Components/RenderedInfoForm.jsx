import React from "react";
import Styles from "../Styles/RenderedInfoForm.module.css";

export default function RenderedInfoForm({ obj }) {
  const {
    name,
    phone,
    email,
    educationalAttainment,
    collegeMajor,
    date,
    institution,
    addSkills,
  } = obj;
  return (
    <div className={Styles.outputBox}>
      <h2>Personal Information</h2>
      <p>Name: {name}</p>
      <p>Phone: {phone}</p>
      <p>Email: {email}</p>

      <h2>Education</h2>
      <p>Educational Attainment: {educationalAttainment}</p>
      <p>College Major: {collegeMajor}</p>
      <p>Date Achieved: {date}</p>
      <p>Institution: {institution}</p>

      <h2>Skills</h2>
      <p>{addSkills}</p>
    </div>
  );
}
