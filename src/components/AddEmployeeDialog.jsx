import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Grid from "@mui/material/Grid";

const empConstants = {
  FIRSTNAME: "firstname",
  LASTNAME: "lastname",
  EMPID: "empId",
  ADDRESS: "address",
  DOB: "dob",
  MOBILE: "mobile",
  CITY: "city",
};

export default function AddEmployeeDialog({
  openAddEmployeeDialog,
  onCloseOpenAddEmployeeDialog,
  onEmpAdd,
}) {
  const initialStateEmp = {
    firstname: "",
    lastname: "",
    empId: "",
    address: "",
    dob: "",
    mobile: "",
    city: "",
  };

  const [emp, setEmp] = useState(initialStateEmp);

  const handleClose = () => {
    setEmp({
      ...initialStateEmp,
    });
    onCloseOpenAddEmployeeDialog(false);
  };

  const handleInputChange = (name, value) => {
    setEmp({
      ...emp,
      [name]: value,
    });
  };

  const handleAddEmployee = () => onEmpAdd({ ...emp });

  return (
    <Dialog
      open={openAddEmployeeDialog}
      fullWidth
      scroll="paper"
      aria-labelledby="paper-dialog-title"
      aria-describedby="paper-dialog-description"
    >
      <DialogTitle id="paper-dialog-title">Add Employee</DialogTitle>
      <DialogContent dividers>
        <Box>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                id="standard-firstname"
                label="First Name"
                variant="standard"
                value={emp.firstname}
                onChange={(e) =>
                  handleInputChange(empConstants.FIRSTNAME, e.target.value)
                }
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                id="standard-lastname"
                label="Last Name"
                variant="standard"
                value={emp.lastname}
                onChange={(e) =>
                  handleInputChange(empConstants.LASTNAME, e.target.value)
                }
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                id="standard-dob"
                label="Date of Birth"
                variant="standard"
                value={emp.dob}
                onChange={(e) =>
                  handleInputChange(empConstants.DOB, e.target.value)
                }
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                id="standard-email"
                label="Emp Id"
                variant="standard"
                sx={{ mr: 1 }}
                value={emp.empId}
                onChange={(e) =>
                  handleInputChange(empConstants.EMPID, e.target.value)
                }
              />

              <TextField
                id="standard-password"
                label="Address"
                variant="standard"
                value={emp.address}
                onChange={(e) =>
                  handleInputChange(empConstants.ADDRESS, e.target.value)
                }
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                id="standard-address"
                label="Mobile"
                variant="standard"
                sx={{ mr: 1 }}
                value={emp.mobile}
                onChange={(e) =>
                  handleInputChange(empConstants.MOBILE, e.target.value)
                }
              />
              <TextField
                id="standard-company"
                label="City"
                variant="standard"
                value={emp.city}
                onChange={(e) =>
                  handleInputChange(empConstants.CITY, e.target.value)
                }
              />
            </Grid>
          </Grid>
        </Box>
      </DialogContent>
      <DialogActions>
        <Button variant="contained" size="small" onClick={handleClose}>
          Cancel
        </Button>
        <Button variant="contained" size="small" onClick={handleAddEmployee}>
          Add
        </Button>
      </DialogActions>
    </Dialog>
  );
}
