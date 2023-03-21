import React,{useState} from 'react';
import ExperienceItem from './ExperienceItem';
import { v4 as uuidv4 } from 'uuid';  // unique id library

const Experience = ({onChangeExperience}) => {
  const [experienceItems, setExperienceItems] = useState([]);

  let experienceData = {};

  const changeExperienceItemHandler = (experienceItem, id) => {
    let indexOfItem = experienceItems.findIndex(obj => obj.id === id);
    experienceData = {...experienceData, [indexOfItem]: [experienceItem]}
    onChangeExperience(experienceData);
    return;
  };

  const addNewExperienceItem = (ev) => {
    ev.preventDefault();
    const newId = uuidv4();
    const newExperienceItems = [
      ...experienceItems,
      {id:newId},
    ];
    setExperienceItems(newExperienceItems);
  };

  const deleteExperienceItem = (id) => {
    setExperienceItems(experienceItems.filter((item) => item.id !== id));
  };

  return (
    <div>
      <h2>Experience</h2>
      {experienceItems.map((item) => (
        <ExperienceItem id={item.id} key={item.id} onDeleteExperienceItem={deleteExperienceItem} 
          onChangeExperienceItem={changeExperienceItemHandler}/>
      ))}
      <button onClick={addNewExperienceItem}>Add New Experience</button>
    </div>
  )
}

export default Experience;