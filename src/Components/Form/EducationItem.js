import React, {useState, useEffect} from "react";

const EducationItem = (props) => {
  const [educationInfo, seteducationInfo] = useState({
    UniName: "",
    Degree: "",
    StartDate: "",
    EndDate: "",
  });

  const deleteHandler = (ev) => {
    ev.preventDefault();
    props.onDeleteEducationItem(ev.target.id);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    seteducationInfo((prevEdInfo) => ({
      ...prevEdInfo,
      [name]: value,
    }));
  };

  useEffect(() => { // to manage async useState
    props.onChangeEducationItem(educationInfo, props.id);
  }, [props.onChangeEducationItem, educationInfo, props])


  return (
    <div id={props.id}>
      <label>University name</label>
      <input
        type="text"
        name="UniName"
        value={educationInfo.UniName}
        onChange={handleChange}
        placeholder="University name"
      />

      <label>Degree</label>
      <input
        type="text"
        name="Degree"
        value={educationInfo.Degree}
        onChange={handleChange}
        placeholder="Degree"
      />

      <label>Start Date</label>
      <input
        type="date"
        name="StartDate"
        value={educationInfo.StartDate}
        onChange={handleChange}
      />

      <label>End Date</label>
      <input
        type="date"
        name="EndDate"
        value={educationInfo.EndDate}
        onChange={handleChange}
      />

      <button id={props.id} onClick={deleteHandler}>
        Delete
      </button>
    </div>
  );
};

export default EducationItem;
