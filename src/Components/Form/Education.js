import React, { useState } from "react";
import EducationItem from "./EducationItem";

const Education = ({ onChangeEducation }) => {
  const [educationItems, setEducationItems] = useState([]);

  // const changeEducationItemHandler = () => {
  //   return;
  // };

  const addNewEducationItem = (ev) => {
    ev.preventDefault();
    const newId = //refactor this
      educationItems.length > 0
        ? educationItems.length + 1
        : 0;
    const newEducationItems = [
      ...educationItems,
      {id:newId},
    ];
    setEducationItems(newEducationItems);
  };

  const deleteEducationItem = (id) => {
    setEducationItems(educationItems.filter((item) => item.id !== Number(id)));
  };

  return (
    <div>
      <h2>Education</h2>
      {educationItems.map((item) => (
        <EducationItem id={item.id} key={item.id} onDeleteEducationItem={deleteEducationItem}/>
      ))}
      <button onClick={addNewEducationItem}>Add New Education</button>
    </div>
  );
};

export default Education;
