import sendRequest from "./send-request";
const BASE_URL = "/api/alleys";

export async function getAllAlleys() {
  return sendRequest(BASE_URL);
}

export async function create(alleyData) {
  return sendRequest(BASE_URL, "POST", alleyData);
}
