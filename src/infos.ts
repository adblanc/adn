import { API_URL } from "./shared/config";
import { ADN } from "./types";

const fetch = require("node-fetch");

export async function getInfos(reference: string): Promise<ADN.Show> {
  const url = `${API_URL}/show/${reference}`;
  let response = await fetch(url);
  response = await response.json();

  return response.show;
}
