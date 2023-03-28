import React from "react";
import ExperienceItem from "./ExperienceItem";
import Button from "../../UIElements/Button";
import FormWrapper from "../../UIElements/FormWrapper";

const Experience = ({ experienceData, onChange, onAddItem, onDeleteItem }) => {
  const experienceItems = Object.values(experienceData).map((item) => (
    <ExperienceItem
      id={item.id}
      key={item.id}
      data={item}
      onChange={onChange}
      onDelete={onDeleteItem}
    />
  ));

  return (
    <FormWrapper>
      <h2>Experience</h2>
      {experienceItems}
      <Button text={'Add New Experience'} onClick={onAddItem} buttonType='add'/>
    </FormWrapper>
  );
};

export default Experience;
