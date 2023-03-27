import Personal from "./Personal";
import Experience from "./Experience";
import Education from "./Education";
import React from "react";
import Button from "../../UIElements/Button";

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

      <Button type={'submit'} text={'Show Preview'} />
      <Button type={'reset'} text={'Reset'} />
    </form>
  );
};

export default CVForm;
