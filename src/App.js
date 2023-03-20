import CVForm from "./Components/Form/CVForm";
import CVPreview from "./Components/Preview/CVPreview";
import "./Style/App.css";
import React, { useState } from "react";

const _CVData = {
  Personal: {
    FirstName: "",
    LastName: "",
    Title: "",
    Adress: "",
    Number: "",
    Email: "",
    Description: "",
  },
  Education: {
    0: {
      UniName: "",
      Degree: "",
      StartDate: "",
      EndDate: "",
    },
  },
  Experience: {
    0: {
      Position: "",
      Company: "",
      StartDate: "",
      EndDate: "",
    },
  },
};

function App() {
  const [CVData, setCVData] = useState(_CVData);

  const editCVHandler = (CV) => {
    setCVData(CV);
  };

  return (
    <div>
      <h1>CV Creator</h1>
      <CVForm CVData={CVData} onEditCV={editCVHandler} />
      <CVPreview CVData={CVData} />
    </div>
  );
}

export default App;
