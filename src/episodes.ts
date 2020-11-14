import fetch from "node-fetch";
import { API_URL } from "./shared/config";
import { ADN } from "./types";

interface Options {
  showId: number | string;
  offset?: number;
  limit?: number;
  order?: "asc" | "desc";
  season?: string;
}

const requestEpisodes = async ({
  showId,
  offset,
  limit,
  order,
  season,
}: Options): Promise<ADN.Episodes> => {
  const url = `${API_URL}/video/show/${showId}/?offset=${offset || 0}&limit=${
    limit || -1
  }&order=${order || "asc"}&season=${season || ""}`;

  const response = await fetch(url);
  return await response.json();
};

export const getEpisodes = async (options: Options): Promise<ADN.Episode[]> => {
  const { videos } = await requestEpisodes(options);

  return videos;
};
