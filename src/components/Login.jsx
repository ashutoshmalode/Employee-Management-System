import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Grid from "@mui/material/Grid";

const managerCredentials = {
  EMAIL: "email",
  FIRSTNAME: "firstname",
  LASTNAME: "lastname",
  PASSWORD: "password",
  ADDRESS: "address",
  DOB: "dob",
  COMPANY: "company",
};

const Login = () => {
  const navigate = useNavigate();
  const managers = useSelector((state) => state.employee.managers);
  const [manager, setManager] = useState({
    email: "",
    password: "",
  });

  const handleAddManager = (name, value) => {
    setManager({
      ...manager,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    const isManagerPresent = managers.filter(
      (man) => man.email === manager.email && man.password === manager.password
    );

    if (isManagerPresent.length > 0) {
      navigate("/home");
    } else {
      return;
    }
  };

  return (
    <Card variant="outlined" sx={{ maxWidth: 700, margin: 3, p: 3 }}>
      <CardContent>
        <Typography color="text.secondary" gutterBottom>
          Manager Login
        </Typography>
        <Box>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                id="standard-email"
                label="Email"
                variant="standard"
                value={manager.email}
                onChange={(e) =>
                  handleAddManager(managerCredentials.EMAIL, e.target.value)
                }
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                id="standard-password"
                label="Password"
                variant="standard"
                value={manager.password}
                onChange={(e) =>
                  handleAddManager(managerCredentials.PASSWORD, e.target.value)
                }
              />
            </Grid>
          </Grid>
        </Box>
      </CardContent>
      <CardActions>
        <Button size="small" variant="contained" onClick={handleSubmit}>
          Login
        </Button>
      </CardActions>
    </Card>
  );
};

export default Login;
