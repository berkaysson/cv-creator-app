import { v4 as uuidv4 } from 'uuid';

const EXAMPLE_CVData = {
  Personal: {
    FirstName: "CHARLES",
    LastName: "MCTURLAND",
    Title: "SOFTWARE ENGINEER",
    Adress: "New York, NY",
    Number: "(123) 456-7890",
    Email: "cmcturland@email.com",
    Description: "",
  },
  Education: {
    0: {
      id : uuidv4(),
      UniName: "University of Pittsburgh",
      Degree: "Computer Science B.S",
      StartDate: "September 2008",
      EndDate: "April 2012",
    },
  },
  Experience: {
    0: {
      id : uuidv4(),
      Position: "Software Engineer",
      Company: "Embark",
      StartDate: "January 2015",
      EndDate: "Current",
    },
    1: {
      id : uuidv4(),
      Position: "Software Engineer",
      Company: "MarketSmart",
      StartDate: "April 2012",
      EndDate: "January 2015",
    },
    2: {
      id : uuidv4(),
      Position: "Software Engineer Intern",
      Company: "Marketing Science Company",
      StartDate: "April 2011",
      EndDate: "March 2012",
    },
  },
};

export default EXAMPLE_CVData;