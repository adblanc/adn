const fetch = require("node-fetch");

async function getCalendarDay(date) {
  try {
    const url = `https://www.animedigitalnetwork.fr/index.php?&view=calendar&format=json&date=${date}&cf_cache=1`;
    let response = await fetch(url);
    response = await response.json();
    for (let ep of response) {
      const number = ep.number.split(" ")[1];
      ep.link = `https://www.animedigitalnetwork.fr${ep.link}`;
      ep.number = number.startsWith("0") ? number.substring(1) : number;
    }
    return response;
  } catch (ex) {
    console.error("Error while fetching ADN Calendar !", ex);
  }
}

module.exports = getCalendarDay;
