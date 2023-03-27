import React from "react";

const EducationItem = ({id, onChange, data, onDelete}) => {
  return (
    <div id={id}>
      <label>University name</label>
      <input
        type="text"
        name="UniName"
        value={data.UniName}
        onChange={(e)=>onChange(e, id)}
        placeholder="University name"
      />

      <label>Degree</label>
      <input
        type="text"
        name="Degree"
        value={data.Degree}
        onChange={(e)=>onChange(e, id)}
        placeholder="Degree"
      />

      <label>Start Date</label>
      <input
        type="date"
        name="StartDate"
        value={data.StartDate}
        onChange={(e)=>onChange(e, id)}
      />

      <label>End Date</label>
      <input
        type="date"
        name="EndDate"
        value={data.EndDate}
        onChange={(e)=>onChange(e, id)}
      />

      <button onClick={(e) => {onDelete(e, id)}}>
        Delete
      </button>
    </div>
  );
};

export default EducationItem;
