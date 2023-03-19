import React from 'react';

const ExperienceItem = () => {
  return (
    <div>
      <label>Position</label>
      <input type="text" placeholder="Position"></input>

      <label>Company</label>
      <input type="text" placeholder="Company"></input>

      <label>Start Date</label>
      <input type="date"></input>
      <label>End Date</label>
      <input type="date"></input>

      <button>Delete</button>
    </div>
  )
}

export default ExperienceItem;