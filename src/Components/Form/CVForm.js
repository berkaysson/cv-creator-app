import Personal from "./Personal";
import Experience from "./Experience";
import Education from "./Education";
import React from "react";

const CVForm = ({ CVData, onEditCV }) => {
  const submitHandler = (ev) => {
    ev.preventDefault();
    onEditCV(CVData);
  };  

  const changePersonalDataHandler = (personalData) => {
    CVData.Personal = personalData;
  };

  const changeEducationDataHandler = (educationData) => {
    CVData.Education = educationData;
  };

  const changeExperienceDataHandler = (experienceData) => {
    CVData.Experience = experienceData;
  };

  return (
    <form>
      <Personal onChangePersonal={changePersonalDataHandler} />
      <Education onChangeEducation={changeEducationDataHandler} />
      <Experience onChangeExperience={changeExperienceDataHandler} />

      <button type="submit" onClick={submitHandler}>
        Show Preview
      </button>
      <button type="reset">Reset</button>
    </form>
  );
};

export default CVForm;
