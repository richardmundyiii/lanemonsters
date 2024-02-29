import { Box, Button, Container } from "@mui/material";

export default function TournamentsPage() {
  return (
    <Container>
      <Box>
        <h1>Tournaments Page</h1>
      </Box>
      <br />
      <Box>
        <Button href="/tournaments/create">Add Tournament</Button>
      </Box>
    </Container>
  );
}
