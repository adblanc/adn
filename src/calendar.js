const fetch = require("node-fetch");

function getEpisodeNumber(ep) {
  let number;
  if (ep.number.toLowerCase() === "bonus") return ep.number;
  else number = ep.number.split(" ")[1] || ep.number.split(" ")[0];
  number = parseInt(number.startsWith("0") ? number.substring(1) : number);
  return number;
}

async function getCalendarDay(date) {
  try {
    const url = `https://www.animedigitalnetwork.fr/index.php?&view=calendar&format=json&date=${date}&cf_cache=1`;
    let response = await fetch(url);
    response = await response.json();
    for (let ep of response) {
      ep.number = getEpisodeNumber(ep);
      ep.link = `https://www.animedigitalnetwork.fr${ep.link}`;
      ep.image = `https:${ep.image}`;
      ep.image2x = `https:${ep.image2x}`;
      ep.ref = "adn";
    }
    return response;
  } catch (ex) {
    console.error("Error while fetching ADN Calendar !", ex);
  }
}

module.exports = getCalendarDay;
