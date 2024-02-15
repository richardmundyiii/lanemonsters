import { Box, Button, Container, Typography } from "@mui/material";
import ProfileCard from "../../components/ProfileCard/ProfileCard";
import TournamentTable from "../../components/TournamentTable/TournamentTable";

export default function ProfilePage({ user }) {
  return (
    <Container>
      {!user ? (
        <Box>
          <ProfileCard />
          <TournamentTable />
          <Button>Create Tournament</Button>
        </Box>
      ) : (
        <Box
          sx={{
            height: "90vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Typography variant="h2">Profile Does Not Exsist</Typography>
        </Box>
      )}
    </Container>
  );
}
