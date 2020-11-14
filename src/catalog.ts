import fetch from "node-fetch";
import { API_URL } from "./shared/config";
import { ADN } from "./types";

type GetCatalog = (
  options?: ADN.CatalogOptions
) => Promise<ADN.Catalog["shows"]>;

const fetchCatalog = async ({
  offset,
  limit,
  diffusion,
  type,
  language,
  quality,
  age,
  genres,
  search,
  order,
}: ADN.CatalogOptions): Promise<ADN.Catalog> => {
  const url = `${API_URL}/show/catalog?offset=${offset}&limit=${limit}&search=${search}&order=${order}&diffusion=${diffusion}&type=${type}&language=${language}&quality=${quality}&age=${age}&genres=${genres}`;
  const result = await fetch(url);
  return await result.json();
};

function checkOptions(opt?: ADN.CatalogOptions) {
  opt = opt || {};
  opt.offset = opt.offset || 0;
  opt.limit = opt.limit || 20;
  opt.diffusion = opt.diffusion || [];
  opt.type = opt.type || "";
  opt.language = opt.language || "";
  opt.quality = opt.quality || "";
  opt.age = opt.age || "";
  opt.genres = opt.genres || [];
  opt.search = opt.search || "";
  opt.order = opt.order || "";

  return opt;
}

export const getCatalog: GetCatalog = async (options) => {
  options = checkOptions(options);
  const catalog = await fetchCatalog(options);

  return catalog.shows;
};
