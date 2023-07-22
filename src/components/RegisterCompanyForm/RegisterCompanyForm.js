import React, { useState } from "react";
import axios from "axios";

const RegisterCompanyForm = () => {
  const [formData, setFormData] = useState({
    companyName: "",
    clientID: "",
    ownerName: "",
    ownerEmail: "",
    rollNo: "",
    clientSecret: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://20.244.56.144/train/register",
        formData
      );
      console.log("Registration successful:", response.data);
      // Save the received authorization token for API calls
    } catch (error) {
      console.error("Error registering company:", error);
    }
  };

  return (
    <div>
      <h1>Register Company</h1>
      <form onSubmit={handleSubmit}>
        {/* Form fields for company registration */}
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default RegisterCompanyForm;
