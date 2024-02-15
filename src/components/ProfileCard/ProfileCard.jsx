import { Box, Button, Container, Paper, Typography } from "@mui/material";
import ProfileImage from "../../images/defaultProfileImage.jpeg";

export default function ProfileCard({ user }) {
  const userSelect = {
    firstName: "John",
    lastName: "Doe",
    email: "butts@gmail.com",
    profileUrl: ``,
  };

  return (
    <Container>
      <Box>
        <Paper sx={{ display: "flex", flexDirection: "row", p: 3 }}>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Box
              component="img"
              src={ProfileImage}
              alt={`${userSelect.firstName}s Profile Photo`}
              height={200}
              width={200}
            />
            <Button variant="outlined" sx={{ mt: 2 }}>
              Upload Image
            </Button>
          </Box>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Typography variant="h2">{userSelect.firstName}</Typography>
            <Typography variant="h2">{userSelect.lastName}</Typography>
          </Box>
        </Paper>
      </Box>
    </Container>
  );
}
