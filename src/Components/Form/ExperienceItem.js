import React from "react";
import InputForm from "../../UIElements/InputForm";
import Button from "../../UIElements/Button";
import FormItemWrapper from "../../UIElements/FormItemWrapper";

const ExperienceItem = ({ id, onChange, data, onDelete }) => {
  return (
    <FormItemWrapper>
      <InputForm
        labelText="Position"
        inputType="text"
        inputName="Position"
        placeholder="Position"
        onChange={(e) => onChange(e, id)}
        value={data.Position}
      />
      <InputForm
        labelText="Company"
        inputType="text"
        inputName="Company"
        placeholder="Company"
        onChange={(e) => onChange(e, id)}
        value={data.Company}
      />

      <InputForm
        labelText="Start Date"
        inputType="date"
        inputName="StartDate"
        onChange={(e) => onChange(e, id)}
        value={data.StartDate}
      />

      <InputForm
        labelText="End Date"
        inputType="date"
        inputName="EndDate"
        onChange={(e) => onChange(e, id)}
        value={data.EndDate}
      />

      <Button
        onClick={(e) => {
          onDelete(e, id);
        }}
        text='Delete'
        buttonType='danger'
      />
    </FormItemWrapper>
  );
};

export default ExperienceItem;
