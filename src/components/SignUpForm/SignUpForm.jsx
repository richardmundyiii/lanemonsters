import { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as usersApi from "../../utilities/users-api";
import { Container, Box, TextField, Button, Grid } from "@mui/material";

export default function SignUpForm({ handleRegOrLogin }) {
  const [registration, setRegistration] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const navigate = useNavigate();

  function handleChange(evt) {
    setRegistration({
      ...registration,
      [evt.target.name]: evt.target.value,
    });
  }

  async function handleSubmit(evt) {
    evt.preventDefault();
    try {
      const newUser = await usersApi.signUp(registration);
      setRegistration(newUser);
      navigate("/");
    } catch {
      setError("Login Failed - Try Again");
    }
  }

  return (
    <>
      <Container>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="firstName"
            label="First Name"
            name="firstName"
            onChange={handleChange}
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="lastName"
            label="Last Name"
            name="lastName"
            onChange={handleChange}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email"
            name="email"
            onChange={handleChange}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="password"
            label="Password"
            name="password"
            onChange={handleChange}
            type="password"
          />
          <Button
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            type="submit"
          >
            Register
          </Button>
          <Grid container>
            <Button onClick={handleRegOrLogin}>
              {"Already have an account?"}
            </Button>
          </Grid>
        </Box>
      </Container>
    </>
  );
}
