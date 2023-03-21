import React, { useState } from "react";
import EducationItem from "./EducationItem";
import { v4 as uuidv4 } from 'uuid';  // unique id library

const Education = ({ onChangeEducation }) => {
  const [educationItems, setEducationItems] = useState([]);

  let educationData = {};

  const changeEducationItemHandler = (educationItem, id) => {
    let indexOfItem = educationItems.findIndex(obj => obj.id === id);
    educationData = {...educationData, [indexOfItem]: [educationItem]}
    onChangeEducation(educationData);
    return;
  };

  const addNewEducationItem = (ev) => {
    ev.preventDefault();
    const newId = uuidv4();
    const newEducationItems = [
      ...educationItems,
      {id:newId},
    ];
    setEducationItems(newEducationItems);
  };

  const deleteEducationItem = (id) => {
    setEducationItems(educationItems.filter((item) => item.id !== id));
  };

  return (
    <div>
      <h2>Education</h2>
      {educationItems.map((item) => (
        <EducationItem id={item.id} key={item.id} onDeleteEducationItem={deleteEducationItem} 
          onChangeEducationItem={changeEducationItemHandler}/>
      ))}
      <button onClick={addNewEducationItem}>Add New Education</button>
    </div>
  );
};

export default Education;
