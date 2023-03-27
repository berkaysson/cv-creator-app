import React from "react";

const ExperienceItem = ({ id, onChange, data, onDelete }) => {
  return (
    <div id={id}>
      <label>Position</label>
      <input
        type="text"
        name="Position"
        value={data.Position}
        onChange={(e) => onChange(e, id)}
        placeholder="Position"
      />

      <label>Company</label>
      <input
        type="text"
        name="Company"
        value={data.Company}
        onChange={(e) => onChange(e, id)}
        placeholder="Company"
      />

      <label>Start Date</label>
      <input
        type="date"
        name="StartDate"
        value={data.StartDate}
        onChange={(e) => onChange(e, id)}
      />
      <label>End Date</label>
      <input
        type="date"
        name="EndDate"
        value={data.EndDate}
        onChange={(e) => onChange(e, id)}
      />

      <button
        onClick={(e) => {
          onDelete(e, id);
        }}
      >
        Delete
      </button>
    </div>
  );
};

export default ExperienceItem;
