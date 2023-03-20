import React from "react";

const EducationItem = (props) => {
  const deleteHandler = (ev) => {
    ev.preventDefault();
    props.onDeleteEducationItem(ev.target.id);
  };

  return (
    <div id={props.id}>
      <label>University name</label>
      <input type="text" placeholder="University name"></input>

      <label>Degree</label>
      <input type="text" placeholder="Degree"></input>

      <label>Start Date</label>
      <input type="date"></input>
      <label>End Date</label>
      <input type="date"></input>

      <button id={props.id} onClick={deleteHandler}>
        Delete
      </button>
    </div>
  );
};

export default EducationItem;
