const fetch = require("node-fetch");

const defaultCatalogData = {
  start: 0, // startIndex
  end: 20, // how much
  diffusion: [], // ["simulcast","download","free"]
  type: "", // serie / movie / oav
  language: "", // vostfr / vf
  quality: "", // hd (720p) / fhd (1080p)
  age: "", // string : 0+ / 10+ / 12+ / 16+
  genres: [], // array of string ["arts_martiaux","aventure||action","comedie","drame","ecchi||fan_service","fantastique||science-fiction","heroic_fantasy","historique","jeunesse","josei","mecha","musical","nostalgie","policier||thriller","psychologie","romance","scolaire","seinen","shojo","shonen","sport","violence"]
  search: "", // string
  order: "" // popular || alpha || new
};

function checkOptions(opt) {
  opt = opt || {};
  opt.start = opt.start || defaultCatalogData.start;
  opt.end = opt.end || defaultCatalogData.end;
  opt.diffusion = opt.diffusion || defaultCatalogData.diffusion;
  opt.type = opt.type || defaultCatalogData.type;
  opt.language = opt.language || defaultCatalogData.language;
  opt.quality = opt.quality || defaultCatalogData.quality;
  opt.age = opt.age || defaultCatalogData.age;
  opt.genres = opt.genres || defaultCatalogData.genres;
  opt.search = opt.search || defaultCatalogData.search;
  opt.order = opt.order || defaultCatalogData.order;
}

async function getCatalog(opt = {}) {
  try {
    checkOptions(opt);
    const {
      start,
      end,
      diffusion,
      type,
      language,
      quality,
      age,
      genres,
      search,
      order
    } = opt;
    const url = `https://www.animedigitalnetwork.fr/index.php?option=com_vodnewcatalog&view=default&format=json&start=${start}&end=${end}&search=${search}&order=${order}&diffusion=${diffusion}&type=${type}&language=${language}&quality=${quality}&age=${age}&genres=${genres}`;
    let result = await fetch(url);
    result = await result.json();
    result.number = result.playlists.length;
    for (let anime of result.playlists)
      anime.link = `https://www.animedigitalnetwork.fr${anime.link}`;
    return result;
  } catch (ex) {
    console.error(ex);
  }
}

module.exports = getCatalog;
