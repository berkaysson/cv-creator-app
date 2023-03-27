const CVPreview = ({CVData}) => {

  return (
    <div>
    <div>
      <h2>Personal Information</h2>
      <div>{CVData.Personal.FirstName} {CVData.Personal.LastName}</div>
      <div>{CVData.Personal.Title}</div>
      <div>{CVData.Personal.Address}</div>
      <div>{CVData.Personal.Number}</div>
      <div>{CVData.Personal.Email}</div>
      <div>{CVData.Personal.Description}</div>
    </div>
    <div>
      <h2>Education</h2>
      {Object.values(CVData.Education).map((educationItem) => (
        <div key={educationItem.id}>
          <div>{educationItem.UniName}</div>
          <div>{educationItem.Degree}</div>
          <div>{educationItem.StartDate} - {educationItem.EndDate}</div>
        </div>
      ))}
    </div>
    <div>
      <h2>Experience</h2>
      {Object.values(CVData.Experience).map((experienceItem) => (
        <div key={experienceItem.id}>
          <div>{experienceItem.Position}</div>
          <div>{experienceItem.Company}</div>
          <div>{experienceItem.StartDate} - {experienceItem.EndDate}</div>
        </div>
      ))}
    </div>
  </div>
  );
};

export default CVPreview;
