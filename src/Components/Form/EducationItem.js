import React from 'react';

const EducationItem = () => {
  return (
    <div>
      <label>University name</label>
      <input type="text" placeholder="University name"></input>

      <label>Degree</label>
      <input type="text" placeholder="Degree"></input>

      <label>Start Date</label>
      <input type="date"></input>
      <label>End Date</label>
      <input type="date"></input>

      <button>Delete</button>
    </div>
  )
}

export default EducationItem;