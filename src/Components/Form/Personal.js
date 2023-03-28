import React from "react";
import InputForm from "../../UIElements/InputForm";
import FormWrapper from "../../UIElements/FormWrapper";

const Personal = ({ onChange, personalData }) => {
  return (
    <FormWrapper>
      <h2>Personal Information</h2>
      <InputForm
        labelText="First Name"
        inputType="text"
        placeholder="First Name"
        inputName="FirstName"
        onChange={onChange}
        value={personalData.FirstName}
      />

      <InputForm
        labelText="Last Name"
        inputType="text"
        placeholder="Last Name"
        inputName="LastName"
        onChange={onChange}
        value={personalData.LastName}
      />

      <InputForm
        labelText="Title"
        inputType="text"
        placeholder="Title"
        inputName="Title"
        onChange={onChange}
        value={personalData.Title}
      />

      <InputForm
        labelText="Address"
        inputType="text"
        placeholder="Address"
        inputName="Adress"
        onChange={onChange}
        value={personalData.Adress}
      />

      <InputForm
        labelText="Phone Number"
        inputType="tel"
        placeholder="Phone Number"
        inputName="Number"
        onChange={onChange}
        value={personalData.Number}
      />

      <InputForm
        labelText="Email"
        inputType="email"
        placeholder="Email"
        inputName="Email"
        onChange={onChange}
        value={personalData.Email}
      />
      
      <InputForm
        labelText="Description"
        inputType="text"
        placeholder="Description"
        inputName="Description"
        onChange={onChange}
        value={personalData.Description}
      />
    </FormWrapper>
  );
};

export default Personal;
