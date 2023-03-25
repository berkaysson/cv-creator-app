import React from "react";

const Personal = ({ onChange, personalData }) => {
  return (
    <div>
      <h2>Personal Information</h2>
      <label>First Name</label>
      <input
        type="text"
        name="FirstName"
        value={personalData.FirstName}
        onChange={(e)=>onChange(e)}
        placeholder="First Name"
      />

      <label>Last Name</label>
      <input
        type="text"
        name="LastName"
        value={personalData.LastName}
        onChange={(e)=>onChange(e)}
        placeholder="Last Name"
      />

      <label>Title</label>
      <input
        type="text"
        name="Title"
        value={personalData.Title}
        onChange={(e)=>onChange(e)}
        placeholder="Title"
      />

      <label>Address</label>
      <input
        type="text"
        name="Adress"
        value={personalData.Adress}
        onChange={(e)=>onChange(e)}
        placeholder="Address"
      />

      <label>Phone Number</label>
      <input
        type="tel"
        name="Number"
        value={personalData.Number}
        onChange={(e)=>onChange(e)}
        placeholder="Phone Number"
      />

      <label>Email</label>
      <input
        type="email"
        name="Email"
        value={personalData.Email}
        onChange={(e)=>onChange(e)}
        placeholder="Email"
      />

      <label>Description</label>
      <input
        type="text"
        name="Description"
        value={personalData.Description}
        onChange={(e)=>onChange(e)}
        placeholder="Description"
      />
    </div>
  );
};

export default Personal;
