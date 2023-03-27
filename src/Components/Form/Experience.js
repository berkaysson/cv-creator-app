import React from "react";
import ExperienceItem from "./ExperienceItem";

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
    <div>
      <h2>Experience</h2>
      {experienceItems}
      <button onClick={onAddItem}>Add New Experience</button>
    </div>
  );
};

export default Experience;
