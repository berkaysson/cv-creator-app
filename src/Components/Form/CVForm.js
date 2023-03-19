import Personal from "./Personal";
import Experience from "./Experience";
import Education from "./Education";
import React from 'react';

const CVForm = () => {
  
  
  return (
    <div>
      <Personal />
      <Education />
      <Experience />

      <button>Show Preview</button>
      <button>Reset</button>
    </div>
  ) 
}

export default CVForm;