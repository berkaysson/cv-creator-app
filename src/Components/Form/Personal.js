import { useEffect, useState} from "react";
import React from "react";

const EMPTY_PERSONAL_DATA = {
  FirstName: "",
  LastName: "",
  Title: "",
  Adress: "",
  Number: "",
  Email: "",
  Description: "",
};

const Personal = ({ onChangePersonal }) => {
  const [personalInfo, setPersonalInfo] = useState(EMPTY_PERSONAL_DATA);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setPersonalInfo((prevPersonalInfo) => ({
      ...prevPersonalInfo,
      [name]: value,
    }));
  };

  const resetForms = () => {
    setPersonalInfo(EMPTY_PERSONAL_DATA);
    Array.from(document.getElementsByTagName("input")).forEach((element) => {
      element.value = "";
    });
  };

  useEffect(() => {
    // to manage async useState
    onChangePersonal(personalInfo);
  }, [onChangePersonal, personalInfo]);

  return (
    <div>
      <h2>Personal Information</h2>
      <label>First Name</label>
      <input
        type="text"
        name="FirstName"
        value={personalInfo.FirstName}
        onChange={handleChange}
        placeholder="First Name"
      />

      <label>Last Name</label>
      <input
        type="text"
        name="LastName"
        value={personalInfo.LastName}
        onChange={handleChange}
        placeholder="Last Name"
      />

      <label>Title</label>
      <input
        type="text"
        name="Title"
        value={personalInfo.Title}
        onChange={handleChange}
        placeholder="Title"
      />

      <label>Address</label>
      <input
        type="text"
        name="Adress"
        value={personalInfo.Adress}
        onChange={handleChange}
        placeholder="Address"
      />

      <label>Phone Number</label>
      <input
        type="tel"
        name="Number"
        value={personalInfo.Number}
        onChange={handleChange}
        placeholder="Phone Number"
      />

      <label>Email</label>
      <input
        type="email"
        name="Email"
        value={personalInfo.Email}
        onChange={handleChange}
        placeholder="Email"
      />

      <label>Description</label>
      <input
        type="text"
        name="Description"
        value={personalInfo.Description}
        onChange={handleChange}
        placeholder="Description"
      />
    </div>
  );
};

export default Personal;
