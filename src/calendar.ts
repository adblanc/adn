import fetch from "node-fetch";
import { baseUrl } from "./shared/config";
import { Adn } from "./shared/types";

function getEpisodeNumber(ep: any) {
  let number: any;
  if (ep.number.toLowerCase() === "bonus") return ep.number;
  else number = ep.number.split(" ")[1] || ep.number.split(" ")[0];

  number = parseInt(number.startsWith("0") ? number.substring(1) : number);
  return number;
}

const getAdnCalendarJson = async (date: string) => {
  const url = `${baseUrl}/index.php?&view=calendar&format=json&date=${date}&cf_cache=1`;
  let response = await fetch(url);
  return response.json();
};

export const getCalendarDay = async (
  date: string
): Promise<Adn.BasicEpisodeInfos[]> => {
  const calendar = await getAdnCalendarJson(date);
  for (let ep of calendar) {
    ep.number = getEpisodeNumber(ep);
    ep.link = `${baseUrl}${ep.link}`;
    ep.image = `https:${ep.image}`;
    ep.image2x = `https:${ep.image2x}`;
    ep.ref = "adn";
  }
  return calendar;
};
