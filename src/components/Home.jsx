import React, { useState } from "react";
import Table from "@mui/material/Table";
import Button from "@mui/material/Button";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useSelector, useDispatch } from "react-redux";
import { addEmployee, deleteEmployee } from "../features/employeeSlice";
import AddEmployeeDialog from "./AddEmployeeDialog";
import DeleteIcon from "@mui/icons-material/Delete";

const Home = () => {
  const dispatch = useDispatch();
  const [openAddEmployeeDialog, setOpenAddEmployeeDialog] = useState(false);
  const employees = useSelector((state) => state.employee.employees);

  const handleEmpAdd = (updatedEmp) => {
    dispatch(addEmployee(updatedEmp));
    setOpenAddEmployeeDialog(false);
  };

  const onDeleteEmp = (empId) => dispatch(deleteEmployee(empId));

  return (
    <div>
      <Button
        sx={{ m: 3 }}
        variant="contained"
        size="small"
        onClick={() => setOpenAddEmployeeDialog(true)}
      >
        Add Employee
      </Button>

      <TableContainer sx={{ maxWidth: 900, m: 3 }} component={Paper}>
        <Table size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell>Emp Name</TableCell>
              <TableCell align="right">Emp Id</TableCell>
              <TableCell align="right">DOB</TableCell>
              <TableCell align="right">Address</TableCell>
              <TableCell align="right">Mobile No.</TableCell>
              <TableCell align="right">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {(employees || []).map((emp, index) => (
              <TableRow
                key={index}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {emp.lastname}, {emp.firstname}
                </TableCell>
                <TableCell align="right">{emp.empId}</TableCell>
                <TableCell align="right">{emp.dob}</TableCell>
                <TableCell align="right">{emp.address}</TableCell>
                <TableCell align="right">{emp.mobile}</TableCell>
                <TableCell align="right">
                  <DeleteIcon
                    fontSize="small"
                    onClick={() => onDeleteEmp(emp.empId)}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {openAddEmployeeDialog && (
        <AddEmployeeDialog
          openAddEmployeeDialog={openAddEmployeeDialog}
          onCloseOpenAddEmployeeDialog={setOpenAddEmployeeDialog}
          onEmpAdd={handleEmpAdd}
        />
      )}
    </div>
  );
};

export default Home;
