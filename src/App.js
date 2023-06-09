import CVForm from "./Components/Form/CVForm";
import CVPreview from "./Components/Preview/CVPreview";
import "./Style/App.css";
import React, { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import Card from "./UIElements/Card";
import emptyCV from "./Utilities/EmptyCVData";
import exampleCV from "./Utilities/ExampleCVData";

function App() {
  const [CVData, setCVData] = useState(emptyCV);
  const [CVDataPreview, setCVDataPreview] = useState(emptyCV);

  const resetFormHandler = () => {
    setCVData(emptyCV);
  };

  const handlePersonChange = (e) => {
    const { name, value } = e.target;
    setCVData((prevData) => ({
      ...prevData,
      Personal: {
        ...prevData.Personal,
        [name]: value,
      },
    }));
  };

  const handleEducationChange = (e, id) => {
    const { name, value } = e.target;
    setCVData((prevData) => {
      const newEducation = Object.values(prevData.Education).map(
        (educationItem) => {
          if (educationItem.id === id) {
            return { ...educationItem, [name]: value };
          }
          return educationItem;
        }
      );
      return { ...prevData, Education: { ...newEducation } };
    });
  };

  const addEducationItem = () => {
    setCVData((prevData) => ({
      ...prevData,
      Education: {
        ...prevData.Education,
        [Object.keys(prevData.Education).length]: {
          id: uuidv4(),
          UniName: "",
          Degree: "",
          StartDate: "",
          EndDate: "",
        },
      },
    }));
  };

  const deleteEducationItem = (e, id) => {
    e.preventDefault();
    setCVData((prevData) => {
      const newEducation = Object.values(prevData.Education).filter(
        (educationItem) => educationItem.id !== id
      );
      return { ...prevData, Education: { ...newEducation } };
    });
  };

  const handleExperienceChange = (e, id) => {
    const { name, value } = e.target;
    setCVData((prevData) => {
      const newExperience = Object.values(prevData.Experience).map(
        (experienceItem) => {
          if (experienceItem.id === id) {
            return { ...experienceItem, [name]: value };
          }
          return experienceItem;
        }
      );
      return { ...prevData, Experience: { ...newExperience } };
    });
  };

  const addExperienceItem = () => {
    setCVData((prevData) => ({
      ...prevData,
      Experience: {
        ...prevData.Experience,
        [Object.keys(prevData.Experience).length]: {
          id: uuidv4(),
          Position: "",
          Company: "",
          StartDate: "",
          EndDate: "",
        },
      },
    }));
  };

  const deleteExperienceItem = (e, id) => {
    e.preventDefault();
    setCVData((prevData) => {
      const newExperience = Object.values(prevData.Experience).filter(
        (experienceItem) => experienceItem.id !== id
      );
      return { ...prevData, Experience: { ...newExperience } };
    });
  };

  const loadExample = () => {
    setCVDataPreview(exampleCV);
  };

  const generatePDF = async () => {
    const div = document.getElementById('CVPreview');
    const printContents = div.innerHTML;
    const originalContents = document.body.innerHTML;
  
    document.body.innerHTML = printContents;
    window.print();
  
    document.body.innerHTML = originalContents;
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setCVDataPreview(CVData);
    console.log(CVData);
  };

  return (
    <div id="App">
      <h1>CV Creator</h1>
      <Card>
        <CVForm
          onChangePersonal={handlePersonChange}
          CV={CVData}
          onSubmit={submitHandler}
          onReset={resetFormHandler}
          onChangeEducation={handleEducationChange}
          onAddEducationItem={addEducationItem}
          onDeleteEducationItem={deleteEducationItem}
          onChangeExperience={handleExperienceChange}
          onAddExperienceItem={addExperienceItem}
          onDeleteExperienceItem={deleteExperienceItem}
          onLoadExample={loadExample}
          onGeneratePdf={generatePDF}
        />
      </Card>
      <Card>
        <CVPreview CVData={CVDataPreview} />
      </Card>
    </div>
  );
}

export default App;
