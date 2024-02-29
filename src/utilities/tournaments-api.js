import sendRequest from "./send-request";
const BASE_URL = "/api/tournaments";

export async function getAllTournaments() {
  return sendRequest(BASE_URL);
}

export async function getTournamentDetails(tournamentId) {
  return sendRequest(`${BASE_URL}/${tournamentId}`);
}

export default function create(tournamentData) {
  return sendRequest(BASE_URL, "POST", tournamentData);
}
