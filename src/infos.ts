import { Adn } from "./shared/types";

const fetch = require("node-fetch");

const formatSerieInfos = (
  serie: Adn.SerieInfosAdn
): Adn.SerieFormattedInfos => {
  return {
    ...serie,
    episode_count: parseInt(serie.episode_count),
    rating: parseFloat(serie.rating),
    rating_count: parseInt(serie.rating_count),
    genres: serie.genres.split("\n"),
    ref: "adn",
  };
};

export async function getInfos({
  showId,
}: {
  showId: number | string;
}): Promise<Adn.SerieFormattedInfos | undefined> {
  const url = `https://www.animedigitalnetwork.fr/index.php?option=com_vodapi&format=json&task=videolist.getJSON&cf_cache=1&show_id=${showId}&offset=0&limit=1&order=-1`;
  let response = await fetch(url);
  response = await response.json();

  return response.length > 0 ? formatSerieInfos(response[0].serie) : undefined;
}
