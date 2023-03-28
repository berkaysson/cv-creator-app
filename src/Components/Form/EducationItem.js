import React from "react";
import InputForm from "../../UIElements/InputForm";
import Button from "../../UIElements/Button";
import FormItemWrapper from "../../UIElements/FormItemWrapper";

const EducationItem = ({id, onChange, data, onDelete}) => {
  return (
    <FormItemWrapper>
      <InputForm
        labelText="University name"
        inputType="text"
        placeholder="University name"
        inputName="UniName"
        onChange={(e) => onChange(e, id)}
      />

      <InputForm
        labelText="Degree"
        inputType="text"
        placeholder="Degree"
        inputName="Degree"
        onChange={(e) => onChange(e, id)}
      />

      <InputForm
        labelText="Start Date"
        inputType="date"
        placeholder="Start Date"
        inputName="StartDate"
        onChange={(e) => onChange(e, id)}
      />

      <InputForm
        labelText="End Date"
        inputType="date"
        placeholder="End Date"
        inputName="EndDate"
        onChange={(e) => onChange(e, id)}
      />

      <Button
        onClick={(e) => {
          onDelete(e, id);
        }}
        text="Delete"
        buttonType='danger'
      />
    </FormItemWrapper>
  );
};

export default EducationItem;
