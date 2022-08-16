export const RESUME = [
  "Personal Information",
  "Education",
  "Additional Experience",
  "Relevant Project",
  "Skills",
  "Summary",
];
export const RESUME_UNDERSCORE = [
  "Personal_Info",
  "Education",
  "Work_Experience",
  "Relevant_Projects",
];

export const RESUME_DATA = {
  Personal_Info: {
    first_name: "",
    last_name: "",
    Email: "",
    Phone: "",
    City: "",
    Personal_Website: "",
    LinkedIn: "",
  },
  Education: {
    School: "",
    Degree: "",
    Location: "",
    Major: "",
    Start: new Date(),
    End: new Date(),
    Present: false,
    Description: "",
  },
  Relevant_Projects: {
    Project_Name: "",
    Description: "",
  },
  Work_Experience: {
    Company: "",
    Position: "",
    Location: "",
    Start: new Date(),
    End: new Date(),
    Present: false,
    Description: "",
  },
};
