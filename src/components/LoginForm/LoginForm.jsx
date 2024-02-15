import { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as usersApi from "../../utilities/users-api";
import { Container, Box, TextField, Button, Grid } from "@mui/material";

export default function LoginForm({ handleRegOrLogin, setUser }) {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const navigate = useNavigate();

  function handleChange(evt) {
    setCredentials({
      ...credentials,
      [evt.target.name]: evt.target.value,
    });
  }

  async function handleSubmit(evt) {
    evt.preventDefault();
    try {
      const user = await usersApi.login(credentials);
      setUser(user);
      navigate("/");
    } catch (err) {
      console.log(err);
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
            id="email"
            label="Email"
            name="email"
            onChange={handleChange}
            autoComplete="email"
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
            autoComplete="off"
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
