import styled from "styled-components";

const CVWrapper = styled.div`
  background-color: white;
  aspect-ratio: 0.709;
  margin: 0;
  padding: 0;
  font-size: 15px;
  width: 845px;
  display: grid;
  grid-template-columns: 74% 26%;
  grid-template-rows: 15% 85%;
  @media print {
    width: 210mm;
    height: 297mm;
    overflow: visible;
    page-break-after: always;
  }

  @media (max-width: 850px) {
    font-size: 13px;
    width: 733px;
  }

  @media (max-width: 750px) {
    font-size: 11px;
    width: 620px;
  }

  @media (max-width: 650px) {
    font-size: 9px;
    width: 507px;
  }

  @media (max-width: 520px) {
    font-size: 8px;
    width: 451px;
  }

  @media (max-width: 450px) {
    font-size:6px;
    width: 338px;
  }
`;

const HeaderWrapper = styled.div`
  background-color: #143e72;
  color: white;
  padding: 1.4em 3em;
  grid-column: 1/3;
  grid-row: 1/2;
`;

const MainWrapper = styled.div`
  grid-column: 1/3;
  grid-row: 2/3;
  display: grid;
  grid-template-columns: 74% 26%;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: flex-start;
  gap: 5em;
  padding: 2.4em 4em;
  font-size: 1.4em;
  grid-column: 1/2;
`;

const ContentItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1em;

  & h4 {
    text-decoration: underline;
  }
`;

const ListItemWrapper = styled.li`
  list-style: none;
  padding: 1em 0.5em;
  padding-left: 0.7em;
  display: flex;
  flex-direction: column;
  gap:0.4em;
`;

const PersonalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5em;
  background-color: lightblue;
  font-size: 1.1em;
  padding: 2em 0.5em;
  grid-column: 2/3;

  & h2 {
    font-size: 1.7em;
    text-decoration: underline;
    text-align: center;
  }

  & h3 {
    font-size: 1.4em;
  }
`;

const PersonalItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5em;
  height: auto;

  &:last-child{
    margin-top: 4em;
  }
`

const NameWrapper = styled.div`
  font-size: 3.4em;
`;
const TitleWrapper = styled.div`
  font-size: 2.4em;
`;

const CVPreview = ({ CVData }) => {
  return (
    <CVWrapper id="CVPreview">
      <HeaderWrapper>
        <NameWrapper>
          {CVData.Personal.FirstName} {CVData.Personal.LastName}
        </NameWrapper>
        <TitleWrapper>{CVData.Personal.Title}</TitleWrapper>
      </HeaderWrapper>
      <MainWrapper>
        <ContentWrapper>
          <ContentItemWrapper>
            <h2>Education</h2>
            <ul>
              {Object.values(CVData.Education).map((educationItem) => (
                <ListItemWrapper key={educationItem.id}>
                  <h4>{educationItem.Degree}</h4>
                  <div>{educationItem.UniName}</div>
                  <div>
                    {educationItem.StartDate} - {educationItem.EndDate}
                  </div>
                </ListItemWrapper>
              ))}
            </ul>
          </ContentItemWrapper>
          <ContentItemWrapper>
            <h2>Experience</h2>
            <ul>
              {Object.values(CVData.Experience).map((experienceItem) => (
                <ListItemWrapper key={experienceItem.id}>
                  <h4>{experienceItem.Position}</h4>
                  <div>{experienceItem.Company}</div>
                  <div>
                    {experienceItem.StartDate} - {experienceItem.EndDate}
                  </div>
                </ListItemWrapper>
              ))}
            </ul>
          </ContentItemWrapper>
        </ContentWrapper>

        <PersonalWrapper>
          <h2>Personal Details</h2>
          <PersonalItemWrapper>
            <h3>Address</h3>
            <div>{CVData.Personal.Address}</div>
          </PersonalItemWrapper>
          <PersonalItemWrapper>
            <h3>Phone Number</h3>
            <div>{CVData.Personal.Number}</div>
          </PersonalItemWrapper>
          <PersonalItemWrapper>
            <h3>Email</h3>
            <div>{CVData.Personal.Email}</div>
          </PersonalItemWrapper>
          <PersonalItemWrapper>
            <h3>Description</h3>
            <div>{CVData.Personal.Description}</div>
          </PersonalItemWrapper>
        </PersonalWrapper>
      </MainWrapper>
    </CVWrapper>
  );
};

export default CVPreview;
