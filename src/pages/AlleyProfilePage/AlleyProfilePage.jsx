import { useEffect, useState } from "react";
import { Box, Container, Paper, Typography } from "@mui/material";
import * as alleyApi from "../../utilities/alleys-api";
import { useParams } from "react-router-dom";

export default function AlleyProfilePage() {
  const [alley, setAlley] = useState({});
  const { alleyId } = useParams();

  useEffect(() => {
    async function getAlleyDetails(id) {
      const alley = await alleyApi.getAlleyDetail(id);
      console.log("working", alley);
      setAlley(alley);
    }
    getAlleyDetails(alleyId);
  }, [alleyId]);

  function formatPhoneNumber(value) {
    return value.split[0], value.split[1], value.split[2];
  }
  //   console.log(formatPhoneNumber(alley.phone));
  console.log(alley.phone);

  return (
    <Container>
      <Box>
        <Paper>
          <Typography variant="h2">{alley.name}</Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignContent: "space-between",
              justifyContent: "space-evenly",
            }}
          >
            <h5>Display Image</h5>
            <Box>
              <Typography variant="h5">Address</Typography>
              <p>
                {alley.street}
                <br />
                {alley.state}
                <br />
                {alley.phone}
              </p>
            </Box>
          </Box>
          <Box>
            {alley.laneType}
            {alley.numberOfLanes}
          </Box>
        </Paper>
      </Box>
    </Container>
  );
}
