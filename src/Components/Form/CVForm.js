import Personal from "./Personal";
import Experience from "./Experience";
import Education from "./Education";
import React from "react";

const CVForm = ({
  onChangePersonal,
  CV,
  onSubmit,
  onReset,
  onChangeEducation,
  onAddEducationItem,
  onDeleteEducationItem,
  onChangeExperience,
  onAddExperienceItem,
  onDeleteExperienceItem,
}) => {
  return (
    <form id="form" onSubmit={(e) => onSubmit(e)} onReset={onReset}>
      <Personal onChange={onChangePersonal} personalData={CV.Personal} />
      <Education
        educationData={CV.Education}
        onChange={onChangeEducation}
        onAddItem={onAddEducationItem}
        onDeleteItem={onDeleteEducationItem}
      />
      <Experience
        experienceData={CV.Experience}
        onChange={onChangeExperience}
        onAddItem={onAddExperienceItem}
        onDeleteItem={onDeleteExperienceItem}
      />

      <button type="submit">Show Preview</button>
      <button type="reset">Reset</button>
    </form>
  );
};

export default CVForm;
