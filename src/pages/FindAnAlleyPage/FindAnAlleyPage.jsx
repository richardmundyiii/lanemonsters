import { useState, useEffect, useMemo } from "react";
import { Box, Container, Paper, Typography } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import * as alleyApi from "../../utilities/alleys-api";

export default function FindAnAlleyPage() {
  const [alleys, setAlleys] = useState([]);

  useEffect(() => {
    async function getAllAlleys() {
      const allies = await alleyApi.getAllAlleys();
      setAlleys(allies);
    }
    getAllAlleys();
  }, []);

  const columns = [
    // { field: "id", headerName: "ID", width: 90 },
    { field: "name", headerName: "Name", width: 350 },
    { field: "city", headerName: "City", width: 200 },
    { field: "state", headerName: "State", width: 110 },
    { field: "laneType", headerName: "Lane Type", width: 160 },
    {
      field: "numberOfLanes",
      headerName: "Number of Lanes",
      type: "number",
      width: 160,
    },
  ];

  return (
    <Container>
      <Box>
        <Paper>
          <Typography variant="h2" sx={{ mt: 5, mb: 3 }}>
            Find A Lane Monster
          </Typography>
          <DataGrid
            rows={alleys}
            columns={columns}
            getRowId={(row) => row._id}
            components={{ Toolbar: GridToolbar }}
            pageSize={5}
            rowsPerPageOption={[5]}
          />
        </Paper>
      </Box>
    </Container>
  );
}
