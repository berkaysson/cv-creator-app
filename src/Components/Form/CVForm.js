import Personal from "./Personal";
import Experience from "./Experience";
import Education from "./Education";
import React from 'react';

const CVForm = () => {
  
  
  return (
    <form>
      <Personal />
      <Education />
      <Experience />

      <button type="submit">Show Preview</button>
      <button type="reset">Reset</button>
    </form>
  ) 
}

export default CVForm;