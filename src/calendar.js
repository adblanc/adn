const fetch = require("node-fetch");

async function getCalendarDay(date) {
  try {
    const url = `https://www.animedigitalnetwork.fr/index.php?&view=calendar&format=json&date=${date}&cf_cache=1`;
    let response = await fetch(url);
    response = await response.json();
    for (let ep of response)
      ep.link = `https://www.animedigitalnetwork.fr${ep.link}`;
    return response;
  } catch (ex) {
    console.error("Error while fetching ADN Calendar !", ex);
  }
}

module.exports = getCalendarDay;
