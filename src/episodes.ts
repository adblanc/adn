import fetch from "node-fetch";
import { baseUrl } from "./shared/config";
import { Adn } from "./shared/types";

interface Options {
  showId: number | string;
  offset?: number;
  limit?: number;
  order?: "ascending" | "descending";
  season?: string; // be careful use 01 - 09
}

const requestEpisodes = async ({
  showId,
  offset,
  limit,
  order,
  season,
}: Options): Promise<Adn.EpisodeInfosAdn[]> => {
  const url = `${baseUrl}/index.php?option=com_vodapi&format=json&task=videolist.getJSON&cf_cache=1&show_id=${showId}&offset=${
    offset || 0
  }&limit=${limit || -1}&order=${order === "descending" ? -1 : 1}&season=${
    season || ""
  }`;
  const response = await fetch(url);
  return await response.json();
};

export const getEpisodes = async (
  options: Options
): Promise<Adn.FullEpisodeInfosWithoutSerie[]> => {
  const response = await requestEpisodes(options);

  if (!response.length) return [];

  response.forEach((episode) => {
    delete episode.serie;
  });

  return response;
};
