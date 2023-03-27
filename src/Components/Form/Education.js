import React from "react";
import EducationItem from "./EducationItem";
import Button from "../../UIElements/Button";

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
    <div>
      <h2>Education</h2>
      {educationItems}
      <Button text={'Add New Education'} onClick={onAddItem}/>
    </div>
  );
};

export default Education;
