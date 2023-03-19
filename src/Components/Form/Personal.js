import React from "react";

const Personal = () => {
  return (
    <div>
      <h2>Personel Information</h2>
      <label>First Name</label>
      <input type="text" placeholder="First Name"></input>

      <label>Last Name</label>
      <input type="text" placeholder="Last Name"></input>

      <label>Title</label>
      <input type="text" placeholder="Title"></input>

      <label>Adress</label>
      <input type="text" placeholder="Address"></input>

      <label>Phone Number</label>
      <input type="tel" placeholder="Phone Number"></input>

      <label>Email</label>
      <input type="email" placeholder="Email"></input>

      <label>Description</label>
      <input type="text" placeholder="Description"></input>
    </div>
  );
};

export default Personal;
