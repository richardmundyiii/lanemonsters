import {
  Box,
  Container,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";

export default function TournamentTable() {
  const tournaments = [];

  return (
    <Container sx={{ my: 5 }}>
      <Box>
        <Paper>
          <TableContainer>
            <Table sx={{ minWidth: 650 }}>
              <TableHead>
                <TableRow>
                  <TableCell>Date</TableCell>
                  <TableCell>Name</TableCell>
                  <TableCell>City</TableCell>
                  <TableCell>State</TableCell>
                  <TableCell>Alley</TableCell>
                </TableRow>
              </TableHead>
              {tournaments.length > 0 ? (
                <TableBody>
                  <TableRow></TableRow>
                </TableBody>
              ) : (
                <Typography sx={{ p: 10, textAlign: "center" }}>
                  No Upcoming Tournaments
                </Typography>
              )}
            </Table>
          </TableContainer>
        </Paper>
      </Box>
    </Container>
  );
}
