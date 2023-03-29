import Personal from "./Personal";
import Experience from "./Experience";
import Education from "./Education";
import React from "react";
import Button from "../../UIElements/Button";
import styled from "styled-components";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: var(--gap);
  padding: var(--padding);
  width: 100%;
`

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
  onLoadExample,
  onGeneratePdf
}) => {
  return (
    <Form id="form" onSubmit={(e) => onSubmit(e)} onReset={onReset}>
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

      <Button type={'submit'} text={'Show Preview'} buttonType='primary'/>
      <Button type={'button'} text={'Load Example'} buttonType='secondary' onClick={onLoadExample}/>
      <Button type={'button'} text={'Generate PDF'} buttonType='secondary' onClick={onGeneratePdf}/>
      <Button type={'reset'} text={'Reset'} buttonType='secondary'/>
    </Form>
  );
};

export default CVForm;
