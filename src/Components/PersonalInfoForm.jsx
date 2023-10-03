import React, { useState } from "react";
import "../Styles/PersonalInfoForm.module.css";

export default function PersonalInfoForm({functionToPassDown}) {
  
  const [formData, setFormData] = useState({name: "",})

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value })};

    const handleSubmit = (event) => {
      event.preventDefault();
      const sendUp = {
        name: formData.name
      }
      functionToPassDown(sendUp)}

    return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name:</label>
      <input onChange={handleInputChange} type="text" id="whatever" name="name" />
      <button type="submit">Submit</button></form>
  );
}
