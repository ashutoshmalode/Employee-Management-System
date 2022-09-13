import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addManager } from "../features/employeeSlice";
import Grid from "@mui/material/Grid";

const managerConstants = {
  EMAIL: "email",
  FIRSTNAME: "firstname",
  LASTNAME: "lastname",
  PASSWORD: "password",
  ADDRESS: "address",
  DOB: "dob",
  COMPANY: "company",
};

const SignUp = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [manager, setManager] = useState({
    email: "",
    firstname: "",
    lastname: "",
    password: "",
    address: "",
    dob: "",
    company: "",
  });

  const handleAddManager = (name, value) => {
    setManager({
      ...manager,
      [name]: value,
    });
  };

  const isValidForm = Object.values(manager).every((item) => item);

  const handleSubmit = () => {
    if (isValidForm) {
      dispatch(addManager(manager));
      navigate("/login");
    } else {
      return;
    }
  };

  return (
    <Card variant="outlined" sx={{ maxWidth: 700, m: 3, p: 3 }}>
      <CardContent>
        <Typography color="text.secondary" gutterBottom>
          Manager Registration
        </Typography>
        <Box>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                id="standard-firstname"
                label="First Name"
                variant="standard"
                value={manager.firstname}
                onChange={(e) =>
                  handleAddManager(managerConstants.FIRSTNAME, e.target.value)
                }
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                id="standard-lastname"
                label="Last Name"
                variant="standard"
                value={manager.lastname}
                onChange={(e) =>
                  handleAddManager(managerConstants.LASTNAME, e.target.value)
                }
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                id="standard-dob"
                label="Date of Birth"
                variant="standard"
                value={manager.dob}
                onChange={(e) =>
                  handleAddManager(managerConstants.DOB, e.target.value)
                }
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                id="standard-email"
                label="Email"
                variant="standard"
                sx={{ mr: 1 }}
                value={manager.email}
                onChange={(e) =>
                  handleAddManager(managerConstants.EMAIL, e.target.value)
                }
              />

              <TextField
                id="standard-password"
                label="Password"
                variant="standard"
                value={manager.password}
                onChange={(e) =>
                  handleAddManager(managerConstants.PASSWORD, e.target.value)
                }
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                id="standard-address"
                label="Address"
                variant="standard"
                sx={{ mr: 1 }}
                value={manager.address}
                onChange={(e) =>
                  handleAddManager(managerConstants.ADDRESS, e.target.value)
                }
              />
              <TextField
                id="standard-company"
                label="Company"
                variant="standard"
                value={manager.company}
                onChange={(e) =>
                  handleAddManager(managerConstants.COMPANY, e.target.value)
                }
              />
            </Grid>
          </Grid>
        </Box>
      </CardContent>
      <CardActions>
        <Button
          size="small"
          variant="contained"
          disabled={!isValidForm}
          onClick={handleSubmit}
        >
          Sign Up
        </Button>
      </CardActions>
    </Card>
  );
};

export default SignUp;
