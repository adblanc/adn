import fetch from "node-fetch";
import { Adn } from "./shared/types";
import { baseUrl } from "./shared/config";

interface Options {
  start?: number;
  end?: number;
  diffusion?: Adn.Diffusion;
  type?: Adn.Type;
  language?: Adn.Language;
  quality?: Adn.Quality;
  age?: Adn.Age;
  genres?: Adn.Genres;
  search?: string;
  order?: Adn.Order;
}

interface AdnCatalogResult {
  playlists: Adn.BasicAnimeInfos[];
}

type GetCatalog = (options?: Options) => Promise<Adn.BasicAnimeInfos[]>;

const fetchCatalog = async ({
  start,
  end,
  diffusion,
  type,
  language,
  quality,
  age,
  genres,
  search,
  order,
}: Options): Promise<AdnCatalogResult> => {
  const url = `https://www.animedigitalnetwork.fr/index.php?option=com_vodnewcatalog&view=default&format=json&start=${start}&end=${end}&search=${search}&order=${order}&diffusion=${diffusion}&type=${type}&language=${language}&quality=${quality}&age=${age}&genres=${genres}`;
  const result = await fetch(url);
  return await result.json();
};

function checkOptions(opt?: Options) {
  let options: Options = {};
  opt = opt || {};
  options.start = opt.start || 0;
  options.end = opt.end || 20;
  options.diffusion = opt.diffusion || [];
  options.type = opt.type || "";
  options.language = opt.language || "";
  options.quality = opt.quality || "";
  options.age = opt.age || "";
  options.genres = opt.genres || [];
  options.search = opt.search || "";
  options.order = opt.order || "";

  return options;
}

export const getCatalog: GetCatalog = async (options) => {
  options = checkOptions(options);
  const catalog = await fetchCatalog(options as Options);
  for (let anime of catalog.playlists) {
    anime.link = `${baseUrl}${anime.link}`;
    anime.image = `https:${anime.image}`;
    anime.ref = "adn";
  }

  return catalog.playlists;
};
