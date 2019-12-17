const fetch = require("node-fetch");

async function getInfos(id) {
  try {
    const url = `https://www.animedigitalnetwork.fr/index.php?option=com_vodapi&format=json&task=videolist.getJSON&cf_cache=1&show_id=${id}&offset=0&limit=1&order=-1`;
    let response = await fetch(url);
    response = await response.json();
    const anime = response[0].serie;
    anime.episode_count = parseInt(anime.episode_count);
    anime.rating = parseFloat(anime.rating);
    anime.rating_count = parseInt(anime.rating_count);
    anime.genres = anime.genres.split("\n");
    anime.ref = "adn";
    return anime;
  } catch (ex) {
    console.error(ex);
  }
}

module.exports = getInfos;
