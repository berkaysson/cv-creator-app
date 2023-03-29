import styled from "styled-components";

const CVWrapper = styled.div`
  background-color: white;
  aspect-ratio: 0.709;
  min-width: 850px;
  margin: 0;
  padding: 0;
  @media print {
    width: 210mm;
    height: 297mm;
    overflow: visible;
    page-break-after: always;
  }
`;

const HeaderWrapper = styled.div`
  background-color: #143e72;
  height: 14%;
  color: white;
  padding: 1.4rem 3rem;
`;

const MainWrapper = styled.div`
  display: grid;
  grid-template-columns: 74% 26%;
  height: 100%;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: flex-start;
  gap: 5rem;
  padding: 2.4rem 4rem;
  font-size: 1.4em;
`;

const ContentItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  & h4 {
    text-decoration: underline;
  }
`;

const ListItemWrapper = styled.li`
  list-style: none;
  padding: 1rem 0.5rem;
  padding-left: 0.7rem;
  display: flex;
  flex-direction: column;
  gap:0.4rem;
`;

const PersonalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  height: 100%;
  background-color: lightblue;
  font-size: 1.1em;
  padding: 2rem 0.5rem;

  & h2 {
    font-size: 1.7rem;
    text-decoration: underline;
    text-align: center;
  }

  & h3 {
    font-size: 1.4rem;
  }
`;

const PersonalItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  height: auto;

  &:last-child{
    margin-top: 4rem;
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
