import React from "react";
import EducationItem from "./EducationItem";
import Button from "../../UIElements/Button";
import FormWrapper from "../../UIElements/FormWrapper";

const Education = ({educationData, onChange, onAddItem, onDeleteItem}) => {
  const educationItems = Object.values(educationData).map((item) => (
    <EducationItem id={item.id} 
    key={item.id}
    onChange={onChange}
    data={item}
    onDelete={onDeleteItem}
    />
  ));

  return (
    <FormWrapper>
      <h2>Education</h2>
      {educationItems}
      <Button text={'Add New Education'} onClick={onAddItem} buttonType='add'/>
    </FormWrapper>
  );
};

export default Education;
