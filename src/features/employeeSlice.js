import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  managers: [
    {
      email: "ashu@gmail.com",
      firstname: "Ashutosh",
      lastname: "Malode",
      password: "Ashu@123",
      address: "pune, MH",
      dob: "06 Sept 1999",
      company: "In Search",
    },
  ],
  employees: [
    {
      empId: 1,
      firstname: "Ashutosh",
      lastname: "Malode",
      address: "pune, MH",
      dob: "06 Sept 1999",
      mobile: 7057300643,
      city: "Pune",
    },
  ],
};

const employeeSlice = createSlice({
  name: "emloyee",
  initialState,
  reducers: {
    addManager: (state, action) => {
      return {
        ...state,
        managers: [...state.managers, action.payload],
      };
    },
    addEmployee: (state, action) => {
      return {
        ...state,
        employees: [...state.employees, action.payload],
      };
    },
    deleteEmployee: (state, action) => {
      return {
        ...state,
        employees: state.employees.filter(
          (emp) => emp.empId !== action.payload
        ),
      };
    },
  },
});

export const { addManager, addEmployee, deleteEmployee } =
  employeeSlice.actions;

export default employeeSlice.reducer;
