import React, {useState, useEffect} from 'react';

const ExperienceItem = (props) => {
  const [experienceInfo, setExperienceInfo] = useState({
    position: "",
    company: "",
    startDate: "",
    endDate: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setExperienceInfo((prevExperienceInfo) => ({
      ...prevExperienceInfo,
      [name]: value,
    }));
  };

  const deleteHandler = (ev) => {
    ev.preventDefault();
    props.onDeleteExperienceItem(ev.target.id);
  };

  useEffect(() => {
    props.onChangeExperienceItem(experienceInfo, props.id);
  }, [props.onChangeExperienceItem, experienceInfo, props]);
  

  return (
    <div>
      <label>Position</label>
      <input
        type="text"
        name="position"
        value={experienceInfo.position}
        onChange={handleChange}
        placeholder="Position"
      />

      <label>Company</label>
      <input
        type="text"
        name="company"
        value={experienceInfo.company}
        onChange={handleChange}
        placeholder="Company"
      />

      <label>Start Date</label>
      <input
        type="date"
        name="startDate"
        value={experienceInfo.startDate}
        onChange={handleChange}
      />
      <label>End Date</label>
      <input
        type="date"
        name="endDate"
        value={experienceInfo.endDate}
        onChange={handleChange}
      />

      <button onClick={deleteHandler}>Delete</button>
    </div>
  );
}

export default ExperienceItem;