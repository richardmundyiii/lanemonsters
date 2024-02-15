import { useState } from "react";
import {
  Box,
  Button,
  Container,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  TextField,
  Typography,
} from "@mui/material";

export default function CreateTournamentPage() {
  const [tournament, setTournament] = useState({
    name: "",
    date: "",
    city: "",
    state: "",
    alley: "",
    entryFee: "",
    maxBowlers: "",
    numLanes: "",
  });

  function handleChange(evt) {
    setTournament({
      ...tournament,
      [evt.target.name]: evt.target.value,
    });
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    try {
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <Container>
      <Box>
        <Paper>
          <Typography variant="h2">Create A Tournament</Typography>
          <Box component="form" sx={{ p: 5 }} onSubmit={handleSubmit}>
            <TextField
              fullWidth
              label="Tournament Name"
              onChange={handleChange}
            />
            <Box>
              <TextField
                label="City"
                sx={{ width: "48%", mr: 4 }}
                onChange={handleChange}
              />
              <TextField
                label="State"
                sx={{ width: "48%" }}
                onChange={handleChange}
              />
            </Box>
            <TextField label="Alley" fullWidth onChange={handleChange} />
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
              }}
            >
              <Box sx={{ display: "flex", flexDirection: "row", pt: 3 }}>
                <TextField label="Entry Fee" type="number" />
                <InputLabel>Max Bowlers</InputLabel>
                <Select onChange={handleChange}>
                  {[...Array(250).keys()].map((number) => (
                    <MenuItem key={number + 1} value={number + 1}>
                      {number + 1}
                    </MenuItem>
                  ))}
                  <MenuItem key="max" value="10000">
                    Unlimited
                  </MenuItem>
                </Select>
              </Box>
              <Box>
                <InputLabel>Available Lanes</InputLabel>
                <Select onChange={handleChange}></Select>
              </Box>
            </Box>
            <Button type="submit" fullWidth variant="outlined" sx={{ mt: 3 }}>
              Create
            </Button>
          </Box>
        </Paper>
      </Box>
    </Container>
  );
}
