import { v4 as uuidv4 } from 'uuid';

const EMPTY_CVData = {
  Personal: {
    FirstName: "",
    LastName: "",
    Title: "",
    Address: "",
    Number: "",
    Email: "",
    Description: "",
  },
  Education: {
    0: {
      id : uuidv4(),
      UniName: "",
      Degree: "",
      StartDate: "",
      EndDate: "",
    },
  },
  Experience: {
    0: {
      id : uuidv4(),
      Position: "",
      Company: "",
      StartDate: "",
      EndDate: "",
    },
  },
};

export default EMPTY_CVData;