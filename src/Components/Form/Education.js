import React from "react";
import EducationItem from "./EducationItem";

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
      <button onClick={onAddItem}>Add New Education</button>
    </div>
  );
};

export default Education;
