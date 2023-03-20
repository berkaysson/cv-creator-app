import React, { useState } from "react";
import EducationItem from "./EducationItem";

const Education = ({ onChangeEducation }) => {
  const [educationItems, setEducationItems] = useState([]);

  const changeEducationItemHandler = () => {
    return;
  };

  const addNewEducationItem = (ev) => {
    ev.preventDefault();
    const newId =
      educationItems.length > 0
        ? educationItems[educationItems.length - 1].props.id + 1
        : 0;
    const newEducationItems = [
      ...educationItems,
      <EducationItem
        id={newId}
        key={newId}
        onChangeEducationItem={changeEducationItemHandler}
        onDeleteEducationItem={deleteEducationItem}
      />,
    ];
    setEducationItems(newEducationItems);
  };

  const deleteEducationItem = (id) => {
    setEducationItems(educationItems.filter((item) => item.props.id !== id));
  };

  return (
    <div>
      <h2>Education</h2>
      {educationItems}
      <button onClick={addNewEducationItem}>Add New Education</button>
    </div>
  );
};

export default Education;
