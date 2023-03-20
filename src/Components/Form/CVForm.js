import Personal from "./Personal";
import Experience from "./Experience";
import Education from "./Education";
import React from "react";

const CVForm = ({ CVData, onEditCV }) => {
  const submitHandler = (ev) => {
    ev.preventDefault();
  };

  const changePersonalDataHandler = (data) => {
    CVData.Personal = data;
  };

  const changeEducationDataHandler = (data) => {
    CVData.Education = data;
    console.log(CVData);
  };

  return (
    <form>
      <Personal onChangePersonal={changePersonalDataHandler} />
      <Education onChangeEducation={changeEducationDataHandler} />
      <Experience />

      <button type="submit" onClick={submitHandler}>
        Show Preview
      </button>
      <button type="reset">Reset</button>
    </form>
  );
};

export default CVForm;
